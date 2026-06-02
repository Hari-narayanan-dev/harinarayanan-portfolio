import { motion } from "framer-motion";
import { Section } from "./Section";
import { Counter } from "./Counter";
import { Building2, CheckCircle2 } from "lucide-react";
const achievements = [
    "Architected the AI-powered invoice processing pipeline from scratch",
    "Built Elasticsearch fuzzy matching for vendor & invoice reconciliation",
    "Integrated OpenAI and Gemini APIs with cost-aware fallback logic",
    "Designed scalable backend batch processing services",
    "Led AWS S3 → Azure Blob migration with zero downtime",
    "Designed cloud-agnostic download & storage abstractions",
];
const achievements_intern = [
    "Developed an AI-powered chatbot using OpenAI APIs to answer user queries about company products and services by integrating with the organization's knowledge base.",
    "Engineered a cloud-agnostic bulk file download platform integrating AWS S3, Azure Blob Storage, and external asset sources with automated ZIP generation and email-based delivery.",
    "Created postman flow for API testing and documentation.",
    "Performed R&D on AI-driven invoice parsing solutions combined with rule-based validation mechanisms to enhance data reliability.",
    "Worked on Internal portal development using React and Tailwind CSS to streamline team workflows and provide real-time insights into system performance.",
];
const stats = [
    { value: 200000, suffix: "+", label: "Invoices processed" },
    { value: 13, prefix: "₹", suffix: "+ Cr", label: "GST value reconciled" },
    { value: 30, suffix: "%", label: "Accuracy uplift" },
    { value: 40, suffix: "%", label: "Manual effort removed" },
];
export function Experience() {
    return (<Section id="experience" eyebrow="Experience" title={<>Real systems. <span className="text-gradient-primary">Real impact.</span></>} description="Two years of compounding work — measured in invoices reconciled, hours returned, and rupees saved.">
      <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (<motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="relative overflow-hidden rounded-2xl glass gradient-border p-6">
            <div className="text-3xl font-display font-semibold text-gradient sm:text-4xl">
              <Counter to={s.value} prefix={s.prefix} suffix={s.suffix}/>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
          </motion.div>))}
      </div>

      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent sm:left-6"/>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative ml-12 sm:ml-16">
          <div className="absolute -left-12 sm:-left-16 top-2 grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-primary to-accent shadow-glow ring-4 ring-background">
            <Building2 className="h-4 w-4 text-primary-foreground"/>
          </div>
          <div className="rounded-2xl glass gradient-border p-6 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <div className="font-display text-xl font-semibold">Software Developer</div>
                <div className="text-sm text-muted-foreground">Finkraft.ai · Backend & AI Systems Focus</div>
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Jul 2024 — Present
              </div>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {achievements.map((a) => (<li key={a} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"/>
                  <span>{a}</span>
                </li>))}
            </ul>
          </div>
        </motion.div>
      </div>
      <div className="relative top-10">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent sm:left-6"/>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative ml-12 sm:ml-16">
          <div className="absolute -left-12 sm:-left-16 top-2 grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-primary to-accent shadow-glow ring-4 ring-background">
            <Building2 className="h-4 w-4 text-primary-foreground"/>
          </div>
          <div className="rounded-2xl glass gradient-border p-6 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <div className="font-display text-xl font-semibold">Full-stack Developer</div>
                <div className="text-sm text-muted-foreground">Finkraft.ai · Internship</div>
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Jul 2024 — Present
              </div>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {achievements_intern.map((a) => (<li key={a} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"/>
                  <span>{a}</span>
                </li>))}
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>);
}
