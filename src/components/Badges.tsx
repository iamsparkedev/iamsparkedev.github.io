import React from "react";
import "./Badges.css";

interface Badge {
  name: string;
  icon: string;
  color?: string;
}

const badges: Badge[] = [
  { name: "Golang", icon: "🐹", color: "#19bbd8ff" },
  { name: "JavaScript", icon: "📜", color: "#f7df1e" },
  { name: "Linux", icon: "🐧", color: "#fcc624" },
  { name: "GitHub Actions", icon: "⚙️", color: "#2088ff" },
  { name: "MongoDB", icon: "🍃", color: "#47a248" },
  { name: "MySQL", icon: "🗄️", color: "#4479a1" },
  { name: "HTML5", icon: "🌐", color: "#e34f26" },
  { name: "Postgres", icon: "🗄️", color: "#339933" },
  { name: "Python", icon: "🐍", color: "#054076ff" },
  { name: "Vercel", icon: "▲", color: "#000000" },
  { name: "Raspberry Pi", icon: "🍓", color: "#c51a4a" },
  { name: "Git", icon: "📚", color: "#f05032" },
  { name: "GitHub", icon: "🐙", color: "#181717" },
  { name: "Docker", icon: "🐳", color: "#2496ed" },
  { name: "Nginx", icon: "🌐", color: "#009639" },
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
              style={
                {
                  animationDelay: `${index * 0.05}s`,
                  "--badge-color": badge.color || "#44475a",
                } as React.CSSProperties
              }
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
