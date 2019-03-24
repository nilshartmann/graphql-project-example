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

	public void saveTask(Task task) {
		entityManager.persist(task);
	}

	public List<Task> findAll() {
		final TypedQuery<Task> tasks = entityManager.createQuery("SELECT t FROM Task t ORDER BY t.id", Task.class);
		return tasks.getResultList();

	}
}
