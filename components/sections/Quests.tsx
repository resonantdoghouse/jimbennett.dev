import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useSound } from "../../hooks/useSound";

interface QuestItemProps {
  icon: string;
  title: string;
  company: string;
  date: string;
  desc: string;
  index: number;
  onHover: () => void;
}

const QuestItem: React.FC<QuestItemProps> = ({
  icon,
  title,
  company,
  date,
  desc,
  index,
  onHover,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="bg-card border border-border p-6 flex gap-5 relative overflow-hidden transition-all duration-300 hover:border-accent-secondary hover:translate-x-2 group"
      onMouseEnter={onHover}
      initial={
        shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.5,
        delay: shouldReduceMotion ? 0 : index * 0.1,
      }}
    >
      {/* Sidebar Accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-accent" />

      <div className="text-3xl min-w-[60px] flex items-center justify-center bg-accent/10 text-accent rounded-lg h-16 self-center">
        {icon}
      </div>

      <div>
        <h3 className="font-bold text-xl mb-1">{title}</h3>
        <h4 className="text-accent font-bold mb-2">{company}</h4>
        <span className="font-mono text-xs bg-background px-2 py-1 border border-border inline-block mb-3">
          {date}
        </span>
        <p className="text-text-muted">{desc}</p>
      </div>
    </motion.div>
  );
};

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
            title="Lead Educator & Team Lead, Software Engineering Bootcamp"
            company="BrainStation"
            date="Jan 2020 - Present"
            desc="Overseeing rigorous bootcamps covering front-end and back-end development. Mentoring students in JavaScript, React, Node.js, and Express."
            index={0}
            onHover={() => playSound("jump")}
          />
          <QuestItem
            icon="🚀"
            title="Lead Web Development Instructor"
            company="Red Academy"
            date="Jun 2017 - Jan 2020"
            desc="Designed and taught comprehensive curriculums for WordPress and full-stack development. Mentored students to create professional-grade applications at RED Academy."
            index={1}
            onHover={() => playSound("jump")}
          />
          <QuestItem
            icon="🛠️"
            title="Web Developer & Project Manager"
            company="Freelance - Build Creative Websites"
            date="2016 - 2018"
            desc="Delivered custom WordPress solutions and mobile apps for diverse clients. Managed projects from concept to deployment, ensuring high-quality functional designs."
            index={2}
            onHover={() => playSound("jump")}
          />
          <QuestItem
            icon="🎨"
            title="Front End Web Developer"
            company="Advisor Websites"
            date="Jan 2014 - Nov 2016"
            desc="Designed mockups and built custom Drupal themes. Created visually stunning, user-friendly websites with high-volume production capabilities."
            index={3}
            onHover={() => playSound("jump")}
          />
          <QuestItem
            icon="💻"
            title="Web Developer"
            company="Qwick Media"
            date="2009 - 2013"
            desc="Developed and maintained a diverse portfolio of company and client websites utilizing the Drupal CMS framework. Prototyped and built interactive touch-screen applications using Adobe Flex to create specialized user experiences for kiosk hardware."
            index={4}
            onHover={() => playSound("jump")}
          />
          <QuestItem
            icon="📈"
            title="Web Developer, Designer & SEO Strategist"
            company="Vancouver Media Group"
            date="2006 - 2009"
            desc="Worked on websites for Whistler Olympic Accommodations and Financial Advisors using Joomla, JavaScript, and jQuery. Developed the Hardcore Championship Fighting project, creating interactive Flash fighter cards, the main website, fighter cutouts, TV/web graphics, and composed the project's music."
            index={5}
            onHover={() => playSound("jump")}
          />
        </div>
      </div>
    </section>
  );
};

export default Quests;
