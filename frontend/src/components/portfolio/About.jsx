import { motion } from "framer-motion";
import { Section } from "./Section";
import { Brain, Database, Layers, Search } from "lucide-react";
const pillars = [
    { icon: Brain, label: "LLM Integrations", desc: "OpenAI · Gemini · RAG · Prompt systems" },
    { icon: Search, label: "Search Infra", desc: "Elasticsearch · Fuzzy matching at scale" },
    { icon: Database, label: "Data Pipelines", desc: "ETL · Batch processing · Validation" },
    { icon: Layers, label: "Cloud Architecture", desc: "AWS S3 · Azure Blob · Cloud-agnostic" },
];
export function About() {
    return (<Section id="about" eyebrow="About" title={<>Engineer behind <span className="text-gradient-primary">production AI systems</span></>} description="I build the unglamorous parts of intelligent products — the pipelines, the search, the reconciliation, the reliability. The parts companies depend on.">
      <div className="grid gap-8 lg:grid-cols-5">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-3 space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            I'm a <span className="text-foreground font-medium">Backend & AI Systems Engineer</span> with 2+ years
            spent inside startup environments where ambiguity is the default and shipping is the only currency.
            My focus: architecting <span className="text-foreground">scalable AI-driven SaaS</span> and fintech
            infrastructure that holds up under real volume.
          </p>
          <p>
            At <span className="text-foreground">Finkraft.ai</span> I designed an end-to-end invoice
            intelligence pipeline that has processed <span className="text-foreground">200,000+ documents</span>,
            reconciled <span className="text-foreground">₹13+ crore</span> in GST value, and quietly removed
            ~40% of the manual validation burden from operators.
          </p>
          <p>
            I'm at my best where <span className="text-foreground">LLMs, search systems, and distributed
            backends</span> intersect — turning fuzzy real-world data into deterministic business outcomes.
            I think like a founder, ship like an engineer, and obsess over the boring details that make systems
            actually work in production.
          </p>
        </motion.div>

        <div className="grid gap-3 lg:col-span-2">
          {pillars.map((p, i) => (<motion.div key={p.label} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="group relative rounded-2xl glass gradient-border p-5 transition-all hover:-translate-y-0.5 hover:shadow-glow">
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 text-primary">
                  <p.icon className="h-5 w-5"/>
                </div>
                <div>
                  <div className="font-medium">{p.label}</div>
                  <div className="text-sm text-muted-foreground">{p.desc}</div>
                </div>
              </div>
            </motion.div>))}
        </div>
      </div>
    </Section>);
}
