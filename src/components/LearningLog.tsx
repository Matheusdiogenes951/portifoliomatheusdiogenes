import { motion } from "framer-motion";

const logs = [
  { date: "2026-03-14", type: "RUN", text: "Explorei APIs de OpenAI para geração de conteúdo" },
  { date: "2026-03-13", type: "RUN", text: "Aprendi WebSockets para comunicação em tempo real" },
  { date: "2026-03-12", type: "REFACTOR", text: "Refatorei um script Python usando generators" },
  { date: "2026-03-11", type: "BUILD", text: "Deploy de aplicação Flask no Docker" },
  { date: "2026-03-10", type: "RUN", text: "Experimentei Whisper para speech-to-text" },
  { date: "2026-03-09", type: "DEBUG", text: "Corrigi pipeline de dados com Pandas" },
  { date: "2026-03-08", type: "RUN", text: "Estudei arquitetura de transformers" },
];

const LearningLog = () => {
  return (
    <section id="log" className="py-20 border-t border-border">
      <div className="container">
        <p className="text-xs text-muted-foreground tracking-[0.15em] mb-2">// STDOUT</p>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-foreground mb-10">
          Learning Log
        </h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-h-[400px] overflow-y-auto p-6 font-mono text-sm bg-card/40 border-l-2 border-primary rounded-sm"
        >
          {logs.map((log, i) => (
            <div key={i} className="log-entry">
              <span className="text-muted-foreground/40 shrink-0">[{log.date}]</span>
              <span className="text-primary shrink-0 terminal-glow-subtle">{log.type}</span>
              <span className="text-foreground/80">{log.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LearningLog;
