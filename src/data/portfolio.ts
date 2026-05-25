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
  name: 'Aditya',
  title: 'ML Builder • Computer Vision Researcher • Problem Solver',
  college: 'IIT Jodhpur',
  roles: ['ML/DL', 'Computer Vision', 'Problem Solving'],
 description:
  'Researching computer vision, building ML systems, and exploring thoughtful engineering through code and experimentation.',
  cta: 'Explore projects',
}

export const aboutText: string[] = [
  'I’m a 3rd-year Electrical Engineering student at IIT Jodhpur, currently exploring computer vision through undergraduate research.',
  'Most of my time goes into training models, solving problems, and building ideas into experiments that are as practical as they are interesting.',
]

export const aboutHighlights: string[] = [
  '3rd-year Electrical Engineering student and undergraduate researcher at IIT Jodhpur.',
  'Currently exploring computer vision and deep learning through research, experiments, and constant iteration.',
  'Breaking down algorithmic challenges into clean, efficient solutions.',
  'Building practical systems that do more than just look good on paper.',
]

export const skills: Skill[] = [
  { name: 'C', category: 'Programming', level: 'Advanced' },
  { name: 'C++', category: 'Programming', level: 'Advanced' },
  { name: 'Python', category: 'Programming', level: 'Advanced' },
  { name: 'JavaScript', category: 'Programming', level: 'Proficient' },
  { name: 'TypeScript', category: 'Programming', level: 'Proficient' },

  { name: 'Data Structures', category: 'Problem Solving', level: 'Advanced' },
  { name: 'Algorithms', category: 'Problem Solving', level: 'Advanced' },

  { name: 'PyTorch', category: 'ML / DL', level: 'Advanced' },
  { name: 'TensorFlow', category: 'ML / DL', level: 'Proficient' },
  { name: 'Scikit-learn', category: 'ML / DL', level: 'Proficient' },
  { name: 'NumPy', category: 'ML / DL', level: 'Proficient' },
  { name: 'OpenCV', category: 'Computer Vision', level: 'Proficient' },

  { name: 'Computer Vision', category: 'Research', level: 'Proficient' },
  { name: 'Deep Learning', category: 'Research', level: 'Proficient' },

  { name: 'Git', category: 'Tools', level: 'Advanced' },
  { name: 'Linux', category: 'Tools', level: 'Proficient' },
  { name: 'Jupyter', category: 'Tools', level: 'Advanced' },
  { name: 'Docker', category: 'Tools', level: 'Familiar' },

  { name: 'Figma', category: 'Design', level: 'Proficient' },
  { name: 'UI/UX Design', category: 'Design', level: 'Proficient' },
  { name: 'Interface Design', category: 'Design', level: 'Proficient' },
]

export const projects: Project[] = [
  {
    title: 'Quadcopter Drone with Onboard Vision',
    description:
      'Built an aerial object detection pipeline with onboard edge inference, balancing model performance with real-time constraints.',
    longDescription:
      'Integrated NVIDIA Jetson Orin NX with a live-camera YOLO pipeline for onboard object detection. Focused on deployment trade-offs across inference speed, power constraints, and detection reliability while supporting autonomy-oriented vision workflows.',
    tools: ['Jetson Orin NX', 'YOLO', 'PyTorch', 'OpenCV', 'Edge AI'],
    repo: 'https://github.com/aditya8281/jetson-autonomous-drone',
  },

  {
    title: 'Edge AI Face Recognition System',
    description:
      'Built a lightweight face recognition system for real-time embedded inference on resource-constrained hardware.',
    longDescription:
      'Developed a low-cost vision system using ESP32-CAM and Edge Impulse for fully on-device face recognition. Designed dataset pipelines, trained lightweight models, and optimized deployment for low-power real-time inference.',
    tools: ['ESP32-CAM', 'Edge Impulse', 'TinyML', 'Computer Vision', 'Arduino'],
  },

  {
    title: 'Adaptive Traffic Signal Control',
    description:
      'Explored adaptive decision-making through simulation-driven traffic optimization.',
    longDescription:
      'Built a reinforcement learning traffic-control prototype in a custom simulation environment, focusing on reward design, congestion-aware optimization, and systematic evaluation of learned policies.',
    tools: ['Python', 'PyTorch', 'PPO', 'Gymnasium', 'TensorBoard'],
    repo: 'https://github.com/aditya8281/traffic_rl',
  },

  {
    title: 'Autonomous Maze-Solving Robot',
    description:
      'Engineered a navigation system using PID control and sensor-based feedback for autonomous maze traversal.',
    longDescription:
      'Implemented wall-following and obstacle-avoidance logic using ultrasonic sensing and embedded control. Focused on tuning feedback loops for stable navigation across constrained layouts.',
    tools: ['Arduino', 'Embedded C/C++', 'PID Control', 'Ultrasonic Sensors'],
  },

  {
    title: 'plink — Peer-to-Peer File Transfer',
    description:
      'Contributed networking and reliability improvements to an open-source peer-to-peer transfer tool.',
    longDescription:
      'Worked on secure transfer workflows, modular networking improvements, and connection reliability enhancements for practical cross-platform file sharing.',
    tools: ['Python', 'Networking', 'Systems Development'],
    repo: 'https://github.com/shikavan/plink',
  },
]

