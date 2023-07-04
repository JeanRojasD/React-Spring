package job.challenge.backend.dto;

import java.time.LocalDate;
import java.util.Base64;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;

import job.challenge.backend.model.User;

public class UserDTO {

	private Long id;
	private String code;
	private String name;
	private LocalDate birthDay;

	private String pictureBase64;
	
	private String picturePath;

	public static UserDTO from(User user) {
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		UserDTO userDTO = modelMapper.map(user, UserDTO.class);
		if (user.getPicture() != null) {
			userDTO.setPictureBase64(Base64.getEncoder().encodeToString(user.getPicture()));
		}
		return userDTO;
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

	public String getPictureBase64() {
		return pictureBase64;
	}

	public void setPictureBase64(String pictureBase64) {
		this.pictureBase64 = pictureBase64;
	}

	public String getPicturePath() {
		return picturePath;
	}

	public void setPicturePath(String picturePath) {
		this.picturePath = picturePath;
	}
	

	public UserDTO(Long id, String code, String name, LocalDate birthDay, String pictureBase64, String picturePath) {
		super();
		this.id = id;
		this.code = code;
		this.name = name;
		this.birthDay = birthDay;
		this.pictureBase64 = pictureBase64;
		this.picturePath = picturePath;
	}

	public UserDTO() {
		super();
	}

}
