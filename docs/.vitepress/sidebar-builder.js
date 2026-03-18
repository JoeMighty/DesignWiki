/**
 * sidebar-builder.js
 *
 * Auto-generates the VitePress sidebar config from disciplines.js.
 * Never edit this file to add entries — edit disciplines.js instead.
 */

import { readdirSync, existsSync } from 'fs'
import { resolve, join } from 'path'
import { disciplines } from './disciplines.js'

const DOCS_DIR = resolve(import.meta.dirname, '..')

const AZ_LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('')

/**
 * Read all .md files in a directory and return VitePress sidebar items.
 * Skips index.md automatically.
 */
function getListItems(discipline, sectionId) {
  const dir = join(DOCS_DIR, discipline, sectionId)
  if (!existsSync(dir)) return []

  return readdirSync(dir)
    .filter(f => f.endsWith('.md') && f !== 'index.md')
    .map(f => {
      const slug = f.replace('.md', '')
      // Convert slug to title: "swiss-design" → "Swiss Design"
      const text = slug
        .split('-')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')
      return { text, link: `/${discipline}/${sectionId}/${slug}` }
    })
    .sort((a, b) => a.text.localeCompare(b.text))
}

/**
 * Build A–Z sidebar items for a discipline's glossary.
 * Only includes letters that have a matching file.
 */
function getAZItems(discipline) {
  const dir = join(DOCS_DIR, discipline, 'glossary')
  if (!existsSync(dir)) return []

  return AZ_LETTERS
    .filter(letter => existsSync(join(dir, `${letter}.md`)))
    .map(letter => ({
      text: letter.toUpperCase(),
      link: `/${discipline}/glossary/${letter}`,
    }))
}

/**
 * Build the full sidebar config object for all disciplines.
 */
export function buildSidebar() {
  const sidebar = {}

  for (const discipline of disciplines) {
    for (const section of discipline.sections) {
      const path = `/${discipline.id}/${section.id}/`

      if (section.type === 'az-index') {
        sidebar[path] = [
          {
            text: `${discipline.label} — ${section.label}`,
            items: [
              { text: `← All Disciplines`, link: '/' },
              { text: `${discipline.label}`, link: `/${discipline.id}/` },
            ],
          },
          {
            text: 'A – Z Index',
            items: getAZItems(discipline.id),
          },
        ]
      } else {
        const items = getListItems(discipline.id, section.id)
        sidebar[path] = [
          {
            text: `${discipline.label} — ${section.label}`,
            items: [
              { text: `← All Disciplines`, link: '/' },
              { text: `${discipline.label}`, link: `/${discipline.id}/` },
            ],
          },
          {
            text: section.label,
            items: items.length
              ? items
              : [{ text: 'Coming soon…', link: `/${discipline.id}/${section.id}/` }],
          },
        ]
      }
    }

    // Discipline root path — show all sections as nav
    sidebar[`/${discipline.id}/`] = [
      {
        text: '← All Disciplines',
        items: [{ text: 'Home', link: '/' }],
      },
      {
        text: discipline.label,
        items: discipline.sections.map(s => ({
          text: s.label,
          link: `/${discipline.id}/${s.id}/`,
        })),
      },
    ]
  }

  return sidebar
}

/**
 * Build the top nav from disciplines.js
 */
export function buildNav() {
  return [
    { text: 'Home', link: '/' },
    ...disciplines.map(d => ({
      text: d.shortLabel,
      items: d.sections.map(s => ({
        text: s.label,
        link: `/${d.id}/${s.id}/`,
      })),
    })),
  ]
}
