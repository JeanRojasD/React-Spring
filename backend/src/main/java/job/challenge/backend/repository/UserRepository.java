package job.challenge.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import job.challenge.backend.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

}
