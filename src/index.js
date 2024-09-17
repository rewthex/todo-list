import './index.style.css';
import sidebar from './components/sidebar';
import header from './components/header';
import tasks from './components/tasks'

const initialRender = () => {
    const body = document.querySelector("body")

    body.appendChild(sidebar);
    body.appendChild(header);
    body.appendChild(tasks);
}

initialRender();