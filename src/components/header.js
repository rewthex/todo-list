import './header.style.css'
import { createElement } from '../helpers';

export default (() => {
	let time = 'Today';
	let category = '(All)';

	const headerContainer = createElement('div', 'header');
	const headerText = createElement('h1', 'header-text', `${time} ${category}`)
	headerContainer.appendChild(headerText);

	document.addEventListener('timeFilter', (event) => {
		time = event.detail.filter;
		headerText.textContent = `${time} ${category}`;
	});

	document.addEventListener('categoryFilter', (event) => {
		category = `(${event.detail.filter})`;
		headerText.textContent = `${time} ${category}`;
	});

	return headerContainer;
})();
