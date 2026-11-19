// page.tsx dentro de src/app = a página inicial ("/").
// Cada pasta dentro de src/app vira um endereço: src/app/sobre/page.tsx -> /sobre
import Link from "next/link";

const secoes = [
  { href: "/sobre", titulo: "Sobre nós", texto: "Quem são os 6 do Jatobá." },
  { href: "/galeria", titulo: "Galeria", texto: "Nossas fotos (só para membros)." },
  { href: "/jogos", titulo: "Jogos", texto: "Joguinhos feitos por nós." },
  { href: "/engenharia", titulo: "Engenharia", texto: "Materiais e projetos de Civil." },
];

export default function Inicio() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-verde">Grupo Jatobá</h1>
      <p className="mt-3 text-lg">
        Seis amigos da Engenharia Civil do IFTO Palmas. Raízes fundas, como o jatobá.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {secoes.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="rounded-xl border border-black/10 dark:border-white/10 p-5 hover:border-verde"
          >
            <h2 className="font-semibold text-xl text-madeira">{s.titulo}</h2>
            <p className="mt-1 opacity-80">{s.texto}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
