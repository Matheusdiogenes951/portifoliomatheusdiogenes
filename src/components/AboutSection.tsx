import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const aboutText = `Olá, sou um estudante apaixonado por tecnologia.
Gosto de construir projetos, explorar inteligência artificial e aprender novas ferramentas todos os dias.
Atualmente curso Desenvolvimento de Sistemas na EEEP Comendador Miguel Gurgel, onde combino lógica de programação com criatividade para resolver problemas reais.`;

const AboutSection = () => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(aboutText.slice(0, i));
      if (i >= aboutText.length) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, [started]);

  return (
    <section id="sobre" className="py-20 border-t border-border" ref={ref}>
      <div className="container">
        <p className="text-xs text-muted-foreground tracking-[0.15em] mb-2">// ABOUT</p>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-foreground mb-10">
          Sobre Mim
        </h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl p-6 border border-border rounded-sm bg-card/30"
        >
          <p className="text-sm text-foreground/80 leading-relaxed whitespace-pre-line font-mono">
            <span className="text-primary">{">"}</span> {displayed}
            <span className="cursor-blink text-primary">_</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
