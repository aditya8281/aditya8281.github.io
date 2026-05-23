# Background System - Quick Customization Cheat Sheet

## 🎨 Quick Color Changes

### Make Everything More Cyan/Blue (Cool Tech)
In `index.css`, find these and modify opacities:
```css
.bg-light {
  background-image: 
    radial-gradient(... rgba(34,211,238,0.18), ...), /* +0.03 */
    radial-gradient(... rgba(59,130,246,0.10), ...), /* +0.02 */
    /* ... rest same */
}
```

### Add More Purple/Violet
```css
.bg-light {
  background-image: 
    radial-gradient(...),
    radial-gradient(... rgba(168,85,247,0.13), ...), /* +0.02 */
    /* ... */
}
```

### Shift to Warmer Tones (Orange/Red - Not Recommended)
Replace cyan `rgba(34,211,238,...)` with:
- Orange: `rgba(249,115,22,...)`
- Red: `rgba(239,68,68,...)`
- Pink: `rgba(236,72,153,...)`

## ⏱️ Animation Speed Adjustments

### Make Background Move Slower (More Subtle)
In `BackgroundEffects.tsx`:
```javascript
// Lighting motion
const lightMotion = {
  animate: {
    // ...
    transition: { duration: 48 }, // was 32 → slower
  },
}

// Orbs parallax
const particlesMotion = {
  animate: {
    // ...
    transition: { duration: 48 }, // was 36 → slower
  },
}

// Orb glow pulse
const glowMotion = {
  animate: {
    // ...
    transition: { duration: 12 }, // was 8 → slower breath
  },
}
```

### Speed Everything Up (More Dynamic)
```javascript
const lightMotion = {
  animate: {
    transition: { duration: 20 }, // was 32 → faster
  },
}

const particlesMotion = {
  animate: {
    transition: { duration: 24 }, // was 36 → faster
  },
}
```

## 🔆 Brightness & Intensity

### Brighter Background (More Glowing)
```css
.bg-light {
  opacity: 1.0; /* was 0.98 */
  filter: blur(56px) saturate(1.15); /* increase saturate */
}

.orb {
  opacity: 0.55; /* was 0.48 */
}
```

### Darker Background (More Subtle)
```css
.bg-light {
  opacity: 0.85; /* was 0.98 */
  filter: blur(56px) saturate(0.95);
}

.orb {
  opacity: 0.35; /* was 0.48 */
}

.bg-grid {
  opacity: 0.06; /* was 0.12 */
}
```

## 📏 Size Adjustments

### Larger Grid Cells (More Visible)
```css
.bg-grid {
  background-image: 
    linear-gradient(...),
    linear-gradient(...),
    linear-gradient(...),
    linear-gradient(...);
  background-size: 120px 120px, 120px 120px, 240px 240px, 240px 240px; /* was 80px/160px */
  opacity: 0.16; /* increase slightly */
}
```

### Smaller Grid (More Subtle/Detailed)
```css
.bg-grid {
  background-size: 60px 60px, 60px 60px, 120px 120px, 120px 120px;
  opacity: 0.08; /* decrease */
}
```

### Bigger Mouse Glow
```css
.background-mouse-glow {
  width: 400px; /* was 320px */
  height: 400px;
  filter: blur(60px); /* was 50px */
}
```

### Bigger Orbs
```css
.orb-1 { 
  width: 340px; /* was 280px */
  height: 340px;
}

.orb-2 { 
  width: 300px; /* was 240px */
  height: 300px;
}
/* ... scale all orbs up proportionally */
```

## 🎯 Effects Presets

### Preset 1: "Minimal Tech" (Subtle)
```javascript
// In BackgroundEffects.tsx
const lightMotion = { animate: { transition: { duration: 48 } } }
const particlesMotion = { animate: { transition: { duration: 60 } } }

// In index.css
.bg-light { opacity: 0.85; }
.orb { opacity: 0.35; }
.bg-grid { opacity: 0.08; }
.soft-vignette { opacity: 0.5; }
```

### Preset 2: "Cinematic Premium" (Balanced - Default)
```
Already configured! Current setup is the sweet spot.
```

### Preset 3: "Maximum Impact" (Bold)
```javascript
// In BackgroundEffects.tsx
const lightMotion = { animate: { transition: { duration: 20 } } }
const particlesMotion = { animate: { transition: { duration: 24 } } }

// In index.css
.bg-light { 
  opacity: 1.0;
  filter: blur(56px) saturate(1.2);
}
.orb { opacity: 0.65; }
.bg-grid { opacity: 0.18; }
.soft-vignette { opacity: 0.8; }
.background-mouse-glow { 
  width: 400px;
  height: 400px;
}
```

### Preset 4: "Minimal Distraction" (Clean)
```css
/* Reduce all animated elements */
.bg-light { opacity: 0.75; }
.orb { opacity: 0.25; }
.parallax-orbs { opacity: 0.5; }
.background-mouse-glow { opacity: 0.5; }
.bg-grid { opacity: 0.04; }
```

