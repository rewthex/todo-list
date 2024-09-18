import './index.style.css';
import sidebar from './components/sidebar';
import header from './components/header';
import tasks from './components/tasks';
import './sampleTasks';

const initialRender = () => {
	const body = document.querySelector('body');
	body.append(sidebar, header, tasks);
};

initialRender();
