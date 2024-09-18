export default (() => {
	const tasks = {
		0: {
		  title: "Task 1",
		  description: "Finish the project documentation",
		  dueDate: "2024-09-20",
		  priority: "green",
		  category: "Work"
		},
		1: {
		  title: "Task 2",
		  description: "Prepare for the team meeting",
		  dueDate: "2024-09-18",
		  priority: "yellow",
		  category: "Work"
		},
		2: {
		  title: "Task 3",
		  description: "Submit the weekly report",
		  dueDate: "2024-09-19",
		  priority: "red",
		  category: "Work"
		},
		3: {
		  title: "Task 4",
		  description: "Review pull requests",
		  dueDate: "2024-09-21",
		  priority: "green",
		  category: "Work"
		},
		4: {
		  title: "Task 5",
		  description: "Update website content",
		  dueDate: "2024-09-23",
		  priority: "yellow",
		  category: "Personal"
		},
		5: {
		  title: "Task 6",
		  description: "Plan the marketing strategy",
		  dueDate: "2024-09-25",
		  priority: "red",
		  category: "Work"
		},
		6: {
		  title: "Task 7",
		  description: "Fix bugs in the dashboard",
		  dueDate: "2024-09-22",
		  priority: "green",
		  category: "Work"
		},
		7: {
		  title: "Task 8",
		  description: "Conduct code review",
		  dueDate: "2024-09-24",
		  priority: "yellow",
		  category: "Work"
		}
	  };

	Object.keys(tasks).forEach((key) => {
		localStorage.setItem(key, JSON.stringify(tasks[key]));
	});
})();
