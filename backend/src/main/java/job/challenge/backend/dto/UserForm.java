package job.challenge.backend.dto;

import java.time.LocalDate;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class UserForm {

	
	@NotNull @NotBlank
	private String code;
	@NotNull @NotBlank
	private String name;
	private LocalDate birthDay;

	public UserForm(String code, String name, LocalDate birthDay) {
		super();
		this.code = code;
		this.name = name;
		this.birthDay = birthDay;
	}

	public UserForm() {
		super();
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
