package nh.graphql.tasks;

import com.thedeanda.lorem.Lorem;
import com.thedeanda.lorem.LoremIpsum;
import nh.graphql.tasks.domain.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Import;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.Month;
import java.time.format.DateTimeFormatter;
import java.util.Random;

/**
 * @author Nils Hartmann (nils@nilshartmann.net)
 */
@Repository
public class Importer {

    Logger logger = LoggerFactory.getLogger(Importer.class);

	@Autowired
	private TaskRepository taskRepository;

	@Autowired
    private UserRepository userRepository;

	@Autowired
    private ProjectRepository projectRepository;

	@Autowired
    private CategoryRepository categoryRepository;

    private final static Random random = new Random(666);
    private final Lorem lorem = new LoremIpsum(667L);

    private String rd() {
        return lorem.getWords(10, 50);
    }

    private LocalDateTime dt(String d) {

        int hours = randomBetween(0, 23);
        int minutes = randomBetween(0, 59);

        if (d == null || "".equals(d)) {
            return LocalDateTime.of(2019, Month.APRIL, 3, hours, minutes).plusDays(randomBetween(10,90));
        }

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd.MM.yyyy HH:mm");
        return LocalDateTime.parse(String.format("%s %s:%s", d, hours, minutes), formatter);
    }

	@Transactional
	public void add() {

        User u1 = userRepository.save(new User("nils", "Nils Hartmann"));
        User u2 = userRepository.save(new User("susi", "Susi Mueller"));
        User u3 = userRepository.save(new User("klaus", "Klaus Schneider"));
        User u4 = userRepository.save(new User("sue", "Sue Taylor"));
        User u5 = userRepository.save(new User("lauren", "Lauren Jones"));
        User u6 = userRepository.save(new User("olivia", "Olivia Smith"));
        User u7 = userRepository.save(new User("cathy", "Cathy Brown"));
        User u8 = userRepository.save(new User("maja", "Maja Walsh"));

        Category c1 = categoryRepository.save(new Category("Private"));
        Category c2 = categoryRepository.save(new Category("Hobby"));
        Category c3 = categoryRepository.save(new Category("Business"));



		Project p1 = projectRepository.save(new Project(u1, c3, "Create GraphQL Talk", "Create GraphQL Talk"));
        Project p2 = projectRepository.save(new Project(u2, c2, "Book Trip to St. Peter-Ording", "Organize and book a nice 4-day trip to the North Sea in April"));
        Project p3 = projectRepository.save(new Project(u3, c1, "Clean the House", "Its spring time! Time to clean up every room"));
        Project p4 = projectRepository.save(new Project(u1, c3, "Refactor Application", "We have some problems in our architecture, so we need to refactor it"));
        Project p5 = projectRepository.save(new Project(u1, c3, "Tax Declaration", "Same procedure as every year..."));
        Project p6 = projectRepository.save(new Project(u4, c3, "Implement GraphQL Java App", "Implement a small application to demonstrate GraphQL"));


		Task t1 = new Task(p1, u1, "Create a draft story", rd(), TaskState.RUNNING, dt("05.04.2019"));
        Task t2 = new Task(p1, u2, "Finish Example App", rd(), dt(""));
        Task t3 = new Task(p1, u1, "Design Slides", rd(), dt(""));
        p1.addTasks(t1, t2, t3);

        Task t4 = new Task(p2, u2, "Find a train", rd(), TaskState.NEW, dt(""));
        Task t5 = new Task(p2, u1, "Book a room", rd(), TaskState.FINISHED, dt(""));
        p2.addTasks(t4, t5);

        Task t6 = new Task(p3, u3, "Clean dining room", rd(), dt(""));
        Task t7 = new Task(p3, u1, "Clean kitchen", rd(), dt(""));
        Task t8 = new Task(p3, u2, "Empty trash bin", rd(), TaskState.FINISHED, dt(""));
        Task t9 = new Task(p3, u2, "Clean windows", rd(), TaskState.RUNNING, dt(""));
        p3.addTasks(t6,t7,t8,t9);

        Task t10 = new Task(p4, u5, "Discuss problems with all developers", rd(), TaskState.RUNNING, dt(""));
        Task t11 = new Task(p4, u6, "Evaluate GraphQL for API", rd(), TaskState.RUNNING, dt(""));
        Task t12 = new Task(p4, u5, "Re-write tests in Jest", rd(), TaskState.RUNNING, dt(""));
        Task t13 = new Task(p4, u1, "Upgrade NodeJS version", rd(), TaskState.FINISHED, dt(""));
        p4.addTasks(t10, t11, t12, t13);

        Task t14 = new Task(p5, u1, "Print invoices", rd(), dt(""));
        Task t15 = new Task(p5, u1, "Collect receipts of last quarter", rd(), dt(""));
        Task t16 = new Task(p5, u1, "Mail to tax accountant", rd(), dt(""));
        p5.addTasks(t14, t15, t16);

        Task t17 = new Task(p6, u1, "Create sample user stories", rd(), dt(""));
        Task t18 = new Task(p6, u2, "Design user interface", rd(), dt(""));
        Task t19 = new Task(p6, u3, "Create initial Java Project", rd(), dt(""));
        Task t20 = new Task(p6, u4, "Add GraphQL libs", rd(), dt(""));
        Task t21 = new Task(p6, u7, "Implement Domain model", rd(), dt(""));
        Task t22 = new Task(p6, u8, "Add persistence", rd(), dt(""));
        Task t23 = new Task(p6, u3, "Write some test", rd(), dt(""));
        Task t24 = new Task(p6, u2, "Define GraphQL Schema", rd(), dt(""));
        Task t25 = new Task(p6, u3, "Implement DataLoader", rd(), dt(""));
        Task t26 = new Task(p6, u5, "Add pagination support", rd(), dt(""));
        Task t27 = new Task(p6, u6, "Add login mutation", rd(), dt(""));
        Task t28 = new Task(p6, u7, "Write documentation", rd(), dt(""));
        Task t29 = new Task(p6, u7, "Setup testdata", rd(), dt(""));
        Task t30 = new Task(p6, u8, "Optimize data loaders", rd(), dt(""));
        p6.addTasks(t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27,t28,t29,t30);

	}
    private static int randomBetween(int min, int max) {
        return random.nextInt((max - min) + 1) + min;
    }
}
