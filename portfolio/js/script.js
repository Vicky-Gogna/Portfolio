'use strict';

/* ==========================================================================
   ================================
   PERSONAL INFORMATION
   EDIT YOUR DETAILS HERE
   ================================
   Update the values below to change content across the entire site.
   ========================================================================== */
const CONFIG = {
  name: 'Vicky Gogna',
  role: 'MERN Stack Developer',
  experience: '5 Years',
  location: 'Ghaziabad, Uttar Pradesh, India',

  // EDIT: Replace with your real email address
  email: 'EMAIL_ADDRESS_HERE',

  // EDIT: Replace with your real phone number
  phone: 'PHONE_NUMBER_HERE',

  // EDIT: Replace with a real hosted PDF or resume link
  resumeUrl: 'RESUME_URL_HERE',

  // EDIT: Replace assets/images/profile.jpg with your real professional photo
  // (or point this to a hosted image URL instead)
  profileImage: 'assets/images/profile.jpg',

  // EDIT: Replace each URL below with your real profile links.
  // Leave as-is (with "_HERE") to keep the link hidden/disabled in the footer.
  social: {
    instagram: 'INSTAGRAM_URL_HERE',
    facebook: 'FACEBOOK_URL_HERE',
    github: 'GITHUB_URL_HERE',
    whatsapp: 'WHATSAPP_URL_HERE',
    linkedin: 'LINKEDIN_URL_HERE',
  },
};

/* ==========================================================================
   SKILLS DATA
   EDIT: Add, remove, or update skill cards here
   ========================================================================== */
const SKILLS = [
  { name: 'HTML5', icon: '<>', level: 'Advanced', desc: 'Semantic, accessible markup for modern web apps.' },
  { name: 'CSS3', icon: '{ }', level: 'Advanced', desc: 'Responsive layouts with Flexbox, Grid, and animations.' },
  { name: 'JavaScript', icon: 'JS', level: 'Advanced', desc: 'ES6+ for building dynamic, interactive interfaces.' },
  { name: 'React.js', icon: '⚛', level: 'Experienced', desc: 'Component-based UIs with reusable, stateful logic.' },
  { name: 'Node.js', icon: 'JS', level: 'Experienced', desc: 'Server-side JavaScript for scalable backend services.' },
  { name: 'Express.js', icon: 'EX', level: 'Experienced', desc: 'Building REST APIs and backend routing/middleware.' },
  { name: 'MongoDB', icon: 'DB', level: 'Experienced', desc: 'Schema design and queries for NoSQL databases.' },
  { name: 'Bootstrap', icon: 'B', level: 'Proficient', desc: 'Rapid, responsive UI prototyping and layouts.' },
  { name: 'Tailwind CSS', icon: '~', level: 'Proficient', desc: 'Utility-first styling for consistent design systems.' },
  { name: 'Python', icon: 'PY', level: 'Proficient', desc: 'Scripting and general-purpose programming.' },
  { name: 'Git & GitHub', icon: 'GH', level: 'Experienced', desc: 'Version control and collaborative development workflows.' },
  { name: 'REST APIs', icon: 'API', level: 'Experienced', desc: 'Designing and consuming RESTful web services.' },
  { name: 'Responsive Design', icon: '▦', level: 'Advanced', desc: 'Interfaces that adapt cleanly across all devices.' },
];

/* ==========================================================================
   EXPERIENCE DATA
   EDIT: Update your work experience details here
   ========================================================================== */
const EXPERIENCE = [
  {
    role: 'MERN Stack Developer',
    company: 'Gtec Pvt Ltd',
    duration: 'Jan 2026 – Present',
    location: 'Ghaziabad, Uttar Pradesh, India',
    responsibilities: [
      'Developing responsive and user-friendly web applications using the MERN stack',
      'Building reusable and interactive UI components with React.js',
      'Developing scalable backend applications using Node.js and Express.js',
      'Creating and integrating RESTful APIs',
      'Designing and managing MongoDB databases',
      'Connecting frontend applications with backend APIs',
      'Implementing authentication and authorization',
      'Implementing form validation and error handling',
      'Optimizing application performance',
      'Debugging and resolving frontend and backend issues',
      'Using Git and GitHub for version control',
      'Following clean code and reusable component practices',
      'Building responsive layouts for desktop, tablet, and mobile',
      'Working with modern UI development practices',
    ],
  },
];

