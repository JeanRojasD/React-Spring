package job.challenge.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import job.challenge.backend.model.User;

public interface UserRepository extends JpaRepository<User, Long>{
	Optional<User> findByName(String name);
	Optional<User> findByCode(String code);
}
