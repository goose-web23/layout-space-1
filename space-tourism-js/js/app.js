import { navigateTo } from './router.js';
import { animateTransition } from './animations.js';

let appData = {};

async function loadData() {
    try {
        const response = await fetch('./data.json');
        appData = await response.json();
        console.log('Данные загружены:', appData);
    } catch (error) {
        console.error('Ошибка загрузки данных:', error);
    }
}

document.addEventListener('DOMContentLoaded', async function () {
    await loadData();
    setupNavigation();
    navigateTo('home');
});


function setupNavigation() {
    const navLinks = document.querySelectorAll('.header-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetPage = this.getAttribute('data-page');
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            animateTransition(() => {
                navigateTo(targetPage, appData);
            });
        });
    });
}


document.addEventListener('click', function (e) {
    if (e.target.id === 'explore') {
        const destinationLink = document.querySelector('[data-page="destination"]');
        destinationLink.click();
    }
});