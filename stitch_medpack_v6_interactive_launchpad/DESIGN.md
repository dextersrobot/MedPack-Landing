---
name: Obsidian Infrastructure
colors:
  surface: '#16111b'
  surface-dim: '#16111b'
  surface-bright: '#3d3741'
  surface-container-lowest: '#110c15'
  surface-container-low: '#1f1a23'
  surface-container: '#231e27'
  surface-container-high: '#2e2832'
  surface-container-highest: '#39323d'
  on-surface: '#eadfed'
  on-surface-variant: '#cfc2d6'
  inverse-surface: '#eadfed'
  inverse-on-surface: '#342e38'
  outline: '#988d9f'
  outline-variant: '#4d4354'
  surface-tint: '#ddb7ff'
  primary: '#ddb7ff'
  on-primary: '#490080'
  primary-container: '#b76dff'
  on-primary-container: '#400071'
  inverse-primary: '#842bd2'
  secondary: '#c8c6c8'
  on-secondary: '#303032'
  secondary-container: '#474649'
  on-secondary-container: '#b7b4b7'
  tertiary: '#fabc4e'
  on-tertiary: '#432c00'
  tertiary-container: '#bd871a'
  on-tertiary-container: '#3a2600'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f0dbff'
  primary-fixed-dim: '#ddb7ff'
  on-primary-fixed: '#2c0051'
  on-primary-fixed-variant: '#6900b3'
  secondary-fixed: '#e4e2e4'
  secondary-fixed-dim: '#c8c6c8'
  on-secondary-fixed: '#1b1b1d'
  on-secondary-fixed-variant: '#474649'
  tertiary-fixed: '#ffdead'
  tertiary-fixed-dim: '#fabc4e'
  on-tertiary-fixed: '#281900'
  on-tertiary-fixed-variant: '#604100'
  background: '#16111b'
  on-background: '#eadfed'
  surface-variant: '#39323d'
typography:
  h1:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  data-lg:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: '0'
  data-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: '0'
  label:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  gutter: 16px
  margin: 24px
---

## Brand & Style

This design system is engineered for high-performance infrastructure management, prioritizing technical precision and rapid information processing. The aesthetic is rooted in **High-Contrast Minimalism**, stripping away decorative elements to focus entirely on system health and data integrity.

The brand personality is authoritative and focused, designed for environments where uptime is critical. It evokes a sense of "command and control" through a dark, obsidian-based palette punctuated by a high-energy electric purple. The visual language balances the cold efficiency of terminal-inspired interfaces with the modern sophistication of enterprise SaaS.

## Colors

The palette is strictly optimized for low-light environments and long-duration monitoring. The core is **Obsidian (#0D0D0E)**, providing a deep, ink-like canvas that minimizes eye strain. Surfaces use **#161618** to create subtle structural separation without breaking the dark immersion.

**Electric Purple (#A855F7)** serves as the primary action color and state indicator. It provides a sharp, high-contrast focal point against the dark background. Success, warning, and error states should utilize high-saturation greens, ambers, and reds respectively, but always maintained at a luminosity that matches the Electric Purple to ensure a balanced visual hierarchy.

## Typography

This design system utilizes a dual-font strategy to distinguish between interface controls and system data. 

**Inter** is the workhorse for the UI, used for navigation, headers, and instructional text. It is chosen for its exceptional legibility and neutral, professional tone. **JetBrains Mono** is reserved strictly for technical data, code snippets, logs, and metrics. The monospaced nature of JetBrains Mono ensures that numerical values align vertically in tables and dashboards, allowing for instant scanning of fluctuations in system performance.

## Layout & Spacing

The layout philosophy is a **Fluid Grid** model with high density. Content should maximize screen real estate, utilizing a 12-column system for dashboards. 

Spacing is based on a strict **4px baseline grid**. In this design system, internal padding within components is kept tight (8px-12px) to support data density, while external margins between major containers are larger (24px) to provide necessary breathing room and prevent visual clutter. Horizontal alignment is paramount; data columns should align with header elements to maintain a sense of structural rigidity.

## Elevation & Depth

Hierarchy is achieved through **Tonal Layering** and **Low-Contrast Outlines** rather than traditional shadows. 

1.  **Level 0 (Background):** #0D0D0E - The base layer for the entire application.
2.  **Level 1 (Surface):** #161618 - Used for cards, panels, and sidebar containers. 
3.  **Level 2 (Active/Hover):** Surfaces are highlighted with a 1px border of #27272A or a subtle increase in luminosity.

Avoid using drop shadows. Instead, use thin, 1px solid borders to define edges. For modals or popovers, a subtle 10% opacity Electric Purple glow can be used as an outer "bloom" effect to indicate focus without resorting to traditional skeuomorphic depth.

## Shapes

The shape language is disciplined and geometric. A consistent **6px corner radius** (defined here as "Soft") is applied to all buttons, input fields, and containers. This radius is tight enough to feel technical and precise, yet soft enough to distinguish UI elements from raw terminal windows.

Large containers and cards should maintain this 6px radius. Interactive states, such as focus rings, should follow the same curvature with a 2px offset to maintain concentricity.

## Components

### Buttons
Primary buttons use a solid Electric Purple (#A855F7) background with white text. Secondary buttons use a ghost style: a 1px border of #27272A and a background of #161618, with text transitioning to white on hover.

### Data Tables
Tables are the heart of this design system. Use JetBrains Mono for all cell data. Rows should have a subtle #161618 hover state. Use "zebra striping" only when data density exceeds 20 rows per view. Column headers should be uppercase, bold, and use the Label typography style.

### Inputs & Terminal
Input fields utilize the #0D0D0E background with a #27272A border. Upon focus, the border transitions to Electric Purple with a subtle glow. For terminal components, use a pure black background and JetBrains Mono exclusively.

### Status Chips
Status indicators (Running, Stopped, Error) should use a small 8px "dot" alongside the text label. Use the Electric Purple for "Running" to reinforce the brand's primary energy state, or standard semantic colors if multi-state clarity is required.

### Cards
Cards are used to group telemetry data. They should have no shadow, a #161618 background, and a 1px border of #27272A. Titles within cards should be Inter SemiBold 14px.