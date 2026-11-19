"use client";
// TOAST: aviso que aparece no canto e some sozinho depois de alguns segundos.
import { useState } from "react";

type Aviso = { id: number; texto: string };
const frases = ["Voto registrado!", "Foto enviada!", "Sorteio salvo!", "+10 Jatocoins"];

export function ExemploToast() {
  const [avisos, setAvisos] = useState<Aviso[]>([]);

  function mostrar() {
    const novo = { id: Date.now(), texto: frases[Math.floor(Math.random() * frases.length)] };
    setAvisos((lista) => [...lista, novo]);
    // depois de 3 segundos, remove este aviso da lista
    setTimeout(() => setAvisos((lista) => lista.filter((a) => a.id !== novo.id)), 3000);
  }

  return (
    <>
      <button onClick={mostrar} className="rounded-lg bg-verde text-background px-4 py-2 font-medium hover:opacity-90">
        Mostrar toast
      </button>
      {/* aria-live faz leitores de tela anunciarem o aviso */}
      <div aria-live="polite" className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        {avisos.map((a) => (
          <div key={a.id} className="toast-entrada rounded-lg bg-foreground text-background px-4 py-3 shadow-lg">
            ✅ {a.texto}
          </div>
        ))}
      </div>
    </>
  );
}
