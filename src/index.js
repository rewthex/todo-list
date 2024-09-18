import './index.style.css';
import './sampleTasks';

import { createSidebar } from './components/sidebar';
import { createHeader } from './components/header';
import { createTasks } from './components/tasks';

const initialRender = () => {
	const body = document.querySelector('body');
	body.append(createSidebar(), createHeader(), createTasks());
};

initialRender();
