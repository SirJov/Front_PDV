import { useEffect } from "react";
import "./ContentDashboard.css";
import { useGlobalProvider } from "../../../../Contexts/DataGlobalContext";

import FuncionariosBody from "./FuncionariosBody/FuncionariosBody";
import OutroComponente from "./OutroComponente/OutroComponente";

import { useDashboardProvider } from "../../../../Contexts/DashboardContext";

export default function ContentDashboard() {
  const { setDataUser, setIsLoged, setPage } = useGlobalProvider();
  const { CompSelect, SetCompSelect, BtnSelected } = useDashboardProvider();
  const Token = localStorage.getItem("token");

  useEffect(() => {
    SetCompSelect(<OutroComponente />);
  }, []);
  useEffect(() => {
    if (BtnSelected == "info") {
      SetCompSelect(<OutroComponente />);
    }
    if (BtnSelected == "Vendedores") {
      SetCompSelect(<FuncionariosBody />);
    }
  }, [BtnSelected]);
  return (
    <>
      <div className="ContentDashboard">{CompSelect}</div>
    </>
  );
}
