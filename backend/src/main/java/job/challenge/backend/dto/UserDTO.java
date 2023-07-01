package job.challenge.backend.dto;

import java.time.LocalDate;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;

import job.challenge.backend.model.User;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {

	private Long id;
	private String code;
	private String name;
	private LocalDate birth;
	
	 public static UserDTO from(User user) {
	        ModelMapper modelMapper = new ModelMapper();
	        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
	        return modelMapper.map(user, UserDTO.class);
	    }
}
