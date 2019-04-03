package nh.graphql.tasks;

import nh.graphql.tasks.domain.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author Nils Hartmann (nils@nilshartmann.net)
 */
@Repository
public class Importer {

	@Autowired
	private TaskRepository taskRepository;

	@Autowired
    private UserRepository userRepository;

	@Autowired
    private ProjectRepository projectRepository;

	@Transactional
	public void add() {
	    User u1 = new User("Klaus", "klaus");
	    userRepository.save(u1);

		Project p1 = new Project(u1, "Create GraphQL Talk", "Create GraphQL Talk");
		projectRepository.save(p1);

		Task t1 = new Task(p1, u1, "Create a draft story", "We need to think about a story idea that we want to tell in the talk");
		p1.addTask(t1);
        projectRepository.save(p1);

//		p1.addTask("Create a draft story");
//		p1.addTask("Finish Example App");
//		p1.addTask("Design Slides");
//		taskRepository.saveTask(p1);
//
//
//		Project t2 = new Project("Book Trip to Barcelona", "Organize and book a nice 4-day trip to Barcelona in April");
//		t2.addTask("Find a flight");
//		t2.addTask("Book a hostel");
//		taskRepository.saveTask(t2);
//
//		Project t3 = new Project("Clean the House", "It's spring time! Time to clean up every room");
//		t3.addTask("Clean dining room");
//		t3.addTask("Clean kitchen");
//		t3.addTask("Empty trash bin");
//		t3.addTask("Clean windows");
//		taskRepository.saveTask(t3);
//
//		Project t4 = new Project("Enhance our API", "We might want to add a GraphQL API");
//		t4.addTask("Discuss problems with all developers");
//		t4.addTask("Evaluate GraphQL for API");
//		t4.addTask("Add dependencies to our build");
//		t4.addTask("Implement integration tests");
//		taskRepository.saveTask(t4);

	}

}
