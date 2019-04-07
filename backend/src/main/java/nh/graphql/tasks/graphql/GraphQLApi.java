package nh.graphql.tasks.graphql;

import graphql.GraphQL;
import graphql.schema.GraphQLSchema;
import graphql.schema.idl.RuntimeWiring;
import graphql.schema.idl.SchemaGenerator;
import graphql.schema.idl.SchemaParser;
import graphql.schema.idl.TypeDefinitionRegistry;
import nh.graphql.tasks.ProjectRepository;
import nh.graphql.tasks.domain.Project;
import nh.graphql.tasks.domain.Task;
import nh.graphql.tasks.domain.TaskRepository;
import nh.graphql.tasks.domain.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.Resource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Component;

import java.io.InputStream;
import java.io.InputStreamReader;

import static graphql.schema.idl.TypeRuntimeWiring.newTypeWiring;

/**
 * @author Nils Hartmann (nils@nilshartmann.net)
 */

@Component
public class GraphQLApi {

	private final static Logger logger = LoggerFactory.getLogger(GraphQLApi.class);

	@Value("classpath:/tasks.graphqls")
	private Resource schemaResource;

	@Autowired
    private QueryDataFetchers queryDataFetchers;
	@Autowired
    private ProjectDataFetchers projectDataFetchers;


	@Bean
	public GraphQLSchema graphQLSchema(final UserRepository userRepository, final ProjectRepository projectRepository,
                                       final TaskRepository taskRepository) throws Exception {
		logger.info("Building GraphQL Schema");

		SchemaParser schemaParser = new SchemaParser();
		InputStream inputStream = getClass().getResourceAsStream("/tasks.graphqls");
		TypeDefinitionRegistry typeRegistry = schemaParser.parse(new InputStreamReader(inputStream));

		RuntimeWiring runtimeWiring = RuntimeWiring.newRuntimeWiring()
			.type(newTypeWiring("Query")
				.dataFetcher("users", queryDataFetchers.users)
                .dataFetcher("projects", environment -> projectRepository.findAll())
                .dataFetcher("project", queryDataFetchers.project)
			)
            .type(newTypeWiring("Project")
                .dataFetcher("tasks", projectDataFetchers.tasks
                )
                .dataFetcher("task", environment -> {
                    long id = Long.parseLong(environment.getArgument("id"));
                    return taskRepository.findById(id).orElse(null);
                })
            )
			.build();

		SchemaGenerator schemaGenerator = new SchemaGenerator();
		return schemaGenerator.makeExecutableSchema(typeRegistry, runtimeWiring);
	}

	@Bean
	public GraphQL graphql(GraphQLSchema graphQLSchema) {
		return GraphQL.newGraphQL(graphQLSchema).
            build();
	}


}
