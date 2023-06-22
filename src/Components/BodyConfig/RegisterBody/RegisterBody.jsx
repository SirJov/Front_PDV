import { useState, useEffect } from "react";
import RequestHandler from "../../../Services/RequestHandler";

import "./RegisterBody.css";

export default function RegisterBody() {
  const Request = new RequestHandler();

  const [Email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cnpj, setCnpj] = useState();
  const [nome, setNome] = useState();

  const [dataLogin, setDataLogin] = useState();

  useEffect(() => {
    setDataLogin({
      email: Email,
      password: password,
      document: cnpj,
      name: nome,
    });
  }, [Email, password]);

  const EmailLogin = (event) => {
    setEmail(event.target.value);
  };

  const PasswordLogin = (event) => {
    setPassword(event.target.value);
  };
  const CnpjLogin = (event) => {
    setCnpj(event.target.value);
  };
  const NomeLogin = (event) => {
    setNome(event.target.value);
  };
  const ReqLoguin = async (event) => {
    event.preventDefault();
    const url = "https://mercado-nu.vercel.app/companies";
    await Request.Post(url, dataLogin);
  };

  return (
    <div className="RegisterBody">
      <form>
        <input
          type="text"
          placeholder="Email"
          onChange={EmailLogin}
          required
        ></input>
        <input
          type="password"
          placeholder="Senha com minimo 8 caracteres"
          onChange={PasswordLogin}
          required
        ></input>
        <input
          type="text"
          placeholder="cnpj"
          onChange={CnpjLogin}
          required
        ></input>
        <input
          type="text"
          placeholder="nome"
          onChange={NomeLogin}
          required
        ></input>

        <button onClick={ReqLoguin}>CADASTRAR</button>
      </form>
    </div>
  );
}
