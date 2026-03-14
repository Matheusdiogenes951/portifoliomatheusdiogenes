import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:contato@gurgel.dev" },
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
              whileTap={{ scale: 0.98 }}
              className="w-10 h-10 border border-border rounded-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-200"
              aria-label={s.label}
            >
              <s.icon size={16} />
            </motion.a>
          ))}
        </div>

        <motion.button
          whileTap={{ scale: 0.98 }}
          className="btn-cta"
        >
          {">"} EXECUTE_CONTACT_SEQUENCE
        </motion.button>
      </div>

      {/* Footer */}
      <div className="container mt-20 pt-6 border-t border-border/50">
        <p className="text-xs text-muted-foreground/40 text-center">
          © 2026 gurgel.dev — Construído com código e café.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
