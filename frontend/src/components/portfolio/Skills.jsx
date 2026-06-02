import { motion } from "framer-motion";
import { Section } from "./Section";
import { Boxes, Cloud, Code2, Cpu, Server } from "lucide-react";
const groups = [
    { icon: Server, title: "Backend Engineering", items: ["Python", "Flask", "Django", "REST APIs", "System Design"] },
    { icon: Code2, title: "Frontend", items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"] },
    { icon: Cpu, title: "AI & Search Systems", items: ["OpenAI APIs", "Gemini APIs", "LLM Integration", "Prompt Engineering", "RAG", "Elasticsearch", "Fuzzy Matching"] },
    { icon: Cloud, title: "Databases & Cloud", items: ["MongoDB", "PostgreSQL", "AWS S3", "Azure Blob"] },
    { icon: Boxes, title: "Architecture", items: ["ETL Pipelines", "Data Validation", "Batch Processing", "Scalable Systems"] },
];
export function Skills() {
    return (<Section id="skills" eyebrow="Capabilities" title={<>The <span className="text-gradient-primary">technical stack</span> I ship with</>} description="A focused toolkit refined across real production systems — not a laundry list.">
      <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (<motion.div key={g.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.06 }} className={`group relative overflow-hidden rounded-2xl glass gradient-border p-6 transition-all hover:-translate-y-1 hover:shadow-glow ${i === 2 ? "lg:row-span-2" : ""}`}>
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"/>
            <div className="relative">
              <div className="mb-4 inline-grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 text-primary">
                <g.icon className="h-5 w-5"/>
              </div>
              <h3 className="font-display text-lg font-semibold">{g.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (<span key={s} className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                    {s}
                  </span>))}
              </div>
            </div>
          </motion.div>))}
      </div>
    </Section>);
}