/* ==========================================================================
   PROJECTS DATA
   EDIT: Add your real project links, images, and details here
   ========================================================================== */
const PROJECTS = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce application covering product catalogs, cart and checkout flow, and core business logic for managing orders end to end.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    features: ['Product catalog & search', 'Cart and checkout flow', 'Order management logic', 'REST API integration', 'Responsive design'],
    image: 'PROJECT_IMAGE_URL',
    github: 'GITHUB_URL',
    demo: 'LIVE_DEMO_URL',
  },
  {
    title: 'Job Portal',
    description: 'A job listing platform with user authentication, full CRUD functionality, and role-based access for job seekers and employers.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    features: ['User authentication', 'Role-based access (job seeker / employer)', 'Create, read, update, delete job listings', 'Application tracking', 'Responsive UI'],
    image: 'PROJECT_IMAGE_URL',
    github: 'GITHUB_URL',
    demo: 'LIVE_DEMO_URL',
  },
  {
    title: 'Project Management System',
    description: 'A team collaboration tool for organizing projects and tasks, built to handle real-world teamwork with advanced task-management functionality.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    features: ['Task assignment & tracking', 'Team collaboration workflow', 'Status updates', 'Role-based permissions', 'Responsive dashboard'],
    image: 'PROJECT_IMAGE_URL',
    github: 'GITHUB_URL',
    demo: 'LIVE_DEMO_URL',
  },
  {
    title: 'Real Estate Listing Platform',
    description: 'A property listing web application where users can browse, search, and filter real estate listings with detailed property information.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    features: ['Property listings with details', 'Search & filter functionality', 'Image galleries', 'REST API integration', 'Responsive design'],
    image: 'PROJECT_IMAGE_URL',
    github: 'GITHUB_URL',
    demo: 'LIVE_DEMO_URL',
  },
  {
    title: 'Project Management / Trello Clone',
    description: 'A Kanban-style task board inspired by Trello, supporting drag-and-drop boards, lists, and cards for organizing work visually.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    features: ['Drag-and-drop boards & cards', 'Multiple lists per board', 'Real-time-style updates', 'CRUD for boards/lists/cards', 'Responsive layout'],
    image: 'PROJECT_IMAGE_URL',
    github: 'GITHUB_URL',
    demo: 'LIVE_DEMO_URL',
  },
];

/* ==========================================================================
   EDUCATION DATA
   EDIT: Update completion years or details when available
   ========================================================================== */
const EDUCATION = [
  {
    degree: 'Bachelor of Arts (BA)',
    institution: 'University of Delhi',
    year: '2026',
    subjects: ['Humanities', 'History', 'Self-Directed Web Development'],
  },
  {
    degree: 'Class 12',
    institution: 'CBSE Board',
    year: '2017',
    subjects: ['Foundational Academics'],
  },
];

/* ==========================================================================
   SOCIAL ICON PATHS (used for footer social buttons)
   ========================================================================== */
const SOCIAL_ICONS = {
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none"></circle>',
  facebook: '<path d="M15 8h-2a2 2 0 0 0-2 2v2H9v3h2v7h3v-7h2.2l.8-3H14v-1.5a.5.5 0 0 1 .5-.5H16z"></path>',
  github: '<path d="M12 2a10 10 0 0 0-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"></path>',
  whatsapp: '<path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.5A10 10 0 1 0 12 2z"></path><path d="M8.5 8.3c.2-.5.4-.5.6-.5h.5c.2 0 .4 0 .6.4.2.5.7 1.6.7 1.7.1.1.1.3 0 .4-.1.2-.1.3-.3.5-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2 1.2 1 2 1.3 2.3 1.4.3.1.5.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1.2.1 1.5.7 1.7.8.2.1.4.2.4.3 0 .2 0 .9-.3 1.3-.4.5-1.3.9-1.9.9-.5 0-1.6-.2-3.3-1.4-2.1-1.5-3.4-3.5-3.5-3.7-.1-.1-.9-1.1-.9-2.2 0-1 .5-1.5.7-1.7z" fill="currentColor" stroke="none"></path>',
  linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"></rect><path d="M7.5 10.5v6M7.5 7.8v.01M11 16.5v-3.5c0-1.1.7-2 2-2s2 .9 2 2v3.5M11 10.5v6" ></path>',
};

