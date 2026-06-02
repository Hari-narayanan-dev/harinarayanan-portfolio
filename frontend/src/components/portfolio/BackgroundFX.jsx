export function BackgroundFX() {
    return (<div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-60"/>
      <div className="absolute -top-40 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full blur-3xl opacity-40" style={{ background: "radial-gradient(circle, oklch(0.74 0.22 250 / 0.4), transparent 60%)" }}/>
      <div className="absolute top-1/3 -right-40 h-[500px] w-[700px] rounded-full blur-3xl opacity-30" style={{ background: "radial-gradient(circle, oklch(0.7 0.25 310 / 0.5), transparent 60%)" }}/>
      <div className="absolute bottom-0 -left-40 h-[500px] w-[700px] rounded-full blur-3xl opacity-25" style={{ background: "radial-gradient(circle, oklch(0.65 0.2 220 / 0.5), transparent 60%)" }}/>
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay"/>
    </div>);
}
