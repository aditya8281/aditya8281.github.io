---
name: Aditya Rathod — Portfolio
description: Monokai minimalist portfolio for an AI & systems engineer, geometric accents
colors:
  deep-black: "#1a1b16"
  surface: "#272822"
  surface-raised: "#3e3d32"
  surface-border: "#49483e"
  text-primary: "#f8f8f2"
  text-dim: "#c5c5b8"
  text-muted: "#75715e"
  signal-cyan: "#66d9ef"
  signal-green: "#a6e22e"
  signal-orange: "#fd971f"
  signal-pink: "#f92672"
  signal-purple: "#ae81ff"
  signal-yellow: "#e6db74"
typography:
  display:
    fontFamily: "Geist Sans, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.875rem, 5.2vw, 5.2rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Geist Sans, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.875rem, 3vw, 2.75rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Geist Sans, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(0.875rem, 1.1vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    letterSpacing: "0.15em"
  mono:
    fontFamily: "ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1.5rem"
  lg: "2rem"
  xl: "3rem"
  section-vertical: "clamp(2rem, 5vh, 4.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.signal-cyan}"
    textColor: "{colors.deep-black}"
    rounded: "{rounded.sm}"
    padding: "0.6rem 1.2rem"
  button-primary-hover:
    backgroundColor: "#7ce4f7"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text-dim}"
    rounded: "{rounded.sm}"
    padding: "0.4rem 0.8rem"
  glass-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "1.5rem"
  skill-badge:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    padding: "0.4rem 0.8rem"
---

# Design System: Aditya Rathod — Portfolio

## 1. Overview

**Creative North Star: "The Monokai Workshop"**

