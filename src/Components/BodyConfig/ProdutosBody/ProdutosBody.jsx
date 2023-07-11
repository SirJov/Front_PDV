import React from "react";
import { useEffect } from "react";
import { useGlobalProvider } from "../../../Contexts/DataGlobalContext";

import ListaItensBody from "./ListaItensBody/ListaItensBody";
import CadastroProdutos from "./CadastroProdutos/CadastroProdutos";

import "./ProdutosBody.css";

export default function ProdutosBody() {
  const { setPage } = useGlobalProvider();
  useEffect(() => {
    setPage("Cadastro");
  }, []);
  return (
    <>
      <div className="ProdutosBody">
        <CadastroProdutos />
        <ListaItensBody />
      </div>
    </>
  );
}
