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
  title: 'ML Engineer • Computer Vision Researcher • Builder',
  college: 'IIT Jodhpur',
  roles: ['ML / DL', 'Computer Vision', 'Problem Solving'],
  description:
    'Exploring machine learning, computer vision research, and practical software projects with a product-minded approach.',
  cta: 'View projects',
}

export const aboutText: string[] = [
  'I am a 3rd-year Electrical Engineering undergraduate at IIT Jodhpur and an undergraduate researcher working on computer vision and ML problems.',
  'I regularly practice data structures & algorithms, build practical software projects, and explore product-aware design and UI/UX.',
]

export const aboutHighlights: string[] = [
  '3rd-year Electrical Engineering undergraduate at IIT Jodhpur.',
  'Undergraduate researcher focusing on computer vision and ML/DL.',
  'Regular DSA practice and algorithmic problem solving.',
  'Building practical software projects and exploring product design.',
]

export const skills: Skill[] = [
  { name: 'Python', category: 'Programming', level: 'Advanced' },
  { name: 'C++', category: 'Programming', level: 'Advanced' },
  { name: 'JavaScript', category: 'Programming', level: 'Proficient' },
  { name: 'TypeScript', category: 'Programming', level: 'Proficient' },
  { name: 'Algorithms', category: 'Problem Solving', level: 'Advanced' },
  { name: 'Data Structures', category: 'Problem Solving', level: 'Advanced' },
  { name: 'PyTorch', category: 'ML / CV', level: 'Advanced' },
  { name: 'TensorFlow', category: 'ML / CV', level: 'Proficient' },
  { name: 'OpenCV', category: 'ML / CV', level: 'Proficient' },
  { name: 'NumPy', category: 'ML / CV', level: 'Proficient' },
  { name: 'Scikit-learn', category: 'ML / CV', level: 'Proficient' },
  { name: 'Computer Vision', category: 'ML / CV', level: 'Advanced' },
  { name: 'Deep Learning', category: 'ML / CV', level: 'Advanced' },
  { name: 'Git', category: 'Tools', level: 'Advanced' },
  { name: 'Linux', category: 'Tools', level: 'Proficient' },
  { name: 'Docker', category: 'Tools', level: 'Proficient' },
  { name: 'Figma', category: 'Design', level: 'Proficient' },
  { name: 'UI/UX Design', category: 'Design', level: 'Proficient' },
  { name: 'Product Thinking', category: 'Design', level: 'Proficient' },
  { name: 'Jupyter', category: 'Tools', level: 'Proficient' },
]

export const projects: Project[] = [
  {
    title: 'Adaptive Traffic Signal Control',
    description:
      'Investigated reinforcement learning approaches for simulated traffic signal timing to study congestion and control strategies.',
    longDescription:
      'Implemented an experimental RL prototype to study adaptive traffic control in simulation. Emphasis was on designing rewards, running reproducible experiments, and evaluating queue reduction strategies rather than deployment-ready systems.',
    tools: ['Python', 'PPO', 'Stable-Baselines3', 'Gymnasium', 'TensorBoard'],
    repo: 'https://github.com/aditya8281/traffic_rl',
  },
  {
    title: 'Aerial Object Detection Prototype',
    description:
      'Built a computer vision pipeline for object detection in aerial imagery, exploring model selection and inference-speed tradeoffs.',
    longDescription:
      'Developed a prototype detection pipeline using PyTorch and OpenCV for aerial images. Focus areas included data preprocessing, model evaluation, and measuring inference performance for practical use-cases.',
    tools: ['Python', 'YOLO', 'OpenCV', 'PyTorch'],
    repo: 'https://github.com/aditya8281/jetson-autonomous-drone',
  },
  {
    title: 'Face Recognition Research Prototype',
    description:
      'Prototype exploring face recognition model trade-offs for accuracy and latency in controlled settings.',
    longDescription:
      'Implemented preprocessing pipelines and lightweight model inference experiments to measure accuracy and latency trade-offs for face recognition research. The intent was experimentation and evaluation rather than productionization.',
    tools: ['Python', 'OpenCV', 'PyTorch', 'NumPy'],
  },
  {
    title: 'Maze Navigation Prototype',
    description:
      'Experimented with algorithmic path planning and navigation logic in simulated mazes.',
    longDescription:
      'Implemented and evaluated path planning heuristics and sensor-feedback loops in simulation to study reliable navigation behaviors. The project prioritized iterative testing and robustness in software simulations.',
    tools: ['Python', 'Path Planning', 'Search Algorithms'],
  },
  {
    title: 'plink — Peer-to-Peer File Transfer',
    description:
      'Contributed improvements to a peer-to-peer file transfer tool focusing on reliability and usability.',
    longDescription:
      'Improved connection handling and usability for an open-source P2P transfer tool. Contributions centered on practical software fixes and reliability improvements rather than core protocol design.',
    tools: ['Python', 'Networking'],
    repo: 'https://github.com/shikavan/plink',
  },
]

export const exploringTopics = [
  {
    title: 'Machine Learning',
    description: 'Hands-on ML experiments and model evaluation, with a focus on computer vision.',
  },
  {
    title: 'Problem Solving',
    description: 'Sharpening algorithmic thinking through DSA practice and coding problems.',
  },
  {
    title: 'Development',
    description: 'Building practical software projects that connect research ideas to usable tools.',
  },
  {
    title: 'Design',
    description: 'Exploring UI/UX and product choices that make technical work more approachable.',
  },
]

export const experience: Experience[] = [
  {
    role: 'Undergraduate Researcher',
    company: 'IIT Jodhpur',
    period: '2024 – Present',
    description:
      'Researching computer vision and machine learning problems, working with datasets, experiments, and model evaluation.',
    highlights: [
      'Computer vision model development',
      'Dataset analysis and experimental workflows',
      'Research collaboration and iteration',
    ],
  },
  {
    role: 'Problem Solving Practice',
    company: 'Personal',
    period: 'Ongoing',
    description:
      'Regularly solving algorithmic challenges to improve reasoning and implementation speed.',
    highlights: [
      'Data structures and algorithm routines',
      'Competitive programming practice',
      'Performance and correctness focus',
    ],
  },
  {
    role: 'Software Project Builder',
    company: 'Personal',
    period: 'Ongoing',
    description:
      'Building practical projects that connect ML research with usable software and workflows.',
    highlights: [
      'Project planning and iteration',
      'Model integration and validation',
      'User-oriented feature development',
    ],
  },
  {
    role: 'Product & Design Curiosity',
    company: 'Personal',
    period: 'Ongoing',
    description:
      'Exploring UI/UX patterns and product decisions that make technical work simpler and more intuitive.',
    highlights: [
      'Interface research and iteration',
      'Design thinking for software',
      'Practical product-minded learning',
    ],
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
  { label: 'Resume', value: 'View CV', href: '#contact' },
]
