# Aditya Rathod Portfolio

Personal portfolio for Aditya Rathod, an Electrical Engineering student at IIT Jodhpur working across edge AI, computer vision, reinforcement learning, embedded systems, and peer-to-peer networking.

The site is built to feel like a technical profile rather than a static resume: fast, dark, responsive, animated, and focused on real project details.

## About Me

I work on practical AI and systems projects with real constraints: live inference, embedded hardware, sensor feedback, networking reliability, debugging loops, and measurable performance.

Current focus areas:

- Edge AI and onboard vision systems
- Computer vision and real-time YOLO inference
- Reinforcement learning with PPO and simulation diagnostics
- Embedded systems with Jetson, ESP32-CAM, Arduino, and Raspberry Pi workflows
- Peer-to-peer networking, secure transfer flows, and systems development

## Featured Work

- **Quadcopter Drone with Onboard Vision**  
  Jetson Orin NX, YOLO, edge AI, real-time inference. Reached 10-14 FPS on live camera feeds and sustained about 20 minutes of flight time.

- **Adaptive Traffic Signal Control**  
  PPO-based traffic signal optimizer using PyTorch, Stable-Baselines3, Gymnasium, and TensorBoard. Trained for 500,000+ simulation steps.

- **Edge AI Face Recognition System**  
  ESP32-CAM and Edge Impulse TinyML prototype with on-device inference and about 90% internal-test accuracy.

- **Autonomous Maze-Solving Robot**  
  Arduino Uno, ultrasonic sensors, L298N motor driver, differential drive, and PID control for wall-following navigation.

- **plink - Peer-to-Peer File Transfer**  
  Python systems project with direct device-to-device sharing, AES-256 encryption, UPnP, NAT hole punching, file verification, and smart chunking.

## Site Highlights

- Responsive portfolio layout for desktop and mobile
- Animated hero with terminal-style intro
- Smooth section navigation with active-state tracking
- Mobile navigation drawer with scroll locking and blur backdrop
- Project cards with metrics, tags, hover motion, and detail modals
- Resume PDF modal with background scroll lock
- Skills, research interests, experience timeline, leadership cards, and contact links
- Custom AR favicon and consistent dark cyan/violet visual system

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion

## Project Structure

```text
src/
  assets/       Profile images and resume PDF
  components/   Reusable UI components
  data/         Portfolio content and links
  hooks/        Scroll, active-section, modal, and interaction hooks
  sections/     Page sections
  utils/        Animation and utility helpers
public/         Static assets such as favicon
```

## Run Locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Links

- GitHub: [github.com/aditya8281](https://github.com/aditya8281)
- LinkedIn: [linkedin.com/in/adityarathod2912](https://www.linkedin.com/in/adityarathod2912/)
- Email: [aditya.rathod2912@gmail.com](mailto:aditya.rathod2912@gmail.com)

---

Crafted by Aditya Rathod.
