package nh.graphql.tasks.domain;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;

/**
 * @author Nils Hartmann (nils@nilshartmann.net)
 */
public interface TaskRepository extends CrudRepository<Task, Long> {
    Page<Task> findByProject(Project project, Pageable pageable);
}
