/**
 * AT SENSEI ACADEMY — FORMS & INTERACTIVE WORKFLOWS
 * Form validation, dynamic minor/parent consent, workshop booking & toast notifications
 */

const FormManager = (() => {
  function init() {
    setupEnquiryForm();
    setupWorkshopModal();
    setupFeeCalculator();
  }

  // Toast Notification System
  function showToast(message, type = 'success', duration = 5000) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let icon = '✓';
    if (type === 'error') icon = '⚠';
    if (type === 'info') icon = 'ℹ';

    toast.innerHTML = `
      <span style="font-weight: bold; font-size: 1.1rem;">${icon}</span>
      <div style="flex-grow: 1;">${message}</div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  // Admission / Enquiry Form Setup
  function setupEnquiryForm() {
    const form = document.getElementById('admission-enquiry-form');
    const courseSelect = document.getElementById('enquiry-course-select');
    const minorConsentBox = document.getElementById('minor-consent-container');
    const feePreview = document.getElementById('enquiry-fee-preview');

    if (!form) return;

    if (courseSelect) {
      courseSelect.addEventListener('change', () => {
        const selectedVal = courseSelect.value;
        
        // Minor protection logic for School Foundation Course (Classes 8th-10th)
        if (selectedVal === 'foundation') {
          if (minorConsentBox) {
            minorConsentBox.style.display = 'block';
            const parentInputs = minorConsentBox.querySelectorAll('input');
            parentInputs.forEach(input => input.required = true);
          }
          if (feePreview) {
            feePreview.textContent = "₹18,000 to ₹30,000 (Based on Class 8th/9th/10th & Board)";
          }
        } else {
          if (minorConsentBox) {
            minorConsentBox.style.display = 'none';
            const parentInputs = minorConsentBox.querySelectorAll('input');
            parentInputs.forEach(input => {
              input.required = false;
              input.value = '';
            });
          }

          if (selectedVal === 'banking') {
            if (feePreview) feePreview.textContent = "₹16,999 (Includes GST | 3 Years Validity)";
          } else if (selectedVal === 'ssc') {
            if (feePreview) feePreview.textContent = "₹18,999 (Includes GST | 3 Years Validity)";
          } else if (selectedVal === 'ssc-banking-combo') {
            if (feePreview) feePreview.textContent = "₹27,999 (Includes GST | 3 Years Validity)";
          } else {
            if (feePreview) feePreview.textContent = "Select a program to view catalog fee";
          }
        }
      });
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('enquiry-name').value.trim();
      const phone = document.getElementById('enquiry-phone').value.trim();
      const email = document.getElementById('enquiry-email').value.trim();
      const course = courseSelect ? courseSelect.value : '';
      const batch = document.getElementById('enquiry-batch-pref') ? document.getElementById('enquiry-batch-pref').value : 'Morning';

      // Validation
      if (!name || name.length < 2) {
        showToast("Please enter a valid full name.", "error");
        return;
      }

      const phoneRegex = /^[6-9]\d{9}$/;
      const cleanPhone = phone.replace(/\D/g, '');
      if (!phoneRegex.test(cleanPhone)) {
        showToast("Please enter a valid 10-digit Indian mobile number.", "error");
        return;
      }

      if (!course) {
        showToast("Please select your target programme.", "error");
        return;
      }

      // Minor validation check
      if (course === 'foundation') {
        const parentName = document.getElementById('parent-name') ? document.getElementById('parent-name').value.trim() : '';
        const parentPhone = document.getElementById('parent-phone') ? document.getElementById('parent-phone').value.trim() : '';
        const parentConsentCheck = document.getElementById('parent-consent-checkbox');

        if (!parentName || parentName.length < 2) {
          showToast("Parent/Guardian full name is mandatory for School Foundation courses.", "error");
          return;
        }

        if (!phoneRegex.test(parentPhone.replace(/\D/g, ''))) {
          showToast("Please provide a valid 10-digit phone number for Parent/Guardian.", "error");
          return;
        }

        if (!parentConsentCheck || !parentConsentCheck.checked) {
          showToast("Parent/Guardian consent checkbox must be confirmed.", "error");
          return;
        }
      }

      // Simulate successful enquiry submission
      showToast(`Thank you, ${name}! Your enquiry for ${getCourseName(course)} has been received. Our senior academic counselor will call you within 24 hours.`, "success", 7000);
      form.reset();
      if (minorConsentBox) minorConsentBox.style.display = 'none';
      if (feePreview) feePreview.textContent = "Select a program to view catalog fee";
    });
  }

  function getCourseName(courseId) {
    const course = ACADEMY_DATA.programs.find(p => p.id === courseId);
    return course ? course.title : "the selected program";
  }

  // Free Workshop Booking Modal Setup
  function setupWorkshopModal() {
    const modal = document.getElementById('workshop-modal-backdrop');
    const openBtns = document.querySelectorAll('.btn-open-workshop-modal');
    const closeBtn = document.getElementById('workshop-modal-close');
    const bookingTypeSelect = document.getElementById('workshop-type-select');
    const institutionGroup = document.getElementById('workshop-institution-group');
    const workshopForm = document.getElementById('workshop-booking-form');

    if (!modal) return;

    openBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        modal.classList.add('is-active');
        document.body.style.overflow = 'hidden';
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.classList.remove('is-active');
        document.body.style.overflow = '';
      });
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('is-active');
        document.body.style.overflow = '';
      }
    });

    if (bookingTypeSelect && institutionGroup) {
      bookingTypeSelect.addEventListener('change', () => {
        if (bookingTypeSelect.value === 'institution') {
          institutionGroup.style.display = 'block';
          const instInputs = institutionGroup.querySelectorAll('input');
          instInputs.forEach(i => i.required = true);
        } else {
          institutionGroup.style.display = 'none';
          const instInputs = institutionGroup.querySelectorAll('input');
          instInputs.forEach(i => {
            i.required = false;
            i.value = '';
          });
        }
      });
    }

    if (workshopForm) {
      workshopForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const attendeeName = document.getElementById('ws-name').value.trim();
        const attendeePhone = document.getElementById('ws-phone').value.trim();
        const type = bookingTypeSelect.value;

        if (!attendeeName) {
          showToast("Please enter your name.", "error");
          return;
        }

        const phoneRegex = /^[6-9]\d{9}$/;
        if (!phoneRegex.test(attendeePhone.replace(/\D/g, ''))) {
          showToast("Please enter a valid 10-digit Indian phone number.", "error");
          return;
        }

        modal.classList.remove('is-active');
        document.body.style.overflow = '';
        workshopForm.reset();

        const sessionMsg = type === 'institution' 
          ? `Institutional workshop request submitted! Our academic director will reach out to schedule the session at your campus.` 
          : `Seat reserved for 100% Free Career Awareness Workshop! We've sent confirmation details to your phone.`;

        showToast(sessionMsg, "success", 8000);
      });
    }
  }

  // Interactive Fee Calculator Tab
  function setupFeeCalculator() {
    const classTabs = document.querySelectorAll('.foundation-class-tab');
    const feeState = document.getElementById('fee-display-state');
    const feeCbse = document.getElementById('fee-display-cbse');
    const feeIcse = document.getElementById('fee-display-icse');

    if (!classTabs.length || !feeState) return;

    const fees = {
      "8": { state: "₹18,000", cbse: "₹18,000", icse: "₹22,000" },
      "9": { state: "₹18,000", cbse: "₹20,000", icse: "₹25,000" },
      "10": { state: "₹22,000", cbse: "₹25,000", icse: "₹30,000" }
    };

    classTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        classTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const standard = tab.getAttribute('data-standard');
        if (fees[standard]) {
          feeState.textContent = fees[standard].state;
          feeCbse.textContent = fees[standard].cbse;
          feeIcse.textContent = fees[standard].icse;
        }
      });
    });
  }

  return {
    init,
    showToast
  };
})();
