// Troquem os nomes e descrições pelos de vocês!
const membros = [
  { nome: "Marcelo", papel: "Líder do grupo" },
  { nome: "Membro 2", papel: "Escreva algo aqui" },
  { nome: "Membro 3", papel: "Escreva algo aqui" },
  { nome: "Membro 4", papel: "Escreva algo aqui" },
  { nome: "Membro 5", papel: "Escreva algo aqui" },
  { nome: "Membro 6", papel: "Escreva algo aqui" },
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
