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

function closeTaskDialog(e) {
	e.stopPropagation();
	const taskDialog = document.querySelector('dialog');
	taskDialog.close();
}

function addTask(e) {
	e.preventDefault();
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

		closeTaskDialog();
		taskForm.reset();
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

	function createFormGroup(labelText, inputElement) {
		const formGroup = document.createElement('div');
		formGroup.classList.add('form-group');

		const label = document.createElement('label');
		label.textContent = labelText;
		label.setAttribute('for', inputElement.id);

		formGroup.append(label, inputElement);
		return formGroup;
	}

	const titleInput = document.createElement('input');
	titleInput.type = 'text';
	titleInput.id = 'task-title';
	titleInput.name = 'title';
	titleInput.required = true;

	const descInput = document.createElement('textarea');
	descInput.id = 'task-desc';
	descInput.name = 'description';
	descInput.required = true;

	const categoryInput = document.createElement('input');
	categoryInput.id = 'task-category';
	categoryInput.name = 'category';
	categoryInput.required = true;

	const dueDateInput = document.createElement('input');
	dueDateInput.type = 'date';
	dueDateInput.id = 'task-due-date';
	dueDateInput.name = 'dueDate';
	dueDateInput.required = true;

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

	const addTaskButton = document.createElement('button');
	addTaskButton.type = 'button';
	addTaskButton.classList.add('add-task-button');
	addTaskButton.textContent = 'Add Task';
	addTaskButton.addEventListener('click', addTask);

	const cancelButton = document.createElement('button');
	cancelButton.type = 'button';
	cancelButton.classList.add('cancel-button');
	cancelButton.textContent = 'Cancel';
	cancelButton.addEventListener('click', closeTaskDialog);

	form.append(
		createFormGroup('Title', titleInput),
		createFormGroup('Description', descInput),
		createFormGroup('Category', categoryInput),
		createFormGroup('Due Date', dueDateInput),
		createFormGroup('Priority', prioritySelect),
		addTaskButton,
		cancelButton
	);

	return form;
}
