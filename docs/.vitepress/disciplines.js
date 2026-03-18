/**
 * disciplines.js — Single Source of Truth
 *
 * To add a new discipline:
 *   1. Add a new object to the `disciplines` array below.
 *   2. Create the matching folder: docs/[id]/
 *   3. Add an index.md and the section folders listed in `sections`.
 *   4. Start writing content — sidebar, nav, and homepage cards auto-generate.
 *
 * Section types:
 *   "az-index"  → renders A–Z letter links in the sidebar
 *   "list"      → renders a plain link list (populated by sidebar-builder.js)
 */

export const disciplines = [
  {
    id: 'graphic-design',
    label: 'Graphic Design',
    shortLabel: 'Graphic',
    description: 'Typography, colour theory, layout, print & digital production',
    icon: '🎨',
    color: '#646cff',
    accentLight: '#eef0ff',
    accentDark: '#1e1f4b',
    sections: [
      { id: 'glossary',   label: 'Glossary',       type: 'az-index' },
      { id: 'styles',     label: 'Design Styles',  type: 'list' },
      { id: 'techniques', label: 'Techniques',     type: 'list' },
      { id: 'print',      label: 'Print',          type: 'list' },
      { id: 'digital',    label: 'Digital',        type: 'list' },
      { id: 'motion',     label: 'Motion',         type: 'list' },
    ],
  },
  {
    id: 'ux-design',
    label: 'UX Design',
    shortLabel: 'UX',
    description: 'User research, wireframing, prototyping & usability testing',
    icon: '🖥️',
    color: '#10b981',
    accentLight: '#ecfdf5',
    accentDark: '#052e16',
    sections: [
      { id: 'glossary',   label: 'Glossary',   type: 'az-index' },
      { id: 'principles', label: 'Principles', type: 'list' },
      { id: 'methods',    label: 'Methods',    type: 'list' },
    ],
  },

  // ─── Add future disciplines below this line ───────────────────────────────
  // {
  //   id: 'industrial-design',
  //   label: 'Industrial Design',
  //   shortLabel: 'Industrial',
  //   description: 'Product design, ergonomics, materials & manufacturing',
  //   icon: '⚙️',
  //   color: '#f59e0b',
  //   accentLight: '#fffbeb',
  //   accentDark: '#1c1006',
  //   sections: [
  //     { id: 'glossary',   label: 'Glossary',   type: 'az-index' },
  //     { id: 'processes',  label: 'Processes',  type: 'list' },
  //     { id: 'materials',  label: 'Materials',  type: 'list' },
  //   ],
  // },
]
