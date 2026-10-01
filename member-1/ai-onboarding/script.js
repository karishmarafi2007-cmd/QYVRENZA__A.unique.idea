const form = document.querySelector('#setup-form');
const steps = [...document.querySelectorAll('.wizard-step')];
const progressFill = document.querySelector('.progress-fill');
const stepLabel = document.querySelector('#step-label');
const stepCount = document.querySelector('#step-count');
const toast = document.querySelector('.toast');
let currentStep = 0;

const progressLabels = [
    ['WELCOME', 'GET STARTED'],
    ['YOUR ROLE', 'STEP 1 OF 3'],
    ['YOUR WORKSPACE', 'STEP 2 OF 3'],
    ['YOUR INTERESTS', 'STEP 3 OF 3'],
    ['COMPLETE', 'ALL SET'],
];

function showStep(nextStep) {
    const clampedStep = Math.min(Math.max(nextStep, 0), steps.length - 1);
    currentStep = clampedStep;
    steps.forEach((step, index) => {
        step.hidden = index !== currentStep;
        step.classList.toggle('is-active', index === currentStep);
    });
    if (stepLabel && stepCount && progressFill) {
        stepLabel.textContent = progressLabels[currentStep][0];
        stepCount.textContent = progressLabels[currentStep][1];
        progressFill.style.width = `${[0, 33, 66, 100, 100][currentStep]}%`;
    }
    const setupMain = document.querySelector('.setup-main');
    if (setupMain) {
        setupMain.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function validateStep() {
    document.querySelector('#role-error').textContent = '';
    document.querySelector('#workspace-error').textContent = '';
    document.querySelector('#interest-error').textContent = '';

    if (currentStep === 1 && !form.querySelector('input[name="role"]:checked')) {
        document.querySelector('#role-error').textContent = 'Choose the option that best describes you to continue.';
        return false;
    }

    if (currentStep === 2) {
        const workspaceField = document.querySelector('#workspace-name');
        if (!workspaceField.value.trim()) {
            document.querySelector('#workspace-error').textContent = 'Add a workspace name to continue.';
            workspaceField.focus();
            return false;
        }
        workspaceField.value = workspaceField.value.trim();
    }

    if (currentStep === 3 && !form.querySelector('input[name="interest"]:checked')) {
        document.querySelector('#interest-error').textContent = 'Select at least one interest to continue.';
        return false;
    }
    return true;
}

function fillSummary() {
    document.querySelector('#summary-workspace').textContent = document.querySelector('#workspace-name').value;
    document.querySelector('#summary-role').textContent = form.querySelector('input[name="role"]:checked').value;
    document.querySelector('#summary-size').textContent = document.querySelector('#workspace-size').value;
    document.querySelector('#summary-interests').textContent = [...form.querySelectorAll('input[name="interest"]:checked')]
        .map((input) => input.value).join(', ');
}

document.querySelectorAll('.next-button').forEach((button) => {
    button.addEventListener('click', () => {
        if (button.closest('.wizard-step')?.hidden) return;
        if (!validateStep()) return;
        if (currentStep === 3) fillSummary();
        showStep(currentStep + 1);
    });
});

document.querySelectorAll('.back-button').forEach((button) => {
    button.addEventListener('click', () => {
        if (button.closest('.wizard-step')?.hidden) return;
        showStep(currentStep - 1);
    });
});

document.querySelector('.finish-button')?.addEventListener('click', () => {
    if (!toast) return;
    toast.textContent = `${document.querySelector('#summary-workspace').textContent} is ready to explore.`;
    toast.classList.add('is-visible');
    window.setTimeout(() => toast.classList.remove('is-visible'), 2800);
});

document.querySelector('.sign-in')?.addEventListener('click', () => {
    if (!toast) return;
    toast.textContent = 'Sign-in is a prototype action; no account service is connected.';
    toast.classList.add('is-visible');
    window.setTimeout(() => toast.classList.remove('is-visible'), 2800);
});

form?.addEventListener('submit', (event) => event.preventDefault());

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const status = document.querySelector('.contact-status');
        if (status) {
            status.textContent = 'Thanks — a workspace specialist will contact you shortly.';
        }
        contactForm.reset();
    });
}