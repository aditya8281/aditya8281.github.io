# Aditya Rathod — Portfolio

Personal portfolio for Aditya Rathod, an Electrical Engineering student at IIT Jodhpur working across edge AI, computer vision, reinforcement learning, embedded systems, and peer-to-peer networking.

The site is built to feel like a technical profile rather than a static resume: fast, dark, responsive, animated, and focused on real project details.

**Live:** [aditya8281.github.io](https://aditya8281.github.io/)

---

## About

I work on practical AI and systems projects with real constraints: live inference, embedded hardware, sensor feedback, networking reliability, debugging loops, and measurable performance.

Current focus areas:

- Edge AI and onboard vision systems
- Computer vision and real-time YOLO inference
- Reinforcement learning with PPO and simulation diagnostics
- Embedded systems with Jetson, ESP32-CAM, Arduino, and Raspberry Pi workflows
- Peer-to-peer networking, secure transfer flows, and systems development

## Featured Work

| Project | Stack | Highlights |
|---------|-------|------------|
| **Quadcopter Drone with Onboard Vision** | Jetson Orin NX, YOLO, Edge AI | 10-14 FPS live inference, ~20 min flight time |
| **Adaptive Traffic Signal Control** | PyTorch, PPO, Stable-Baselines3, Gymnasium | 500k+ simulation steps, TensorBoard diagnostics |
| **Edge AI Face Recognition System** | ESP32-CAM, Edge Impulse, TinyML | ~90% accuracy, on-device inference |
| **Autonomous Maze-Solving Robot** | Arduino Uno, PID Control, Ultrasonic Sensors | Differential drive, wall-following navigation |
| **plink — Peer-to-Peer File Transfer** | Python, P2P Networking, AES-256 | UPnP, NAT hole punching, smart chunking |

## Site Features

- Responsive layout for desktop, tablet, and mobile
- Animated hero with terminal-style intro
- Smooth section navigation with active-state tracking
- Mobile navigation drawer with scroll locking and blur backdrop
- Project cards with metrics, tags, hover motion, and detail modals
- Resume PDF modal with background scroll lock
- Skills, research interests, experience timeline, leadership cards, and contact links
- Particles background with interactive mouse tracking
- Dark cyan/violet visual system with glass-morphism cards

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Language | TypeScript 5.8 |
| Build | Vite 6 |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion 12 |
| Icons | React Icons |
| Deployment | GitHub Actions → GitHub Pages |

## Project Structure

```text
src/
├── assets/           Profile images, resume PDF, and static assets
├── components/       Reusable UI components (Navbar, Cards, Modals, etc.)
├── data/             Portfolio content, links, and structured data
├── hooks/            Scroll, active-section, modal, and interaction hooks
├── sections/         Page sections (Hero, About, Skills, Projects, etc.)
├── utils/            Animation configs, helpers, and utility functions
├── App.tsx           Root layout and section composition
├── index.css         Global styles, glass-morphism, and utility classes
└── main.tsx          Application entry point
public/
├── favicon.svg       Custom AR favicon
└── icons.svg         Icon sprite
.github/
└── workflows/
    └── deploy.yml    Automated build and deploy to GitHub Pages
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions. Every push to `main` triggers the build pipeline:

1. Checkout and install dependencies
2. TypeScript type-check and Vite build
3. Upload artifact and deploy to GitHub Pages

## Contact

- **GitHub:** [aditya8281](https://github.com/aditya8281)
- **LinkedIn:** [adityarathod2912](https://www.linkedin.com/in/adityarathod2912/)
- **Email:** [aditya.rathod2912@gmail.com](mailto:aditya.rathod2912@gmail.com)

---

Built by Aditya Rathod.
