import { Github, Linkedin, Mail, Globe } from "lucide-react";
export function Footer() {
    return (<footer className="relative border-t border-border">
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-md bg-gradient-to-r from-transparent via-primary to-transparent"/>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-end">
          <div>
            <div className="flex items-center gap-2 font-display text-lg font-semibold">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground">H</span>
              Harinarayanan Pari
            </div>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">
              Engineering scalable AI systems, intelligent search, and fintech-grade backends.
              I build the infrastructure behind products people trust.
            </p>
          </div>
          <div className="flex items-center gap-3 md:justify-end">
            <Social href="mailto:harinarayananpari@gmail.com" icon={Mail}/>
            <Social href="https://www.linkedin.com/in/harinarayanan-pari" icon={Linkedin}/>
            <Social href="https://hari-narayanan-portfolio.web.app/" icon={Globe}/>
            <Social href="https://github.com/" icon={Github}/>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <div>© {new Date().getFullYear()} Harinarayanan Pari — Bengaluru, India</div>
          <div className="font-mono">Built with React.js · Tailwind · Python · Flask</div>
        </div>
      </div>
    </footer>);
}
function Social({ href, icon: Icon }) {
    return (<a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-xl border border-border glass text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-primary hover:shadow-glow">
      <Icon className="h-4 w-4"/>
    </a>);
}
