export type NavLink = {
  id: string
  label: string
}

export type Skill = {
  name: string
  category: string
  level: string
}

export type Project = {
  title: string
  description: string
  tools: string[]
  repo?: string
  longDescription?: string
}

export type Experience = {
  role: string
  company: string
  period: string
  description: string
  highlights?: string[]
}

export type Leadership = {
  role: string
  organization: string
  period: string
  highlights: string[]
}

export type ContactMethod = {
  label: string
  value: string
  href: string
}

export const navLinks: NavLink[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const hero = {
  name: 'Aditya Rathod',
  title: 'AI/ML Engineer & Systems Developer',
  college: 'IIT Jodhpur',
  roles: ['AI/ML Engineer', 'Systems Developer', 'Embedded AI Specialist'],
  description:
    'Building intelligent systems using AI, reinforcement learning, computer vision, embedded systems, and edge AI.',
  cta: 'View projects',
}

export const aboutText: string[] = [
  'I am an Electrical Engineering student at IIT Jodhpur focused on AI/ML, embedded systems, and scalable systems engineering.',
  'I design practical intelligence for edge devices, vision systems, and autonomous workflows with a strong focus on robustness, performance, and real-world impact.',
]

export const aboutHighlights: string[] = [
  'IIT Jodhpur Electrical Engineering student with a systems-first mindset.',
  'Specialized in AI/ML, embedded edge systems, and computer vision.',
  'Building dependable production-ready systems with clean engineering patterns.',
  'Experienced with autonomous robotics, networking, and performance optimization.',
]

export const skills: Skill[] = [
  { name: 'C', category: 'Programming', level: 'Advanced' },
  { name: 'C++', category: 'Programming', level: 'Advanced' },
  { name: 'Python', category: 'Programming', level: 'Advanced' },
  { name: 'JavaScript', category: 'Programming', level: 'Advanced' },
  { name: 'TypeScript', category: 'Programming', level: 'Advanced' },
  { name: 'PyTorch', category: 'AI / ML', level: 'Advanced' },
  { name: 'TensorFlow', category: 'AI / ML', level: 'Advanced' },
  { name: 'Scikit-learn', category: 'AI / ML', level: 'Proficient' },
  { name: 'NumPy', category: 'AI / ML', level: 'Proficient' },
  { name: 'OpenCV', category: 'AI / ML', level: 'Proficient' },
  { name: 'CNNs', category: 'Deep Learning', level: 'Advanced' },
  { name: 'RNNs', category: 'Deep Learning', level: 'Proficient' },
  { name: 'Transformers', category: 'Deep Learning', level: 'Proficient' },
  { name: 'Operating Systems', category: 'Systems', level: 'Proficient' },
  { name: 'Networking', category: 'Systems', level: 'Proficient' },
  { name: 'System Design', category: 'Systems', level: 'Proficient' },
  { name: 'Git', category: 'Tools', level: 'Advanced' },
  { name: 'Linux', category: 'Tools', level: 'Advanced' },
  { name: 'Docker', category: 'Tools', level: 'Proficient' },
  { name: 'Unity', category: 'Creative / Design', level: 'Proficient' },
  { name: 'Blender', category: 'Creative / Design', level: 'Proficient' },
  { name: 'Unreal Engine', category: 'Creative / Design', level: 'Proficient' },
  { name: 'Photoshop', category: 'Creative / Design', level: 'Proficient' },
  { name: 'Illustrator', category: 'Creative / Design', level: 'Proficient' },
  { name: 'Figma', category: 'Creative / Design', level: 'Proficient' },
]

export const projects: Project[] = [
  {
    title: 'Adaptive Traffic Signal Control',
    description:
      'Optimized city signal timing using PPO reinforcement learning for peak-hour congestion reduction.',
    longDescription:
      'Delivered an adaptive traffic control system that learns from simulated intersection data and dynamically adjusts signal timing for smoother throughput. Evaluated latency, vehicle wait time, and congestion metrics across peak scenarios.',
    tools: ['Python', 'PPO', 'Stable-Baselines3', 'Gymnasium', 'TensorBoard'],
    repo: 'https://github.com/aditya8281/traffic_rl',
  },
  {
    title: 'Quadcopter Drone with Onboard Vision',
    description:
      'Built a Jetson Orin NX drone with YOLO-based object detection and ROS pipelines for real-time autonomous flight.',
    longDescription:
      'Integrated Jetson Orin NX, YOLO detection, and ROS edge pipelines to enable real-time vision on a quadcopter. Focused on inference efficiency, sensor fusion, and mission-level reliability for onboard autonomy.',
    tools: ['Jetson Orin NX', 'YOLO', 'OpenCV', 'ROS', 'Edge AI'],
    repo: 'https://github.com/aditya8281/jetson-autonomous-drone',
  },
  {
    title: 'Edge AI Face Recognition System',
    description:
      'Deployed a TinyML face recognition model on ESP32-CAM for fast on-device authentication and low-power inference.',
    longDescription:
      'Designed and deployed a lightweight face recognition pipeline using ESP32-CAM and Edge Impulse. Optimized model size for on-device inferencing while retaining accuracy and responsiveness for embedded authentication.',
    tools: ['ESP32-CAM', 'TinyML', 'Edge Impulse', 'Python', 'Embedded AI'],
  },
  {
    title: 'Autonomous Maze-Solving Robot',
    description:
      'Engineered a sensor-driven autonomous robot with PID control and reliable navigation for indoor maze missions.',
    longDescription:
      'Built an autonomous maze robot using ultrasonic sensing, PID control, and embedded navigation logic. Tuned control loops, fused sensor inputs, and validated robust path planning in varied maze layouts.',
    tools: ['Arduino', 'PID Control', 'Embedded Systems', 'Robotics'],
  },
  {
    title: 'plink — Peer-to-Peer File Transfer',
    description:
      'Enhanced a secure P2P transfer tool with AES-256 encryption and NAT-traversal reliability.',
    longDescription:
      'Contributed to a peer-to-peer file transfer system with encrypted channels, hole-punching, and robust cross-network delivery. Improved connection reliability and streamlined encrypted file exchange for distributed systems.',
    tools: ['Python', 'Networking', 'AES-256', 'P2P Systems'],
    repo: 'https://github.com/shikavan/plink',
  },
]

export const exploringTopics: string[] = [
  'CUDA Optimization',
  'Distributed Systems',
  'Transformer Architectures',
  'OS Internals',
  'Autonomous Systems',
]

export const experience: Experience[] = [
  {
    role: 'Contributor',
    company: 'plink (Peer-to-Peer File Transfer)',
    period: '2024',
    description:
      'Contributed to secure peer-to-peer networking, encryption, and cross-platform CLI tooling for the plink transfer platform.',
    highlights: [
      'Secure peer-to-peer networking',
      'AES-256 encryption',
      'NAT traversal for reliable connections',
      'Cross-platform CLI tooling',
    ],
  },
  {
    role: 'Senior Front-end Engineer',
    company: 'Nimbus Labs',
    period: '2024 – Present',
    description:
      'Leading front-end development for product launches, code maintainability, and accessible component libraries.',
  },
  {
    role: 'Product Designer',
    company: 'Studio Vela',
    period: '2022 – 2024',
    description:
      'Designed interfaces and workflows for SaaS, focusing on usability, conversion, and scalable design systems.',
  },
]

export const leadership: Leadership[] = [
  {
    role: 'Secretary',
    organization: 'Designerds',
    period: '2023 – Present',
    highlights: ['Coordinated event design strategy and led club engagement initiatives.'],
  },
  {
    role: 'Student Guide',
    organization: 'SWC',
    period: '2023 – Present',
    highlights: ['Supported new members and organized technical onboarding sessions.'],
  },
  {
    role: 'Core Member',
    organization: 'Game-dev Society',
    period: '2022 – Present',
    highlights: ['Collaborated on campus game jams and mentorship for small teams.'],
  },
  {
    role: 'Assistant Head',
    organization: 'Ignus',
    period: '2022 – 2023',
    highlights: ['Helped shape event themes and drove creative logistics for workshops.'],
  },
  {
    role: 'Assistant Head',
    organization: 'Prometeo',
    period: '2022 – 2023',
    highlights: ['Managed speaker coordination and supported technical community growth.'],
  },
  {
    role: 'Assistant Head',
    organization: 'Varchas',
    period: '2022 – 2023',
    highlights: ['Oversaw club outreach programs and helped scale member participation.'],
  },
]

export const contactMethods: ContactMethod[] = [
  { label: 'GitHub', value: 'github.com/aditya8281', href: 'https://github.com/aditya8281' },
  { label: 'LinkedIn', value: 'linkedin.com/in/aditya-rathod', href: 'https://www.linkedin.com/in/aditya-rathod/' },
  { label: 'Email', value: 'aditya.rathod2912@gmail.com', href: 'mailto:aditya.rathod2912@gmail.com' },
  { label: 'Resume', value: 'Download resume', href: '#', },
]
