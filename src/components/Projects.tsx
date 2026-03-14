import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Fila do Almoço",
    desc: "Sistema desenvolvido para a EEEP Comendador Miguel Gurgel, para versionamento de faltas e gestão de filas.",
    tags: ["html", "css", "javascript"],
    github: "https://github.com/Matheusdiogenes951/Fila-do-Almoco",
    stars: 2,
  },
  {
    title: "FightHub",
    desc: "Site que mostra vídeos da época de ouro do MMA.",
    tags: ["html", "css"],
    github: "https://github.com/Matheusdiogenes951/FightHub",
    stars: 2,
  },
  {
    title: "Site Academia Karate",
    desc: "Site desenvolvido para um dojo de Karate.",
    tags: ["html", "css"],
    github: "https://github.com/Matheusdiogenes951/Site-Academia-Karate",
    stars: 1,
  },
  {
    title: "Atividades Python",
    desc: "Exercícios de Python dos cursos Mundo 1, 2 e 3 — estudos aprofundados da linguagem.",
    tags: ["python"],
    github: "https://github.com/Matheusdiogenes951/Atividades_Python",
    stars: 2,
  },
  {
    title: "Curso JavaScript",
    desc: "Curso de JavaScript [40h] feito na plataforma Curso em Vídeo.",
    tags: ["javascript", "html"],
    github: "https://github.com/Matheusdiogenes951/Curso-JavaScript",
  },
  {
    title: "Landing Page",
    desc: "Landing page simples com links pessoais.",
    tags: ["html", "css"],
    github: "https://github.com/Matheusdiogenes951/landingpage",
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
              <div className="aspect-video bg-secondary/30 relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backgroundImage: `linear-gradient(hsla(145,63%,49%,0.08) 1px, transparent 1px), linear-gradient(90deg, hsla(145,63%,49%,0.08) 1px, transparent 1px)`,
                    backgroundSize: "20px 20px",
                    mixBlendMode: "overlay",
                  }}
                />
                <div className="absolute bottom-3 left-3 flex gap-1.5 flex-wrap">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] text-muted-foreground font-mono">
                      [ {t} ]
                    </span>
                  ))}
                </div>
                {p.stars && (
                  <span className="absolute top-3 right-3 text-[10px] text-accent font-mono">
                    ★ {p.stars}
                  </span>
                )}
              </div>

              <div className="p-5">
                <h3 className="font-bold text-foreground mb-1.5 text-sm">{p.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{p.desc}</p>

                <div className="flex gap-3">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-outline-terminal text-xs py-1.5 px-3">
                    <Github size={12} /> Código
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
