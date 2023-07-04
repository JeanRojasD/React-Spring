package job.challenge.backend.dto;

import java.time.LocalDate;

import org.springframework.web.multipart.MultipartFile;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class UserForm {

	@NotBlank
	@NotNull
	private String code;
	@NotBlank
	@NotNull
	private String name;
	private LocalDate birthDay;

	private MultipartFile picture;

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

	public MultipartFile getPicture() {
		return picture;
	}

	public void setPicture(MultipartFile picture) {
		this.picture = picture;
	}

	public LocalDate getBirthDay() {
		return birthDay;
	}

	public void setBirthDay(LocalDate birthDay) {
		this.birthDay = birthDay;
	}

	public UserForm(@NotBlank @NotNull String code, @NotBlank @NotNull String name, LocalDate birthDay,
			MultipartFile picture) {
		super();
		this.code = code;
		this.name = name;
		this.birthDay = birthDay;
		this.picture = picture;
	}

	public UserForm() {
		super();
	}

}
