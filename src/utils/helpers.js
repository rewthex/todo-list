import { trashIcon } from './icons';

export function createElement(type, className, innerText = '') {
	const element = document.createElement(type);
	element.classList.add(className);
	element.innerText = innerText;
	return element;
}

export function createTask(index, task) {
	const { title, description, dueDate, priority } = task;
	const taskDiv = createElement('div', 'task');
	taskDiv.dataset.taskIndex = index;
	taskDiv.classList.add(`task-${index}`);
	taskDiv.classList.add(`${priority.toLowerCase()}-priority`)

	const completeCheckbox = createElement('input', 'complete-task')
	completeCheckbox.type = "checkbox"
	completeCheckbox.dataset.taskIndex = index;

	const taskTitle = createElement('h2', 'task-title', title);
	const taskDescription = createElement('p', 'task-description', description);
	const dueDateAndDeleteDiv = createElement('div', 'date-and-utils');
	const taskDueDate = createElement('p', 'due-date', dueDate);
	const trashIconDiv = createElement('div', 'delete');
	trashIconDiv.innerHTML += trashIcon;
	trashIconDiv.dataset.taskIndex = index;

	dueDateAndDeleteDiv.append(taskDueDate, trashIconDiv);

	taskDiv.append(completeCheckbox, taskTitle, taskDescription, dueDateAndDeleteDiv);

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
