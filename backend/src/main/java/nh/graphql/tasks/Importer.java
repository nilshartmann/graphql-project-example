package nh.graphql.tasks;

import nh.graphql.tasks.domain.Task;
import nh.graphql.tasks.domain.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.Entity;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 * @author Nils Hartmann (nils@nilshartmann.net)
 */
@Repository
public class Importer {

	@Autowired
	private TaskRepository taskRepository;

	@Transactional
	public void add() {
		Task t1 = new Task("Create GraphQL Talk", "Create GraphQL Talk");
		t1.addActivity("Create a draft story");
		t1.addActivity("Finish Example App");
		t1.addActivity("Design Slides");
		taskRepository.saveTask(t1);


		Task t2 = new Task("Book Trip to Barcelona", "Organize and book a nice 4-day trip to Barcelona in April");
		t2.addActivity("Find a flight");
		t2.addActivity("Book a hostel");
		taskRepository.saveTask(t2);

		Task t3 = new Task("Clean the House", "It's spring time! Time to clean up every room");
		t3.addActivity("Clean dining room");
		t3.addActivity("Clean kitchen");
		t3.addActivity("Empty trash bin");
		t3.addActivity("Clean windows");
		taskRepository.saveTask(t3);

		Task t4 = new Task("Enhance our API", "We might want to add a GraphQL API");
		t4.addActivity("Discuss problems with all developers");
		t4.addActivity("Evaluate GraphQL for API");
		t4.addActivity("Add dependencies to our build");
		t4.addActivity("Implement integration tests");
		taskRepository.saveTask(t4);

	}

}
