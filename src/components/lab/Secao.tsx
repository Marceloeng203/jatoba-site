// Moldura padrão de cada exemplo do laboratório: título, explicação e o exemplo.
export function Secao({
  id,
  titulo,
  children,
  explicacao,
}: {
  id: string;
  titulo: string;
  explicacao: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-12 border-t border-black/10 dark:border-white/10">
      <h2 className="text-2xl font-bold text-verde">{titulo}</h2>
      <p className="mt-2 mb-6 opacity-80 max-w-2xl">{explicacao}</p>
      {children}
    </section>
  );
}
