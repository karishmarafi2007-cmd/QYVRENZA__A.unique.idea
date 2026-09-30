const billingOptions = [...document.querySelectorAll('.billing-option')];
const planAmounts = [...document.querySelectorAll('.plan-price strong[data-monthly]')];
const selectionMessage = document.querySelector('.selection-message');

billingOptions.forEach((option) => {
  option.addEventListener('click', () => {
    const billing = option.dataset.billing;
    billingOptions.forEach((button) => {
      const selected = button === option;
      button.classList.toggle('is-selected', selected);
      button.setAttribute('aria-pressed', String(selected));
    });

    planAmounts.forEach((amount) => {
      amount.textContent = amount.dataset[billing];
      const card = amount.closest('.plan-card');
      card.querySelector('.billing-detail').textContent = card.querySelector('.billing-detail')
        .dataset[`detail${billing[0].toUpperCase()}${billing.slice(1)}`];
    });
  });
});

document.querySelectorAll('[data-select-plan]').forEach((button) => {
  button.addEventListener('click', () => {
    const selectedCard = button.closest('.plan-card');
    const planName = button.dataset.selectPlan;
    document.querySelectorAll('.plan-card').forEach((card) => {
      const selected = card === selectedCard;
      card.classList.toggle('is-chosen', selected);
      const planButton = card.querySelector('[data-select-plan]');
      planButton.setAttribute('aria-pressed', String(selected));
      planButton.innerHTML = selected
        ? `Selected ${planName} <span aria-hidden="true">✓</span>`
        : `${planButton.dataset.selectPlan === 'Explorer' ? 'Start exploring' : planButton.dataset.selectPlan === 'Studio' ? 'Choose Studio' : 'Talk to our team'} <span aria-hidden="true">→</span>`;
    });
    selectionMessage.textContent = planName === 'Company'
      ? 'Company selected. A live contact or sales flow is not connected in this static demo.'
      : `${planName} selected. Checkout is not connected in this static demo.`;
  });
});

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = document.querySelector('.contact-status');
    if (status) {
      status.textContent = 'Thanks — our pricing specialist will reach out within one business day.';
    }
    contactForm.reset();
  });
}