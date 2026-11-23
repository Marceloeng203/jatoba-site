// Troquem os nomes e descrições pelos de vocês!
const membros = [
  { nome: "Marcelo", papel: "Líder do grupo" },
  { nome: "Kainan", papel: "Membro do grupo" },
  { nome: "Pedro Henrique", papel: "Membro do grupo" },
  { nome: "João Victor", papel: "Membro do grupo" },
  { nome: "José Henrique", papel: "Membro do grupo" },
  { nome: "João Marcos", papel: "Membro do grupo" },
];

export default function Sobre() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-verde">Sobre nós</h1>
      <p className="mt-3">A história do Jatobá vai aqui.</p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-3">
        {membros.map((m) => (
          <li key={m.nome} className="rounded-xl border border-black/10 dark:border-white/10 p-4">
            <p className="font-semibold">{m.nome}</p>
            <p className="text-sm opacity-70">{m.papel}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
