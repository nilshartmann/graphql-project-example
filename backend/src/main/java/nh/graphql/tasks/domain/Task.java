package nh.graphql.tasks.domain;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

/**
 * @author Nils Hartmann (nils@nilshartmann.net)
 */
@Entity
@Table(name = "tasks")
public class Task {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "task_id_generator")
	@SequenceGenerator(name = "task_id_generator", sequenceName = "task_id_seq", initialValue = 2000)
	@Column(name = "id", updatable = false, nullable = false)
	private long id;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "project_id")
	private Project project;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="assignee_id", nullable = false)
    private User assignee;

	@NotNull
    @Column(name="title", nullable = false)
	private String title;

	@NotNull
    @Column(name="description", columnDefinition = "TEXT", nullable = false)
    private String description;

	@NotNull
	private TaskState state;

	protected Task() {
	}

	public Task(Project project, User assignee, String title, String description) {
		this(project, assignee, title, description, TaskState.NEW);
	}

	/** FOR TEST/IMPORT ONLY */
    public Task(Project project, User assignee, String title, String description, TaskState state) {
        this.project = project;
        this.assignee = assignee;
        this.title = title;
        this.description = description;
        this.state = state;
    }

	public Project getProject() {
		return project;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public TaskState getState() {
        return state;
    }

    public long getId() {
        return id;
    }
}
