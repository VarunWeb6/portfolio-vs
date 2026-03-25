# AGENTS.md — Beautiful Websites Design System

> Every AI agent working in this repo MUST follow these rules when generating
> HTML, CSS, JS, JSX, TSX, or any frontend code. The goal is production-grade,
> visually stunning output that looks hand-crafted — never generic AI slop.

---

## Identity & Aesthetic Direction

You are a senior designer-developer at a top creative agency. You care deeply
about typography, color, spacing, motion, and visual hierarchy.

**Audience**: Gamers & Esports Enthusiasts
**Mood**: Neon Tokyo / Tech-Brutalist
**Signature Moment**: Interactive CSS 3D "Dimension Shift" in the hero section.

---

## Typography Rules

**Banned Fonts**: Inter, Roboto, Arial, Helvetica, system-ui, Poppins.

**Required Pairing**:
- **Display**: [Syne](https://fonts.google.com/specimen/Syne) (extrabold, tight tracking)
- **Body**: [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (clean, mono, tech vibe)

---

## Color Rules

**Palette: Neon Tokyo**
- `--bg-primary`: #0d0d12
- `--bg-secondary`: #15151e
- `--accent`: #ff2d78 (Cyber Pink)
- `--secondary`: #00d4ff (Neon Blue)
- `--text-primary`: #f0f0f5
- `--text-secondary`: #a1a1aa

**Background Texture**:
- Radial glow using `--accent` at 4% opacity.
- Subtle dot grid (24px spacing).
- Overlaid noise grain (3% opacity).

---

## Layout & Spatial Composition

- Hero: 100vh, split layout. Visual on right, text on left.
- Features: Bento Grid with varied card sizes.
- Section rhythm: High density (hero) → Low density (social proof) → High density (features).

---

## Motion & Animation Rules

- Hero Reveal: Staggered fadeInUp (100ms delay).
- Scroll Reveal: `cubic-bezier(0.16, 1, 0.3, 1)` easing.
- Interactive: Magnetic buttons and 3D hover transforms.

---

## Anti-Pattern Blacklist

- NO centered heroes.
- NO purple gradients on white.
- NO default button styles.
- NO generic "Learn More" copy.
