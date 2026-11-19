// TOOLTIP: balãozinho que aparece ao passar o mouse OU ao focar com o teclado (Tab).
// Feito só com CSS: o balão fica invisível e aparece no "group-hover".
export function Tooltip({ texto, children }: { texto: string; children: React.ReactNode }) {
  return (
    <span className="relative inline-block group">
      <button type="button" className="underline decoration-dotted underline-offset-4 cursor-help">
        {children}
      </button>
      <span
        role="tooltip"
        className="pointer-events-none absolute left-1/2 bottom-full mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground text-background text-sm px-2 py-1 opacity-0 translate-y-1 transition group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0"
      >
        {texto}
      </span>
    </span>
  );
}
