import './tasks.style.css';
import { createElement, createTask } from '../helpers';

export default (() => {
	const taskContainer = createElement('div', 'tasks');

	for (let i = 0; i < localStorage.length; i++) {
		const taskString = localStorage.getItem(i)
        const taskObject = JSON.parse(taskString)
        const taskItem = createTask(i, taskObject)
        taskContainer.appendChild(taskItem)
	}

	return taskContainer;
})();
