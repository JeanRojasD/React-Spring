package job.challenge.backend.service;

import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import job.challenge.backend.configuration.ModelMapperConfig;
import job.challenge.backend.dto.UserDTO;
import job.challenge.backend.dto.UserForm;
import job.challenge.backend.model.User;
import job.challenge.backend.repository.UserRepository;

import java.util.List;


@Service
public class UserService {
	
	private final UserRepository userRepository;
	private final ModelMapperConfig modelMapper;
	
	
	public UserService(UserRepository userRepository, ModelMapperConfig modelMapper) {
		this.userRepository = userRepository;
		this.modelMapper = modelMapper;
	}
	

	public List<UserDTO> findAll() {
        List<User> usersList = userRepository.findAll();
        return usersList.stream().map(UserDTO::from).collect(Collectors.toList());
    }
	
	public UserDTO findById(Long id){
        return UserDTO.from(userRepository.findById(id).orElseThrow(() -> {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "ID não encontrado");
        }));
    }
	
	public UserDTO save(UserForm userForm){
//		if(userRepository.findByNameContaining(userForm.getName()).isPresent()){
//            
//        }
		
		User userSave = User.from(userForm);
		
		return UserDTO.from(userRepository.save(userSave));
	}
	
	public UserDTO update(UserForm userForm, Long id){
		User userFound = userRepository.findById(id).orElseThrow(() ->{
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "ID não encontrado");
		});
		
		//merge of objects
		modelMapper.modelMapper().map(userForm, userFound);
		
		return UserDTO.from(userRepository.save(userFound));
	}
	
	 public void delete(Long id) {
	        User user = userRepository.findById(id).orElseThrow(() -> {
	            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "ID não encontrado");
	        });

	        userRepository.delete(user);
	    }
	
	

}
