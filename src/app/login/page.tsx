// Tela de login. Por enquanto só o visual: vamos ligar ao Supabase
// quando o projeto do Supabase estiver criado.
export default function Login() {
  return (
    <div className="max-w-sm mx-auto">
      <h1 className="text-3xl font-bold text-verde">Entrar</h1>
      <p className="mt-2 text-sm opacity-70">Área exclusiva dos membros do Jatobá.</p>
      <form className="mt-6 flex flex-col gap-3">
        <input type="email" placeholder="Seu e-mail" className="rounded-md border border-black/20 dark:border-white/20 bg-transparent px-3 py-2" />
        <input type="password" placeholder="Sua senha" className="rounded-md border border-black/20 dark:border-white/20 bg-transparent px-3 py-2" />
        <button type="button" disabled className="rounded-md bg-verde text-background py-2 font-medium opacity-60">
          Entrar (em breve)
        </button>
      </form>
    </div>
  );
}
