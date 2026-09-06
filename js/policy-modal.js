/**
 * AT SENSEI ACADEMY — POLICY MODAL COMPONENT
 * Accessible policy reader for Privacy Policy, Terms, Refund Policy, Minor Consent & Disclaimer
 */

const PolicyModal = (() => {
  let modalBackdrop = null;
  let modalTitle = null;
  let modalContent = null;
  let currentActiveTab = 'privacy';

  function init() {
    modalBackdrop = document.getElementById('policy-modal-backdrop');
    modalTitle = document.getElementById('policy-modal-title');
    modalContent = document.getElementById('policy-modal-content');

    if (!modalBackdrop) return;

    // Attach tab click events
    const tabButtons = modalBackdrop.querySelectorAll('.policy-tab-btn');
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const policyKey = btn.getAttribute('data-policy');
        switchPolicy(policyKey);
      });
    });

    // Close on backdrop click
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalBackdrop.classList.contains('is-active')) {
        closeModal();
      }
    });

    // Close button
    const closeBtn = document.getElementById('policy-modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    const modalOkBtn = document.getElementById('policy-modal-ok');
    if (modalOkBtn) {
      modalOkBtn.addEventListener('click', closeModal);
    }
  }

  function openPolicy(policyKey = 'privacy') {
    if (!modalBackdrop) init();
    switchPolicy(policyKey);
    modalBackdrop.classList.add('is-active');
    document.body.style.overflow = 'hidden';
    modalBackdrop.setAttribute('aria-hidden', 'false');
  }

  function switchPolicy(policyKey) {
    if (!ACADEMY_DATA.policies[policyKey]) return;

    currentActiveTab = policyKey;
    const policy = ACADEMY_DATA.policies[policyKey];

    if (modalTitle) modalTitle.textContent = policy.title;
    if (modalContent) modalContent.innerHTML = policy.content;

    // Update active tab styling
    const tabButtons = modalBackdrop.querySelectorAll('.policy-tab-btn');
    tabButtons.forEach(btn => {
      if (btn.getAttribute('data-policy') === policyKey) {
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      }
    });
  }

  function closeModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('is-active');
    document.body.style.overflow = '';
    modalBackdrop.setAttribute('aria-hidden', 'true');
  }

  return {
    init,
    open: openPolicy,
    close: closeModal,
    switchPolicy
  };
})();
