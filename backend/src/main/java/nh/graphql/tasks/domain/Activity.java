package nh.graphql.tasks.domain;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

/**
 * @author Nils Hartmann (nils@nilshartmann.net)
 */
@Entity
@Table(name="activities")
public class Activity {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "activity_id_generator")
	@SequenceGenerator(name="activity_id_generator", sequenceName = "activity_id_seq", initialValue = 2000)
	@Column(name = "id", updatable = false, nullable = false)
	private long id;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "task_id")
	private Task task;

	@NotNull
	private String title;

	@NotNull
	private  ActivityState state;

	protected Activity() {}

	Activity(Task task, String title) {
		this.task = task;
		this.title = title;
		this.state = ActivityState.CREATED;
	}

	public Task getTask() {
		return task;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

}
