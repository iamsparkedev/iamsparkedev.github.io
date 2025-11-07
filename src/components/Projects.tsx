import React from 'react';
import './Projects.css';

interface Project {
  title: string;
  description: string;
  icon: string;
  stars: number;
  forks: number;
  language: string;
  languageColor: string;
  repo: string;
}

const projects: Project[] = [
  {
    title: 'balena-minecraft-server',
    description: 'Build a Minecraft Server using a Raspberry Pi 4! Supports common Servers, SCP, RCON and Wifi Connect.',
    icon: '👤',
    stars: 205,
    forks: 65,
    language: 'Shell',
    languageColor: '#89e051',
    repo: 'https://github.com/username/balena-minecraft-server',
  },
  {
    title: 'SoulFire',
    description: 'Advanced Minecraft Server-Stresser Tool. Launch bot attacks on your servers to measure performance.',
    icon: '🤖',
    stars: 416,
    forks: 39,
    language: 'Java',
    languageColor: '#b07219',
    repo: 'https://github.com/username/SoulFire',
  },
  {
    title: 'SoulFireClient',
    description: 'Frontend client for SoulFire.',
    icon: '👤',
    stars: 37,
    forks: 1,
    language: 'TypeScript',
    languageColor: '#2b7489',
    repo: 'https://github.com/username/SoulFireClient',
  },
  {
    title: 'PistonMOTD',
    description: 'Control your Minecraft server\'s MOTD. Supports RGB colors and multiple platforms.',
    icon: '⚡',
    stars: 44,
    forks: 10,
    language: 'Java',
    languageColor: '#b07219',
    repo: 'https://github.com/username/PistonMOTD',
  },
  {
    title: 'PistonQueue',
    description: 'Powerful queue plugin for anarchy/survival servers.',
    icon: '🕐',
    stars: 59,
    forks: 19,
    language: 'Java',
    languageColor: '#b07219',
    repo: 'https://github.com/username/PistonQueue',
  },
  {
    title: 'PistonPost',
    description: 'Open source platform inspired by Reddit.',
    icon: '📄',
    stars: 3,
    forks: 0,
    language: 'TypeScript',
    languageColor: '#2b7489',
    repo: 'https://github.com/username/PistonPost',
  },
];

const Projects: React.FC = () => {
  const handleCardClick = (repo: string) => {
    window.open(repo, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card"
              onClick={() => handleCardClick(project.repo)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-header">
                <span className="project-folder-icon">📁</span>
                <h3 className="project-title">{project.title}</h3>
              </div>
              
              <div className="project-description">
                <span className="project-icon">{project.icon}</span>
                <p>{project.description}</p>
              </div>
              
              <div className="project-metrics">
                <div className="metric">
                  <span className="metric-icon">⭐</span>
                  <span>{project.stars}</span>
                </div>
                <div className="metric">
                  <span className="metric-icon">🍴</span>
                  <span>{project.forks}</span>
                </div>
                <div className="metric">
                  <span className="metric-icon">&lt;/&gt;</span>
                  <span 
                    className="metric-language"
                    style={{ color: project.languageColor }}
                  >
                    {project.language}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-more">
          <button className="more-button">And more!</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

