import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "SOBRE", href: "#sobre" },
  { label: "TECNOLOGIAS", href: "#tech" },
  { label: "PROJETOS", href: "#projetos" },
  { label: "LOG", href: "#log" },
  { label: "CONTATO", href: "#contato" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "auto", block: "start" });
  };

  return (
    <header className="h-14 border-b border-border/50 backdrop-blur-md sticky top-0 z-50 bg-background/80">
      <div className="container h-full flex items-center justify-between">
        <a href="#" className="text-primary font-mono font-bold text-sm terminal-glow tracking-tight">
          {">"}_&nbsp;matheus.dev<span className="cursor-blink text-primary">_</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-[11px] tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-b border-border bg-background/95 backdrop-blur-md"
        >
          <nav className="container py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-[11px] tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors text-left"
              >
                {l.label}
              </button>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
