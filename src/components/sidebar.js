import './sidebar.style.css';
import { createElement } from '../helpers';

const tornado =
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,5H3A1,1 0 0,1 2,4A1,1 0 0,1 3,3H21A1,1 0 0,1 22,4A1,1 0 0,1 21,5M20,8A1,1 0 0,0 19,7H5A1,1 0 0,0 4,8A1,1 0 0,0 5,9H19A1,1 0 0,0 20,8M21,12A1,1 0 0,0 20,11H10A1,1 0 0,0 9,12A1,1 0 0,0 10,13H20A1,1 0 0,0 21,12M16,16A1,1 0 0,0 15,15H9A1,1 0 0,0 8,16A1,1 0 0,0 9,17H15A1,1 0 0,0 16,16M13,20A1,1 0 0,0 12,19H10A1,1 0 0,0 9,20A1,1 0 0,0 10,21H12A1,1 0 0,0 13,20Z" fill="#2196f3"/></svg>';

const categoryNames = ['All', 'Errands', 'Health', 'Hobbies'];

function timeClickHandler(e) {
	const timeContainer = document.querySelector('.time');
	const timeButtons = timeContainer.querySelectorAll('button');
	timeButtons.forEach((button) => {
		button.classList.remove('active');
	});

	const activeButton = e.target;
    activeButton.classList.add('active')

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
    activeButton.classList.add('active')

	const filter = activeButton.innerText;
	const event = new CustomEvent('categoryFilter', {
		detail: { filter },
	});
	document.dispatchEvent(event);
}

export default (() => {
	const sidebar = createElement('div', 'sidebar');

	const logo = createElement('div', 'logo');
	logo.innerHTML += tornado;

	const logoTitle = createElement('h1', 'logo-title', 'Tasknado');
	logo.appendChild(logoTitle);

	const time = createElement('div', 'time');
	time.addEventListener('click', timeClickHandler);

	const timeTitle = createElement('h1', 'time-title');
	const todayButton = createElement('button', 'today-btn', 'Today');
    todayButton.classList.add('active')
	const weekButton = createElement('button', 'week-btn', 'Week');
	const monthButton = createElement('button', 'month-btn', 'Month');
	const allButton = createElement('button', 'all-btn', 'All');
	time.append(timeTitle, todayButton, weekButton, monthButton, allButton);

	const categories = createElement('div', 'categories');
    categories.addEventListener('click', categoryClickHandler)

	categoryNames.forEach((categoryName) => {
		const category = createElement('button', 'category', categoryName);
        if (categoryName === 'All') {
            category.classList.add('active')
        }
		categories.appendChild(category);
	});

	sidebar.append(logo, time, categories);

	return sidebar;
})();
