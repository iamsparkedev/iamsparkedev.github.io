import React from "react";
import "./Badges.css";

interface Badge {
  name: string;
  slug: string;
  color: string;
  logoColor?: string;
}

const badges: Badge[] = [
  { name: "Golang", slug: "go", color: "00ADD8" },
  { name: "JavaScript", slug: "javascript", color: "F7DF1E", logoColor: "black" },
  { name: "Linux", slug: "linux", color: "FCC624", logoColor: "black" },
  { name: "GitHub Actions", slug: "githubactions", color: "2088FF" },
  { name: "MongoDB", slug: "mongodb", color: "47A248" },
  { name: "MySQL", slug: "mysql", color: "4479A1" },
  { name: "HTML5", slug: "html5", color: "E34F26" },
  { name: "Postgres", slug: "postgresql", color: "4169E1" },
  { name: "Python", slug: "python", color: "3776AB" },
  { name: "Vercel", slug: "vercel", color: "000000" },
  { name: "Raspberry Pi", slug: "raspberrypi", color: "A22846" },
  { name: "Git", slug: "git", color: "F05032" },
  { name: "GitHub", slug: "github", color: "181717" },
  { name: "Docker", slug: "docker", color: "2496ED" },
  { name: "Nginx", slug: "nginx", color: "009639" },
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
              className="badge-wrapper"
              style={{ animationDelay: `${index * 0.05}s` } as React.CSSProperties}
            >
              <div className="badge-bottom"></div>
              <div className="badge-top">
                <img
                  src={`https://img.shields.io/badge/${encodeURIComponent(badge.name)}-${badge.color}?style=for-the-badge&logo=${badge.slug}&logoColor=${badge.logoColor || 'white'}`}
                  alt={badge.name}
                  className="badge-image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Badges;
