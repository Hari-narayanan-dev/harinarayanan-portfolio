import { motion } from "framer-motion";
import { Section } from "./Section";
import { Gauge, Layers, Rocket, ShieldCheck, Sparkles, Target } from "lucide-react";
const reasons = [
    { icon: Rocket, title: "Startup Execution Speed", desc: "I ship in days what teams plan for sprints — without skipping the thinking part." },
    { icon: Sparkles, title: "AI Systems Engineering", desc: "From prompt design to model fallback, I treat LLMs as components, not magic." },
    { icon: Layers, title: "Scalable Backend Architecture", desc: "Queues, batch workers, retries, idempotency — the boring layer that earns trust." },
    { icon: ShieldCheck, title: "Production-Grade Mindset", desc: "Observability, validation, and graceful failure built in from day one." },
    { icon: Target, title: "Business-Oriented Engineering", desc: "I translate revenue, accuracy, and time-saved into code that moves the metric." },
    { icon: Gauge, title: "Ownership Mentality", desc: "I take problems end-to-end — from ambiguous Slack thread to deployed system." },
];
export function WhyHire() {
    return (<Section id="why" eyebrow="Why hire me" title={<>Senior thinking, <span className="text-gradient-primary">founder energy</span></>} description="Six reasons recruiters and engineering leaders keep coming back.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => (<motion.div key={r.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className="group relative overflow-hidden rounded-2xl glass gradient-border p-6 transition-all hover:-translate-y-1 hover:shadow-glow">
            <div className="mb-4 inline-grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 text-primary">
              <r.icon className="h-5 w-5"/>
            </div>
            <h3 className="font-display text-base font-semibold">{r.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
            <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"/>
          </motion.div>))}
      </div>
    </Section>);
}
