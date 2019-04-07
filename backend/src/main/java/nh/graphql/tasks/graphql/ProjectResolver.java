package nh.graphql.tasks.graphql;

import nh.graphql.tasks.domain.Project;
import nh.graphql.tasks.domain.Task;
import nh.graphql.tasks.domain.TaskRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

/**
 * EXAMPLE ONLY - NOT USED
 * @author Nils Hartmann (nils@nilshartmann.net)
 */
public class ProjectResolver /* implements GraphQLResolver<Project> */ {

    private final TaskRepository taskRepository;

    public ProjectResolver(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public TaskConnection tasks(Project p, Integer page, int pageSize) {
        PageRequest pageRequest = page == null ? null : PageRequest.of(page, pageSize);
        Page<Task> taskPage = taskRepository.findByProject(p, pageRequest);

        PageResult pageResult = new PageResult(
            taskPage.getNumber(),
            taskPage.getTotalElements(),
            taskPage.getTotalPages(),
            taskPage.hasNext(), taskPage.hasPrevious());

        return new TaskConnection(pageResult, taskPage.getContent());
    }
}
