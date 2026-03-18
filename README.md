# DesignWiki

[![Deploy to GitHub Pages](https://github.com/JoeMighty/DesignWiki/actions/workflows/deploy.yml/badge.svg)](https://github.com/JoeMighty/DesignWiki/actions/workflows/deploy.yml)
[![Built with VitePress](https://img.shields.io/badge/Built%20with-VitePress-646cff?logo=vite&logoColor=white)](https://vitepress.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/Live%20Site-GitHub%20Pages-222?logo=github)](https://joemighty.github.io/DesignWiki/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/JoeMighty/DesignWiki/issues)

A comprehensive, multi-discipline design encyclopedia — fully searchable, shareable collections, zero hosting cost.

**Live site →** [joemighty.github.io/DesignWiki](https://joemighty.github.io/DesignWiki/)

---

## What's Inside

| Discipline | Sections |
|-----------|----------|
| 🎨 **Graphic Design** | Glossary A–Z · Design Styles · Techniques · Print · Digital · Motion |
| 🖥️ **UX Design** | Glossary A–Z · Principles · Methods |
| ➕ *More disciplines coming* | Add your own — see below |

---

## Getting Started (Local Development)

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or later
- npm (bundled with Node.js)

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/JoeMighty/DesignWiki.git
cd DesignWiki

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run docs:dev
```

The site will be available at `http://localhost:5173/DesignWiki/`

### Build for Production

```bash
npm run docs:build
```

Output is written to `docs/.vitepress/dist/`.

---

## How to Add Content

### Adding a New Entry

1. Navigate to the relevant discipline and section folder:
   ```
   docs/graphic-design/glossary/k.md   ← existing letter file
   docs/ux-design/methods/             ← section folder
   ```

2. Add your entry using this frontmatter template:
   ```markdown
   ---
   title: "Your Term"
   description: "A one-line description for SEO and search."
   ---

   # Your Term

   **Category:** Typography · **Difficulty:** Beginner

   Your definition here...

   **Related:** [Other Term](./other-term)
   ```

3. For **glossary letters**, add your entry to the matching letter file (`a.md`, `b.md`, etc.).
   For **other sections** (styles, techniques, methods), create a new `.md` file — the sidebar auto-discovers it.

---

## How to Add a New Discipline

This is a 3-step process — no config file wrestling required.

### Step 1 — Register the discipline

Open `docs/.vitepress/disciplines.js` and add a new object:

```js
{
  id: 'industrial-design',          // used as the URL slug
  label: 'Industrial Design',       // displayed in nav and headings
  shortLabel: 'Industrial',         // displayed in the top nav (keep short)
  description: 'Product design, ergonomics, materials & manufacturing',
  icon: '⚙️',
  color: '#f59e0b',
  accentLight: '#fffbeb',
  accentDark: '#1c1006',
  sections: [
    { id: 'glossary',  label: 'Glossary',  type: 'az-index' },
    { id: 'processes', label: 'Processes', type: 'list' },
    { id: 'materials', label: 'Materials', type: 'list' },
  ],
},
```

**Section types:**
- `az-index` — renders A–Z letter links in the sidebar (for glossary sections)
- `list` — auto-discovers `.md` files in the folder and lists them alphabetically

### Step 2 — Create the folder structure

```bash
mkdir -p docs/industrial-design/glossary
mkdir -p docs/industrial-design/processes
mkdir -p docs/industrial-design/materials
```

### Step 3 — Add index files and start writing

Each section needs an `index.md`:

```markdown
---
title: Industrial Design — Glossary
description: A–Z definitions of industrial design terminology.
---

# Industrial Design Glossary
```

Then add content files (e.g. `docs/industrial-design/processes/design-thinking.md`).
The **sidebar, nav, and search index update automatically** on next build.

---

## Collections & Sharing

Every entry page has a **+ Save to Collection** button. Collections are stored in your browser's `localStorage` — no account needed.

To **share a collection**:
1. Open the Collections panel (bookmark icon, bottom-right)
2. Click **Share Collection**
3. The collection is saved as an anonymous GitHub Gist
4. Share the generated URL — recipients can import it with one click

---

## Deployment

The site deploys automatically to GitHub Pages on every push to `main` via GitHub Actions.

**Manual deploy:**
```bash
# Build
npm run docs:build

# Preview locally before pushing
npm run docs:preview
```

**GitHub Pages setup (first time):**
1. Go to repo **Settings → Pages**
2. Set **Source** to `GitHub Actions`
3. Push to `main` — the workflow handles the rest

---

## Project Structure

```
DesignWiki/
├── .github/
│   ├── workflows/deploy.yml          ← Auto-deploy on push to main
│   └── ISSUE_TEMPLATE/suggest-entry.yml
├── docs/
│   ├── .vitepress/
│   │   ├── config.js                 ← VitePress config (clean, no hardcoding)
│   │   ├── disciplines.js            ← SINGLE SOURCE OF TRUTH — add disciplines here
│   │   ├── sidebar-builder.js        ← Auto-generates sidebar & nav from disciplines.js
│   │   └── theme/
│   │       ├── Layout.vue
│   │       ├── components/           ← Collections, Share, Import, AddToCollection
│   │       └── styles/               ← CSS variables and custom styles
│   ├── index.md                      ← Homepage (discipline picker)
│   ├── graphic-design/               ← Discipline folder
│   │   ├── glossary/                 ← a.md through z.md
│   │   ├── styles/
│   │   ├── techniques/
│   │   ├── print/
│   │   ├── digital/
│   │   └── motion/
│   └── ux-design/                    ← Discipline folder
│       ├── glossary/
│       ├── principles/
│       └── methods/
├── package.json
└── README.md
```

---

## Suggesting Content

Use the **[Suggest an Entry](https://github.com/JoeMighty/DesignWiki/issues/new/choose)** GitHub issue template to propose new terms, corrections, or discipline additions.

---

## License

MIT — free to use, fork, and build upon.
