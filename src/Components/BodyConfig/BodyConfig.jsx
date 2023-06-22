import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Vendas from "../../Pages/Vendas/Vendas";
import Login from "../../Pages/Login/Login";
import RegisterBody from "./RegisterBody/RegisterBody";
import Dashboard from "../../Pages/Dashboard/Dashboard";

import "./BodyConfig.css";

export default function BodyConfig() {
  
  const navigate = useNavigate();
  const Token = localStorage.getItem("token");

  useEffect(() => {
    if (!Token) {
      navigate(`/Login`);
    }
  }, []);

  return (
    <section className="BodyConfig">
      <Routes>
        <Route path="/Vendas" element={<Vendas />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<RegisterBody />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </section>
  );
}
