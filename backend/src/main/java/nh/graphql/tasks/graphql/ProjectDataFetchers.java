package nh.graphql.tasks.graphql;

import graphql.schema.DataFetcher;
import graphql.schema.DataFetchingEnvironment;
import nh.graphql.tasks.domain.Project;
import nh.graphql.tasks.domain.Task;
import nh.graphql.tasks.domain.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Component;

/**
 * @author Nils Hartmann (nils@nilshartmann.net)
 */
@Component
public class ProjectDataFetchers {

    @Autowired
    private TaskRepository taskRepository;

    DataFetcher tasks = new DataFetcher() {
        @Override
        public TaskConnection get(DataFetchingEnvironment environment) throws Exception {
            Project p = environment.getSource();

            int page = environment.containsArgument("page") ? environment.getArgument("page") : -1;
            int pageSize = environment.containsArgument("pageSize") ? environment.getArgument("pageSize") : 6;

            PageRequest pageRequest = page == -1 ? null : PageRequest.of(page, pageSize);
            Page<Task> taskPage = taskRepository.findByProject(p, pageRequest);

            PageResult pageResult = new PageResult(
                taskPage.getNumber(),
                taskPage.getTotalElements(),
                taskPage.getTotalPages(),
                taskPage.hasNext(), taskPage.hasPrevious());

            return new TaskConnection(pageResult, taskPage.getContent());
        }
    };

    DataFetcher task = new DataFetcher() {
        @Override
        public Task get(DataFetchingEnvironment environment) throws Exception {
            long id = Long.parseLong(environment.getArgument("id"));
            return taskRepository.findById(id).orElse(null);
        }
    };

}
