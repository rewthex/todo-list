import './index.style.css';
import './utils/sampletasks';

import { createSidebar } from './components/Sidebar/Sidebar';
import { createHeader } from './components/Header/Header';
import { createTasks } from './components/Tasks/Tasks';
import { createAddTask } from './components/AddTask/AddTask';

const initialRender = () => {
	document.body.append(createSidebar(), createHeader(), createAddTask());
	createTasks();
};

initialRender();
