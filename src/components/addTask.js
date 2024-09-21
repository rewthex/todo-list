import './addTask.style.css'
import { addIcon } from './icons';
import { createElement } from '../helpers';

export function createAddTask() {
    const taskDialog = createElement('dialog', 'task-dialog')
    const addTaskButton = createElement('button', 'add-task-button', 'Add Task')
    addTaskButton.addEventListener('click', () => {
        taskDialog.close();
    })
    taskDialog.appendChild(addTaskButton)
    document.body.appendChild(taskDialog)
	const iconDiv = createElement('div', 'add-button');
	iconDiv.innerHTML = addIcon;
    iconDiv.addEventListener("click", () => {
        taskDialog.showModal();
    })
    return iconDiv;
}
