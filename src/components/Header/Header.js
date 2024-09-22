import './Header.style.css';
import { createElement } from '../../utils/helpers';

export function createHeader() {
	let category = 'All';

	const headerContainer = createElement('div', 'header');
	const headerText = createElement('h1', 'header-text', `${category}`);
	headerContainer.appendChild(headerText);

	document.addEventListener('categoryFilter', (event) => {
		category = event.detail.filter;
		headerText.textContent = category;
	});

	return headerContainer;
}
