package nh.graphql.tasks;

import nh.graphql.tasks.domain.Project;
import org.springframework.data.repository.CrudRepository;

/**
 * @author Nils Hartmann (nils@nilshartmann.net)
 */
public interface ProjectRepository extends CrudRepository<Project, Long> {


}
