---
name: Aditya Rathod — Portfolio
description: Dark command-console portfolio for an AI & systems engineer
colors:
  deep-black: "#03070f"
  surface: "#050816"
  surface-mid: "#0b1223"
  surface-raised: "#111a33"
  cathode-cyan: "#22d3ee"
  phosphor-blue: "#60a5fa"
  anode-violet: "#a855f7"
  text-primary: "#e2f7ff"
  text-secondary: "#cfeffd"
  text-muted: "#94a3b8"
  border-subtle: "rgba(56, 189, 248, 0.12)"
typography:
  display:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.875rem, 5.2vw, 5.2rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.875rem, 3vw, 2.75rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(0.875rem, 1.1vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    letterSpacing: "0.22em"
    textTransform: "uppercase"
  mono:
    fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  full: "9999px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1.5rem"
  lg: "2rem"
  xl: "3rem"
  section-vertical: "clamp(2rem, 5vh, 4.5rem)"
components:
  button-primary:
    backgroundColor: "rgba(34, 211, 238, 1)"
    textColor: "rgba(3, 7, 15, 1)"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1.25rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{text-secondary}"
    rounded: "{rounded.sm}"
    padding: "0.5rem 0.8rem"
  glass-card:
    backgroundColor: "rgba(15, 23, 42, 0.76)"
    textColor: "{text-primary}"
    rounded: "{rounded.lg}"
    padding: "1.5rem"
  skill-badge:
    backgroundColor: "linear-gradient(90deg, rgba(34,211,238,0.1), rgba(15,23,42,0.65), rgba(168,85,247,0.1))"
    textColor: "{text-primary}"
    rounded: "{rounded.full}"
    padding: "0.5rem 1rem"
---

# Design System: Aditya Rathod — Portfolio

## 1. Overview

**Creative North Star: "The Command Console"**

A dark, focused command center. The site operates like a heads-up display — precision-engineered depth through layered dark surfaces, subtle cyan signal lines, and grid overlays. Every element earns its place through function. The cyan glow is signal, not decoration. The atmosphere is cinematic without being theatrical: layered radial gradients create ambient light, a multi-scale engineering grid provides structure, and floating glow orbs add depth without distraction. The visual system explicitly rejects overdesigned tech-bro portfolios (neon gradients, excessive parallax, blockchain vibes), generic SaaS landing pages (cream backgrounds, glassmorphism everywhere, gradient text), and minimalist plain-resume sites with no personality. Confidence comes from substance and precision, not from shouting.

**Key Characteristics:**
- Deep navy-black foundations with layered depth (base → grid → light → orbs → particles)
- Cathode cyan as the dominant signal color, used sparingly but with purpose
- Glass-card surfaces with translucent navy backgrounds and subtle white borders
- Multi-layer atmospheric background: engineering grid, blurred radial gradients, floating orbs, mouse-following glow
- Tactile interactions: 3D tilt on project cards, spring animations on badges, lift-on-hover across interactive elements
- Terminal-style intro with typewriter animation as a signature element
- Hybrid elevation: ambient atmospheric shadows for depth, structural shadows on interactive elements

## 2. Colors

The palette is a deep-field instrument readout: near-black foundations with three signal accents — cyan as primary reading, blue as secondary, violet as tertiary detail.

### Primary
- **Cathode Cyan** (#22d3ee): The dominant signal color. Used for primary CTA buttons, focus rings, active nav indicators, accent borders, hover glows, the profile dot, scrollbar thumb, selection highlight, and all "alive" states. The cyan glow is the visual signature — it carries information, not decoration.

### Secondary
- **Phosphor Blue** (#60a5fa): Supporting accent. Used in background radial gradients, secondary glows, the hero gradient blend, and as a cooler counterpoint to cyan in mixed-surface treatments.

### Tertiary
- **Anode Violet** (#a855f7): Detail accent. Appears in background orbs (orb-2, orb-5), skill badge gradients, project card radial overlays, and the resume modal ambient light. Rare enough to feel special when it appears.

### Neutral
- **Deep Black** (#03070f): The deepest foundation — html body background, scroll context. Near-pure black with a faint blue undertone.
- **Surface** (#050816): Tailwind `surface` token. Slightly lifted from deep black. Used for elevated containers.
- **Surface Mid** (#0b1223): Tailwind `surface2`. Mid-level surface for cards and panels that need more separation from the background.
- **Surface Raised** (#111a33): Tailwind `surface3`. The lightest surface token — used for the highest-elevation panels.
- **Text Primary** (#e2f7ff): Body text on dark backgrounds. Cool white with a faint cyan tint — never pure white.
- **Text Secondary** (#cfeffd): Lighter emphasis text — descriptions, hints, secondary information.
- **Text Muted** (#94a3b8): Labels, timestamps, disabled states. Must maintain 4.5:1 contrast against surfaces.
- **Border Subtle** (rgba(56, 189, 248, 0.12)): The default border color. A translucent cyan that creates structure without competing with content.

### Named Rules
**The Signal Rule.** Cathode cyan is used on ≤15% of any given screen. Its rarity is the point — when cyan appears, it means something. Overuse turns signal into noise.
**The Depth Rule.** Every surface layer adds exactly one step of lightness from the deep-black foundation. No surface jumps more than one step. The atmosphere is built from gradient, not from contrast.

## 3. Typography

**Display Font:** Inter (with system-ui fallback)
**Body Font:** Inter (with system-ui fallback)
**Label Font:** Inter uppercase (with system-ui fallback)
**Mono Font:** ui-monospace / SF Mono / Consolas (for terminal-style elements only)

**Character:** A single family used with aggressive weight and size contrast. Inter is technically clean and engineered — it belongs in the Command Console register. The pairing relies on weight (semibold → extrabold → regular) and size (5.2rem display → 2.75rem headline → 1.125rem body) rather than family contrast. Mono appears only in the TerminalIntro component — it is not a system-wide type choice.

### Hierarchy
- **Display** (semibold/600, clamp(1.875rem, 5.2vw, 5.2rem), line-height 1.1): Hero name only. The largest text on the page. Tight letter-spacing (-0.03em) for precision.
- **Headline** (extrabold/800, clamp(1.875rem, 3vw, 2.75rem), line-height 1.15): Section headings. Bold and commanding with tight tracking.
- **Title** (semibold/600, 1.5rem, line-height 1.25): Card titles, project names, sub-headings within sections.
- **Body** (regular/400, clamp(0.875rem, 1.1vw, 1.125rem), line-height 1.65): Paragraph text, descriptions, project details. Max line length ~70ch. Light text on dark gets extra line-height (0.05–0.1 added).
- **Label** (regular/400, 0.75rem, tracking 0.22em, uppercase): Section eyebrows, category labels, metadata. Used sparingly — the section heading system uses a single uppercase label per section, not repeated eyebrows.

### Named Rules
**The Terminal Rule.** Monospace text appears only in the TerminalIntro component and skill/tool labels where it represents code. All other text is Inter. Mono is a voice accent, not a system font.

## 4. Elevation

Hybrid system: ambient atmospheric shadows for depth on resting surfaces, structural shadows that respond to interaction state (hover, scroll, focus). Shadows are translucent and cool-toned — never black, never opaque. The deepest shadows use the navy palette (`rgba(15,23,42,...)` or `rgba(8,15,31,...)`), not neutral black.

### Shadow Vocabulary
- **Ambient Soft** (`0 20px 60px rgba(15,23,42,0.45)`): Glass cards at rest. Diffuse, atmospheric — creates depth through ambient light falloff, not physical stacking.
- **Ambient Deep** (`0 28px 90px rgba(8,15,31,0.35)`): Hero profile card, highest-elevation surfaces. The deepest resting shadow.
- **Cyan Glow** (`0 20px 80px rgba(34,211,238,0.14)`): Accent glow on hero elements and focus states. Adds a subtle cyan halo.
- **Interactive Lift** (`0 16px 40px rgba(34,211,238,0.09)`): Applied on card hover via `shadow-glow` class. Structural — signals interactivity.
- **Nav Scroll** (`0 22px 70px rgba(8,15,31,0.38)`): Navbar scrolled state. Structural — signals the nav is now pinned.
- **Modal Overlay** (`0 40px 140px rgba(2,8,23,0.72)`): Resume modal container. Deepest shadow in the system.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest with only ambient atmospheric shadow. Structural shadows appear as a response to state — hover, elevation change, focus, scroll position. If a shadow is always visible, it's atmospheric. If it appears on interaction, it's structural.

## 5. Components

### Glass Card
The foundational surface. A translucent navy panel with a thin white border, backdrop blur, and a subtle top-edge gradient overlay.
- **Corner Style:** 1.5rem radius (`--radius-lg`), reduced to 1rem on mobile
- **Background:** `linear-gradient(180deg, rgba(15,23,42,0.76), rgba(8,12,20,0.64))` with a `::before` overlay gradient
- **Border:** `1px solid rgba(255, 255, 255, 0.06)`
- **Shadow:** Ambient Soft at rest, Interactive Lift on hover
- **Internal Padding:** 1.5rem (1rem on mobile)
- **State:** `hover:-translate-y-1 hover:shadow-glow` — subtle lift + cyan glow on hover

### Buttons
- **Shape:** Gently curved (0.5rem radius / `rounded-lg`)
- **Primary (CTA):** Cathode cyan background, deep-black text, semibold. Padding 0.75rem 1.25rem. Solid fill — the only opaque accent surface in the system.
- **Hover / Focus:** `hover:bg-cyan-300` (lighter cyan), `translateY(-1px)`, `scale(1.01)`. Focus ring: `ring-2 ring-cyan-400/60` with offset.
- **Ghost:** Transparent background, `border-white/8`, `text-cyan-100`. Used for secondary actions.
- **Nav CTA (Resume):** `.resume-cta` — glassmorphism with a sweep-shine hover effect (left-to-right gradient pass).

### Chips / Tags
- **Style:** Rounded-full pill, translucent background with subtle border. Two variants:
  - **Tech tags (project cards):** `bg-slate-900/70`, `border-cyan-400/10`, `text-slate-100`. Hover: `-translate-y-0.5`, border shifts to `cyan-300/30`.
  - **Skill badges:** Gradient background (`from-cyan-500/10 via-slate-900/65 to-violet-500/10`), `border-white/10`. Spring animation on hover (`scale(1.05), y: -2`).
- **State:** Hover lifts and intensifies the border glow.

### Section Heading
A signature element combining a horizontal cyan gradient line, uppercase tracking label, bold title, and a soft divider.
- **Horizontal line:** 2.5–4rem width, `bg-gradient-to-r from-cyan-400/50 via-blue-400/30 to-transparent`
- **Label:** Uppercase, 0.75rem, tracking 0.22–0.34em, `text-cyan-300/80`
- **Title:** Extrabold, `clamp(1.875rem, 3vw, 2.75rem)`, white
- **Divider:** `.section-divider` — horizontal gradient line fading from cyan to blue to transparent

### Navbar
Fixed top bar with animated active indicator and responsive mobile drawer.
- **Style:** `bg-slate-950/20` at rest with `backdrop-blur-xl`. On scroll: `bg-slate-950/86` with `border-white/10` and structural shadow.
- **Nav items:** Rounded-full pills inside a bordered container. Active state: animated sliding indicator (`bg-cyan-300/10`, `border-cyan-300/20`, `shadow-[0_0_28px_rgba(34,211,238,0.12)]`).
- **Mobile:** Full-screen modal drawer with portal, `bg-slate-950/88 backdrop-blur-2xl` backdrop, grid of nav buttons with hover states.
- **Logo:** "AR" monogram in a rounded container with cyan border and glow.

### Terminal Intro
Signature hero element — a dark panel with typewriter animation.
- **Style:** `rounded-3xl`, `border-slate-700/70`, `bg-slate-950/80`, `backdrop-blur-xl`
- **Content:** Uppercase label "System startup" with blinking cyan dot, then monospace lines with `>` prefix and blinking cursor
- **Typography:** `font-mono text-sm text-slate-300`

### Profile Image
Circular avatar with layered borders and gradient overlays.
- **Shape:** Full circle, `max-w-[22rem]` at largest
- **Borders:** Double — cyan-400/12 outer ring + white/10 inner ring
- **Overlays:** Gradient from cyan-400/10 (top-left) to slate-950/10 (bottom-right), plus a `from-slate-950/30` to `cyan-400/10` bottom gradient
- **Shadow:** `0 20px 60px rgba(8,15,31,0.35)` ambient

### Project Card
The most complex component — 3D tilt, layered gradients, and interactive tool tags.
- **Corner Style:** 2rem radius (`rounded-[2rem]`)
- **Background:** Radial gradients (cyan top-left, violet bottom-right) as ambient overlay, with a `glass-card` inner container at `bg-slate-950/85`
- **Border:** `border-white/10` at rest, `border-cyan-300/25` on hover
- **3D Tilt:** `perspective(900px)` mouse-following tilt via `onMouseMove` (±4deg X, ±6deg Y)
- **Internal Padding:** 1–1.25rem outer, 1.5rem inner card

### Resume Modal
Full-screen overlay with PDF viewer.
- **Backdrop:** `bg-slate-950/80 backdrop-blur-2xl` with radial cyan/violet ambient light
- **Container:** `rounded-2xl`, `border-cyan-300/15`, `bg-slate-950/95`, `max-w-5xl`
- **Header bar:** `bg-slate-900/80`, `border-b-white/10`, contains title + download/close buttons
- **Focus:** Auto-focuses iframe on open for keyboard navigation

### Stat Card
Compact metric display within the glass-card system.
- **Style:** Inherits glass-card. Hover: `y: -6, scale: 1.02` spring animation
- **Content:** Uppercase cyan label + large white value + optional muted hint
- **Interactive:** Clickable variant with `hover:border-cyan-300/35` and focus ring

### Navigation (Mobile Drawer)
Portal-rendered full-screen modal with grid layout.
- **Backdrop:** Fixed, `bg-slate-950/88 backdrop-blur-2xl`, click-to-close
- **Container:** `rounded-3xl`, `border-cyan-300/18`, `bg-slate-950`
- **Nav buttons:** Grid of cards, `min-h-[4.5rem]`, with active/hover/contact states
- **Scroll lock:** Body scroll locked when open via `useBodyScrollLock` hook

## 6. Do's and Don'ts

### Do:
- **Do** use Cathode Cyan (#22d3ee) as the primary signal — on CTAs, focus rings, active states, and hover glows. Its rarity is the point.
- **Do** maintain the deep navy-black foundation (#03070f) across all surfaces. Depth comes from layered gradients, not from lighter backgrounds.
- **Do** use glass-card panels with translucent navy backgrounds, thin white borders, and backdrop blur for content containers.
- **Do** add 0.05–0.1 to line-height for light text on dark backgrounds. Light type reads as lighter weight.
- **Do** use `text-wrap: balance` on h1–h3 for even line lengths.
- **Do** use the hybrid elevation model: atmospheric shadows at rest, structural shadows on interaction.
- **Do** respect `prefers-reduced-motion` — all animations must have a reduced-motion alternative. The current implementation disables all animation duration and transition duration to 0.001ms.
- **Do** test heading copy at every breakpoint; reduce the clamp max or rewrite copy if it overflows.
- **Do** keep the section heading system: horizontal cyan gradient line → uppercase tracking label → bold title → soft divider. This is the established voice.

### Don't:
- **Don't** use gradient text (`background-clip: text` combined with a gradient background). Decorative, never meaningful. Use a single solid color.
- **Don't** use glassmorphism decoratively on every surface. Glass cards are the established pattern — don't add glass blur to buttons, badges, or other elements that don't need it.
- **Don't** add tiny uppercase tracked eyebrows above every section. The section heading system already has one label per section — repeating it as section grammar is AI scaffolding.
- **Don't** use numbered section markers (01 / 02 / 03) as default scaffolding. The section heading system uses descriptive labels, not numbers.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent stripe. Rewrite with full borders, background tints, or nothing.
- **Don't** use side-stripe borders on cards, list items, callouts, or alerts. Never intentional.
- **Don't** default to the cream / sand / beige body bg pattern. This is a deep-field instrument — the foundation is near-black navy.
- **Don't** add neon gradients, excessive parallax, or blockchain/crypto vibes. The anti-reference is "overdesigned tech bro portfolio."
- **Don't** use bounce or elastic easing curves. Ease out with exponential curves (cubic-bezier(0.22, 1, 0.36, 1) is the established standard).
- **Don't** animate CSS layout properties unless truly needed. Prefer transform and opacity.
- **Don't** gate content visibility on a class-triggered transition. Reveals must enhance an already-visible default.
