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
  metric?: string
  tag?: string
}

export type Experience = {
  role: string
  company: string
  period: string
  description: string
  highlights?: string[]
  link?: string
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
  { id: 'research', label: 'Research' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'contact', label: 'Contact' },
]

export const hero = {
  name: 'Aditya Rathod',
  title: 'AI/ML • Computer Vision • Embedded Systems',
  college: 'IIT Jodhpur',
  roles: ['MLOps', 'Computer Vision', 'Reinforcement Learning', 'Edge AI', 'Robotics', 'Systems'],
  description:
    'Working on real-time vision, embedded intelligence, and Robotics experiments with a focus on clean systems, fast iteration, and practical results.',
  cta: 'Explore projects',
}

export const aboutText: string[] = [
  'I’m a third-year Electrical Engineering student at IIT Jodhpur working across computer vision, edge AI, reinforcement learning, and systems projects.',
  'I like projects that feel technical but real: live inference, embedded hardware, reliable networking, clean debugging loops, and interfaces people can actually use.',
]

export const aboutHighlights: string[] = [
  'Electrical Engineering student at IIT Jodhpur with hands-on work in ML, vision, and embedded systems.',
  'Shipped projects across Jetson Orin NX, ESP32-CAM, Arduino, Real time vision, and peer-to-peer networking.',
  'Comfortable moving between model training, hardware integration, debugging, and UI thinking.',
  'Focused on crisp engineering: measurable results, clean systems, and useful prototypes.',
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
  { name: 'Pandas', category: 'ML / DL', level: 'Proficient' },
  { name: 'Stable-Baselines3', category: 'ML / DL', level: 'Proficient' },
  { name: 'Gymnasium', category: 'ML / DL', level: 'Proficient' },
  { name: 'OpenCV', category: 'Computer Vision', level: 'Proficient' },

  { name: 'Computer Vision', category: 'Research', level: 'Proficient' },
  { name: 'Deep Learning', category: 'Research', level: 'Proficient' },
  { name: 'Reinforcement Learning', category: 'Research', level: 'Proficient' },
  { name: 'YOLO', category: 'Research', level: 'Proficient' },

  { name: 'Git', category: 'Tools', level: 'Advanced' },
  { name: 'GitHub', category: 'Tools', level: 'Advanced' },
  { name: 'Linux', category: 'Tools', level: 'Proficient' },
  { name: 'Jupyter', category: 'Tools', level: 'Advanced' },
  { name: 'Arduino IDE', category: 'Tools', level: 'Proficient' },
  { name: 'Edge Impulse', category: 'Tools', level: 'Proficient' },

  { name: 'Figma', category: 'Design', level: 'Proficient' },
  { name: 'UI/UX Design', category: 'Design', level: 'Proficient' },
  { name: 'Interface Design', category: 'Design', level: 'Proficient' },
]

export const projects: Project[] = [
  {
    title: 'Quadcopter Drone with Onboard Vision',
    description:
      'Flight-tested quadcopter platform with Jetson Orin NX onboard vision and live YOLO inference.',
    longDescription:
      'Integrated NVIDIA Jetson Orin NX onboard compute and deployed a YOLO object-detection pipeline on live camera feeds. The platform sustained about 20 minutes of flight time on a 3S battery and reached 10-14 FPS real-time inference while balancing accuracy, compute limits, and power constraints.',
    tools: ['Jetson Orin NX', 'YOLO', 'Computer Vision', 'Edge AI', 'Real-Time Inference'],
    repo: 'https://github.com/aditya8281/jetson-autonomous-drone',
    metric: '10-14 FPS',
    tag: 'Edge Vision',
  },

  {
    title: 'Edge AI Face Recognition System',
    description:
      'Portable ESP32-CAM face-recognition prototype with on-device ML and low-power inference.',
    longDescription:
      'Developed a low-cost Edge AI face-recognition system using ESP32-CAM, Edge Impulse, and LCD output for portable real-time vision. Handled dataset collection, labeling, Arduino IDE deployment, and on-device inference without cloud dependence, reaching about 90% internal-test accuracy.',
    tools: ['ESP32-CAM', 'FTDI232', 'Edge Impulse', 'TinyML', 'Arduino IDE'],
    metric: '~90% accuracy',
    tag: 'TinyML',
  },

  {
    title: 'Adaptive Traffic Signal Control',
    description:
      'PPO-based traffic-signal optimizer trained in a custom Gymnasium simulation environment.',
    longDescription:
      'Developed an adaptive traffic signal optimization system using PPO, actor-critic methods, and a custom Gymnasium environment. Designed vehicle-density and waiting-time state features, stochastic arrivals, and reward engineering strategies; trained for 500,000+ simulation timesteps with 16 vectorized environments and TensorBoard diagnostics.',
    tools: ['Python', 'PyTorch', 'PPO', 'Stable-Baselines3', 'Gymnasium', 'TensorBoard'],
    repo: 'https://github.com/aditya8281/traffic_rl',
    metric: '500k+ steps',
    tag: 'RL Systems',
  },

  {
    title: 'Autonomous Maze-Solving Robot',
    description:
      'PID-based wall-following robot tuned for constrained-path navigation and sensor feedback.',
    longDescription:
      'Engineered a wall-following robot using Arduino Uno, HC-SR04 ultrasonic sensors, L298N motor driver, differential-drive control, and Embedded C/C++. Implemented obstacle avoidance, turn decisions, anti-windup PID feedback, and serial-monitor debugging for sensor readings, PID error, motor speeds, and wall-side selection.',
    tools: ['Arduino Uno', 'PID Control', 'Ultrasonic Sensors', 'L298N', 'Embedded C/C++'],
    metric: 'PID tuned',
    tag: 'Robotics',
  },

  {
    title: 'plink — Peer-to-Peer File Transfer',
    description:
      'Secure peer-to-peer file transfer with direct connections, encryption, and reliable chunking.',
    longDescription:
      'Contributed to a direct device-to-device file transfer tool without centralized servers. Worked on modular networking for direct connection, UPnP, NAT hole punching, and role reversal; fortified transfers with AES-256 encryption, secure key exchange, file verification, smart chunking, and cross-platform CLI workflows.',
    tools: ['Python', 'P2P Networking', 'AES-256', 'UPnP', 'Systems Development'],
    repo: 'https://github.com/shikavan/plink',
    metric: 'AES-256',
    tag: 'Systems',
  },
]

