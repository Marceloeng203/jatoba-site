// layout.tsx é a "moldura" de todas as páginas: o que está aqui
// (menu e rodapé) aparece em todas elas. O conteúdo de cada página
// entra no lugar de {children}.
import type { Metadata } from "next";
import "./globals.css";
import { Menu } from "@/components/Menu";

export const metadata: Metadata = {
  title: "Jatobá",
  description: "O site do grupo Jatobá, Engenharia Civil IFTO Palmas",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased min-h-screen flex flex-col">
        <Menu />
        <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-10">
          {children}
        </main>
        <footer className="text-center text-sm opacity-60 py-6">
          Grupo Jatobá · Engenharia Civil · IFTO Palmas
        </footer>
      </body>
    </html>
  );
}
