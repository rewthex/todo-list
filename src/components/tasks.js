import { createElement, createTask } from '../helpers';

export default (() => {
    const taskContainer = createElement('div', 'tasks')
    
    const tasks = localStorage

    for (let i = 0; i < tasks.length; i++) {
        const task = localStorage.getItem(i);
        console.log(task)
    }

    return taskContainer;
})();