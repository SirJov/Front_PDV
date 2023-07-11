import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Vendas from "../../Pages/Vendas/Vendas";
import Login from "../../Pages/Login/Login";
import RegisterBody from "./RegisterBody/RegisterBody";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import ProdutosBody from "./ProdutosBody/ProdutosBody";

import PagUndefined from "../BodyConfig/PagUndefined/PagUndefined";

import "./BodyConfig.css";
import { useGlobalProvider } from "../../Contexts/DataGlobalContext";

export default function BodyConfig() {
  const { DataUser, setDataUser, setPage } = useGlobalProvider();
  const navigate = useNavigate();
  const Token = localStorage.getItem("token");

  useEffect(() => {
    if (!Token) {
      navigate(`/Login`);
    }
    if (Token) {
      const object = JSON.parse(atob(Token.split(".")[1]));
      if (!DataUser) {
        setDataUser(object);
        return; //navigate(`/Vendas`);
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
    const object = JSON.parse(atob(Token.split(".")[1]));
    if (object.userId) {
      return (
        <section className="BodyConfig">
          <Routes>
            <Route path="/Vendas" element={<Vendas />} />
          </Routes>
        </section>
      );
    }
    return (
      <section className="BodyConfig">
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Vendas" element={<Vendas />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Cadastros" element={<ProdutosBody />} />
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