const SOCIAL_LABELS = {
  instagram: 'Instagram',
  facebook: 'Facebook',
  github: 'GitHub',
  whatsapp: 'WhatsApp',
  linkedin: 'LinkedIn',
};

/* ==========================================================================
   INITIALISATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  applyConfigToDOM();
  renderSkills();
  renderExperience();
  renderProjects();
  renderEducation();
  renderSocialLinks();

  initTheme();
  initMobileNav();
  initScrollSpy();
  initHeaderShadowOnScroll();
  initScrollReveal();
  initContactForm();
  initCurrentYear();
});

/* ==========================================================================
   APPLY CONFIG TO STATIC DOM ELEMENTS
   ========================================================================== */
function isPlaceholder(value) {
  return typeof value === 'string' && value.includes('_HERE');
}

function applyConfigToDOM() {
  // Resume link
  const resumeLink = document.getElementById('resume-link');
  if (resumeLink) resumeLink.setAttribute('href', CONFIG.resumeUrl);

  // Hero profile photo
  const profilePhoto = document.getElementById('profile-photo');
  if (profilePhoto) profilePhoto.setAttribute('src', CONFIG.profileImage);

  // Contact email
  const emailLink = document.getElementById('contact-email');
  if (emailLink) {
    emailLink.textContent = CONFIG.email;
    emailLink.setAttribute('href', isPlaceholder(CONFIG.email) ? '#contact' : `mailto:${CONFIG.email}`);
  }

  // Contact phone
  const phoneLink = document.getElementById('contact-phone');
  if (phoneLink) {
    phoneLink.textContent = CONFIG.phone;
    phoneLink.setAttribute('href', isPlaceholder(CONFIG.phone) ? '#contact' : `tel:${CONFIG.phone}`);
  }
}

/* ==========================================================================
   RENDER: SKILLS
   ========================================================================== */
function renderSkills() {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;

  const markup = SKILLS.map((skill) => `
    <div class="skill-card reveal">
      <div class="skill-card-top">
        <span class="skill-icon" aria-hidden="true">${escapeHTML(skill.icon)}</span>
        <p class="skill-name">${escapeHTML(skill.name)}</p>
      </div>
      <p class="skill-desc">${escapeHTML(skill.desc)}</p>
      <span class="skill-level">${escapeHTML(skill.level)}</span>
    </div>
  `).join('');

  grid.innerHTML = markup;
}

/* ==========================================================================
   RENDER: EXPERIENCE TIMELINE
   ========================================================================== */
