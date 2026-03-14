import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const fullText = "Codificando o amanhã com bits e neurônios.";

const HeroSection = () => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(fullText.slice(0, i));
      if (i >= fullText.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 45);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.querySelector("#projetos")?.scrollIntoView({ behavior: "auto", block: "start" });
  };

  return (
    <section className="min-h-[90vh] flex items-center relative grid-bg overflow-hidden">
      <div className="container py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="max-w-3xl"
        >
          <p className="text-xs text-muted-foreground tracking-[0.15em] mb-4">
            SYSTEM.INIT //
          </p>

          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground mb-2">
            Matheus Diógenes
          </h2>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05] terminal-glow text-primary mb-6">
            {displayed}
            <span className={`${done ? "cursor-blink" : ""} text-accent`}>_</span>
          </h1>

          <p className="text-sm md:text-base text-muted-foreground max-w-xl leading-relaxed mb-4">
            Matheus Diógenes — Estudante de Desenvolvimento de Sistemas explorando Inteligência Artificial, Web Development e automação.
          </p>

          <p className="text-xs text-muted-foreground/60 mb-8 tracking-wide">
            LOC: EEEP Comendador Miguel Gurgel // STACK: Python, JS, AI
          </p>

          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={scrollToProjects}
            className="btn-cta"
          >
            {">"} VER PROJETOS
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
