import { sampleTasks } from './sampleTasks'
Object.keys(sampleTasks).forEach(key => {
    localStorage.setItem(key, JSON.stringify(sampleTasks[key]))
})
export default (() => {
    
    const tasks = document.createElement('div')
    tasks.classList.add('tasks')
    tasks.textContent = "Here's some tasks.."
    return tasks;
})();