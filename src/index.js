import './index.style.css';
import './sampleTasks';

import { createSidebar } from './components/sidebar';
import { createHeader } from './components/header';
import { createTasks } from './components/tasks';
import { createAddTask } from './components/addTask';

const initialRender = () => {
	const body = document.querySelector('body');
	body.append(createSidebar(), createHeader(), createTasks(), createAddTask());
};

initialRender();
