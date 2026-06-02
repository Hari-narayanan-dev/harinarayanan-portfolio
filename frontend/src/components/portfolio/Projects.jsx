import { motion } from "framer-motion";
import { Section } from "./Section";
import { ArrowUpRight, Cpu, Database, FileSearch, Network } from "lucide-react";
const projects = [
    {
        icon: Cpu,
        title: "AI Invoice Processing Engine",
        tag: "Core Platform",
        problem: "Manual invoice validation was bottlenecking finance ops at scale.",
        solution: "Built an end-to-end pipeline combining OCR, LLM extraction, and rule-based validation.",
        architecture: "Async batch workers · Queue-driven · LLM ensemble (OpenAI + Gemini) · Confidence scoring",
        scale: "200,000+ invoices processed · 10,000+ documents / month",
        tech: ["Python", "Flask", "OpenAI", "Gemini", "MongoDB", "Azure Blob"],
        impact: "40% reduction in manual validation effort.",
    },
    {
        icon: Network,
        title: "GST Reconciliation Platform",
        tag: "Fintech",
        problem: "Matching enterprise invoices against GSTN filings was error-prone and slow.",
        solution: "Designed a deterministic + fuzzy reconciliation engine with explainable confidence levels.",
        architecture: "Elasticsearch fuzzy index · Multi-pass matching · Rule DSL · Audit log layer",
        scale: "₹13+ crore in GST value reconciled with full traceability.",
        tech: ["Python", "Elasticsearch", "PostgreSQL", "Flask"],
        impact: "~30% improvement in reconciliation accuracy.",
    },
    {
        icon: FileSearch,
        title: "Intelligent Document Parser",
        tag: "AI / NLP",
        problem: "Heterogeneous PDFs, scans, and emails needed a unified structured output.",
        solution: "Composable parser with adaptive prompt strategies per document class.",
        architecture: "Document classifier · Prompt router · Schema-locked LLM output · Validation gates",
        scale: "Handles 50+ vendor templates with self-healing prompts.",
        tech: ["Python", "OpenAI", "Pydantic", "MongoDB"],
        impact: "Cut onboarding for new vendor templates from days to hours.",
    },
    {
        icon: Database,
        title: "AI-Powered Search & Matching",
        tag: "Search Infra",
        problem: "Vendor master data was fragmented across legal names, GSTINs, and aliases.",
        solution: "Hybrid lexical + semantic search with tunable fuzzy thresholds.",
        architecture: "Elasticsearch · Embedding re-ranker · Caching layer · Match explainability API",
        scale: "Sub-100ms p95 across millions of vendor records.",
        tech: ["Elasticsearch", "Python", "RAG", "PostgreSQL"],
        impact: "Made vendor matching auditable and trustable for finance teams.",
    },
];
export function Projects() {
    return (<Section id="projects" eyebrow="Selected Work" title={<>Systems that <span className="text-gradient-primary">moved real numbers</span></>} description="Case-study cards — problem, solution, scale, and the business outcome.">
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((p, i) => (<motion.article key={p.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative overflow-hidden rounded-3xl glass gradient-border p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow-strong">
            {/* Decorative gradient mesh */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl opacity-50 transition-opacity duration-500 group-hover:opacity-80"/>

            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 text-primary shadow-glow">
                    <p.icon className="h-5 w-5"/>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{p.tag}</div>
                    <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"/>
              </div>

              <div className="mt-6 grid gap-3 text-sm">
                <Row label="Problem" value={p.problem}/>
                <Row label="Solution" value={p.solution}/>
                <Row label="Architecture" value={p.architecture} mono/>
                <Row label="Scale" value={p.scale}/>
                <Row label="Impact" value={p.impact} accent/>
              </div>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (<span key={t} className="rounded-md border border-border bg-secondary/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                    {t}
                  </span>))}
              </div>
            </div>
          </motion.article>))}
      </div>
    </Section>);
}
function Row({ label, value, mono, accent }) {
    return (<div className="grid grid-cols-[88px_1fr] gap-3">
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground pt-0.5">{label}</div>
      <div className={`${mono ? "font-mono text-xs" : "text-sm"} ${accent ? "text-foreground font-medium" : "text-muted-foreground"}`}>
        {value}
      </div>
    </div>);
}
