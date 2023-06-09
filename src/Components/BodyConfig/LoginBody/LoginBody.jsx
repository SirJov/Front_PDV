import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import RequestHandler from "../../../Services/RequestHandler";

import "./LoginBody.css";
import { useGlobalProvider } from "../../../Contexts/DataGlobalContext";

export default function LoginBody() {
  const { setDataUser, setIsLoged, setPage } = useGlobalProvider();
  const navigate = useNavigate();
  const Request = new RequestHandler();
  const [Email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [dataLogin, setDataLogin] = useState();
  const Token = localStorage.getItem("token");

  useEffect(() => {
    setDataLogin({
      email: Email,
      password: password,
    });
  }, [Email, password]);

  useEffect(() => {
    setPage("Login");
    if (Token) {
      localStorage.removeItem("token");
      setIsLoged(true);
    }
  }, []);

  const EmailLogin = (event) => {
    setEmail(event.target.value);
  };

  const PasswordLogin = (event) => {
    setPassword(event.target.value);
    
  };

  const ReqLoguin = async (event) => {
    event.preventDefault();

    const reqOptions = {
      url: "https://mercado-nu.vercel.app/auth",
      method: "POST",
      data: dataLogin,
    };
    try {
      const res = await Request.Post(reqOptions);

      if (res.status) {
        const object = JSON.parse(atob(res.data.split(".")[1]));
        localStorage.setItem("token", res.data);
        setDataUser(object);
        setIsLoged(true);

        if (object.userId) {
          return navigate(`/Vendas`);
        }
        if (!object.userId) {
          return navigate(`/Dashboard`);
        }

        return;
      }

      if (res.response.status) {
        return console.log("request erro" + res.response.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="LoginBody">
      <form>
        <input
          type="text"
          placeholder="Email"
          onChange={EmailLogin}
          required
        ></input>
        <input
          type="password"
          placeholder="Sua Senha"
          onChange={PasswordLogin}
          required
        ></input>

        <button onClick={ReqLoguin}>Entrar</button>
        <Link to="/Register">
          <p>Cadastre-se aqui.</p>
        </Link>
      </form>
    </div>
  );
}
