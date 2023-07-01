package job.challenge.backend.service;

import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import job.challenge.backend.dto.UserDTO;
import job.challenge.backend.model.User;
import job.challenge.backend.repository.UserRepository;

import java.util.List;


@Service
public class UserService {
	
	private final UserRepository userRepository;
	
	
	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	

	public List<UserDTO> findAll() {
        List<User> usersList = userRepository.findAll();
        return usersList.stream().map(UserDTO::from).collect(Collectors.toList());
    }

}
