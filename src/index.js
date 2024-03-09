import renderHome from './home.js'
import renderMenu from './menu.js'
import renderOrder from './order.js'
import './style.css';

const main = document.querySelector('#content');
const navButtons = document.querySelectorAll('.nav-button')
let currentTab = 'home';

for (let button of navButtons) {
    button.addEventListener('click', (e) => {
        currentTab = e.target.value
        renderPage(main)
    })
}
function renderPage(main) {
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
    switch (currentTab) {
        case 'home':
            renderHome(main)
            break;
        case 'menu':
            renderMenu(main)
            break;
        case 'order':
            renderOrder(main)
            break;
    }
}

renderPage(main)
// renderMenu(main)