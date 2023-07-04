package job.challenge.backend.service;

import java.util.stream.Collectors;

import org.apache.tika.Tika;
import org.apache.tika.mime.MimeTypeException;
import org.apache.tika.mime.MimeTypes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import job.challenge.backend.configuration.ModelMapperConfig;
import job.challenge.backend.dto.UserDTO;
import job.challenge.backend.dto.UserForm;
import job.challenge.backend.model.User;
import job.challenge.backend.repository.UserRepository;

import java.util.List;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

@Service
public class UserService {

	private final UserRepository userRepository;
	private final ModelMapperConfig modelMapper;
	
    @Value("${app.upload-dir}")
	private String uploadDir; // Diretório de armazenamento de imagens

    @Autowired
	public UserService(UserRepository userRepository, ModelMapperConfig modelMapper,
			@Value("${app.upload-dir}") String uploadDir) {
		this.userRepository = userRepository;
		this.modelMapper = modelMapper;
		this.uploadDir = uploadDir;
	}

	public List<UserDTO> findAll() {
		List<User> usersList = userRepository.findAll();
		return usersList.stream().map(UserDTO::from).collect(Collectors.toList());
	}

	public UserDTO findById(Long id) {
		return UserDTO.from(userRepository.findById(id).orElseThrow(() -> {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "ID não encontrado");
		}));
	}

	public UserDTO save(UserForm userForm, MultipartFile picture) {

		
		checkForDuplicateCode(userForm.getCode());

		User userSave = User.from(userForm);

		if (picture != null && !picture.isEmpty()) {
			try {
				String fileName = UUID.randomUUID().toString() + getFileExtension(picture);
		        Path targetPath = Paths.get(uploadDir, fileName);
				Files.copy(picture.getInputStream(), targetPath, StandardCopyOption.REPLACE_EXISTING);
				userSave.setPicturePath(targetPath.toString());
				System.out.println("path" + userSave.getPicture());
				
			}catch (IOException | MimeTypeException e) {
			    e.printStackTrace();
			    throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,
			        "Erro ao salvar a imagem do usuário", e);
			}
		}

		
		return UserDTO.from(userRepository.save(userSave));
	}

	public UserDTO update(UserForm userForm, Long id) {
		User userFound = userRepository.findById(id).orElseThrow(() -> {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "ID não encontrado");
		});

		if (!userFound.getCode().equals(userForm.getCode())) {
			checkForDuplicateCode(userForm.getCode());
		}

		modelMapper.modelMapper().map(userForm, userFound);

		return UserDTO.from(userRepository.save(userFound));
	}

	public void delete(Long id) {
		User user = userRepository.findById(id).orElseThrow(() -> {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "ID não encontrado");
		});

		userRepository.delete(user);
	}

	private void checkForDuplicateCode(String code) {
		if (userRepository.findByCode(code).isPresent()) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, "Usuário com código já existe");
		}
	}

	private String getFileExtension(MultipartFile file) throws MimeTypeException, IOException {
	    Tika tika = new Tika();
	    String mimeType = tika.detect(file.getInputStream());
	    return MimeTypes.getDefaultMimeTypes().forName(mimeType).getExtension();
	}

}
