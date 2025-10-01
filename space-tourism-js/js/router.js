// js/router.js
import { updateBodyClass } from './animations.js';

// Функции для рендера разных страниц
const pageTemplates = {
    home: (data) => {
        if (!data) return '<div>Loading...</div>';
        return `
            <div class="main-container home-page">
                <div class="main-content">
                    <h3>${data.heading}</h3>
                    <h1>${data.mainHeading}</h1>
                    <p>${data.description}</p>
                </div>
                <button id="explore">EXPLORE</button>
            </div>
        `;
    },

    destination: (data) => {
        if (!data) return '<div>Loading...</div>';
        return `
            <div class="destination-wrapper">
                <h3><span class="number-bold">01</span> PICK YOUR DESTINATION</h3>
                <div class="main-container destination-page">
                    <img src="${data.image}" alt="${data.name}">
                    <div class="main-content">
                        <ul class="planet-list">
                            <li class="planet-link planet-active">MOON</li>
                            <li class="planet-link">MARS</li>
                            <li class="planet-link">EUROPA</li>
                            <li class="planet-link">TITAN</li>
                        </ul>
                        <h1>${data.name}</h1>
                        <p>${data.description}</p>
                        <div class="divider-main"></div>
                        <div class="about-numbers">
                            <div class="about-element">
                                AVG. DISTANCE
                                <span class="about-num">${data.distance}</span>
                            </div>
                            <div class="about-element">
                                EST. TRAVEL TIME
                                <span class="about-num">${data.travelTime}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    crew: (data) => {
        if (!data) return '<div>Loading...</div>';
        return `
            <div class="crew-wrapper">
                <h3><span class="number-bold">02</span> MEET YOUR CREW</h3>
                <div class="main-container crew-page">
                    <div class="main-content">
                        <h4>${data.role}</h4>
                        <h1>${data.name}</h1>
                        <p>${data.description}</p>
                    </div>
                    <img src="${data.image}" alt="${data.name}">
                </div>
            </div>
        `;
    },

    technology: (data) => {
        if (!data) return '<div>Loading...</div>';
        return `
            <div class="technology-wrapper">
                <h3><span class="number-bold">03</span> SPACE LAUNCH 101</h3>
                <div class="main-container technology-page">
                    <div class="buttons-num">
                        <button class="num-btn btn-active">1</button>
                        <button class="num-btn">2</button>
                        <button class="num-btn">3</button>
                    </div>
                    <div class="main-content">
                        <h4>${data.terminology}</h4>
                        <h1>${data.name}</h1>
                        <p>${data.description}</p>
                    </div>
                    <img src="${data.image}" alt="${data.name}">
                </div>
            </div>
        `;
    }
};


export function navigateTo(pageName, data) {
    const mainContent = document.getElementById('main-content');
    const pageData = data ? data[pageName] : null;

    if (pageTemplates[pageName]) {
        if (pageData && pageData.title) {
            document.title = pageData.title;
        }
        updateBodyClass(pageName);
        mainContent.innerHTML = pageTemplates[pageName](pageData ? pageData.content : null);
        history.pushState({ page: pageName }, '', `#${pageName}`);
        console.log(`Перешли на страницу: ${pageName}`);
    } else {
        console.error(`Страница ${pageName} не найдена`);
        mainContent.innerHTML = '<div>Страница не найдена</div>';
    }
}