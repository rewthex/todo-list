export default (() => {
    const tasks = document.createElement('div')
    tasks.classList.add('tasks')
    tasks.textContent = "Here's some tasks.."
    return tasks;
})();