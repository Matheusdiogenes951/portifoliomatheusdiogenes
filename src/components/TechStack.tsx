import { motion } from "framer-motion";

const techs = [
  "Python", "JavaScript", "HTML", "CSS", "Git", "GitHub", "AI", "APIs", "Docker", "Flask",
];

const TechStack = () => {
  return (
    <section id="tech" className="py-20 border-t border-border">
      <div className="container">
        <p className="text-xs text-muted-foreground tracking-[0.15em] mb-2">// DEPENDENCIES</p>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-foreground mb-10">
          Tech Stack
        </h2>

        <div className="flex flex-wrap gap-3">
          {techs.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.25 }}
              className="tech-chip cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
