# Personal Portfolio Site

A modern, animated personal portfolio website built with TypeScript and React, inspired by a clean, minimalist design with diagonal color splits and interactive elements.

## Features

- 🎨 **Modern Design**: Clean, minimalist aesthetic with diagonal color splits
- ✨ **Rich Animations**: Waving emoji, scroll indicators, hover effects, and smooth transitions
- 🎯 **Interactive Project Cards**: Clickable cards that link to GitHub repositories
- 🏷️ **Skills Badges**: Animated badge grid showcasing technologies and tools
- 📱 **Responsive**: Works beautifully on all screen sizes
- 🚀 **GitHub Pages Ready**: Configured for easy deployment

## Tech Stack

- **TypeScript**: Type-safe development
- **React**: Component-based UI
- **Vite**: Fast build tool and dev server
- **CSS3**: Custom animations and styling

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd personal-site
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment to GitHub Pages

1. Update the `base` path in `vite.config.ts` to match your repository name:
```typescript
base: '/your-repo-name/',
```

2. Push your code to the `main` branch

3. The GitHub Actions workflow will automatically build and deploy to GitHub Pages on every push to `main`

4. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Source: GitHub Actions

## Customization

### Update Personal Information

- Edit `src/components/Hero.tsx` to change the name and description
- Update social media links in `src/components/Hero.tsx` and `src/components/Footer.tsx`

### Add Your Projects

Edit `src/components/Projects.tsx` and update the `projects` array with your own projects:

```typescript
const projects: Project[] = [
  {
    title: 'Your Project',
    description: 'Project description',
    icon: '🎯',
    stars: 0,
    forks: 0,
    language: 'TypeScript',
    languageColor: '#2b7489',
    repo: 'https://github.com/username/repo',
  },
  // ... more projects
];
```

### Update Badges

Edit `src/components/Badges.tsx` and modify the `badges` array with your skills and technologies.

## License

MIT

