import { useEffect, useState } from "react";
import RequestHandler from "../../../../../../Services/RequestHandler";

import "./CadastroVendedor.css";
import { useGlobalProvider } from "../../../../../../Contexts/DataGlobalContext";
import { useDashboardProvider } from "../../../../../../Contexts/DashboardContext";

export default function CadastroVendedor() {
  const { DataUser } = useGlobalProvider();
  const { DashMsg, SetDashMsg, GetVendedores } = useDashboardProvider();
  const Request = new RequestHandler();

  const [Email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cpf, setCpf] = useState();
  const [nome, setNome] = useState();

  const [DataRegisterVender, setDataRegisterVender] = useState();

  const token = localStorage.getItem("token");

  useEffect(() => {
    setDataRegisterVender({
      email: Email,
      password: password,
      document: cpf,
      name: nome,
    });
  }, [Email, password, cpf, nome]);

  const EmailRegister = (event) => {
    setEmail(event.target.value);
  };

  const PasswordRegister = (event) => {
    setPassword(event.target.value);
  };
  const CpfRegister = (event) => {
    setCpf(event.target.value);
  };
  const NomeRegister = (event) => {
    setNome(event.target.value);
  };

  const ReqRegister = async (event) => {
    event.preventDefault();

    const auth = "Bearer " + token;
    const AuthR = auth.replace(/["]/g, ``);

    const reqOptions = {
      url: `https://mercado-nu.vercel.app/users/${DataUser.companyId}`,
      method: "POST",
      headers: {
        Accept: "*/*",
        Authorization: AuthR,
        "Content-Type": "application/json",
      },
      data: DataRegisterVender,
    };
    try {
      const response = await Request.Post(reqOptions);
      if (response.status < 400) {
        setEmail("");
        setPassword("");
        setCpf("");
        setNome("");
        GetVendedores();
      }
    } catch (error) {
      return console.log(error);
    }
  };

  return (
    <div className="CadastroVendedor">
      <div className="BoxNovoVendedor">
        <form>
          <h5>Cadastrar novo vendedor</h5>
          <input
            type="text"
            placeholder="Email"
            value={Email}
            onChange={EmailRegister}
            required
          ></input>
          <input
            type="password"
            value={password}
            placeholder="Senha com minimo 8 caracteres"
            onChange={PasswordRegister}
            required
          ></input>
          <input
            type="text"
            value={cpf}
            placeholder="cpf"
            onChange={CpfRegister}
            required
          ></input>
          <input
            type="text"
            value={nome}
            placeholder="nome"
            onChange={NomeRegister}
            required
          ></input>

          <button onClick={ReqRegister}>Adicionar</button>
        </form>
      </div>
    </div>
  );
}
