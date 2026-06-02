import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Briefcase, Code2, Mail, Rocket, Sparkles, User } from "lucide-react";
const items = [
    { icon: User, label: "About", href: "#about" },
    { icon: Sparkles, label: "Skills", href: "#skills" },
    { icon: Briefcase, label: "Experience", href: "#experience" },
    { icon: Code2, label: "Projects", href: "#projects" },
    { icon: Rocket, label: "Why hire me", href: "#why" },
    { icon: Mail, label: "Contact", href: "#contact" },
];
export function CommandPalette({ open, onOpenChange }) {
    const [q, setQ] = useState("");
    useEffect(() => { if (!open)
        setQ(""); }, [open]);
    const filtered = items.filter((i) => i.label.toLowerCase().includes(q.toLowerCase()));
    return (<AnimatePresence>
      {open && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 grid place-items-start justify-items-center bg-background/70 pt-[15vh] backdrop-blur-sm" onClick={() => onOpenChange(false)}>
          <motion.div initial={{ y: -10, opacity: 0, scale: 0.98 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: -10, opacity: 0, scale: 0.98 }} transition={{ duration: 0.18 }} onClick={(e) => e.stopPropagation()} className="w-[92%] max-w-xl overflow-hidden rounded-2xl glass-strong shadow-elegant gradient-border">
            <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Type a command or search…" className="w-full bg-transparent px-5 py-4 text-base outline-none placeholder:text-muted-foreground"/>
            <div className="max-h-[50vh] overflow-y-auto border-t border-border p-2">
              {filtered.length === 0 && (<div className="px-3 py-6 text-center text-sm text-muted-foreground">No matches</div>)}
              {filtered.map((i) => (<a key={i.href} href={i.href} onClick={() => onOpenChange(false)} className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm hover:bg-secondary">
                  <i.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary"/>
                  <span className="flex-1">{i.label}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition group-hover:opacity-100"/>
                </a>))}
            </div>
          </motion.div>
        </motion.div>)}
    </AnimatePresence>);
}
