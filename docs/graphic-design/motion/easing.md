---
title: Easing
description: How to use easing curves to make animations feel natural and intentional.
---

# Easing

**Difficulty:** Intermediate
**Discipline:** Graphic Design — Motion

## What Is Easing?

Easing defines how an animation accelerates and decelerates over time. Linear motion (constant speed) looks mechanical and unnatural to the human eye. Easing mimics how objects move in the physical world — they speed up and slow down.

## Core Easing Types

### Linear
Constant speed from start to finish. Rarely used for UI — looks robotic. Occasionally appropriate for looping progress bars or spinning indicators.

### Ease-in (Acceleration)
Starts slow, finishes fast. Feels like an object gaining speed — good for **exits** (elements leaving the screen).

### Ease-out (Deceleration)
Starts fast, finishes slow. Feels like an object coming to rest — ideal for **entrances** (elements appearing on screen).

### Ease-in-out
Starts slow, speeds up in the middle, finishes slow. The most natural-feeling general-purpose curve.

## Cubic Bézier Curves

All easing in CSS and design tools is defined by cubic Bézier curves — four control points that shape the timing function.

```css
/* CSS examples */
transition: opacity 0.3s linear;
transition: transform 0.4s ease-out;
transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); /* Material Design standard */
```

## Animation Timing Guidelines

| Element type | Recommended duration |
|-------------|---------------------|
| Micro-interactions (button press) | 80–120ms |
| UI panel slide-in | 200–300ms |
| Page transition | 300–500ms |
| Illustrative/brand animation | 500ms–3s |

> Animations faster than 100ms feel instant; slower than 500ms start feeling sluggish in UI.

## Disney's 12 Principles (Adapted for Motion Design)

The foundational principles, developed by Disney animators in the 1930s and still directly applicable today:

1. **Squash and stretch** — objects deform to show weight and flexibility
2. **Anticipation** — a small preparatory action before a main action
3. **Staging** — clear, unambiguous presentation of the action
4. **Follow-through** — parts continue moving after the main action stops
5. **Slow in / Slow out** — the core of easing

**Related Terms:** [Transition](./transitions), [Micro-interactions](./micro-interactions)
