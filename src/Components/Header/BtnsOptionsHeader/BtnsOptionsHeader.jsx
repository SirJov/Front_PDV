import { useGlobalProvider } from "../../../Contexts/DataGlobalContext";
import { useNavigate } from "react-router-dom";
import "./BtnsOptionsHeader.css";
import { useEffect, useState } from "react";

import { BiPieChart } from "react-icons/bi";
import { BiTask } from "react-icons/bi";
import { BiStoreAlt } from "react-icons/bi";

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
    if (page == "Funcionarios") {
      setClassCss(["btnDesativo", "btnDesativo", "btnDesativo"]);
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
        <BiPieChart className="iconBtnHeaderOpt" /> <p>Deashboard</p>
      </button>
      <button
        className={ClassCss[1]}
        name="Cadastros"
        onClick={() => {
          navigate("/Cadastros");
        }}
      >
        <BiTask className="iconBtnHeaderOpt" /> <p>Con. Estoque</p>
      </button>
      <button
        className={ClassCss[2]}
        name="Vendas"
        onClick={() => {
          navigate("/Vendas");
        }}
      >
        <BiStoreAlt className="iconBtnHeaderOpt" /> <p>Vendas</p>
      </button>
    </div>
  );
}
