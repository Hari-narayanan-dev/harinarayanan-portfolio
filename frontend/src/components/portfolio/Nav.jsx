import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Command, Menu, X } from "lucide-react";
import { CommandPalette } from "./CommandPalette";
const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];
export function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [mobile, setMobile] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll);
        const onKey = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                setOpen((o) => !o);
            }
        };
        window.addEventListener("keydown", onKey);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("keydown", onKey);
        };
    }, []);
    return (<>
      <motion.header initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
        <div className="mx-auto max-w-6xl px-4">
          <div className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${scrolled ? "glass-strong shadow-elegant" : "bg-transparent"}`}>
            <a href="#top" className="group flex items-center gap-2 font-display font-semibold">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-glow">
                <span className="text-sm font-bold">H</span>
              </span>
              <span className="hidden sm:inline tracking-tight">Harinarayanan</span>
            </a>

            <nav className="hidden md:flex items-center gap-1">
              {links.map((l) => (<a key={l.href} href={l.href} className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                  {l.label}
                </a>))}
            </nav>

            {/* <div className="flex items-center gap-2">
              <button onClick={() => setOpen(true)} className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-xs text-muted-foreground transition hover:bg-secondary hover:text-foreground">
                <Command className="h-3.5 w-3.5"/>
                <span>Search</span>
                <kbd className="ml-2 rounded bg-background/60 px-1.5 py-0.5 font-mono text-[10px]">⌘K</kbd>
              </button>
              <button onClick={() => setMobile((m) => !m)} className="md:hidden grid h-9 w-9 place-items-center rounded-lg border border-border bg-secondary/50 text-foreground" aria-label="Menu">
                {mobile ? <X className="h-4 w-4"/> : <Menu className="h-4 w-4"/>}
              </button>
            </div> */}
          </div>

          {mobile && (<motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-2 grid gap-1 rounded-2xl glass-strong p-3 md:hidden">
              {links.map((l) => (<a key={l.href} href={l.href} onClick={() => setMobile(false)} className="rounded-lg px-3 py-2 text-sm hover:bg-secondary">
                  {l.label}
                </a>))}
            </motion.div>)}
        </div>
      </motion.header>

      <CommandPalette open={open} onOpenChange={setOpen}/>
    </>);
}
