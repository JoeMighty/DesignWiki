---
title: Responsive Design
description: Designing layouts that adapt fluidly across screen sizes — from mobile to desktop.
---

# Responsive Design

**Difficulty:** Intermediate
**Discipline:** Graphic Design — Digital

## What Is Responsive Design?

Responsive design is the approach of building layouts that fluidly adapt to any screen size — rather than creating separate fixed designs for each device. The term was coined by **Ethan Marcotte** in his 2010 *A List Apart* article.

## The Three Core Ingredients

1. **Fluid grids** — column widths set as percentages, not fixed pixels
2. **Flexible media** — images and videos that scale within their containers
3. **Media queries** — CSS rules that apply different styles at different screen widths

## Breakpoints

A **breakpoint** is a screen width at which the layout changes. Common breakpoints:

| Name | Width | Typical use |
|------|-------|------------|
| Mobile (sm) | < 640px | Single column, large tap targets |
| Tablet (md) | 640–1024px | 2 columns, condensed navigation |
| Desktop (lg) | 1024–1280px | Full layout, sidebar visible |
| Wide (xl) | > 1280px | Max content width, extra spacing |

## Mobile-First vs Desktop-First

| Approach | Design from | Recommended for |
|----------|------------|----------------|
| **Mobile-first** | Small → large | New projects; web and app |
| Desktop-first | Large → small | Legacy projects; print-to-web |

Mobile-first is the modern default. It forces clarity — if it works on the smallest screen, it works everywhere.

## Design Tips

- Design at 375px (iPhone SE) and 1440px (standard desktop) as your two key frames
- Use an 8pt/8px spacing grid — it divides cleanly across all screen sizes
- Minimum tap target: **44×44px** (Apple HIG) / **48×48px** (Material Design)
- Never set `max-width` on body text containers above ~75ch (characters) — long lines destroy readability

**Related Terms:** [Grid](../glossary/g), [Wireframe](../glossary/w), [Hierarchy](../glossary/h)
