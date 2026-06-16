import { useState } from "react";
import { motion } from "framer-motion";
import { api } from "@/lib/api";
import { Section } from "./Section";
import { Github, Globe, Linkedin, Mail, Send, Check } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
const channels = [
    { icon: Mail, label: "Email", value: "harinarayananpari@gmail.com", href: "mailto:harinarayananpari@gmail.com" },
    { icon: Linkedin, label: "LinkedIn", value: "/in/harinarayanan-pari", href: "https://www.linkedin.com/in/harinarayanan-pari" },
    { icon: Github, label: "GitHub", value: "github.com/harinarayananpari", href: "https://github.com/" },
];
export function Contact() {
      const [sent, setSent] = useState(false);
      const [loading, setLoading] = useState(false);

      const onSubmit = async (e) => {
          e.preventDefault();

          setLoading(true);

          const formData = new FormData(e.currentTarget);

          const payload = {
              name: formData.get("name"),
              email: formData.get("email"),
              message: formData.get("message")
          };

          try {
              const { data: result } = await api.post("/api/contact/", payload);

              if (result.success) {
                  setSent(true);
                  e.target.reset();
              } else {
                  console.error(result.error);
                  e.target.reset();
              }
          } catch (error) {
              console.error("Error:", error);
          } finally {
              setLoading(false);
          }
      };
    return (<Section id="contact" eyebrow="Get in touch" title={<>Let's build something <span className="text-gradient-primary">that matters</span></>} description="Roles, freelance, or just a sharp engineering conversation — my inbox is open.">
      <div className="grid gap-6 lg:grid-cols-5">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-2 space-y-3">
          {channels.map((c) => (<a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group flex items-center gap-4 rounded-2xl glass gradient-border p-4 transition-all hover:-translate-y-0.5 hover:shadow-glow">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 text-primary">
                <c.icon className="h-5 w-5"/>
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                <div className="truncate text-sm font-medium">{c.value}</div>
              </div>
              <Send className="h-4 w-4 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"/>
            </a>))}
        </motion.div>

        <motion.form initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} onSubmit={onSubmit} className="lg:col-span-3 rounded-2xl glass gradient-border p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field name="name" label="Name" placeholder="The Name You Prefer To Be Called"/>
            <Field name="email" type="email" label="Email" placeholder="the mail you receive replies at"/>
          </div>
          <div className="mt-4">
            <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">Message</label>
            <textarea name="message" required rows={5} placeholder="Tell me about the role or problem you're solving…" className="w-full resize-none rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"/>
          </div>
          <div className="mt-6 flex items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">Avg. reply within 24 hours.</p>
            <MagneticButton type="submit" variant="primary">
              {sent ? <><Check className="h-4 w-4"/> Sent</> : <>Send Message <Send className="h-4 w-4"/></>}
            </MagneticButton>
          </div>
        </motion.form>
      </div>
    </Section>);
}
function Field({ name, label, type = "text", placeholder }) {
    return (<div>
      <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input name={name} type={type} required placeholder={placeholder} className="w-full rounded-xl border border-border bg-secondary/40 px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"/>
    </div>);
}
