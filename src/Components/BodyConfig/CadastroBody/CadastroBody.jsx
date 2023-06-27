import React from "react";
import { useEffect } from "react";
import "./CadastroBody.css";
import { useGlobalProvider } from "../../../Contexts/DataGlobalContext";

export default function CadastroBody() {
  const { setPage } = useGlobalProvider();
  useEffect(() => {
    setPage("Cadastro");
  }, []);
  return (
    <>
      <div className="CadastroBody">CadastroBody!!!</div>
    </>
  );
}
