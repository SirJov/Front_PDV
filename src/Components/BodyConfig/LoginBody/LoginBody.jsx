import "./LoginBody.css";

export default function LoginBody() {
  return (
    <div className="LoginBody">
      <form>
        <input type="text" placeholder="Email" required></input>
        <input type="password" placeholder="Sua Senha" required></input>
        <button>Entrar</button>
      </form>
    </div>
  );
}
