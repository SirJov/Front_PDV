import { Routes, Route } from "react-router-dom";

import VendasBody from "./VendasBody/VendasBody";
import LoginBody from "./LoginBody/LoginBody";

import "./BodyConfig.css";

export default function BodyConfig() {
  return (
    <section className="BodyConfig">
      <Routes>
        <Route path="/Vendas" element={<VendasBody />} />
        <Route path="/Login" element={<LoginBody />} />
      </Routes>
    </section>
  );
}
