package nh.graphql.tasks.graphql;

import nh.graphql.tasks.domain.Task;

import java.util.List;

/**
 * @author Nils Hartmann (nils@nilshartmann.net)
 */
public class TaskConnection {

    private final PageResult pageResult;
    private final List<Task> nodes;

    public TaskConnection(PageResult pageResult, List<Task> nodes) {
        this.pageResult = pageResult;
        this.nodes = nodes;
    }

    public PageResult getPage() {
        return pageResult;
    }

    public List<Task> getNodes() {
        return nodes;
    }
}
