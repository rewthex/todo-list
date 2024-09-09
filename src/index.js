import './index.style.css';
import sidebar from './sidebar';
import header from './header';
import tasks from './tasks'

const initialRender = () => {
    const body = document.querySelector("body")

    body.appendChild(sidebar);
    body.appendChild(header);
    body.appendChild(tasks);
}

initialRender();