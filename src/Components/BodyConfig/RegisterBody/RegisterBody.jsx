import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RequestHandler from "../../../Services/RequestHandler";
import { useProvider } from "../../../Contexts/DataUserContext";
import "./RegisterBody.css";

export default function RegisterBody() {
  const { setPage } = useProvider();
  const navigate = useNavigate();
  const Request = new RequestHandler();

  const [Email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cnpj, setCnpj] = useState();
  const [nome, setNome] = useState();

  const [DataRegister, setDataRegister] = useState();
  const [DataLogin, setDatalogin] = useState();

  useEffect(() => {
    setPage("Registro");
  }, []);

  useEffect(() => {
    setDataRegister({
      email: Email,
      password: password,
      document: cnpj,
      name: nome,
    });
    setDatalogin({
      email: Email,
      password: password,
    });
  }, [Email, password, cnpj, nome]);

  const EmailRegister = (event) => {
    setEmail(event.target.value);
  };

  const PasswordRegister = (event) => {
    setPassword(event.target.value);
  };
  const CnpjRegister = (event) => {
    setCnpj(event.target.value);
  };
  const NomeRegister = (event) => {
    setNome(event.target.value);
  };

  const ReqRegister = async (event) => {
    event.preventDefault();
    const urlRegister = "https://mercado-nu.vercel.app/companies";

    try {
      await Request.Post(urlRegister, DataRegister);
      return navigate(`/Login`);
    } catch (error) {
      return console.log(error);
    }
  };

  return (
    <div className="RegisterBody">
      <form>
        <input
          type="text"
          placeholder="Email"
          onChange={EmailRegister}
          required
        ></input>
        <input
          type="password"
          placeholder="Senha com minimo 8 caracteres"
          onChange={PasswordRegister}
          required
        ></input>
        <input
          type="text"
          placeholder="cnpj"
          onChange={CnpjRegister}
          required
        ></input>
        <input
          type="text"
          placeholder="nome"
          onChange={NomeRegister}
          required
        ></input>

        <button onClick={ReqRegister}>CADASTRAR</button>
      </form>
    </div>
  );
}
