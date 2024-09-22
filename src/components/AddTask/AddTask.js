import './AddTask.style.css';
import { addIcon } from '../../utils/icons';
import { createElement } from '../../utils/helpers';

export function createAddTask() {
	const taskDialog = createTaskDialog();

	const addTaskDiv = createElement('div', 'add-button');

	addTaskDiv.innerHTML = addIcon;
	addTaskDiv.addEventListener('click', () => {
		taskDialog.showModal();
	});

	addTaskDiv.append(taskDialog);
	return addTaskDiv;
}

function createTaskDialog() {
	const taskDialog = createElement('dialog', 'task-dialog');
	const taskForm = createForm();

	taskDialog.append(taskForm);

	return taskDialog;
}

function addTask(e) {
	e.stopPropagation();

	const taskForm = document.querySelector('.task-form');

	if (!taskForm.checkValidity()) {
		taskForm.reportValidity();
		return;
	} else {
		const index = localStorage.length;

		const title = document.querySelector('#task-title').value;
		const description = document.querySelector('#task-desc').value;
		const category = document.querySelector('#task-category').value;
		const dueDate = formatDate(document.querySelector('#task-due-date').value);
		const priority = document.querySelector('#task-priority').value;

		const task = { title, description, category, dueDate, priority };
		localStorage.setItem(index, JSON.stringify(task));

		const event = new CustomEvent('taskAdded');
		document.dispatchEvent(event);
	
		const taskDialog = document.querySelector('dialog');
		taskDialog.close();
	}
}

function formatDate(date) {
	const dateArray = date.split('-');
	const year = dateArray[0];
	const month = dateArray[1];
	const day = dateArray[2];
	return `${month}-${day}-${year}`;
}

function createForm() {
	const form = document.createElement('form');
	form.classList.add('task-form');

	const titleLabel = document.createElement('label');
	titleLabel.textContent = 'Title';
	titleLabel.setAttribute('for', 'task-title');

	const titleInput = document.createElement('input');
	titleInput.type = 'text';
	titleInput.id = 'task-title';
	titleInput.name = 'title';
	titleInput.required = true;

	const descLabel = document.createElement('label');
	descLabel.textContent = 'Description';
	descLabel.setAttribute('for', 'task-desc');

	const descInput = document.createElement('textarea');
	descInput.id = 'task-desc';
	descInput.name = 'description';
	descInput.required = true;

	const categoryLabel = document.createElement('label');
	categoryLabel.textContent = 'Category';
	categoryLabel.setAttribute('for', 'task-desc');

	const categoryInput = document.createElement('input');
	categoryInput.id = 'task-category';
	categoryInput.name = 'category';
	categoryInput.required = true;

	const dueDateLabel = document.createElement('label');
	dueDateLabel.textContent = 'Due Date';
	dueDateLabel.setAttribute('for', 'task-due-date');

	const dueDateInput = document.createElement('input');
	dueDateInput.type = 'date';
	dueDateInput.id = 'task-due-date';
	dueDateInput.name = 'dueDate';
	dueDateInput.required = true;

	const priorityLabel = document.createElement('label');
	priorityLabel.textContent = 'Priority';
	priorityLabel.setAttribute('for', 'task-priority');

	const prioritySelect = document.createElement('select');
	prioritySelect.id = 'task-priority';
	prioritySelect.name = 'priority';

	const optionGreen = document.createElement('option');
	optionGreen.value = 'Green';
	optionGreen.textContent = 'Green';

	const optionYellow = document.createElement('option');
	optionYellow.value = 'Yellow';
	optionYellow.textContent = 'Yellow';

	const optionRed = document.createElement('option');
	optionRed.value = 'Red';
	optionRed.textContent = 'Red';

	prioritySelect.append(optionGreen, optionYellow, optionRed);

	const addTaskButton = createElement('button', 'add-task-button', 'Add Task');
	addTaskButton.addEventListener('click', addTask);

	form.append(
		titleLabel,
		titleInput,
		descLabel,
		descInput,
		categoryLabel,
		categoryInput,
		dueDateLabel,
		dueDateInput,
		priorityLabel,
		prioritySelect,
		addTaskButton
	);

	return form;
}
