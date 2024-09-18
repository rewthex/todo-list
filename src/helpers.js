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

	return taskDiv;
}
