"use client";
// SCROLL LINKED: a largura da barra acompanha o quanto você rolou a página.
// "use client" avisa o Next.js que este componente roda no navegador
// (precisa saber a posição da rolagem, que só existe lá).
import { useEffect, useState } from "react";

export function BarraDeProgresso() {
  const [progresso, setProgresso] = useState(0); // de 0 a 1

  useEffect(() => {
    function aoRolar() {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgresso(total > 0 ? window.scrollY / total : 0);
    }
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar); // limpa ao sair da página
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50">
      <div
        className="h-full bg-madeira origin-left"
        style={{ transform: `scaleX(${progresso})` }}
      />
    </div>
  );
}
