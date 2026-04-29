---
name: Kinetic Portfolio System
colors:
  surface: '#111317'
  surface-dim: '#111317'
  surface-bright: '#37393e'
  surface-container-lowest: '#0c0e12'
  surface-container-low: '#1a1c20'
  surface-container: '#1e2024'
  surface-container-high: '#282a2e'
  surface-container-highest: '#333539'
  on-surface: '#e2e2e8'
  on-surface-variant: '#dfc1af'
  inverse-surface: '#e2e2e8'
  inverse-on-surface: '#2f3035'
  outline: '#a68b7b'
  outline-variant: '#574235'
  surface-tint: '#ffb787'
  primary: '#ffb787'
  on-primary: '#502400'
  primary-container: '#ff8000'
  on-primary-container: '#5e2b00'
  inverse-primary: '#964900'
  secondary: '#adc6ff'
  on-secondary: '#002e69'
  secondary-container: '#4b8eff'
  on-secondary-container: '#00285c'
  tertiary: '#90cdff'
  on-tertiary: '#003450'
  tertiary-container: '#00acfd'
  on-tertiary-container: '#003d5d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdcc7'
  primary-fixed-dim: '#ffb787'
  on-primary-fixed: '#311300'
  on-primary-fixed-variant: '#723600'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a41'
  on-secondary-fixed-variant: '#004493'
  tertiary-fixed: '#cbe6ff'
  tertiary-fixed-dim: '#90cdff'
  on-tertiary-fixed: '#001e30'
  on-tertiary-fixed-variant: '#004b72'
  background: '#111317'
  on-background: '#e2e2e8'
  surface-variant: '#333539'
typography:
  display-2xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

This design system is engineered for a Full Stack Developer who balances technical rigor with aesthetic precision. The personality is "Architectural yet Fluid"—conveying the stability of robust backend engineering through structured grids, while showcasing frontend mastery through sophisticated Glassmorphism and cinematic motion.

The style is a hybrid of **Modern SaaS** and **Minimalist Editorial**. It leverages high-quality whitespace and large, confident typography typical of premium tech brands. To differentiate from standard corporate portfolios, it introduces translucent layers and vibrant background blurs to create a sense of physical depth and "active" surfaces. The emotional goal is to evoke trust, technical superiority, and creative innovation.

## Colors

The palette is centered around a high-energy **International Orange (#FF8000)**, used strategically for calls-to-action and critical data visualizations. 

- **Dark Mode (Default):** Uses a cinematic "Ink Black" (#0A0C10) base. Depth is created using elevated surfaces in slightly lighter navy-greys, paired with orange accents that "glow" against the dark backdrop.
- **Light Mode:** Shifts to a gallery-inspired aesthetic. It utilizes warm whites and very soft grey borders to maintain the premium feel without losing the structural clarity of the dark mode.
- **Gradients:** Use linear gradients for primary buttons, transitioning from #FF8000 to a slightly deeper #E67300 at a 135-degree angle.

## Typography

This design system uses a three-font strategy to delineate content types. **Plus Jakarta Sans** provides a modern, approachable geometric feel for major headlines. **Inter** handles the heavy lifting of technical descriptions and body copy, ensuring maximum readability across devices. **Space Grotesk** is used sparingly for labels, tags, and "code-adjacent" micro-copy to nod toward the developer's technical background.

Headlines should utilize tight letter spacing to appear more impactful and "designed." Body copy requires generous line heights (1.6x) to ensure long-form project descriptions remain accessible.

## Layout & Spacing

The layout follows a **Fixed Grid** system for desktop, centered on a 1280px maximum container with 12 columns. 

- **Rhythm:** An 8px linear scale governs all spacing.
- **Verticality:** Use "Sectional Breathing"—large vertical gaps (80px to 120px) between major portfolio sections to create an editorial feel.
- **Alignment:** Content is generally left-aligned to mirror code structures, with specific "Stat Blocks" or "KPIs" utilizing center-alignment for visual variety.
- **Margins:** Mobile margins are set at 20px, while desktop margins are dynamic to keep the container centered.

## Elevation & Depth

Depth is primarily communicated through **Glassmorphism** and **Backdrop Blurs**. 

- **Level 1 (Base):** The main background. In dark mode, this may include subtle, large-scale radial gradients of orange (#FF8000 at 5% opacity) in the corners to simulate ambient lighting.
- **Level 2 (Cards):** Glass containers with a `backdrop-filter: blur(20px)`. Light mode uses a white tint (70% opacity), while dark mode uses a dark charcoal tint (60% opacity). 
- **Level 3 (Pop-overs/Modals):** These feature a 1px "inner glow" border (white at 10% opacity) to catch the light, making the edge of the glass surface crisp and distinct.
- **Shadows:** Avoid heavy black shadows. Use colored ambient shadows—if an element is above an orange background, use a soft orange-tinted shadow.

## Shapes

The shape language is "Soft-Tech." It avoids the clinical sharpness of pure brutalism but stays away from the bubbly nature of social apps. 

- **Standard Radius:** 0.5rem (8px) for cards and input fields.
- **Large Radius:** 1.5rem (24px) for featured project hero images and main containers.
- **Interactive Elements:** Buttons utilize a slightly higher roundedness than cards to make them feel more "clickable" and ergonomic.
- **Accents:** Use perfectly circular "orb" shapes in the background with heavy blurs (100px+) to create the cinematic light-leak effect.

## Components

- **Buttons:** 
  - *Primary:* Solid Orange gradient with white text. On hover, a subtle "glow" shadow (orange) expands.
  - *Secondary:* Glass-styled with a 1px border and orange text.
- **Project Cards:** Feature a large imagery area with a 24px radius. Project titles use `headline-lg`. Meta-data (Year, Tech Stack) uses `label-caps`. 
- **Tech Chips:** Small, pill-shaped badges with `label-caps` typography. Use a subtle background fill (10% opacity of the accent color) and a 1px border.
- **Navigation:** A "floating" glass header that remains pinned to the top. Links should have a bottom-border slide-in animation on hover using the primary orange.
- **Input Fields:** Minimalist. Only a bottom border that transforms into a full orange glow when focused. 
- **Timeline:** A vertical 2px line in soft grey, with orange "nodes" representing career milestones. Active/Current roles feature a pulsing outer ring.