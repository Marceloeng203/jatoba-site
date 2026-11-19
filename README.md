# 🌳 Site do grupo Jatobá

Site do grupo Jatobá (Engenharia Civil, IFTO Palmas).

## As peças (e por que cada uma)

| Peça | Pra que serve | Custo |
|---|---|---|
| **Next.js** | O framework do site (React). Cada pasta em `src/app` vira uma página. | Grátis |
| **Tailwind CSS** | Estilo direto no HTML com classes tipo `text-xl font-bold`. | Grátis |
| **Supabase** | Banco de dados, login dos membros e armazenamento das fotos. | Grátis (1 GB de fotos, por isso comprimimos) |
| **Vercel** | Coloca o site no ar. Cada `git push` publica automaticamente. | Grátis |
| **GitHub** | Guarda o código e o histórico de mudanças. | Grátis |

## Onde fica cada coisa

```
src/
  app/
    layout.tsx        -> moldura de todas as páginas (menu + rodapé)
    page.tsx          -> página inicial (/)
    sobre/page.tsx    -> /sobre
    galeria/page.tsx  -> /galeria (vai ser só para membros)
    jogos/page.tsx    -> /jogos
    engenharia/page.tsx -> /engenharia (pode ser pública)
    login/page.tsx    -> /login
    globals.css       -> cores do site
  components/Menu.tsx -> o menu do topo
  lib/supabase/       -> conexão com o Supabase
```

## Rodando no seu computador

1. Instale o [Node.js](https://nodejs.org) (versão LTS).
2. No terminal, dentro da pasta do projeto:
   ```bash
   npm install
   cp .env.example .env.local   # e preencha com as chaves do Supabase
   npm run dev
   ```
3. Abra http://localhost:3000

## Próximos passos

- [ ] Ligar o login ao Supabase
- [ ] Proteger galeria (só membros)
- [ ] Upload de fotos com compressão
- [ ] Primeiro joguinho
