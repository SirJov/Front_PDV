import React from "react";
import { useEffect } from "react";
import "./CadastroBody.css";
import { useProvider } from "../../../Contexts/DataUserContext";

export default function CadastroBody() {
  const { setPage } = useProvider();
  useEffect(() => {
    setPage("Cadastro");
  }, []);
  return (
    <>
      <div className="CadastroBody">CadastroBody!!!</div>
    </>
  );
}
