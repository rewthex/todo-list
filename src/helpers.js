export function createElement(type, className, innerText = '') {
	const element = document.createElement(type);
	element.classList.add(className);
	element.innerText = innerText;
	return element;
}

export function createTask(index, task) {
	const { title, description, dueDate, priority, category } = task;

	const taskDiv = createElement('div', 'task');
	taskDiv.classList.add(`task-${index}`);

	const taskTitle = createElement('h2', 'task-title', title);
	taskDiv.appendChild(taskTitle);

	const taskDescription = createElement('p', 'task-description', description);
	taskDiv.appendChild(taskDescription);

	return taskDiv;
}

export function fetchUniqueCategories() {
	const categories = new Set();
	categories.add('All');

	Object.values(localStorage).forEach((task) => {
		const taskObj = JSON.parse(task);
		categories.add(taskObj.category);
	});

	return categories;
}

export function convertLocalStorageToObject() {
	let tasks = {};

	Object.entries(localStorage).forEach((task) => {
		const taskId = task[0];
		const taskObj = JSON.parse(task[1]);
		tasks[taskId] = taskObj;
	});

	return tasks;
}

export function filterTasksByCategory(category) {
	let filteredTasks = {};

	Object.entries(localStorage).forEach((task) => {
		const taskId = task[0];
		const taskObj = JSON.parse(task[1]);
		if (taskObj.category === category) {
			filteredTasks[taskId] = taskObj;
		}
	});

	return filteredTasks;
}

export function filterTasksByTime() {}
