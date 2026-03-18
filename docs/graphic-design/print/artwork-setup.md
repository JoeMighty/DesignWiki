---
title: Artwork Setup for Print
description: How to correctly set up a print-ready document — bleed, safe zones, colour mode, resolution, and export settings.
---

# Artwork Setup for Print

**Difficulty:** Intermediate
**Discipline:** Graphic Design — Print

## The Three Zones

Every print document has three key zones:

```
┌──────────────────────────────────┐
│          BLEED AREA              │  ← Artwork extends here (3mm)
│  ┌────────────────────────────┐  │
│  │       TRIM LINE            │  │  ← Where the paper gets cut
│  │  ┌──────────────────────┐  │  │
│  │  │    SAFE ZONE          │  │  │  ← Keep all critical content here
│  │  │                       │  │  │
│  │  └──────────────────────┘  │  │
│  └────────────────────────────┘  │
└──────────────────────────────────┘
```

| Zone | Distance from trim | Purpose |
|------|--------------------|---------|
| Bleed | +3mm outside | Prevents white edges if cut is off |
| Safe zone | −3mm inside | Protects text/logos from being trimmed |

## Colour Mode

- **Always design in CMYK** for print — not RGB. RGB colours will be converted at the printer, often with unexpected results.
- **Spot colours** (Pantone): use for brand-critical colours requiring exact reproduction.
- **Rich black** for large black areas: C40 M30 Y30 K100 (avoids flat, weak look of K100 alone).
- **Pure black for text**: K100 only — this keeps text crisp and avoids mis-registration colour fringing.

## Resolution

| Content type | Minimum resolution |
|-------------|-------------------|
| Photos/raster | 300 DPI at print size |
| Large format (banners) | 100–150 DPI |
| Logos/illustrations | Use vector (no resolution limit) |

## Typography

- Minimum body text size for print: **6pt** (7–8pt recommended for comfort)
- Avoid very thin strokes in small text — they can fill or drop out on press
- Embed all fonts in the exported PDF

## Exporting a Press-Ready PDF

1. Export as **PDF/X-1a** or **PDF/X-4** (print-industry standard)
2. Include bleed (3mm)
3. Embed all fonts
4. Flatten transparency
5. Colour profile: **ISO Coated v2 300%** (CMYK Europe) or **SWOP** (CMYK North America)
6. Do **not** downscale images below 300 DPI

**Related Terms:** [Bleed](../glossary/b), [Trim](../glossary/t), [Safe Zone](../glossary/s), [CMYK](../glossary/c), [DPI](../glossary/d), [Spot Colour](../glossary/s)