export const exploringTopics = [
  {
    title: 'Computer Vision',
    description: 'Detection, live-camera inference, and deployment-aware vision systems that hold up outside a notebook.',
  },
  {
    title: 'Edge AI Systems',
    description: 'TinyML and onboard compute pipelines where latency, power, and reliability matter from day one.',
  },
  {
    title: 'RL & Optimization',
    description: 'Simulation-driven control, PPO experiments, reward design, and policy evaluation with clean diagnostics.',
  },
  {
    title: 'Systems & Networking',
    description: 'Reliable file transfer, hardware-software integration, debugging workflows, and sharp implementation details.',
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
      'Computer vision experiments and evaluation loops',
      'Dataset analysis, debugging, and model iteration',
      'Research prototypes shaped toward practical use',
    ],
  },

  {
    role: 'Contributor',
    company: 'DevLup Labs — plink Summer of Code',
    period: 'May 2025 – Nov. 2025',
    description:
      'Contributed to plink, a peer-to-peer file transfer platform, across networking, secure transfer flows, reliability, and product polish.',
    highlights: [
      'Direct file-transfer workflows without centralized servers',
      'UPnP, NAT hole punching, role reversal, and connection reliability',
      'AES-256 encryption, secure key exchange, and file verification',
      'Smart chunking for large-file transfer across platforms',
    ],
    link: 'https://plink-revamp-frontend.onrender.com',
  },

  {
    role: 'Edge AI & Systems Projects',
    company: 'Personal Projects',
    period: 'Ongoing',
    description:
      'Creating embedded, edge AI, and computer vision projects that connect experiments with deployable implementations.',
    highlights: [
      'Jetson, ESP32-CAM, Arduino, and Raspberry Pi workflows',
      'Live inference, sensor feedback, and system integration',
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
    organization: 'Designerds — Design Club, IIT Jodhpur',
    period: 'Aug. 2025 – Apr. 2026',
    highlights: [
      'Organized workshops on design principles and industry-standard design tools.',
      'Coordinated design competitions and club events throughout the academic year.',
    ],
  },

  {
    role: 'Student Guide',
    organization: 'Student Wellbeing Committee (SWC)',
    period: 'Aug. 2025 – Apr. 2026',
    highlights: [
      'Mentored 12 first-year students through academic and personal transition challenges.',
      'Provided consistent guidance to support student adaptation and growth.',
    ],
  },

  {
    role: 'Core Member',
    organization: 'Inside — Game Development Society',
    period: 'Aug. 2025 – Apr. 2026',
    highlights: [
      'Mentored junior members through technical workshops and collaborative sessions.',
      'Guided a student game-development project from ideation through implementation.',
    ],
  },

  {
    role: 'Assistant Head',
    organization: "Ignus '26",
    period: 'Jan. 2026 – Feb. 2026',
    highlights: [
      'Led volunteers for design-focused event execution during IIT Jodhpur’s cultural fest.',
      'Organized and coordinated campus-wide design competitions.',
    ],
  },

  {
    role: 'Assistant Head',
    organization: "Prometeo '26",
    period: 'Oct. 2025 – Jan. 2026',
    highlights: [
      'Led a team of 15 volunteers for event coordination and execution.',
      'Contributed to event design and operational planning for the annual tech fest.',
    ],
  },

  {
    role: 'Assistant Head',
    organization: "Varchas '25",
    period: 'Sep. 2025 – Nov. 2025',
    highlights: [
      'Led 20 volunteers during event operations and coordination.',
      'Supported design and execution workflows for the annual sports fest.',
    ],
  },
]

export const contactMethods: ContactMethod[] = [
  { label: 'GitHub', value: 'github.com/aditya8281', href: 'https://github.com/aditya8281' },
  { label: 'LinkedIn', value: 'linkedin.com/in/adityarathod2912', href: 'https://www.linkedin.com/in/adityarathod2912/' },
  { label: 'Email', value: 'aditya.rathod2912@gmail.com', href: 'mailto:aditya.rathod2912@gmail.com' },
]
