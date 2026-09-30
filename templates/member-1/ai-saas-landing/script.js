const root = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
const previewDialog = document.querySelector('.preview-dialog');

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
        root.dataset.theme = nextTheme;
        const label = nextTheme === 'dark' ? 'Light mode' : 'Dark mode';
        themeToggle.setAttribute('aria-label', `Switch to ${label.toLowerCase()}`);
        const themeLabel = themeToggle.querySelector('.theme-label');
        if (themeLabel) themeLabel.textContent = label;
    });
}

if (menuToggle && navigation) {
    menuToggle.addEventListener('click', () => {
        const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', String(!isOpen));
        menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
        navigation.classList.toggle('is-open', !isOpen);
    });

    navigation.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navigation.classList.remove('is-open');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Open navigation');
        });
    });
}

if (previewDialog) {
    document.querySelectorAll('.preview-trigger').forEach((button) => {
        button.addEventListener('click', () => {
            previewDialog.querySelector('#dialog-title').textContent = button.dataset.title;
            previewDialog.querySelector('.dialog-description').textContent = button.dataset.description;
            previewDialog.showModal();
        });
    });

    const dialogClose = document.querySelector('.dialog-close');
    const dialogDone = document.querySelector('.dialog-done');
    if (dialogClose) dialogClose.addEventListener('click', () => previewDialog.close());
    if (dialogDone) dialogDone.addEventListener('click', () => previewDialog.close());
    previewDialog.addEventListener('click', (event) => {
        if (event.target === previewDialog) previewDialog.close();
    });
}

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const status = document.querySelector('.contact-status');
        if (status) {
            status.textContent = 'Thanks — your note has been queued and our team will follow up within one business day.';
        }
        contactForm.reset();
    });
}