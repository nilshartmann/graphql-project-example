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
	@SequenceGenerator(name = "project_id_generator", sequenceName = "project_id_seq", initialValue = 1)
	@Column(name = "id", updatable = false, nullable = false)
	private Long id;

	@NotNull
	@Column(name = "title", nullable = false)
	private String title;

	@NotNull
	@Column(name = "description", nullable = false)
	private String description;

	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "project")
	@OrderBy("id")
	private List<Task> tasks = new LinkedList<>();

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="owner_id", nullable = false)
    private User owner;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="category_id", nullable = false)
    private Category category;

	protected Project() {
	}

	public Project(User owner, Category category, String title, String description) {
	    this.owner = owner;
	    this.category = category;
		this.title = title;
		this.description = description;
	}

	public void addTasks(Task... tasks) {
        for (Task task : tasks) {
            addTask(task);
        }
    }

	public Project addTask(Task task) {
        if (!this.equals(task.getProject())) {
            throw new IllegalStateException(String.format("Task with id '%s' (%s) cannot be assigned to project '%s (%s)'. Task already assigned to project '%s'",
                task.getId(), task.getTitle(), getId(), getTitle(), task.getProject().getId()));
        }
		this.tasks.add(task);

		return this;
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
