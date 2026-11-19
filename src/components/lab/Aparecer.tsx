"use client";
// SCROLL TRIGGER: o conteúdo aparece (sobe e ganha opacidade) quando entra na tela.
// O IntersectionObserver é o "sensor" do navegador que avisa quando algo ficou visível.
import { useEffect, useRef, useState } from "react";

export function Aparecer({ children, atraso = 0 }: { children: React.ReactNode; atraso?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const sensor = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true);
          sensor.disconnect(); // dispara uma vez só
        }
      },
      { threshold: 0.3 }, // quando 30% do elemento estiver visível
    );
    if (ref.current) sensor.observe(ref.current);
    return () => sensor.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="transition duration-700 ease-out"
      style={{
        opacity: visivel ? 1 : 0,
        transform: visivel ? "none" : "translateY(40px)",
        transitionDelay: `${atraso}ms`,
      }}
    >
      {children}
    </div>
  );
}
