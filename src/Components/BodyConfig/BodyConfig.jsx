import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Vendas from "../../Pages/Vendas/Vendas";
import Login from "../../Pages/Login/Login";
import RegisterBody from "./RegisterBody/RegisterBody";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import CadastroBody from "./CadastroBody/CadastroBody";

import PagUndefined from "../BodyConfig/PagUndefined/PagUndefined";

import "./BodyConfig.css";
import { useGlobalProvider } from "../../Contexts/DataGlobalContext";

export default function BodyConfig() {
  const { DataUser, setDataUser, setPage } = useGlobalProvider();
  const navigate = useNavigate();
  const Token = localStorage.getItem("token");

  useEffect(() => {
    setPage("Vendas");
    if (!Token) {
      navigate(`/Login`);
    }
    if (Token) {
      if (!DataUser) {
        const object = JSON.parse(atob(Token.split(".")[1]));
        setDataUser(object);
        return navigate(`/Vendas`);
      }
    }
  }, []);

  if (!Token) {
    return (
      <section className="BodyConfig">
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<RegisterBody />} />
        </Routes>
      </section>
    );
  }

  if (Token) {
    return (
      <section className="BodyConfig">
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Vendas" element={<Vendas />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Cadastros" element={<CadastroBody />} />
        </Routes>
      </section>
    );
  }
  return (
    <section className="BodyConfig">
      <Routes>
        <Route path="/Erro" element={<PagUndefined />} />
      </Routes>
    </section>
  );
}
