import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/Matheusdiogenes951" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/matheus-di%C3%B3genes-493478396/" },
  { icon: Mail, label: "Email", href: "mailto:matheusdiorgines26@gmail.com" },
];

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 border-t border-border">
      <div className="container text-center">
        <p className="text-xs text-muted-foreground tracking-[0.15em] mb-2">// CONTACT</p>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-foreground mb-6">
          Contato
        </h2>

        <div className="flex justify-center gap-4 mb-10">
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.98 }}
              className="w-10 h-10 border border-border rounded-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-200"
              aria-label={s.label}
            >
              <s.icon size={16} />
            </motion.a>
          ))}
        </div>

        <motion.a
          href="mailto:matheusdiorgines26@gmail.com"
          whileTap={{ scale: 0.98 }}
          className="btn-cta inline-flex"
        >
          {">"} VAMOS CONVERSAR?
        </motion.a>
      </div>

      <div className="container mt-20 pt-6 border-t border-border/50">
        <p className="text-xs text-muted-foreground/40 text-center">
          © 2026 Matheus Diógenes — Construído com código e café.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
