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
  link?: string
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
  { id: 'experience', label: 'Experience' },
  { id: 'leadership', label: 'Leadership' },
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
  'I am an Electrical Engineering student at IIT Jodhpur with a focus on AI/ML, systems programming, and embedded intelligence.',
  'I build intelligent real-world systems for edge AI, computer vision, robotics, networking, and autonomous platforms.',
]

export const aboutHighlights: string[] = [
  'IIT Jodhpur Electrical Engineering student.',
  'AI/ML, embedded AI, robotics and reinforcement learning.',
  'Passionate about building dependable systems that solve real-world problems.',
  'Focused on edge AI, computer vision, networking, and autonomous systems.',
]

export const skills: Skill[] = [
  { name: 'Python', category: 'Languages', level: 'Core' },
  { name: 'C++', category: 'Languages', level: 'Core' },
  { name: 'PyTorch', category: 'AI/ML', level: 'Advanced' },
  { name: 'TensorFlow', category: 'AI/ML', level: 'Advanced' },
  { name: 'Stable-Baselines3', category: 'AI/ML', level: 'Advanced' },
  { name: 'Gymnasium', category: 'AI/ML', level: 'Advanced' },
  { name: 'CUDA', category: 'AI/ML', level: 'Advanced' },
  { name: 'YOLO', category: 'Computer Vision', level: 'Advanced' },
  { name: 'OpenCV', category: 'Computer Vision', level: 'Advanced' },
  { name: 'Linux', category: 'Systems', level: 'Advanced' },
  { name: 'Networking', category: 'Systems', level: 'Advanced' },
  { name: 'Git', category: 'Tools', level: 'Core' },
  { name: 'ESP32', category: 'Embedded', level: 'Advanced' },
  { name: 'Jetson Orin NX', category: 'Embedded', level: 'Advanced' },
  { name: 'Arduino', category: 'Embedded', level: 'Advanced' },
  { name: 'TinyML', category: 'Embedded', level: 'Advanced' },
]

export const projects: Project[] = [
  {
    title: 'Adaptive Traffic Signal Control using Reinforcement Learning',
    description:
      'Built an adaptive traffic optimization system using PPO reinforcement learning and Gymnasium environments to reduce congestion and improve throughput.',
    longDescription:
      'Built an adaptive traffic optimization system using PPO reinforcement learning and Gymnasium environments to reduce congestion and improve throughput. Trained policies with Stable-Baselines3, monitored experiments with TensorBoard, and evaluated traffic throughput and wait-time metrics in simulation.',
    tools: ['Python', 'PPO', 'Stable-Baselines3', 'Gymnasium', 'TensorBoard'],
    repo: 'https://github.com/aditya8281/traffic_rl',
  },
  {
    title: 'Quadcopter Drone with Onboard Vision',
    description:
      'Developed a quadcopter platform with Jetson Orin NX onboard compute running YOLO-based real-time object detection.',
    longDescription:
      'Developed a quadcopter platform with Jetson Orin NX onboard compute running YOLO-based real-time object detection. Integrated ROS/edge pipelines, optimized detection for real-time inference with TensorRT, and used OpenCV for post-processing.',
    tools: ['Jetson Orin NX', 'YOLO', 'OpenCV', 'Edge AI', 'Computer Vision'],
    repo: 'https://github.com/aditya8281/jetson-autonomous-drone',
  },
  {
    title: 'Edge AI Face Recognition System',
    description:
      'Created a low-cost TinyML face recognition system using ESP32-CAM and Edge Impulse for on-device inference.',
    longDescription:
      'Created a low-cost TinyML face recognition system using ESP32-CAM and Edge Impulse for on-device inference. Collected dataset, trained compact models, and deployed quantized models to run inference on the ESP32-CAM for fast on-device recognition.',
    tools: ['ESP32-CAM', 'TinyML', 'Edge Impulse', 'Embedded AI'],
  },
  {
    title: 'Autonomous Maze-Solving Robot',
    description:
      'Engineered a PID-controlled autonomous robot using ultrasonic sensors and Arduino for wall-following and navigation.',
    longDescription:
      'Engineered a PID-controlled autonomous robot using ultrasonic sensors and Arduino for wall-following and navigation. Tuned control loops, implemented sensor fusion for reliable obstacle detection, and validated navigation in indoor mazes.',
    tools: ['Arduino', 'PID Control', 'Embedded Systems', 'Robotics'],
  },
  {
    title: 'plink — Peer-to-Peer File Transfer',
    description:
      'Contributed to a secure peer-to-peer file transfer tool with AES-256 encryption and NAT traversal support.',
    longDescription:
      'Contributed to a secure peer-to-peer file transfer tool with AES-256 encryption and NAT traversal support. Improved reliability for hole-punching and integrated encryption layers for end-to-end confidentiality.',
    tools: ['Python', 'Networking', 'AES-256', 'P2P Systems'],
    repo: 'https://github.com/shikavan/plink',
  },
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
  { label: 'Email', value: 'hello@adisite.com', href: 'mailto:hello@adisite.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/adi', href: 'https://linkedin.com' },
  { label: 'Resume', value: 'Download resume', href: '#', },
]
