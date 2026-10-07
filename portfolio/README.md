# Vicky Gogna — Portfolio Website

A responsive, production-ready personal portfolio for a MERN Stack Developer. Built with plain HTML5, CSS3, and vanilla JavaScript — no frameworks, no build step.

## Run locally

Just open `index.html` in your browser. No server or build tools required.

## What to edit first

All personal content lives in **one place**: the top of `js/script.js`, inside the `CONFIG`, `SKILLS`, `EXPERIENCE`, `PROJECTS`, and `EDUCATION` objects/arrays.

| What to change | Where |
|---|---|
| Email, phone, resume link, social URLs | `CONFIG` object at the top of `js/script.js` |
| Skills list | `SKILLS` array in `js/script.js` |
| Work experience (company, dates, location, duties) | `EXPERIENCE` array in `js/script.js` |
| Projects (images, GitHub, live demo links) | `PROJECTS` array in `js/script.js` |
| Education (year, institution) | `EDUCATION` array in `js/script.js` |
| Colors / theme | CSS variables at the top of `css/style.css` (`:root` and `[data-theme="dark"]`) |
| Page title, meta description, OG image, canonical URL, favicon | `<head>` of `index.html` |

Any value still containing `_HERE` (e.g. `EMAIL_ADDRESS_HERE`, `GITHUB_URL`) is a placeholder — the site automatically hides or disables buttons/links that still point to a placeholder (e.g. Projects' GitHub/Live Demo buttons) so nothing links to a broken URL.

## File structure

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   │   └── project-placeholder.jpg   (replace with real project screenshots)
│   └── icons/
│       └── favicon-placeholder.png   (replace with your real favicon)
└── resume/
    └── resume.pdf                    (replace with your real resume)
```

## Notes

- The contact form performs client-side validation only. Since no backend/form service is connected, submitting a valid form shows a "demo mode" message and does not send an email — visitors are directed to the email address in the Contact section.
- Light/dark theme is saved in `localStorage` and respects the visitor's OS preference on first visit.
- Animations respect `prefers-reduced-motion`.
