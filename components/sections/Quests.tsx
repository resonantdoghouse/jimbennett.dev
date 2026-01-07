import React from "react";
import { useSound } from "../../contexts/SoundContext";

interface QuestItemProps {
  icon: string;
  title: string;
  date: string;
  desc: string;
  onHover: () => void;
}

const QuestItem: React.FC<QuestItemProps> = ({
  icon,
  title,
  date,
  desc,
  onHover,
}) => (
  <div
    className="bg-card border border-border p-6 flex gap-5 relative overflow-hidden transition-all duration-300 hover:border-accent-secondary hover:translate-x-2 group"
    onMouseEnter={onHover}
  >
    {/* Sidebar Accent */}
    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-accent" />

    <div className="text-3xl min-w-[60px] flex items-center justify-center bg-accent/10 text-accent rounded-lg h-16 self-center">
      {icon}
    </div>

    <div>
      <h3 className="font-bold text-xl mb-1">{title}</h3>
      <span className="font-mono text-xs bg-background px-2 py-1 border border-border inline-block mb-3">
        {date}
      </span>
      <p className="text-text-muted">{desc}</p>
    </div>
  </div>
);

const Quests: React.FC = () => {
  const { playSound } = useSound();

  return (
    <section id="quests" className="py-24 relative">
      <div className="max-w-[1100px] mx-auto px-5">
        <h2 className="text-4xl font-extrabold mb-10 flex items-center gap-4 pixel-underline">
          Quests
        </h2>

        <div className="flex flex-col gap-6">
          <QuestItem
            icon="🎓"
            title="Lead Educator & Team Lead"
            date="Jan 2020 - Present"
            desc="Overseeing rigorous bootcamps covering front-end and back-end development. Mentoring students in JavaScript, React, Node.js, and Express."
            onHover={() => playSound("hover")}
          />
          <QuestItem
            icon="💻"
            title="Senior Web Developer"
            date="17+ Years Experience"
            desc="Specializing in creative coding, generative art, and interactive web applications. Expertise in JavaScript, CSS, and modern frameworks."
            onHover={() => playSound("hover")}
          />
          <QuestItem
            icon="🚀"
            title="Lead Web Development Instructor"
            date="Jun 2017 - Jan 2020"
            desc="Designed and taught comprehensive curriculums for WordPress and full-stack development. Mentored students to create professional-grade applications at RED Academy."
            onHover={() => playSound("hover")}
          />
          <QuestItem
            icon="🛠️"
            title="Web Developer & Project Manager"
            date="2016 - 2018"
            desc="Delivered custom WordPress solutions and mobile apps for diverse clients. Managed projects from concept to deployment, ensuring high-quality functional designs."
            onHover={() => playSound("hover")}
          />
          <QuestItem
            icon="🎨"
            title="Front End Web Developer"
            date="Jan 2014 - Nov 2016"
            desc="Designed mockups and built custom Drupal themes. Created visually stunning, user-friendly websites with high-volume production capabilities."
            onHover={() => playSound("hover")}
          />
        </div>
      </div>
    </section>
  );
};

export default Quests;
