package nh.graphql.tasks.graphql;

import graphql.GraphQL;
import graphql.schema.GraphQLSchema;
import graphql.schema.idl.RuntimeWiring;
import graphql.schema.idl.SchemaGenerator;
import graphql.schema.idl.SchemaParser;
import graphql.schema.idl.TypeDefinitionRegistry;
import nh.graphql.tasks.ProjectRepository;
import nh.graphql.tasks.domain.TaskRepository;
import nh.graphql.tasks.domain.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;

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


	@Bean
	public GraphQLSchema graphQLSchema(final UserRepository userRepository, final ProjectRepository projectRepository) throws Exception {
		logger.info("Building GraphQL Schema");

		SchemaParser schemaParser = new SchemaParser();
		TypeDefinitionRegistry typeRegistry = schemaParser.parse(new InputStreamReader(schemaResource.getInputStream()));

		RuntimeWiring runtimeWiring = RuntimeWiring.newRuntimeWiring()
			.type(newTypeWiring("Query")
				.dataFetcher("users", environment -> userRepository.findAll())
                .dataFetcher("projects", environment -> projectRepository.findAll())
                .dataFetcher("project", environment -> {
                    long id = Long.parseLong(environment.getArgument("id"));
                    return projectRepository.findById(id);
                })
			)
			.build();

		SchemaGenerator schemaGenerator = new SchemaGenerator();
		return schemaGenerator.makeExecutableSchema(typeRegistry, runtimeWiring);
	}

	@Bean
	public GraphQL graphql(GraphQLSchema graphQLSchema) {
		return GraphQL.newGraphQL(graphQLSchema).build();
	}


}
