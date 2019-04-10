package nh.graphql.tasks.graphql;

import graphql.schema.DataFetcher;
import graphql.schema.DataFetchingEnvironment;
import nh.graphql.tasks.ProjectRepository;
import nh.graphql.tasks.domain.Project;
import nh.graphql.tasks.domain.User;
import nh.graphql.tasks.domain.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

/**
 * @author Nils Hartmann (nils@nilshartmann.net)
 */
@Component
public class QueryDataFetchers {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProjectRepository projectRepository;

    DataFetcher users = new DataFetcher<Iterable<User>>() {
        @Override
        public Iterable<User> get(DataFetchingEnvironment environment)  {
            return userRepository.findAll();
        }
    };

    DataFetcher project = new DataFetcher<Optional<Project>>() {
        @Override
        public Optional<Project> get(DataFetchingEnvironment environment)  {
            long id = Long.parseLong(environment.getArgument("id"));
            return projectRepository.findById(id);
        }
    };

    DataFetcher projects = new DataFetcher() {
        @Override
        public Object get(DataFetchingEnvironment environment) throws Exception {
            return projectRepository.findAll();
        }
    };

}
