package nh.graphql.tasks.domain;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.LinkedList;
import java.util.List;

/**
 * @author Nils Hartmann (nils@nilshartmann.net)
 */
@Entity
@Table(name="tasks")
public class Task {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "task_id_generator")
	@SequenceGenerator(name="task_id_generator", sequenceName = "task_id_seq", initialValue = 1000)
	@Column(name = "id", updatable = false, nullable = false)
	private Long id;

	@NotNull
	@Column(name = "title")
	private String title;

	@NotNull
	@Column(name = "description")
	private String description;

	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "task")
	@OrderBy("id")
	private List<Activity> activities = new LinkedList<>();

	protected Task() {}

	public Task(String title, String description) {
		this.title = title;
		this.description = description;
	}

	public void addActivity(String title) {
		Activity activity = new Activity(this, title);
		this.activities.add(activity);
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
