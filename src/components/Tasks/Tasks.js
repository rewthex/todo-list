import './Tasks.style.css';
import {
	createElement,
	createTask,
	filterTasksByCategory,
	convertLocalStorageToObject,
} from '../../utils/helpers';

export function createTasks() {
	document.addEventListener('categoryFilter', handleCategoryChange);
	renderTasks();
}

function renderTasks(tasks = convertLocalStorageToObject(localStorage)) {
	const existingTasks = document.querySelector('.tasks');

	if (existingTasks) {
		existingTasks.remove();
	}

	const taskContainer = createElement('div', 'tasks');

	Object.entries(tasks).forEach((task) => {
		const taskItem = createTask(task[0], task[1]);
		taskItem
			.querySelector('.delete')
			.addEventListener('click', handleDeleteTask);
		taskContainer.appendChild(taskItem);
	});
	
	return document.body.appendChild(taskContainer);
}

function handleCategoryChange(e) {
	const filter = e.detail.filter;
	if (filter === 'All') {
		return renderTasks();
	}

	const filteredTasks = filterTasksByCategory(filter);
	renderTasks(filteredTasks);
}

function handleDeleteTask(e) {
	const taskId = e.currentTarget.getAttribute('data-task-index');
	localStorage.removeItem(taskId);
	renderTasks();
}
