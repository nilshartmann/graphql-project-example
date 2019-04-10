package nh.graphql.tasks.graphql;

import graphql.schema.DataFetcher;
import graphql.schema.DataFetchingEnvironment;
import nh.graphql.tasks.ProjectRepository;
import nh.graphql.tasks.domain.Project;
import nh.graphql.tasks.domain.Task;
import nh.graphql.tasks.domain.User;
import nh.graphql.tasks.domain.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Map;

/**
 * @author Nils Hartmann (nils@nilshartmann.net)
 */
@Component
public class MutationFetchers {
    private final static Logger logger = LoggerFactory.getLogger(MutationFetchers.class);

    private ProjectRepository projectRepository;
    private UserRepository userRepository;

    public MutationFetchers(ProjectRepository repository,UserRepository userRepository) {
        this.projectRepository = repository;
        this.userRepository = userRepository;
    }

    DataFetcher changeProjectTitle = new DataFetcher() {
        @Override
        public Object get(DataFetchingEnvironment environment) throws Exception {
            String projectId = environment.getArgument("id");
            String newTitle = environment.getArgument("newTitle");

            logger.info("Set title to '{}' for project '{}'", newTitle, projectId);

            Project p = projectRepository.findById(Long.parseLong(projectId)).orElse(null);
            if (p == null) {
                logger.warn("Project not found");
                return null;
            }

            p.setTitle(newTitle);
            projectRepository.save(p);

            return p;
        }
    };

    DataFetcher addTask = new DataFetcher() {
        @Override
        public Object get(DataFetchingEnvironment environment) throws Exception {
            long projectId = Long.parseLong(environment.getArgument("projectId"));
            Map<String, String> input = environment.getArgument("input");

            String title = input.get("title");
            String description = input.get("description");
            DateTimeFormatter formatter = DateTimeFormatter
                .ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS[xxx][xx][X]");
            LocalDateTime toBeFinishedAt = LocalDateTime.parse(input.get("toBeFinishedAt"), formatter);
            long assigneeId = Long.parseLong(input.get("assigneeId"));

            Project project = projectRepository.findById(projectId).orElseThrow();
            User user = userRepository.findById(assigneeId).orElseThrow();

            Task task = new Task(project, user, title, description, toBeFinishedAt);
            project.addTask(task);

            projectRepository.save(project);

            return task;
        }
    };
}
