import { useGlobalProvider } from "../../../Contexts/DataGlobalContext";
import { useNavigate } from "react-router-dom";
import "./BtnsOptionsHeader.css";
import { useEffect, useState } from "react";

export default function BtnsOptionsHeader() {
  const { page } = useGlobalProvider();
  const [ClassCss, setClassCss] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (page == "Dashboard") {
      setClassCss(["btnAtivo", "btnDesativo", "btnDesativo"]);
    }
    if (page == "Vendas") {
      setClassCss(["btnDesativo", "btnDesativo", "btnAtivo"]);
    }
    if (page == "Cadastro") {
      setClassCss(["btnDesativo", "btnAtivo", "btnDesativo"]);
    }
  }, [page]);

  return (
    <div className="BtnsOptionsHeader">
      <button
        className={ClassCss[0]}
        name="Dashboard"
        onClick={() => {
          navigate("/Dashboard");
        }}
      >
        Deashboard
      </button>
      <button
        className={ClassCss[1]}
        name="Cadastros"
        onClick={() => {
          navigate("/Cadastros");
        }}
      >
        Cadastros
      </button>
      <button
        className={ClassCss[2]}
        name="Vendas"
        onClick={() => {
          navigate("/Vendas");
        }}
      >
        Vendas
      </button>
    </div>
  );
}
