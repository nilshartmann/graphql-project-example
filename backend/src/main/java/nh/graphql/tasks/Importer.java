package nh.graphql.tasks;

import com.thedeanda.lorem.Lorem;
import com.thedeanda.lorem.LoremIpsum;
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

	@Autowired
    private CategoryRepository categoryRepository;

    private final Lorem lorem = new LoremIpsum(667L);

    private String rd() {
        return lorem.getWords(10, 50);
    }

	@Transactional
	public void add() {
	    User u1 = userRepository.save(new User("nils", "Nils"));
        User u2 = userRepository.save(new User("susi", "Susi"));
        User u3 = userRepository.save(new User("klaus", "Klaus"));
        User u4 = userRepository.save(new User("heinz", "Heinz"));
        User u5 = userRepository.save(new User("gerd", "Gerd"));
        User u6 = userRepository.save(new User("ulla", "Ulla"));
        User u7 = userRepository.save(new User("alex", "Alex"));

        Category c1 = categoryRepository.save(new Category("Private"));
        Category c2 = categoryRepository.save(new Category("Hobby"));
        Category c3 = categoryRepository.save(new Category("Business"));



		Project p1 = projectRepository.save(new Project(u1, c3, "Create GraphQL Talk", "Create GraphQL Talk"));
        Project p2 = projectRepository.save(new Project(u2, c2, "Book Trip to St. Peter-Ording", "Organize and book a nice 4-day trip to the North Sea in April"));
        Project p3 = projectRepository.save(new Project(u3, c1, "Clean the House", "Its spring time! Time to clean up every room"));
        Project p4 = projectRepository.save(new Project(u1, c3, "Refactor Application", "We have some problems in our architecture, so we need to refactor it"));

		Task t1 = new Task(p1, u1, "Create a draft story", rd(), TaskState.RUNNING);
        Task t2 = new Task(p1, u2, "Finish Example App", rd());
        Task t3 = new Task(p1, u1, "Design Slides", rd());
        p1.addTasks(t1, t2, t3);

        Task t4 = new Task(p2, u2, "Find a train", rd(), TaskState.NEW);
        Task t5 = new Task(p2, u1, "Book a room", rd(), TaskState.FINISHED);
        p2.addTasks(t4, t5);

        Task t6 = new Task(p3, u3, "Clean dining room", rd());
        Task t7 = new Task(p3, u1, "Clean kitchen", rd());
        Task t8 = new Task(p3, u2, "Empty trash bin", rd(), TaskState.FINISHED);
        Task t9 = new Task(p3, u2, "Clean windows", rd(), TaskState.RUNNING);
        p3.addTasks(t6,t7,t8,t9);

        Task t10 = new Task(p4, u5, "Discuss problems with all developers", rd(), TaskState.RUNNING);
        Task t11 = new Task(p4, u6, "Evaluate GraphQL for API", rd(), TaskState.RUNNING);
        Task t12 = new Task(p4, u5, "Re-write tests in Jest", rd(), TaskState.RUNNING);
        Task t13 = new Task(p4, u1, "Upgrade NodeJS version", rd(), TaskState.FINISHED);
        p4.addTasks(t10, t11, t12, t13);


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
