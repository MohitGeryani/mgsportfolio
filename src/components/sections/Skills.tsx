import React from "react";
import Tilt from "react-parallax-tilt";
import { BsPatchCheckFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const SkillCard: React.FC<{ index: number; skill: string; level: string }> = ({
  index,
  skill,
  level,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.75)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
  >
    <Tilt
      glareEnable
      tiltEnable
      tiltMaxAngleX={25}
      tiltMaxAngleY={25}
      scale={1.05}
      className="bg-tertiary p-4 rounded-xl shadow-md cursor-pointer hover:shadow-lg transition-all"
    >
      <article className="flex items-center gap-3">
        <BsPatchCheckFill className="text-green-400 text-lg" />
        <div>
          <h4 className="text-white font-semibold">{skill}</h4>
          <small className="text-gray-400">{level}</small>
        </div>
      </article>
    </Tilt>
  </motion.div>
);

const SkillGroup: React.FC<{
  title: string;
  skills: { name: string; level: string }[];
  index: number;
}> = ({ title, skills, index }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.3, 0.75)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className="bg-[#1e1e2f] p-6 rounded-2xl w-full md:w-[45%] lg:w-[40%] shadow-lg"
  >
    <h3 className="text-xl font-bold text-white mb-5 text-center">{title}</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {skills.map((s, i) => (
        <SkillCard key={s.name} index={i} skill={s.name} level={s.level} />
      ))}
    </div>
  </motion.div>
);

const Skills: React.FC = () => {
  const frontend = [
    { name: "HTML", level: "Experienced" },
    { name: "CSS", level: "Intermediate" },
    { name: "JavaScript", level: "Experienced" },
    { name: "React JS", level: "Experienced" },
    { name: "Next JS", level: "Experienced" },
    { name: "Tailwind CSS", level: "Experienced" },
    { name: "Bootstrap", level: "Experienced" },
  ];

  const backend = [
    { name: "Node JS", level: "Experienced" },
    { name: "Express JS", level: "Intermediate" },
    { name: "PostgreSQL", level: "Experienced" },
    { name: "MongoDB", level: "Experienced" },
    { name: "MySQL", level: "Experienced" },
    { name: "Python", level: "Experienced" },
    { name: "Firebase", level: "Experienced" },
  ];

  const programming = [
    { name: "C & C++", level: "Experienced" },
    { name: "OOPs", level: "Intermediate" },
    { name: "Python", level: "Intermediate" },
    { name: "Dart", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
  ];

  const other = [
    { name: "Premiere Pro", level: "Experienced" },
    { name: "Photoshop", level: "Experienced" },
    { name: "After Effects", level: "Experienced" },
  ];

  return (
    <section id="experience" className="py-16">
      <motion.h5
        variants={fadeIn("down", "spring", 0.1, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center text-gray-400"
      >
        What Skills I Have
      </motion.h5>

      <motion.h2
        variants={fadeIn("down", "spring", 0.2, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center text-4xl font-bold text-white mb-10"
      >
        My Skills
      </motion.h2>

      <div className="container mx-auto flex flex-wrap justify-center gap-10">
        <SkillGroup title="Frontend Development" skills={frontend} index={0} />
        <SkillGroup title="Backend Development" skills={backend} index={1} />
        <SkillGroup title="Programming Skills" skills={programming} index={2} />
        <SkillGroup title="Other Skills" skills={other} index={3} />
      </div>
    </section>
  );
};

export default Skills;
