// /laboratorio: um exemplo funcionando de cada elemento de interface.
// Cada exemplo mora em src/components/lab/, com comentários explicando.
// Mexam à vontade: é aqui que a gente testa antes de levar pro site de verdade.
import type { Metadata } from "next";
import { Secao } from "@/components/lab/Secao";
import { BarraDeProgresso } from "@/components/lab/BarraDeProgresso";
import { Hero } from "@/components/lab/Hero";
import { ExemploModal } from "@/components/lab/ExemploModal";
import { ExemploToast } from "@/components/lab/ExemploToast";
import { ExemploSkeleton } from "@/components/lab/ExemploSkeleton";
import { Tooltip } from "@/components/lab/Tooltip";
import { Aparecer } from "@/components/lab/Aparecer";

export const metadata: Metadata = { title: "Laboratório · Jatobá" };

const indice = [
  ["hero", "Hero + Parallax + Glass"],
  ["modal", "Modal"],
  ["toast", "Toast"],
  ["skeleton", "Skeleton"],
  ["tooltip", "Tooltip"],
  ["hover", "Hover state"],
  ["scroll-trigger", "Scroll trigger"],
  ["scroll-linked", "Scroll linked"],
  ["sticky", "Sticky"],
];

const ideias = ["Sorteios", "Tier list do Pedro", "Tonhão x Diabão", "Atire no João Marcos", "Top assobios", "Resultados das cagadas"];

export default function Laboratorio() {
  return (
    <div>
      <BarraDeProgresso />

      <h1 className="text-3xl font-bold text-verde">🧪 Laboratório de interface</h1>
      <p className="mt-2 opacity-80">
        Um exemplo de cada elemento, para a gente ver funcionando e escolher o que entra no visual do Jatobá.
      </p>

      {/* STICKY: este índice gruda no topo enquanto você rola a página */}
      <nav className="sticky top-2 z-40 mt-6 rounded-xl border border-black/10 dark:border-white/10 bg-background/70 backdrop-blur-md px-3 py-2 flex gap-2 overflow-x-auto text-sm">
        {indice.map(([id, nome]) => (
          <a key={id} href={`#${id}`} className="shrink-0 rounded-md px-2 py-1 hover:bg-verde hover:text-background transition">
            {nome}
          </a>
        ))}
      </nav>

      <Secao
        id="hero"
        titulo="Hero section + Parallax + Glassmorphism"
        explicacao="A fachada do site. Role a página devagar: o céu, o sol e os morros se movem em velocidades diferentes (parallax). O cartão do meio é vidro fosco (glassmorphism)."
      >
        <Hero />
      </Secao>

      <Secao id="modal" titulo="Modal" explicacao="Janela que abre por cima de tudo e escurece o fundo. Vai ser usado para abrir as fotos da galeria.">
        <ExemploModal />
      </Secao>

      <Secao id="toast" titulo="Toast" explicacao="Aviso rápido no canto da tela que some sozinho em 3 segundos. Clique várias vezes para empilhar.">
        <ExemploToast />
      </Secao>

      <Secao id="skeleton" titulo="Skeleton loader" explicacao="Enquanto os dados chegam, mostramos o 'esqueleto' do conteúdo piscando, em vez de uma tela vazia.">
        <ExemploSkeleton />
      </Secao>

      <Secao id="tooltip" titulo="Tooltip" explicacao="Passe o mouse (ou use Tab no teclado) nos nomes abaixo.">
        <p className="text-lg">
          Os mais lendários: <Tooltip texto="O líder 🫡">Marcelo</Tooltip>, <Tooltip texto="Coautor do top assobios 🎶">Kainan</Tooltip> e{" "}
          <Tooltip texto="Dono de muitos feitos 🏆">Pedro</Tooltip>.
        </p>
      </Secao>

      <Secao id="hover" titulo="Hover state" explicacao="Passe o mouse nos cards: cada um reage de um jeito. No celular não existe hover, então ele só pode enfeitar, nunca esconder algo importante.">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-black/10 dark:border-white/10 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <p className="font-semibold">Levantar</p>
            <p className="text-sm opacity-70">sobe e ganha sombra</p>
          </div>
          <div className="rounded-xl border border-black/10 dark:border-white/10 p-5 transition duration-300 hover:border-verde hover:bg-verde hover:text-background">
            <p className="font-semibold">Pintar</p>
            <p className="text-sm opacity-70">troca a cor</p>
          </div>
          <div className="group rounded-xl border border-black/10 dark:border-white/10 p-5 overflow-hidden relative">
            <p className="font-semibold">Revelar</p>
            <p className="text-sm opacity-70">mostra algo escondido</p>
            <span className="absolute inset-x-0 bottom-0 bg-madeira text-background text-sm px-5 py-2 translate-y-full transition duration-300 group-hover:translate-y-0">
              Surpresa! 🌳
            </span>
          </div>
        </div>
      </Secao>

      <Secao id="scroll-trigger" titulo="Scroll trigger" explicacao="Cada card aparece uma vez, quando entra na tela. Recarregue a página e role devagar até aqui.">
        <div className="grid gap-4 sm:grid-cols-3">
          {ideias.map((ideia, i) => (
            <Aparecer key={ideia} atraso={(i % 3) * 120}>
              <div className="rounded-xl border border-black/10 dark:border-white/10 p-5 h-full">
                <p className="font-semibold text-madeira">{ideia}</p>
                <p className="text-sm opacity-70">em breve no site</p>
              </div>
            </Aparecer>
          ))}
        </div>
      </Secao>

      <Secao id="scroll-linked" titulo="Scroll linked" explicacao="Olhe a barrinha marrom bem no topo da tela: ela enche conforme você rola. Diferente do scroll trigger, ela acompanha a rolagem o tempo todo.">
        <p className="opacity-70">↑ lá em cima</p>
      </Secao>

      <Secao id="sticky" titulo="Sticky" explicacao="O índice com os nomes das seções, lá no começo, ficou grudado no topo enquanto você rolava. Isso é sticky. Ele também usa glassmorphism.">
        <p className="opacity-70">Fim do laboratório. 🧪</p>
      </Secao>
    </div>
  );
}
