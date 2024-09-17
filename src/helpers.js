export function createElement(type, className, innerText = '') {
	const element = document.createElement(type);
	element.classList.add(className);
	element.innerText = innerText;
	return element;
}

export function createTask(task) {
    
}