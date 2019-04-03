package nh.graphql.tasks.domain;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.LinkedList;
import java.util.List;

/**
 * @author Nils Hartmann (nils@nilshartmann.net)
 */
@Entity
@Table(name = "projects")
public class Project {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "project_id_generator")
	@SequenceGenerator(name = "project_id_generator", sequenceName = "project_id_seq", initialValue = 1000)
	@Column(name = "id", updatable = false, nullable = false)
	private Long id;

	@NotNull
	@Column(name = "title")
	private String title;

	@NotNull
	@Column(name = "description")
	private String description;

	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "project")
	@OrderBy("id")
	private List<Task> tasks = new LinkedList<>();

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="owner_id", nullable = false)
    private User owner;

	protected Project() {
	}

	public Project(User owner, String title, String description) {
	    this.owner = owner;
		this.title = title;
		this.description = description;
	}

	public void addTask(Task task) {
		this.tasks.add(task);
	}

    public List<Task> getTasks() {
        return tasks;
    }

    public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Long getId() {
		return id;
	}
}
