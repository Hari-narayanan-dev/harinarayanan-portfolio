import { motion } from "framer-motion";
export function Section({ id, eyebrow, title, description, children, className = "", }) {
    return (<section id={id} className={`relative mx-auto max-w-6xl px-4 py-24 sm:py-32 ${className}`}>
      {(eyebrow || title || description) && (<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="mx-auto mb-14 max-w-2xl text-center">
          {eyebrow && (<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border glass px-3 py-1 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-primary"/> {eyebrow}
            </div>)}
          {title && (<h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              {title}
            </h2>)}
          {description && (<p className="mt-4 text-base text-muted-foreground sm:text-lg">{description}</p>)}
        </motion.div>)}
      {children}
    </section>);
}
