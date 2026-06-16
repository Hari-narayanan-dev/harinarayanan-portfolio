import { motion } from "framer-motion";
import { Section } from "./Section";
import { ArrowUpRight, Cpu, Database, FileSearch, Network, Puzzle, DownloadIcon,ChartBar, Mail } from "lucide-react";
const projects = [
    {
        icon: Cpu,
        title: "AI Document (Invoice) Processing Engine",
        tag: "Core Platform",
        problem: "Manual invoice Parsing/validation of vast different invoice templates was bottlenecking finance ops at scale. Heterogeneous PDFs, scans, and emails needed a unified structured output.",
        solution: "Designed and built an end-to-end pipeline combining OCR, LLM extraction, RAG Pipeline, rule-based data validation, raw extracted data storage, clean raw data and stored structured data.",
        architecture: "Async batch workers · Queue-driven · LLM ensemble (OpenAI + Gemini) · Confidence scoring",
        scale: "200,000+ invoices processed · 10,000+ documents / month",
        tech: ["Python", "Flask", "OpenAI/Gemini/vertex AI API", "RAG Pipeline", "PostgreSQL", "MongoDB", "Azure Blob Storage"],
        impact: "90% reduction in manual validation effort.",
    },
    {
        icon: Puzzle,
        title: "GST Reconciliation Platform",
        tag: "Fintech",
        problem: "Matching enterprise invoices against GSTN filings data was manual and slow.",
        solution: "Designed a deterministic matching micro service with a fuzzy reconciliation engine with explainable confidence levels.",
        architecture: "Invoice Data fetch · Direct matching · Fuzzy matching · elasticsearch-based matching · update status and confidence score in invoice record",
        scale: "₹175+ crore in GST value reconciled with full traceability.",
        tech: ["Python", "Flask", "Fuzzy Matching", "Elasticsearch", "MongoDB", "PostgreSQL"],
        impact: "~60% reconciliation accuracy.",
    },
    {
        icon: DownloadIcon,
        title: "Agnostic Bulk File download system",
        tag: "Cloud Architecture",
        problem: "Downloading large volume of files by client using asset links manually from various sources (AWS S3, Azure Blob Storage, external asset links) was inefficient.",
        solution: "Designed and implemented a cloud-agnostic bulk file download platform integrating AWS S3, Azure Blob Storage, and external asset sources with automated ZIP generation and email-based delivery.",
        architecture: "CSV Reader · Link Resolver · bulk download engine · zip generator · zip uploader and zip generator · Zoho Mail API integration for delivery",
        scale: "Handles 10000+ files in minutes.",
        tech: ["Python", "Flask", "FastAPI", "AWS/Azure", "Zoho Mail API", "postgresql(Logging)"],
        impact: "Cut manual file download time by 80%. gained client trust with reliable delivery of critical documents.",
    },
    {
        icon: ChartBar,
        title: "AI-powered chatbot for product Q&A",
        tag: "AI / NLP / RAG",
        problem: "Customers had trouble finding relevant information about products and services in the company's knowledge base, leading to increased support queries and reduced customer satisfaction.",
        solution: "Developed an AI-powered chatbot using OpenAI APIs to answer user queries about company products and services by integrating with the organization's knowledge base.",
        architecture: "Elasticsearch · Embedding re-ranker · Caching layer · Match explainability API",
        scale: "Handles 100+ queries/day with 85%+ accuracy.",
        tech: [ "Python", "RAG", "MONGO DB", "OpenAI API"],
        impact: "Reduced support queries by 40% and improved customer satisfaction scores.",
    },
    {
        icon: Mail,
        title: "Email Follow-up/Scraper System for Invoice Collection",
        tag: "Auto mail and mail attachment scraping system",
        problem: "Manual follow-up and scraping with vendors for invoice collection was time-consuming and inefficient, leading to less volume collection and lesser revenue.",
        solution: "Developed an automated email follow-up and scraping system to streamline invoice collection from vendors.",
        architecture: "SendGrid API for automated follow-ups · Custom email scraper for parsing invoice attachments and extracting relevant data · Integration with invoice processing pipeline",
        scale: "Automates follow-up emails and scrapes invoice attachments, improving collection efficiency.",
        tech: [ "Python", "MONGO DB", "SendGrid API", "Email parsing libraries"],
        impact: "Improved invoice collection efficiency and increased revenue and reduced manual efforts of ops.",
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