function renderExperience() {
  const timeline = document.getElementById('experience-timeline');
  if (!timeline) return;

  const markup = EXPERIENCE.map((job) => `
    <div class="timeline-item reveal">
      <div class="timeline-card">
        <p class="timeline-role">${escapeHTML(job.role)}</p>
        <div class="timeline-meta">
          <span>${escapeHTML(job.company)}</span>
          <span>${escapeHTML(job.duration)}</span>
          <span>${escapeHTML(job.location)}</span>
        </div>
        <ul class="timeline-list">
          ${job.responsibilities.map((item) => `<li>${escapeHTML(item)}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');

  timeline.innerHTML = markup;
}

/* ==========================================================================
   RENDER: PROJECTS
   ========================================================================== */
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const markup = PROJECTS.map((project) => {
    const hasImage = !isPlaceholder(project.image) && project.image;
    const hasGithub = !isPlaceholder(project.github) && project.github;
    const hasDemo = !isPlaceholder(project.demo) && project.demo;

    const thumb = hasImage
      ? `<img src="${escapeAttr(project.image)}" alt="${escapeAttr(project.title)} preview" loading="lazy">`
      : `<span class="project-thumb-fallback">Project preview image<br>coming soon</span>`;

    const githubBtn = hasGithub
      ? `<a class="btn btn-secondary" href="${escapeAttr(project.github)}" target="_blank" rel="noopener noreferrer">GitHub</a>`
      : `<span class="btn btn-secondary btn-disabled" aria-disabled="true" title="GitHub link not added yet">GitHub</span>`;

    const demoBtn = hasDemo
      ? `<a class="btn btn-primary" href="${escapeAttr(project.demo)}" target="_blank" rel="noopener noreferrer">Live Demo</a>`
      : `<span class="btn btn-primary btn-disabled" aria-disabled="true" title="Live demo not added yet">Live Demo</span>`;

    const viewBtn = hasDemo
      ? `<a class="btn btn-ghost" href="${escapeAttr(project.demo)}" target="_blank" rel="noopener noreferrer">View Project</a>`
      : `<span class="btn btn-ghost btn-disabled" aria-disabled="true">View Project</span>`;

    return `
      <article class="project-card reveal">
        <div class="project-thumb">${thumb}</div>
        <div class="project-body">
          <h3 class="project-title">${escapeHTML(project.title)}</h3>
          <p class="project-desc">${escapeHTML(project.description)}</p>
          <div class="project-tech">
            ${project.tech.map((t) => `<span class="tech-tag">${escapeHTML(t)}</span>`).join('')}
          </div>
          <ul class="project-features">
            ${project.features.map((f) => `<li>${escapeHTML(f)}</li>`).join('')}
          </ul>
          <div class="project-links">
            ${viewBtn}
            ${githubBtn}
            ${demoBtn}
          </div>
        </div>
      </article>
    `;
  }).join('');

  grid.innerHTML = markup;
}

/* ==========================================================================
   RENDER: EDUCATION
   ========================================================================== */
function renderEducation() {
  const list = document.getElementById('education-list');
  if (!list) return;

  const markup = EDUCATION.map((item) => `
    <div class="education-card reveal">
      <div class="education-card-top">
        <p class="education-degree">${escapeHTML(item.degree)}</p>
        <span class="education-year">${escapeHTML(item.year)}</span>
      </div>
      <p class="education-institution">${escapeHTML(item.institution)}</p>
      ${item.subjects && item.subjects.length ? `
        <div class="education-subjects">
          ${item.subjects.map((s) => `<span class="subject-tag">${escapeHTML(s)}</span>`).join('')}
        </div>
      ` : ''}
    </div>
  `).join('');

  list.innerHTML = markup;
}

/* ==========================================================================
   RENDER: FOOTER SOCIAL LINKS
   ========================================================================== */
function renderSocialLinks() {
  const container = document.getElementById('footer-social');
  if (!container) return;

  const markup = Object.entries(CONFIG.social)
    .filter(([, url]) => !isPlaceholder(url) && url)
    .map(([key, url]) => `
      <a href="${escapeAttr(url)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeAttr(SOCIAL_LABELS[key] || key)}">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${SOCIAL_ICONS[key] || ''}</svg>
      </a>
    `).join('');

  container.innerHTML = markup || '<p style="color:var(--color-text-soft); font-size:0.85rem;">Social links coming soon.</p>';
}

/* ==========================================================================
   THEME TOGGLE (LIGHT / DARK)
   ========================================================================== */
function initTheme() {
  const toggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const STORAGE_KEY = 'vg-portfolio-theme';

  const storedTheme = localStorage.getItem(STORAGE_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');

  setTheme(initialTheme);

  toggle.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    setTheme(isDark ? 'light' : 'dark');
  });

  function setTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      toggle.setAttribute('aria-pressed', 'true');
      toggle.setAttribute('aria-label', 'Switch to light theme');
    } else {
      root.removeAttribute('data-theme');
      toggle.setAttribute('aria-pressed', 'false');
      toggle.setAttribute('aria-label', 'Switch to dark theme');
    }
    localStorage.setItem(STORAGE_KEY, theme);
  }
}

/* ==========================================================================
   MOBILE NAVIGATION
   ========================================================================== */
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('main-nav');
  const overlay = document.getElementById('nav-overlay');
  const navLinks = nav.querySelectorAll('[data-nav]');

  function openMenu() {
    nav.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'Close menu');
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    nav.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open menu');
    overlay.hidden = true;
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    const isOpen = nav.classList.contains('is-open');
    isOpen ? closeMenu() : openMenu();
  });

  overlay.addEventListener('click', closeMenu);

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('is-open')) closeMenu();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      closeMenu();
      hamburger.focus();
    }
  });
}

