export default (() => {
    const sidebar = document.createElement('div')
    sidebar.classList.add('sidebar')
    sidebar.textContent = "Here's a sidebar"
    return sidebar;
})();