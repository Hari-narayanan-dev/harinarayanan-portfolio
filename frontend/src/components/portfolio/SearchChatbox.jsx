import { useEffect, useRef, useState } from "react";
import { Search, Send, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { api } from "@/lib/api";
const INITIAL_MESSAGE = {
    id: 1,
    text: "Hi! I'm here to answer questions about Harinarayanan Pari's work, expertise, and projects. What would you like to know?",
    sender: "bot",
};
const FALLBACK_RESPONSES = [
    "That's a great question! Harinarayanan specializes in building scalable AI-driven backend systems. Check the projects section or reach out via the contact form.",
    "I appreciate your interest! His expertise spans LLM-powered document processing and Elasticsearch-based reconciliation pipelines.",
    "For the most accurate details, email harinarayananpari@gmail.com or use the contact section below.",
    "Harinarayanan is passionate about production-grade backends and intelligent search — explore the portfolio for real-world examples.",
];
export function SearchChatbox() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([INITIAL_MESSAGE]);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);
    const chatInputRef = useRef(null);
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isLoading]);
    useEffect(() => {
        if (isOpen)
            chatInputRef.current?.focus();
    }, [isOpen]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const { data } = await api.get("/");
          console.log(data); // "API Running"
        } catch (err) {
          console.error(err);
        }
      };

      fetchData();
    }, []);
    const handleSendMessage = async () => {
        const text = inputValue.trim();
        if (!text || isLoading)
            return;
        const userMessage = {
            id: Date.now(),
            text,
            sender: "user",
        };
        setMessages((prev) => [...prev, userMessage]);
        setInputValue("");
        setIsLoading(true);
        try {
            const { data } = await api.post("/api/chat/", { message: text });
            const botMessage = {
                id: Date.now() + 1,
                text: data.reply,
                sender: "bot",
            };
            setMessages((prev) => [...prev, botMessage]);
        }
        catch {
            const botMessage = {
                id: Date.now() + 1,
                text: FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)],
                sender: "bot",
            };
            setMessages((prev) => [...prev, botMessage]);
        }
        finally {
            setIsLoading(false);
        }
    };
    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };
    return (<div className="mx-auto mb-8 w-full max-w-lg animate-in fade-in slide-in-from-top-4 duration-700">
      {/* Search bar trigger */}
      <button type="button" onClick={() => setIsOpen(true)} className={cn("flex w-full items-center gap-3 rounded-full border border-border glass px-5 py-3.5 text-left transition-all", "hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-glow", isOpen && "rounded-b-none border-b-transparent")} aria-expanded={isOpen} aria-controls="portfolio-chatbox">
        <Search className="h-5 w-5 shrink-0 text-primary"/>
        <span className="flex-1 text-sm text-muted-foreground">Ask about Harinarayanan to AI Powered ChatBot</span>
        <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
          Ask AI
        </span>
      </button>

      {/* Chat panel */}
      <div id="portfolio-chatbox" className={cn("flex w-full flex-col overflow-hidden rounded-b-2xl border border-t-0 border-border glass gradient-border shadow-glow", "transition-all duration-300", isOpen ? "h-[min(500px,70vh)] opacity-100" : "pointer-events-none h-0 opacity-0")}>
        {isOpen && (<>
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <div>
                <h3 className="font-display text-sm font-semibold">Ask AI About Harinarayanan</h3>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Powered by Groq</p>
              </div>
              <button type="button" onClick={() => setIsOpen(false)} className="grid h-8 w-8 place-items-center rounded-lg text-muted-foreground transition hover:bg-secondary hover:text-foreground" aria-label="Close chat">
                <X className="h-4 w-4"/>
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
              {messages.map((msg) => (<div key={msg.id} className={cn("flex animate-in fade-in slide-in-from-bottom-2 duration-300", msg.sender === "user" && "justify-end")}>
                  <div className={cn("max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed", msg.sender === "bot"
                    ? "border border-border bg-secondary/60 text-foreground"
                    : "bg-gradient-to-br from-primary to-accent font-medium text-primary-foreground")}>
                    {msg.text}
                  </div>
                </div>))}
              {isLoading && (<div className="flex">
                  <div className="flex gap-1 rounded-2xl border border-border bg-secondary/60 px-4 py-3">
                    {[0, 1, 2].map((i) => (<span key={i} className="h-2 w-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: `${i * 0.15}s` }}/>))}
                  </div>
                </div>)}
              <div ref={messagesEndRef}/>
            </div>

            <div className="flex gap-2 border-t border-border p-4">
              <div className="flex flex-1 items-end gap-2 rounded-2xl border border-border bg-secondary/40 px-3 py-2 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
                <textarea ref={chatInputRef} value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyDown} placeholder="Type your question…" rows={1} className="max-h-24 min-h-[24px] flex-1 resize-none bg-transparent text-sm outline-none placeholder:text-muted-foreground"/>
              </div>
              <button type="button" onClick={handleSendMessage} disabled={isLoading || !inputValue.trim()} className="inline-flex shrink-0 items-center gap-1.5 rounded-2xl bg-gradient-to-br from-primary to-accent px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50">
                <Send className="h-3.5 w-3.5"/>
                Send
              </button>
            </div>
          </>)}
      </div>
    </div>);
}