export const exploringTopics = [
  {
    title: 'Computer Vision',
    description: 'Exploring detection, real-time inference, and vision systems that work under practical deployment constraints.',
  },
  {
    title: 'Edge AI Systems',
    description: 'Building lightweight ML pipelines for embedded hardware where latency, power, and reliability all matter.',
  },
  {
    title: 'Algorithms & Systems',
    description: 'Strengthening problem-solving through algorithmic thinking, optimization, and efficient implementation.',
  },
  {
    title: 'Interface Design',
    description: 'Designing clean interfaces that make technical systems easier to interact with and understand.',
  },
]

export const experience: Experience[] = [
  {
    role: 'Undergraduate Researcher',
    company: 'IIT Jodhpur',
    period: 'Apr. 2026 – Present',
    description:
      'Working on computer vision and machine learning systems through experiment-driven development, model evaluation, and practical implementation.',
    highlights: [
      'Computer vision model experimentation',
      'Dataset analysis and iterative debugging',
      'Research-focused prototyping and evaluation',
    ],
  },

  {
    role: 'Contributor',
    company: 'DevLup Labs — plink Summer of Code',
    period: 'May 2025 – Nov. 2025',
    description:
      'Contributed to plink, a peer-to-peer file transfer platform, working across the networking stack, secure file transfer pipeline, and the product revamp from CLI to a live web-based system.',
    highlights: [
      'Built direct file-transfer and networking workflows',
      'Worked on transfer reliability and pipeline optimization',
      'Contributed across backend systems and frontend revamp',
      'Helped transition the project from CLI to live web deployment',
    ],
  },

  {
    role: 'Technical Project Builder',
    company: 'Personal Projects',
    period: 'Ongoing',
    description:
      'Building embedded systems, edge AI, and computer vision projects that connect experimentation with deployable implementations.',
    highlights: [
      'Edge AI and embedded vision systems',
      'Rapid prototyping and iterative testing',
      'Hardware-software system integration',
    ],
  },

  {
    role: 'Problem Solving Practice',
    company: 'Personal',
    period: 'Ongoing',
    description:
      'Strengthening algorithmic thinking through regular data structures and problem-solving practice.',
    highlights: [
      'Algorithm design and optimization',
      'Implementation-focused debugging',
      'Performance-conscious coding',
    ],
  },
]

export const leadership: Leadership[] = [
  {
    role: 'Secretary',
    organization: 'Designerds - the designing club of IIT Jodhpur',
    period: 'Aug. 2025 – Apr. 2026',
    highlights: ['Organized multiple workshops teaching design principles and different design softwares. organized different design competitions and events throughout the year.'],
  },
  {
    role: 'Student Guide',
    organization: 'SWC',
    period: 'Aug. 2025 – Apr. 2026',
    highlights: ['Guided new students through their academic and personal growth journey. mentored 12 mentees.'],
  },
  {
    role: 'Core Member',
    organization: 'Game-dev Society',
    period: 'Aug. 2025 – Apr. 2026',
    highlights: ['Mentored new members and organized technical workshops. mentored one game development project.'],
  },
  {
    role: 'Assistant Head',
    organization: 'Ignus \'26',
    period: 'Jan. 2026 – Feb. 2026',
    highlights: ['Organized design competitions and led a team of volunteers for a campus cultural fest.'],
  },
  {
    role: 'Assistant Head',
    organization: 'Prometeo \'26',
    period: 'Oct. 2025 – Jan. 2026',
    highlights: ['Lead 15 volunteers and contributed to event design for a campus tech fest.'],
  },
  {
    role: 'Assistant Head',
    organization: 'Varchas \'25',
    period: 'Sep. 2025 – Nov. 2025',
    highlights: ['Lead 20 volunteers and contributed to event design for a campus sports fest.'],
  },
]

export const contactMethods: ContactMethod[] = [
  { label: 'GitHub', value: 'github.com/aditya8281', href: 'https://github.com/aditya8281' },
  { label: 'LinkedIn', value: 'linkedin.com/in/aditya-rathod', href: 'https://www.linkedin.com/in/aditya-rathod/' },
  { label: 'Email', value: 'aditya.rathod2912@gmail.com', href: 'mailto:aditya.rathod2912@gmail.com' },
]
