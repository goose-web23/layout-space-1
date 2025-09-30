export function animateTransition(callback) {
    const mainContent = document.getElementById('main-content');

    if (!mainContent) {
        console.error('Element #main-content not found');
        callback();
        return;
    }
    mainContent.style.opacity = '0';
    mainContent.style.transition = 'opacity 0.3s ease';
    setTimeout(() => {
        callback();

        requestAnimationFrame(() => {
            mainContent.style.opacity = '1';
        });
    }, 300);
}

export function updateBodyClass(page) {
    document.body.className = page + '-page';
}