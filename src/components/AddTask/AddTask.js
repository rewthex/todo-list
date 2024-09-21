import './AddTask.style.css'
import { addIcon } from '../../utils/icons';
import { createElement } from '../../utils/helpers';

// export function createAddTask() {
//     const taskDialog = createElement('dialog', 'task-dialog')
//     const addTaskButton = createElement('button', 'add-task-button', 'Add Task')
//     addTaskButton.addEventListener('click', () => {
//         taskDialog.close();
//     })
//     taskDialog.appendChild(addTaskButton)
//     document.body.appendChild(taskDialog)
// 	const iconDiv = createElement('div', 'add-button');
// 	iconDiv.innerHTML = addIcon;
//     iconDiv.addEventListener("click", () => {
//         taskDialog.showModal();
//     })
//     return iconDiv;
// }

export function createAddTask() {
    const addTaskDiv = createElement('div', 'add-button');
    const openDialogButton = createElement('button', 'open-dialog-button')
    openDialogButton.innerHTML = addIcon;
    // const taskDialog = createElement('dialog', 'task-dialog')
    addTaskDiv.append(openDialogButton);
    addTaskDiv.addEventListener('click', () => {
        taskDialog.showModal();
    })
    
    return addTaskDiv;
}