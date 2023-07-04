package job.challenge.backend.dto;

import java.time.LocalDate;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;

import job.challenge.backend.model.User;

public class UserDTO {

	private Long id;
	private String code;
	private String name;
	private LocalDate birthDay;

	public static UserDTO from(User user) {
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		return modelMapper.map(user, UserDTO.class);
	}

	public UserDTO(Long id, String code, String name, LocalDate birthDay) {
		super();
		this.id = id;
		this.code = code;
		this.name = name;
		this.birthDay = birthDay;
	}

	public UserDTO() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public LocalDate getBirthDay() {
		return birthDay;
	}

	public void setBirthDay(LocalDate birthDay) {
		this.birthDay = birthDay;
	}
}
