import './Sidebar.style.css';
import { tornadoIcon } from '../../utils/icons';
import { createElement, fetchUniqueCategories } from '../../utils/helpers';

export function createSidebar() {
	const sidebar = createElement('div', 'sidebar');

	const logo = createElement('div', 'logo');
	logo.innerHTML += tornadoIcon;

	const logoTitle = createElement('h1', 'logo-title', 'Tasknado');
	logo.appendChild(logoTitle);

	const time = createElement('div', 'time');
	time.addEventListener('click', timeClickHandler);

	const allButton = createElement('button', 'all-btn', 'All');
	allButton.classList.add('active');
	const todayButton = createElement('button', 'today-btn', 'Today');
	const weekButton = createElement('button', 'week-btn', 'Week');
	const monthButton = createElement('button', 'month-btn', 'Month');
	time.append(allButton, todayButton, weekButton, monthButton);

	const categories = createElement('div', 'categories');
	categories.addEventListener('click', categoryClickHandler);

	fetchUniqueCategories().forEach((categoryName) => {
		const category = createElement('button', 'category', categoryName);
		if (categoryName === 'All') {
			category.classList.add('active');
		}
		categories.appendChild(category);
	});

	sidebar.append(logo, time, categories);

	return sidebar;
}

function timeClickHandler(e) {
	const timeContainer = document.querySelector('.time');
	const timeButtons = timeContainer.querySelectorAll('button');
	timeButtons.forEach((button) => {
		button.classList.remove('active');
	});

	const activeButton = e.target;
	activeButton.classList.add('active');

	const filter = activeButton.innerText;
	const event = new CustomEvent('timeFilter', {
		detail: { filter },
	});
	document.dispatchEvent(event);
}

function categoryClickHandler(e) {
	const categoryContainer = document.querySelector('.categories');
	const categoryButtons = categoryContainer.querySelectorAll('button');
	categoryButtons.forEach((button) => {
		button.classList.remove('active');
	});

	const activeButton = e.target;
	activeButton.classList.add('active');

	const filter = activeButton.innerText;
	const event = new CustomEvent('categoryFilter', {
		detail: { filter },
	});
	document.dispatchEvent(event);
}