A dark, warm workshop environment. The site operates like a well-organized engineering bench — Monokai palette foundations with geometric accents that feel like precision tools, not decoration. Every element earns its place through function. The warm dark background (#1a1b16) is the workbench surface; cyan is the soldering iron tip glowing hot; green is the success LED; orange is the warning indicator. The visual system explicitly rejects overdesigned tech-bro portfolios (neon gradients, glassmorphism, blockchain vibes), generic SaaS landing pages (cream backgrounds, warm neutrals), and minimalist plain-resume sites with no personality. Confidence comes from substance and the Monokai heritage — a palette beloved by engineers, not borrowed from marketing.

**Key Characteristics:**
- Warm dark foundations (Monokai #1a1b16) with tonal surface layering, no atmospheric effects
- Signal-cyan (#66d9ef) as the dominant accent — sparingly, with purpose
- Sharp-cornered card surfaces with flat tonal backgrounds, no glass blur
- Geometric accents: rotated diamonds, clipped hexagons, triangular shapes as structural decoration
- Monospace labels and terminal-style intro as voice accents
- Left-edge cyan accent on card hover — a single, sharp interaction signal
- Flat-by-default elevation: depth through tonal layering, not shadows

## 2. Colors

The palette is a Monokai editor ported to web: warm dark foundations with six signal accents — cyan as primary, green and orange as secondary, pink, purple, and yellow as tertiary detail.

### Primary
- **Signal Cyan** (#66d9ef): The dominant accent. Used for primary CTA buttons, focus rings, active nav indicators, left-edge card hover accents, section dividers, the profile image corner accent, and all "alive" states. Its warmth against the dark surface is the visual signature.

### Secondary
- **Phosphor Green** (#a6e22e): Supporting accent. Used for status indicators (green dot in terminal/hero), the contact nav link, and secondary highlights. A natural companion to cyan in the Monokai family.

### Tertiary
- **Ember Orange** (#fd971f): Detail accent. Appears in the profile image bottom-right corner, metric badges on project cards, and "What I Explore" section label. Warm and technical.
- **Signal Pink** (#f92672): Error and danger states. Reserved for destructive actions and error boundaries.
- **Neon Purple** (#ae81ff): Rare special accent. Used sparingly for emphasis where a third chromatic signal is needed.
- **Monokai Yellow** (#e6db74): Warning and highlight. Rarely used; reserved for caution states.

### Neutral
- **Deep Black** (#1a1b16): The workbench surface — html body background. Warm black with a faint green undertone, not pure black.
- **Surface** (#272822): Elevated containers, card backgrounds. One step lighter than deep black.
- **Surface Raised** (#3e3d32): Count badges, hover states, secondary surfaces. Two steps lighter.
- **Surface Border** (#49483e): Borders, separators, dividers. The structural edge color.
- **Text Primary** (#f8f8f2): Body text on dark backgrounds. Warm off-white — the Monokai default foreground.
- **Text Dim** (#c5c5b8): Secondary text, descriptions. Lighter than muted, darker than primary.
- **Text Muted** (#75715e): Labels, timestamps, comments. Must maintain 4.5:1 contrast against surfaces.

### Named Rules
**The Signal Rule.** Cyan is used on ≤15% of any given screen. Its rarity is the point — when cyan appears, it means something. Overuse turns signal into noise.
**The Flat Rule.** No shadows in the system. Depth comes exclusively from tonal surface layering (surface → surface-raised → surface-border) and border contrast. If a shadow would be needed, use a border instead.

## 3. Typography

**Display Font:** Geist Sans (with system-ui fallback)
**Body Font:** Geist Sans (with system-ui fallback)
**Label/Mono Font:** ui-monospace / SF Mono / Menlo / Consolas (for labels, metadata, terminal elements)

**Character:** A single geometric sans used with aggressive weight and size contrast. Geist Sans is technically clean and engineered — it belongs in the workshop register. The pairing relies on weight (semibold → extrabold → regular) and size (5.2rem display → 2.75rem headline → 1.125rem body) rather than family contrast. Monospace appears in labels, skill categories, badges, and the terminal intro — it is a voice accent, not a system font.

### Hierarchy
- **Display** (semibold/600, clamp(1.875rem, 5.2vw, 5.2rem), line-height 1.1): Hero name only. Tight letter-spacing (-0.03em) for precision.
- **Headline** (extrabold/800, clamp(1.875rem, 3vw, 2.75rem), line-height 1.15): Section headings. Bold with tight tracking.
- **Title** (semibold/600, 1.5rem, line-height 1.25): Card titles, project names, sub-headings.
- **Body** (regular/400, clamp(0.875rem, 1.1vw, 1.125rem), line-height 1.65): Paragraph text, descriptions, project details. Max line length ~70ch. Extra line-height for light text on dark.
- **Label** (regular/400, 0.75rem, tracking 0.15em, uppercase via class): Section eyebrows, category labels, metadata, badges. Used sparingly.

### Named Rules
**The Mono Voice Rule.** Monospace text appears in labels, badges, terminal elements, and metadata. All other text is Geist Sans. Mono is a voice accent for technical precision, not a system-wide font choice.

## 4. Elevation

Flat by default. No shadows in the system — `.shadow-glow` explicitly sets `box-shadow: none`. Depth is conveyed through tonal surface layering: the background is the darkest layer, cards sit on `surface`, raised elements sit on `surface-raised`, and borders provide structural edges.

### Tonal Vocabulary
- **Background** (#1a1b16): The deepest layer. Fixed via `.geo-bg` diagonal grid pattern.
- **Surface** (#272822): Card backgrounds, the mobile nav drawer, terminal intro.
- **Surface Raised** (#3e3d32): Count badges, metric tags, hover highlights.
- **Surface Border** (#49483e): All borders and separators. The structural edge.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest with only tonal differentiation. The only hover accent is a 3px cyan left-edge stripe on `.glass-card` elements — a single, sharp interaction signal. No lift, no shadow, no glow on hover.

## 5. Components

### Card (`.glass-card`)
The foundational surface. Despite the legacy class name, there is no glass/blur effect — it is a flat tonal panel with sharp corners.
- **Corner Style:** 8px radius (`--radius-md`), reduced to 4px on mobile
- **Background:** `--mono-surface` (#272822)
- **Border:** 1px solid `--mono-surface-3` (#49483e)
- **Hover:** Left-edge 3px cyan stripe appears (`::before` pseudo-element, opacity 0→1). Border shifts to cyan.
- **Internal Padding:** 1.5rem (1rem on mobile)

### Buttons
- **Shape:** Sharp corners (4px radius / `--radius-sm`)
- **Primary (CTA):** Cyan background (#66d9ef), deep-black text, semibold. Padding 0.6rem 1.2rem. Solid fill — the only opaque accent surface.
- **Hover:** Lighter cyan (#7ce4f7), translateY(-1px). Focus ring: 2px solid cyan with 2px offset.
- **Ghost:** Transparent background, `--mono-surface-3` border, `--mono-text-dim` text. Used for secondary actions.

### Chips / Tags
- **Style:** Sharp corners (4px), surface background, surface-border border. Two variants:
  - **Tech tags (project cards):** `--mono-surface-2` background, cyan text for primary tag, orange for metric.
  - **Skill badges (`.skill-badge-geo`):** `--mono-surface` background, `--mono-surface-3` border. Hover: border shifts to cyan, text turns cyan.
- **State:** Hover intensifies border color to cyan.

### Section Heading
A signature element combining a bold title with a solid cyan divider line.
- **Title:** Extrabold, clamp(1.875rem, 3vw, 2.75rem), white
- **Divider:** `.section-divider` — 2px height, max-width 6rem, solid cyan (#66d9ef) at 50% opacity

### Navbar
Fixed top bar with animated active indicator and responsive mobile drawer.
- **Style:** Transparent at rest with `backdrop-blur-xl`. On scroll: 90% opacity background with border.
- **Nav items:** Flat buttons inside a bordered container. Active state: animated sliding indicator (cyan border + 5% cyan background).
- **Scroll progress:** 2px bottom bar using `scaleX()` — GPU-accelerated, no layout thrash.
- **Mobile:** Full-screen modal drawer with portal, surface background, grid of nav buttons with active/hover states.
- **Logo:** "AR" monogram in a bordered container with cyan text.

### Terminal Intro
Signature hero element — a dark panel with typewriter animation.
- **Style:** Sharp corners (no radius override), surface background, surface-border border
- **Content:** Green status dot, monospace lines with `>` prefix and blinking cyan cursor
- **Typography:** Mono, text-dim color

### Profile Image
Square frame with geometric corner accents.
- **Shape:** Square (aspect-ratio 1/1), max-w 14-16rem
- **Borders:** 2px solid `--mono-surface-3`
- **Accents:** 3px cyan square top-left, 3px orange square bottom-right
- **No rounded corners, no glass blur, no gradient overlays**

### Project Card
Sharp geometric card with interactive tool tags.
- **Corner Style:** 8px radius (4px on mobile)
- **Background:** `--mono-surface`
- **Border:** `--mono-surface-3`, shifts to cyan on hover
- **Hover:** Left-edge cyan accent stripe appears. Tags get cyan border.
- **No 3D tilt, no radial gradients, no glass blur**

### Navigation (Mobile Drawer)
Portal-rendered full-screen modal with grid layout.
- **Backdrop:** Fixed, deep-black at 95% opacity, click-to-close
- **Container:** Surface background, surface-border border
- **Nav buttons:** Grid of cards, min-h 4rem, with active/hover/contact states
- **Scroll lock:** Body scroll locked when open via `useBodyScrollLock` hook

## 6. Do's and Don'ts

### Do:
- **Do** use Signal Cyan (#66d9ef) as the primary accent — on CTAs, focus rings, active states, and hover edges. Its rarity against the warm dark surface is the point.
- **Do** maintain the warm dark foundation (#1a1b16) across all surfaces. Depth comes from tonal layering, not from lighter backgrounds or shadows.
- **Do** use sharp-cornered card surfaces with flat tonal backgrounds and surface-border edges. No blur, no glass.
- **Do** add 0.05–0.1 to line-height for light text on dark backgrounds. Light type reads as lighter weight.
- **Do** use `text-wrap: balance` on h1–h3 for even line lengths.
- **Do** use the flat elevation model: tonal surfaces at rest, border contrast for structure, cyan accent for interaction.
- **Do** respect `prefers-reduced-motion` — all animations disabled, scroll behavior set to auto.
- **Do** use geometric accents (diamond, hexagon, triangle) sparingly — structural decoration, not ornament.
- **Do** keep the section heading system: bold title → solid cyan divider line. This is the established voice.

### Don't:
- **Don't** use gradient text (`background-clip: text` combined with a gradient background). Decorative, never meaningful.
- **Don't** use glassmorphism, backdrop blur on cards, or decorative glass effects. The system is flat and tonal.
- **Don't** add tiny uppercase tracked eyebrows above every section. The section heading system uses a single title per section.
- **Don't** use numbered section markers (01 / 02 / 03) as default scaffolding.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent stripe. The left-edge hover accent is 3px via a `::before` pseudo-element — not a border.
- **Don't** use shadows anywhere. The system is flat-by-default. `.shadow-glow` explicitly sets `box-shadow: none`.
- **Don't** default to cream / sand / beige body backgrounds. This is a warm-dark workshop — the foundation is Monokai black.
- **Don't** add neon gradients, excessive parallax, or blockchain/crypto vibes. The anti-reference is "overdesigned tech bro portfolio."
- **Don't** use bounce or elastic easing curves. Ease out with exponential curves (cubic-bezier(0.22, 1, 0.36, 1)).
- **Don't** animate CSS layout properties (width, height, padding, margin). Use transform and opacity only.
- **Don't** gate content visibility on a class-triggered transition. Reveals must enhance an already-visible default.
