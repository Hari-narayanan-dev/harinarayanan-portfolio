import { useEffect, useState } from "react";
export function CursorGlow() {
    const [pos, setPos] = useState({ x: -1000, y: -1000 });
    const [enabled, setEnabled] = useState(false);
    useEffect(() => {
        if (window.matchMedia("(pointer: coarse)").matches)
            return;
        setEnabled(true);
        const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
    }, []);
    if (!enabled)
        return null;
    return (<div aria-hidden className="pointer-events-none fixed inset-0 z-[1] hidden md:block" style={{
            background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, oklch(0.74 0.22 250 / 0.08), transparent 40%)`,
            transition: "background 0.15s ease-out",
        }}/>);
}
