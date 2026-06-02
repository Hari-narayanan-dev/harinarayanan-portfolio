import { useRef } from "react";
import { motion } from "framer-motion";
export function MagneticButton({ children, href, onClick, variant = "primary", download, type, className = "" }) {
    const ref = useRef(null);
    const onMove = (e) => {
        const el = ref.current;
        if (!el)
            return;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);
        el.style.transform = `translate(${x * 0.2}px, ${y * 0.3}px)`;
    };
    const onLeave = () => {
        if (ref.current)
            ref.current.style.transform = "translate(0,0)";
    };
    const base = "relative inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-all duration-300 will-change-transform";
    const styles = variant === "primary"
        ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-glow hover:shadow-glow-strong"
        : "glass text-foreground hover:bg-secondary";
    const inner = (<motion.div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={`${base} ${styles} ${className}`} style={{ transition: "transform 0.25s cubic-bezier(.2,.8,.2,1)" }}>
      {variant === "primary" && (<span className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-primary to-accent opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-70"/>)}
      {children}
    </motion.div>);
    if (href) {
        return (<a href={href} download={download} className="group inline-block" onClick={onClick}>
        {inner}
      </a>);
    }
    return (<button type={type} onClick={onClick} className="group inline-block">
      {inner}
    </button>);
}
