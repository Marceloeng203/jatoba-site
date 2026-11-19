// Um "componente" é um pedaço de tela reaproveitável.
// Este é o menu do topo, usado no layout.tsx.
import Link from "next/link";

// Para adicionar uma página ao menu, basta adicionar uma linha aqui.
const links = [
  { href: "/", texto: "Início" },
  { href: "/sobre", texto: "Sobre nós" },
  { href: "/galeria", texto: "Galeria" },
  { href: "/jogos", texto: "Jogos" },
  { href: "/engenharia", texto: "Engenharia" },
  { href: "/laboratorio", texto: "Lab" },
];

export function Menu() {
  return (
    <header className="border-b border-black/10 dark:border-white/10">
      <nav className="max-w-4xl mx-auto px-4 py-4 flex flex-wrap items-center gap-x-5 gap-y-2">
        <Link href="/" className="font-bold text-lg text-verde mr-auto">
          🌳 Jatobá
        </Link>
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-madeira">
            {link.texto}
          </Link>
        ))}
        <Link
          href="/login"
          className="rounded-md bg-verde text-background px-3 py-1 font-medium"
        >
          Entrar
        </Link>
      </nav>
    </header>
  );
}
