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
  username: string;
  repoName: string;
}

const projects: Project[] = [
  {
    title: 'mcserver-info',
    description: 'A lightweight API service built in Go to fetch real-time information about any Minecraft server — including version, player count, MOTD, and online status.',
    icon: '🌐',
    stars: 5,
    forks: 5,
    language: 'Go',
    languageColor: '89e051',
    repo: 'https://github.com/iamsparkedev/mcserver-info',
    username: 'iamsparkedev',
    repoName: 'mcserver-info',
  },
  {
    title: 'What2Do',
    description: 'A CLI TO-DO APP.',
    icon: '🤖',
    stars: 4,
    forks: 3,
    language: 'Java',
    languageColor: 'b07219',
    repo: 'https://github.com/iamsparkedev/What2do',
    username: 'iamsparkedev',
    repoName: 'what2do',
  },
  {
    title: 'SoulFireClient',
    description: 'Frontend client for SoulFire.',
    icon: '👤',
    stars: 37,
    forks: 1,
    language: 'TypeScript',
    languageColor: '2b7489',
    repo: 'https://github.com/username/SoulFireClient',
    username: 'username',
    repoName: 'SoulFireClient',
  },
  {
    title: 'PistonMOTD',
    description: 'Control your Minecraft server\'s MOTD. Supports RGB colors and multiple platforms.',
    icon: '⚡',
    stars: 4,
    forks: 0,
    language: 'Java',
    languageColor: 'b07219',
    repo: 'https://github.com/username/PistonMOTD',
    username: 'username',
    repoName: 'PistonMOTD',
  },
  {
    title: 'PistonQueue',
    description: 'Powerful queue plugin for anarchy/survival servers.',
    icon: '🕐',
    stars: 9,
    forks: 9,
    language: 'Java',
    languageColor: 'b07219',
    repo: 'https://github.com/username/PistonQueue',
    username: 'username',
    repoName: 'PistonQueue',
  },
  {
    title: 'PistonPost',
    description: 'Open source platform inspired by Reddit.',
    icon: '📄',
    stars: 3,
    forks: 0,
    language: 'TypeScript',
    languageColor: '2b7489',
    repo: 'https://github.com/username/PistonPost',
    username: 'username',
    repoName: 'PistonPost',
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
                <img
                  src={`https://img.shields.io/github/stars/${project.username}/${project.repoName}?style=flat-square&logo=github&logoColor=white&labelColor=6b2a38&color=white&label=Stars`}
                  alt={`${project.title} stars`}
                  className="shields-badge"
                />
                <img
                  src={`https://img.shields.io/github/forks/${project.username}/${project.repoName}?style=flat-square&logo=github&logoColor=white&labelColor=6b2a38&color=white&label=Forks`}
                  alt={`${project.title} forks`}
                  className="shields-badge"
                />
                <img
                  src={`https://img.shields.io/badge/%20%20-white?style=flat-square&logoColor=white&labelColor=6b2a38&color=${project.languagecolor}&label=${project.language}`}
                  alt={`${project.title} language`}
                  className="shields-badge"
                /> 
                
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

