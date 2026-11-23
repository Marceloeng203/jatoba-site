"use client";
// Sorteio de duplas ou trios para atividades da faculdade.
import { useState } from "react";

function embaralhar<T>(lista: T[]): T[] {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

// Divide em grupos do tamanho pedido. Se sobrar gente, distribui nos grupos
// existentes (ex.: 7 pessoas em duplas vira 2 duplas + 1 trio).
function formarGrupos(nomes: string[], tamanho: number): string[][] {
  const mix = embaralhar(nomes);
  const qtd = Math.max(1, Math.floor(mix.length / tamanho));
  const grupos: string[][] = Array.from({ length: qtd }, () => []);
  mix.forEach((nome, i) => grupos[i % qtd].push(nome));
  return grupos;
}

const FACES = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

export default function Sorteio() {
  const [texto, setTexto] = useState("");
  const [tamanho, setTamanho] = useState(2);
  const [grupos, setGrupos] = useState<string[][]>([]);
  const [girando, setGirando] = useState(false);
  const [face, setFace] = useState(FACES[5]);

  const nomes = texto
    .split(/[\n,;]+/)
    .map((n) => n.trim())
    .filter(Boolean);

  function sortear() {
    if (nomes.length < tamanho || girando) return;
    setGirando(true);
    setGrupos([]);
    let passos = 0;
    const timer = setInterval(() => {
      setFace(FACES[Math.floor(Math.random() * 6)]);
      if (++passos >= 12) {
        clearInterval(timer);
        setGrupos(formarGrupos(nomes, tamanho));
        setGirando(false);
      }
    }, 80);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-verde">Sorteio de duplas e trios</h1>
      <p className="mt-3">
        Digite os nomes (um por linha ou separados por vírgula) e role o dado.
      </p>

      <textarea
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        rows={8}
        placeholder={"Ana\nBruno\nCarla\nDiego"}
        className="mt-4 w-full rounded-md border border-black/20 dark:border-white/20 bg-transparent p-3"
      />

      <div className="mt-3 flex flex-wrap items-center gap-4">
        <label className="flex items-center gap-2">
          Tamanho do grupo:
          <select
            value={tamanho}
            onChange={(e) => setTamanho(Number(e.target.value))}
            className="rounded-md border border-black/20 dark:border-white/20 bg-transparent px-2 py-1"
          >
            <option value={2}>Duplas</option>
            <option value={3}>Trios</option>
          </select>
        </label>
        <span className="opacity-60">{nomes.length} nomes</span>
        <button
          onClick={sortear}
          disabled={nomes.length < tamanho || girando}
          className="ml-auto flex items-center gap-2 rounded-md bg-verde text-background px-4 py-2 font-medium disabled:opacity-40"
        >
          <span className={`text-2xl leading-none ${girando ? "animate-spin" : ""}`}>
            {face}
          </span>
          Sortear
        </button>
      </div>

      {grupos.length > 0 && (
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {grupos.map((g, i) => (
            <li
              key={i}
              className="rounded-md border border-black/10 dark:border-white/10 p-4"
            >
              <div className="font-bold text-madeira">Grupo {i + 1}</div>
              {g.join(" · ")}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
