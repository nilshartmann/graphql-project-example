package nh.graphql.tasks.domain;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

/**
 * @author Nils Hartmann (nils@nilshartmann.net)
 */
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_id_generator")
    @SequenceGenerator(name = "user_id_generator", sequenceName = "user_id_seq", initialValue = 9000)
    @Column(name = "id", updatable = false, nullable = false)
    private long id;

    @NotNull
    @Column(name = "login", nullable = false, unique = true)
    private String login;

    @NotNull
    @Column(name = "name", nullable = false)
    private String name;

    protected User() {
    }

    public User(String login, String name) {
        this.login = login;
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getLogin() {
        return login;
    }
}
