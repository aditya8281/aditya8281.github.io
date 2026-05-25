# Adi Portfolio

A modern, interactive personal portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, terminal-style intro, particle effects, and a responsive design.

## 🌟 Features

- **Interactive Hero Section** - Terminal-style typewriter introduction with smooth animations
- **Particle Effects** - Dynamic background particles and animated orbs
- **Smooth Animations** - Framer Motion-powered animations and transitions
- **Responsive Design** - Fully responsive layout using Tailwind CSS
- **Dark Theme** - Modern dark-themed UI with great contrast
- **Multiple Sections**:
  - About Section
  - Skills with categorized badges
  - Projects with modal previews
  - Experience timeline
  - Leadership highlights
  - Contact information
  - Exploring section

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd adi-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

The website will be available at `http://localhost:5173`

## 📦 Build

To create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist/` directory.

## 🛠️ Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally

## 📁 Project Structure

```
├── src/
│   ├── components/          # Reusable React components
│   ├── sections/            # Page sections
│   ├── hooks/               # Custom React hooks
│   ├── utils/               # Utility functions
│   ├── data/                # Portfolio data
│   ├── assets/              # Images and static assets
│   ├── App.tsx              # Main App component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static files
├── index.html               # HTML entry point
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── eslint.config.js         # ESLint configuration
```

## 🎨 Technologies

- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Vite** - Fast build tool and dev server
- **React Icons** - Icon library

## 🎯 Customization

### Update Portfolio Data

Edit `src/data/portfolio.ts` to customize:
- Personal information
- Skills and categories
- Projects and experience
- Links and contact information

### Modify Styling

- **Colors & Theme**: Update `tailwind.config.ts`
- **Global Styles**: Edit `src/index.css`
- **Component Styles**: Modify individual component CSS files

## 📝 License

This project is open source and available under the MIT License.

## 💬 Questions?

Feel free to reach out or create an issue for suggestions and improvements!

---

**Crafted by Aditya Rathod**
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