/* ==========================================================================
   SCROLL SPY — ACTIVE NAV LINK BASED ON CURRENT SECTION
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link[data-nav]');

  if (!sections.length || !navLinks.length) return;

  const linkMap = new Map();
  navLinks.forEach((link) => {
    const id = link.getAttribute('href').replace('#', '');
    linkMap.set(id, link);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        const link = linkMap.get(id);
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach((l) => l.classList.remove('is-active'));
          link.classList.add('is-active');
        }
      });
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

/* ==========================================================================
   HEADER SHADOW / STATE ON SCROLL
   ========================================================================== */
function initHeaderShadowOnScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const updateHeader = () => {
    if (window.scrollY > 12) {
      header.style.boxShadow = '0 8px 24px rgba(16, 25, 47, 0.08)';
    } else {
      header.style.boxShadow = 'none';
    }
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
}

/* ==========================================================================
   SCROLL REVEAL ANIMATIONS (IntersectionObserver)
   ========================================================================== */
function initScrollReveal() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealEls = document.querySelectorAll('.reveal');

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach((el) => observer.observe(el));
}

/* ==========================================================================
   CONTACT FORM — VALIDATION (DEMO MODE, NO BACKEND)
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const statusEl = document.getElementById('form-status');

  const fields = {
    name: { el: document.getElementById('name'), errorEl: document.getElementById('name-error') },
    email: { el: document.getElementById('email'), errorEl: document.getElementById('email-error') },
    subject: { el: document.getElementById('subject'), errorEl: document.getElementById('subject-error') },
    message: { el: document.getElementById('message'), errorEl: document.getElementById('message-error') },
  };

  const validators = {
    name: (value) => {
      if (!value.trim()) return 'Please enter your name.';
      if (value.trim().length < 2) return 'Name must be at least 2 characters.';
      return '';
    },
    email: (value) => {
      if (!value.trim()) return 'Please enter your email address.';
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value.trim())) return 'Please enter a valid email address.';
      return '';
    },
    subject: (value) => {
      if (!value.trim()) return 'Please enter a subject.';
      if (value.trim().length < 3) return 'Subject must be at least 3 characters.';
      return '';
    },
    message: (value) => {
      if (!value.trim()) return 'Please enter a message.';
      if (value.trim().length < 15) return 'Message must be at least 15 characters.';
      return '';
    },
  };

  function validateField(key) {
    const { el, errorEl } = fields[key];
    const error = validators[key](el.value);
    errorEl.textContent = error;
    el.classList.toggle('is-invalid', Boolean(error));
    el.setAttribute('aria-invalid', error ? 'true' : 'false');
    return !error;
  }

  Object.keys(fields).forEach((key) => {
    fields[key].el.addEventListener('blur', () => validateField(key));
    fields[key].el.addEventListener('input', () => {
      if (fields[key].el.classList.contains('is-invalid')) validateField(key);
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const results = Object.keys(fields).map((key) => validateField(key));
    const isFormValid = results.every(Boolean);

    if (!isFormValid) {
      statusEl.className = 'form-status';
      statusEl.textContent = '';
      const firstInvalid = form.querySelector('.is-invalid');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // No backend/form service is configured — show a clear demo-mode message.
    statusEl.textContent = "Thanks for reaching out! The form is currently in demo mode. Please use the email address above to contact me.";
    statusEl.className = 'form-status is-visible is-success';

    form.reset();
    Object.keys(fields).forEach((key) => {
      fields[key].el.classList.remove('is-invalid');
      fields[key].el.setAttribute('aria-invalid', 'false');
      fields[key].errorEl.textContent = '';
    });
  });
}

/* ==========================================================================
   CURRENT YEAR (FOOTER)
   ========================================================================== */
function initCurrentYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* ==========================================================================
   UTILITIES
   ========================================================================== */
function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = String(str);
  return div.innerHTML;
}

function escapeAttr(str) {
  return String(str).replace(/"/g, '&quot;');
}
