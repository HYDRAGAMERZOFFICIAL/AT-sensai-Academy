/**
 * AT SENSEI ACADEMY — PROGRAM FILTER & CURRICULUM VIEWER
 * Dynamic rendering of course cards, category filtering & curriculum details modal
 */

const ProgramManager = (() => {
  let gridContainer = null;
  let curriculumModalBackdrop = null;

  function init() {
    gridContainer = document.getElementById('programs-grid-container');
    curriculumModalBackdrop = document.getElementById('curriculum-modal-backdrop');

    renderPrograms('all');
    setupFilterTabs();
    setupCurriculumModal();
  }

  function renderPrograms(filterCategory = 'all') {
    if (!gridContainer) return;

    const filtered = ACADEMY_DATA.programs.filter(p => {
      if (filterCategory === 'all') return true;
      return p.category === filterCategory;
    });

    gridContainer.innerHTML = filtered.map(program => createProgramCardHTML(program)).join('');

    // Attach click listeners to new action buttons
    gridContainer.querySelectorAll('.btn-view-curriculum').forEach(btn => {
      btn.addEventListener('click', () => {
        const progId = btn.getAttribute('data-program-id');
        openCurriculum(progId);
      });
    });

    gridContainer.querySelectorAll('.btn-enroll-program').forEach(btn => {
      btn.addEventListener('click', () => {
        const progId = btn.getAttribute('data-program-id');
        selectProgramInForm(progId);
      });
    });
  }

  function createProgramCardHTML(p) {
    const isFeatured = p.featured ? 'featured' : '';
    const ribbonHTML = p.featured ? `<div class="program-card-ribbon">${p.tag}</div>` : '';
    const badgeCategory = p.category === 'school' ? 'badge-gold' : 'badge-blue';
    const categoryName = p.category === 'school' ? 'School Foundation (8-10th)' : 'Govt Competitive';

    const subjectsHTML = p.subjects.slice(0, 4).map(s => `<span class="subject-tag">${s}</span>`).join('');
    const extraSubjectsCount = p.subjects.length > 4 ? `<span class="subject-tag">+${p.subjects.length - 4} more</span>` : '';

    return `
      <article class="program-card ${isFeatured}" id="card-${p.id}">
        ${ribbonHTML}
        <div class="program-card-header">
          <div class="program-category">
            <span class="badge ${badgeCategory}">${categoryName}</span>
            <span class="badge badge-navy">${p.validity} Validity</span>
          </div>
          <h3 class="program-title">${p.title}</h3>
          <p class="program-desc">${p.description}</p>
        </div>

        <div class="program-details-box">
          <div class="detail-item">
            <span class="detail-label">Schedule / Timings</span>
            <span class="detail-val">${p.timings}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Batch Options</span>
            <span class="detail-val">${p.batches}</span>
          </div>
        </div>

        <div class="program-subjects">
          <div class="program-subjects-title">Core Subjects Covered</div>
          <div class="subject-tags">
            ${subjectsHTML}
            ${extraSubjectsCount}
          </div>
        </div>

        <div class="program-pricing">
          <div>
            <div class="pricing-amount">${p.feeDisplay}</div>
            <div class="pricing-subtext">${p.feeSubtext}</div>
          </div>
          <span class="badge badge-emerald">Verified Catalog Fee</span>
        </div>

        <div class="program-card-actions">
          <button type="button" class="btn btn-outline btn-view-curriculum" data-program-id="${p.id}">
            View Syllabus
          </button>
          <button type="button" class="btn btn-primary btn-enroll-program" data-program-id="${p.id}">
            Enquire / Enroll
          </button>
        </div>
      </article>
    `;
  }

  function setupFilterTabs() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filterVal = btn.getAttribute('data-filter');
        renderPrograms(filterVal);
      });
    });
  }

  function setupCurriculumModal() {
    if (!curriculumModalBackdrop) return;

    const closeBtn = document.getElementById('curriculum-modal-close');
    if (closeBtn) closeBtn.addEventListener('click', closeCurriculum);

    const okBtn = document.getElementById('curriculum-modal-ok');
    if (okBtn) okBtn.addEventListener('click', closeCurriculum);

    curriculumModalBackdrop.addEventListener('click', (e) => {
      if (e.target === curriculumModalBackdrop) closeCurriculum();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && curriculumModalBackdrop.classList.contains('is-active')) {
        closeCurriculum();
      }
    });
  }

  function openCurriculum(programId) {
    const program = ACADEMY_DATA.programs.find(p => p.id === programId);
    if (!program || !curriculumModalBackdrop) return;

    const modalTitle = document.getElementById('curriculum-modal-title');
    const modalBody = document.getElementById('curriculum-modal-body');

    if (modalTitle) modalTitle.textContent = `${program.title} — Syllabus & Structure`;

    let contentHTML = `
      <div style="margin-bottom: var(--space-4);">
        <p><strong>Eligibility:</strong> ${program.eligibility}</p>
        <p><strong>Course Validity:</strong> ${program.validity} active mentor support & test access.</p>
        <p><strong>Batch Timings:</strong> ${program.timings}</p>
      </div>
      <h4 style="margin-bottom: var(--space-3); color: var(--color-primary-navy);">Detailed Subject Breakdown:</h4>
      <div style="display: flex; flex-direction: column; gap: var(--space-4);">
    `;

    program.curriculum.forEach(item => {
      contentHTML += `
        <div style="background: var(--color-bg-alt); padding: var(--space-4); border-radius: var(--radius-md); border-left: 3px solid var(--color-brand-blue);">
          <div style="font-weight: 700; color: var(--color-primary-navy); margin-bottom: 4px;">${item.subject}</div>
          <div style="font-size: 0.85rem; color: var(--color-text-secondary);">${item.topics}</div>
        </div>
      `;
    });

    if (program.examsCovered && program.examsCovered.length > 0) {
      contentHTML += `
        <div style="margin-top: var(--space-4);">
          <h4 style="margin-bottom: var(--space-2); color: var(--color-primary-navy);">Target Examinations:</h4>
          <div class="subject-tags">
            ${program.examsCovered.map(ex => `<span class="subject-tag" style="background: var(--color-brand-blue-soft); color: var(--color-brand-blue); border-color: rgba(83,103,184,0.3); font-weight: 600;">${ex}</span>`).join('')}
          </div>
        </div>
      `;
    }

    contentHTML += `</div>`;
    if (modalBody) modalBody.innerHTML = contentHTML;

    curriculumModalBackdrop.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeCurriculum() {
    if (!curriculumModalBackdrop) return;
    curriculumModalBackdrop.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  function selectProgramInForm(programId) {
    const courseSelect = document.getElementById('enquiry-course-select');
    if (courseSelect) {
      courseSelect.value = programId;
      // Trigger change event for minor-consent auto toggle
      courseSelect.dispatchEvent(new Event('change'));
    }

    const formSection = document.getElementById('admission-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return {
    init,
    renderPrograms,
    openCurriculum,
    closeCurriculum,
    selectProgramInForm
  };
})();
