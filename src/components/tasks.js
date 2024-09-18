import './tasks.style.css';
import {
	createElement,
	createTask,
	filterTasksByCategory,
	convertLocalStorageToObject,
} from '../helpers';

export function createTasks() {
	document.addEventListener('categoryFilter', handleCategoryChange);
	renderTasks();
}

function renderTasks(tasks = convertLocalStorageToObject(localStorage)) {
	const taskContainer = createElement('div', 'tasks');

	Object.entries(tasks).forEach((task) => {
		const taskItem = createTask(task[0], task[1]);
		taskContainer.appendChild(taskItem);
	});

	document.body.appendChild(taskContainer);
}

function handleCategoryChange(e) {
	document.querySelector('.tasks').remove();
	const filter = e.detail.filter;
	if (filter === 'All') {
		return renderTasks();
	}
	const filteredTasks = filterTasksByCategory(filter);
	renderTasks(filteredTasks);
}
