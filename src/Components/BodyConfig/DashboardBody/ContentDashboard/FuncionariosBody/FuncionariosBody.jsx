import { useEffect } from "react";
import "./FuncionariosBody.css";

import CadastroVendedor from "./CadastroVendedor/CadastroVendedor";
import PesquisaVendedor from "./PesquisaVendedor/PesquisaVendedor";
import { useDashboardProvider } from "../../../../../Contexts/DashboardContext";

export default function FuncionariosBody() {
  const { SetCompSelect, SetBtnSelected, GetVendedores } =
    useDashboardProvider();

  useEffect(() => {
    SetCompSelect(<FuncionariosBody />);
    SetBtnSelected("Vendedores");
    GetVendedores();
  }, []);

  return (
    <div className="FuncionariosBody">
      <CadastroVendedor />
      <PesquisaVendedor />
    </div>
  );
}