## 🔧 Advanced Tweaks

### Adjust Individual Orb Colors

Find `.orb-1` through `.orb-6` in `index.css`:

```css
/* Change Orb 1 from Cyan to Blue */
.orb-1 { 
  background: radial-gradient(
    circle at 30% 30%, 
    rgba(59,130,246,0.26), /* changed from cyan to blue */
    rgba(59,130,246,0.08) 40%, 
    transparent 70%
  );
}
```

### Change Motion Path

In `BackgroundEffects.tsx`, modify the animation array:

```javascript
// Current (smooth 5-point path)
const lightMotion = {
  animate: {
    x: [0, -40, 20, -30, 0],      // 5 waypoints
    y: [0, -25, 15, -20, 0],
    transition: { 
      times: [0, 0.25, 0.5, 0.75, 1],
    },
  },
}

// More dramatic (sharper angles)
const lightMotion = {
  animate: {
    x: [0, -60, 0, 60, 0],         // more exaggerated
    y: [0, -40, 0, 40, 0],
    transition: { 
      times: [0, 0.25, 0.5, 0.75, 1],
    },
  },
}
```

### Fine-tune Mouse Glow Spring

In `BackgroundEffects.tsx`:

```javascript
// Current (responsive)
transition={{ 
  type: 'spring', 
  stiffness: 60,    // lower = slower, bouncier
  damping: 20,      // higher = less bouncy
  mass: 0.5,        // higher = heavier feel
}}

// More responsive (gaming-like feel)
transition={{ 
  type: 'spring', 
  stiffness: 100,   // faster response
  damping: 25,
  mass: 0.3,
}}

// More sluggish (dramatic follow)
transition={{ 
  type: 'spring', 
  stiffness: 40,    // slower response
  damping: 15,
  mass: 0.8,
}}
```

## 🎪 Remove/Disable Elements

### Disable Mouse Glow
In `BackgroundEffects.tsx`, comment out:
```javascript
{/* <motion.div className="absolute inset-0 pointer-events-none">
  <motion.div className="background-mouse-glow" ... />
</motion.div> */}
```

### Disable Grid Animation
In `index.css`:
```css
.bg-grid {
  /* animation: grid-slow 48s linear infinite; */ /* remove this */
  animation: none;
}
```

### Disable Orb Motion
In `BackgroundEffects.tsx`, comment out:
```javascript
{/* <motion.div className="parallax-orbs absolute inset-0" {...particlesMotion}> */}
<div className="parallax-orbs absolute inset-0">
  {/* orbs content */}
</div>
```

### Disable Noise
In `index.css`:
```css
.noise {
  opacity: 0; /* or display: none; */
}
```

### Disable Vignette
In `index.css`:
```css
.soft-vignette {
  opacity: 0; /* or display: none; */
}
```

## 🔍 Common Issues & Fixes

### Background Too Bright
→ Decrease `.bg-light { opacity }` from 0.98 to 0.85

### Grid Too Visible/Distracting
→ Decrease `.bg-grid { opacity }` from 0.12 to 0.06

### Mouse Glow Laggy
→ Increase spring stiffness: `stiffness: 80`

### Animations Feel Choppy
→ Use longer durations (more time per cycle)

### Orbs Not Visible Enough
→ Increase `.orb { opacity }` from 0.48 to 0.60

### Performance Issues
→ Reduce blur amounts (filter blur values)
→ Simplify gradients (fewer radial-gradient layers)

## 📋 Configuration Summary

### Files to Edit

1. **src/components/BackgroundEffects.tsx**
   - Animation durations
   - Motion paths
   - Spring physics
   - Element visibility

2. **src/index.css**
   - Colors and opacities
   - Layer sizes
   - Grid patterns
   - Filter effects
   - Blend modes

### Key CSS Classes

| Class | Purpose | Adjust For |
|-------|---------|-----------|
| `.bg-base` | Foundation | Overall darkness |
| `.bg-grid` | Grid pattern | Visible grid |
| `.bg-light` | Lighting | Brightness/glow |
| `.parallax-orbs` | Orb container | Orb intensity |
| `.orb-1` to `.orb-6` | Individual orbs | Specific colors/sizes |
| `.background-mouse-glow` | Cursor glow | Mouse effect |
| `.soft-vignette` | Dark edges | Edge darkness |
| `.noise` | Grain texture | Film effect |

## 🎬 Pro Tips

1. **Subtle is better**: Start with slight changes, increase if needed
2. **Test on devices**: Check how it looks on laptop, tablet, phone
3. **Check readability**: Ensure text remains easy to read
4. **Use DevTools**: Chrome DevTools → Styles to live-test CSS changes
5. **Animate carefully**: 30-60 second cycles feel natural
6. **Color harmony**: Stick to cool tones (cyan/blue/purple) for tech feel
7. **Layer depth**: Ensure each layer serves a purpose

---

**Questions?** Check `BACKGROUND_SYSTEM.md` for detailed explanations! 🚀
