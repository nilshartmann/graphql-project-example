package nh.graphql.tasks.domain;

import org.springframework.data.repository.CrudRepository;

/**
 * @author Nils Hartmann (nils@nilshartmann.net)
 */
public interface CategoryRepository extends CrudRepository<Category, Long> {
}
