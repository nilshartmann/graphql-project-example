package nh.graphql.tasks.domain;

import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;

/**
 * @author Nils Hartmann (nils@nilshartmann.net)
 */
@Repository
public class TaskRepository {

	@PersistenceContext
	private EntityManager entityManager;

	public void saveTask(Project project) {
		entityManager.persist(project);
	}

	public List<Project> findAll() {
		final TypedQuery<Project> tasks = entityManager.createQuery("SELECT t FROM Project t ORDER BY t.id", Project.class);
		return tasks.getResultList();

	}
}
