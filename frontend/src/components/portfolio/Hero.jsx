import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin, Sparkles } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { SearchChatbox } from "./SearchChatbox";
const phrases = [
    "Scalable AI Systems",
    "LLM Integrations",
    "Fintech-Grade Backends",
    "Search-Driven Architecture",
    "Production-Ready SaaS",
];
function Typing() {
    const [idx, setIdx] = useState(0);
    const [sub, setSub] = useState(0);
    const [del, setDel] = useState(false);
    useEffect(() => {
        const word = phrases[idx];
        if (!del && sub === word.length) {
            const t = setTimeout(() => setDel(true), 1600);
            return () => clearTimeout(t);
        }
        if (del && sub === 0) {
            setDel(false);
            setIdx((i) => (i + 1) % phrases.length);
            return;
        }
        const t = setTimeout(() => setSub((s) => s + (del ? -1 : 1)), del ? 35 : 70);
        return () => clearTimeout(t);
    }, [sub, del, idx]);
    return (<span className="text-gradient-primary font-medium">
      {phrases[idx].slice(0, sub)}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] -mb-1 animate-pulse bg-primary"/>
    </span>);
}
function Beams() {
    return (<div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {[0, 1, 2, 3].map((i) => (<div key={i} className="absolute top-0 h-[200vh] w-px bg-gradient-to-b from-transparent via-primary/60 to-transparent animate-beam" style={{ left: `${15 + i * 22}%`, animationDelay: `${i * 1.7}s`, animationDuration: `${7 + i}s` }}/>))}
    </div>);
}
export function Hero() {
    return (<section id="top" className="relative min-h-screen overflow-hidden pt-32 pb-20">
      <Beams />
      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="mx-auto mt-10 max-w-lg px-2">
          <SearchChatbox />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mx-auto flex max-w-fit items-center gap-2 rounded-full border border-border glass px-4 py-1.5 text-xs text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"/>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"/>
          </span>
          Available for senior backend & AI engineering roles
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-8 text-center font-display text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-[88px] lg:leading-[1.02]">
          <span className="text-gradient">Harinarayanan Pari</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mx-auto mt-6 max-w-2xl text-center text-lg text-muted-foreground sm:text-xl">
          Full-Stack & AI Systems Engineer crafting{" "}
          <Typing />{" "}
          — turning ambiguous problems into production-grade infrastructure.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }} className="mt-8 flex items-center justify-center gap-3 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4"/> Bengaluru, India</span>
          <span className="h-3 w-px bg-border"/>
          <span className="inline-flex items-center gap-1.5"><Sparkles className="h-4 w-4 text-primary"/> 2+ yrs · LLM · Search · Scale</span>
        </motion.div>

        {/* <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="mx-auto mt-10 max-w-lg px-2">
          <SearchChatbox />
        </motion.div> */}

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }} className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <MagneticButton href="#projects" variant="primary">
            View Projects <ArrowRight className="h-4 w-4"/>
          </MagneticButton>
          <MagneticButton href="#contact" variant="ghost">
            Contact Me
          </MagneticButton>
          <MagneticButton href="/resume.pdf" variant="ghost" download>
            <Download className="h-4 w-4"/> Resume
          </MagneticButton>
        </motion.div>

        {/* Floating tech chips */}
        <div aria-hidden className="pointer-events-none mt-20 hidden md:block">
          <div className="relative h-32">
            {["Python", "Next.js", "Flask", "OpenAI", "Gemini", "Elasticsearch", "MongoDB", "AWS"].map((t, i) => (<motion.div key={t} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + i * 0.06, duration: 0.6 }} className="absolute animate-float rounded-full border border-border glass px-3 py-1 text-xs text-muted-foreground" style={{
                left: `${4 + i * 12}%`,
                top: `${(i % 3) * 28}px`,
                animationDelay: `${i * 0.4}s`,
            }}>
                {t}
              </motion.div>))}
          </div>
        </div>
      </div>
    </section>);
}
