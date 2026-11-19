"use client";
// SKELETON LOADER: enquanto os dados "carregam", mostramos blocos cinzas
// no mesmo formato do conteúdo, piscando (animate-pulse).
import { useState } from "react";

const membros = ["Marcelo", "Kainan", "Pedro"];

export function ExemploSkeleton() {
  const [carregando, setCarregando] = useState(false);

  function recarregar() {
    setCarregando(true);
    setTimeout(() => setCarregando(false), 2000); // finge 2s de internet lenta
  }

  return (
    <div>
      <button onClick={recarregar} className="rounded-lg bg-verde text-background px-4 py-2 font-medium hover:opacity-90">
        Recarregar
      </button>
      <ul className="mt-4 grid gap-3 sm:grid-cols-3">
        {membros.map((nome) => (
          <li key={nome} className="rounded-xl border border-black/10 dark:border-white/10 p-4 flex items-center gap-3">
            {carregando ? (
              <>
                <div className="size-12 rounded-full bg-current/15 animate-pulse" />
                <div className="flex-1 space-y-2">
                  <div className="h-3 w-2/3 rounded bg-current/15 animate-pulse" />
                  <div className="h-3 w-1/2 rounded bg-current/15 animate-pulse" />
                </div>
              </>
            ) : (
              <>
                <div className="size-12 rounded-full bg-verde text-background grid place-items-center font-bold">
                  {nome[0]}
                </div>
                <div>
                  <p className="font-semibold">{nome}</p>
                  <p className="text-sm opacity-70">Membro do Jatobá</p>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
