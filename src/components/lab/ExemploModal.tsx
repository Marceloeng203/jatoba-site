"use client";
// MODAL: janela por cima da página. Usamos a tag <dialog> do próprio HTML,
// que já cuida de escurecer o fundo e fechar com a tecla Esc.
import { useRef } from "react";

export function ExemploModal() {
  const dialogo = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        onClick={() => dialogo.current?.showModal()}
        className="rounded-lg bg-verde text-background px-4 py-2 font-medium hover:opacity-90"
      >
        Abrir foto
      </button>

      <dialog
        ref={dialogo}
        // Clicar fora (no fundo escuro) também fecha
        onClick={(e) => e.target === dialogo.current && dialogo.current?.close()}
        className="m-auto rounded-2xl p-0 backdrop:bg-black/60 backdrop:backdrop-blur-sm max-w-lg w-[calc(100%-2rem)]"
      >
        <div className="p-6 bg-background text-foreground">
          <div className="aspect-video rounded-lg bg-gradient-to-br from-verde to-madeira grid place-items-center text-white text-lg">
            📷 Aqui entraria a foto da galeria
          </div>
          <p className="mt-4">Esc, o botão ou um clique fora fecham o modal.</p>
          <button
            onClick={() => dialogo.current?.close()}
            className="mt-4 rounded-lg border border-current/30 px-4 py-2"
          >
            Fechar
          </button>
        </div>
      </dialog>
    </>
  );
}
