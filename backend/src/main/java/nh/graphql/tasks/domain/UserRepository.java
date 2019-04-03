package nh.graphql.tasks.domain;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Nils Hartmann (nils@nilshartmann.net)
 */
public interface UserRepository extends CrudRepository<User, Long> {
}
