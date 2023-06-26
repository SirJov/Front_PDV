import { useEffect, useState } from "react";
import PagPagamentos from "./PagPagamentos/PagPagamentos";
import BodyCarrinho from "./BodyCarrinho/BodyCarrinho";
import BodyConsulta from "./BodyConsulta/BodyConsulta";
import BodyPesquisa from "./BodyPesquisa/BodyPesquisa";

import "./VendasBody.css";
import { useProvider } from "../../../Contexts/DataUserContext";

export default function VendasBody() {
  const { setPage } = useProvider();
  const [btnSelected, setBtnSelected] = useState("Carrinho");
  const [compSelected, setCompSelected] = useState();
  const [classBtnPesquisa, setClassBtnPesquisa] = useState([
    "btnPesquisaSelected",
    "btnPesquisaNotSelected",
  ]);
  useEffect(() => {
    if (btnSelected == "Carrinho") {
      setCompSelected(<BodyCarrinho />);
      setClassBtnPesquisa(["btnPesquisaSelected", "btnPesquisaNotSelected"]);
    }
    if (btnSelected == "Consulta") {
      setCompSelected(<BodyConsulta />);
      setClassBtnPesquisa(["btnPesquisaNotSelected", "btnPesquisaSelected"]);
    }
  }, [btnSelected]);

  useEffect(() => {
    setPage("Vendas");
  }, []);
  return (
    <div className="VendasBody">
      <div className="VendasBodyBox1">
        <BodyPesquisa
          setBtnSelected={setBtnSelected}
          classBtnPesquisa={classBtnPesquisa}
        />

        {compSelected}
      </div>
      <div className="VendasBodyBox2">
        <PagPagamentos />
      </div>
    </div>
  );
}
