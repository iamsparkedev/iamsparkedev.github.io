import React from 'react';
import './Badges.css';

interface Badge {
  name: string;
  icon: string;
  color?: string;
}

const badges: Badge[] = [
  { name: 'Firefox', icon: '🦊', color: '#ff7139' },
  { name: 'Dependabot', icon: '🤖', color: '#025e8c' },
  { name: 'MariaDB', icon: '🗄️', color: '#c49a39' },
  { name: 'WebStorm', icon: '💻', color: '#000000' },
  { name: 'CSS3', icon: '🎨', color: '#1572b6' },
  { name: 'JavaScript', icon: '📜', color: '#f7df1e' },
  { name: 'Microsoft Office', icon: '📊', color: '#ea3e23' },
  { name: 'Linux', icon: '🐧', color: '#fcc624' },
  { name: 'GitHub Actions', icon: '⚙️', color: '#2088ff' },
  { name: 'Java', icon: '☕', color: '#ed8b00' },
  { name: 'MongoDB', icon: '🍃', color: '#47a248' },
  { name: 'MySQL', icon: '🗄️', color: '#4479a1' },
  { name: 'TypeScript', icon: '📘', color: '#3178c6' },
  { name: 'Debian', icon: '🔴', color: '#a81d33' },
  { name: 'Spotify', icon: '🎵', color: '#1db954' },
  { name: 'HTML5', icon: '🌐', color: '#e34f26' },
  { name: 'Node.js', icon: '🟢', color: '#339933' },
  { name: 'GIMP', icon: '🖼️', color: '#5c5543' },
  { name: 'Next.js', icon: '▲', color: '#000000' },
  { name: 'React', icon: '⚛️', color: '#61dafb' },
  { name: 'IntelliJ IDEA', icon: '💡', color: '#000000' },
  { name: 'Vercel', icon: '▲', color: '#000000' },
  { name: 'NPM', icon: '📦', color: '#cb3837' },
  { name: 'Google', icon: '🔍', color: '#4285f4' },
  { name: 'Jenkins', icon: '🔧', color: '#d24939' },
  { name: 'Gradle', icon: '📦', color: '#02303a' },
  { name: 'Raspberry Pi', icon: '🍓', color: '#c51a4a' },
  { name: 'Git', icon: '📚', color: '#f05032' },
  { name: 'GitHub', icon: '🐙', color: '#181717' },
  { name: 'Docker', icon: '🐳', color: '#2496ed' },
  { name: 'PlayStation 4', icon: '🎮', color: '#003087' },
  { name: 'LineageOS', icon: '📱', color: '#167c80' },
  { name: 'Android', icon: '🤖', color: '#3ddc84' },
  { name: 'Nginx', icon: '🌐', color: '#009639' },
  { name: 'Windows', icon: '🪟', color: '#0078d4' },
  { name: 'Microsoft', icon: '🪟', color: '#0078d4' },
  { name: 'Pop!_OS', icon: '🖥️', color: '#48b9c7' },
  { name: 'Samsung', icon: '📱', color: '#1428a0' },
];

const Badges: React.FC = () => {
  return (
    <section className="badges">
      <div className="badges-container">
        <h2 className="badges-title">Me in badges</h2>
        
        <div className="badges-grid">
          {badges.map((badge, index) => (
            <div
              key={badge.name}
              className="badge"
              style={{
                animationDelay: `${index * 0.05}s`,
                '--badge-color': badge.color || '#44475a',
              } as React.CSSProperties}
            >
              <span className="badge-icon">{badge.icon}</span>
              <span className="badge-name">{badge.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Badges;

