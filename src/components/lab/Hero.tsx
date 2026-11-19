"use client";
// HERO SECTION + PARALLAX + GLASSMORPHISM
// - Hero: a "fachada", primeira tela grande.
// - Parallax: as camadas do fundo se movem mais devagar que a página.
// - Glassmorphism: o cartão do meio é vidro fosco (fundo transparente + backdrop-blur).
import { useEffect, useState } from "react";

export function Hero() {
  const [rolagem, setRolagem] = useState(0);

  useEffect(() => {
    const aoRolar = () => setRolagem(window.scrollY);
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  return (
    <div className="relative h-[70vh] min-h-[420px] overflow-hidden rounded-2xl">
      {/* Camada 1 (mais ao fundo): céu. Move devagar. */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#f4b860] via-[#e07a3f] to-[#7a4a2a]"
        style={{ transform: `translateY(${rolagem * 0.2}px)` }}
      />
      {/* Camada 2: sol. Move um pouco mais. */}
      <div
        className="absolute left-1/2 top-[18%] -translate-x-1/2 size-40 rounded-full bg-[#ffe3a3] opacity-80"
        style={{ marginTop: rolagem * 0.35 }}
      />
      {/* Camada 3 (mais à frente): morros e árvores. Move mais rápido. */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
        style={{ transform: `translateY(${rolagem * 0.1}px)` }}
        aria-hidden
      >
        <path d="M0 220 Q300 120 600 200 T1200 180 V300 H0Z" fill="#2f6b3a" />
        <path d="M0 260 Q400 190 800 250 T1200 240 V300 H0Z" fill="#1f4a28" />
        {/* Um jatobá estilizado */}
        <rect x="880" y="120" width="18" height="120" fill="#4a2e1a" />
        <circle cx="889" cy="110" r="60" fill="#24552f" />
        <circle cx="850" cy="130" r="40" fill="#2f6b3a" />
        <circle cx="930" cy="130" r="42" fill="#2f6b3a" />
      </svg>

      {/* Cartão de vidro fosco */}
      <div className="relative z-10 h-full flex items-center justify-center p-4">
        <div className="max-w-md rounded-2xl border border-white/30 bg-white/15 backdrop-blur-md p-8 text-white shadow-xl">
          <h1 className="text-4xl font-bold">Grupo Jatobá</h1>
          <p className="mt-2 text-white/90">
            Isto é uma hero section. O fundo tem parallax e este cartão usa glassmorphism.
          </p>
          <a
            href="#modal"
            className="mt-5 inline-block rounded-lg bg-white text-[#1f4a28] px-4 py-2 font-semibold transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Ver os exemplos
          </a>
        </div>
      </div>
    </div>
  );
}
