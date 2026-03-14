import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Data Analysis Bot",
    desc: "Projeto de análise de dados automatizada com Python e bibliotecas de ML.",
    tags: ["python", "pandas", "ai"],
    github: "#",
    demo: "#",
  },
  {
    title: "Smart Home Automation",
    desc: "Sistema de automação residencial com sensores IoT e controle via web.",
    tags: ["python", "flask", "javascript"],
    github: "#",
    demo: "#",
  },
  {
    title: "AI Language Model",
    desc: "Projeto experimental com modelos de linguagem e geração de texto.",
    tags: ["python", "ai", "apis"],
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projetos" className="py-20 border-t border-border">
      <div className="container">
        <p className="text-xs text-muted-foreground tracking-[0.15em] mb-2">// MODULES</p>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-foreground mb-10">
          Projetos
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
              className="project-card rounded-sm group"
            >
              {/* Grid overlay area */}
              <div className="aspect-video bg-secondary/30 relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backgroundImage: `linear-gradient(hsla(145,63%,49%,0.08) 1px, transparent 1px), linear-gradient(90deg, hsla(145,63%,49%,0.08) 1px, transparent 1px)`,
                    backgroundSize: "20px 20px",
                    mixBlendMode: "overlay",
                  }}
                />
                <div className="absolute bottom-3 left-3 flex gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] text-muted-foreground font-mono">
                      [ {t} ]
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-foreground mb-1.5 text-sm">{p.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{p.desc}</p>

                <div className="flex gap-3">
                  <a href={p.github} className="btn-outline-terminal text-xs py-1.5 px-3">
                    <Github size={12} /> Código
                  </a>
                  <a href={p.demo} className="btn-outline-terminal text-xs py-1.5 px-3">
                    <ExternalLink size={12} /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
