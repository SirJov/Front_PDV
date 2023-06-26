import { useProvider } from "../../../Contexts/DataUserContext";
import { useNavigate } from "react-router-dom";
import "./BtnsOptionsHeader.css";

export default function BtnsOptionsHeader() {
  const { pag } = useProvider();
  const navigate = useNavigate();

  return (
    <div className="BtnsOptionsHeader">
      <button
        onClick={() => {
          navigate("/Dashboard");
        }}
      >
        Deashboard
      </button>
      <button
        onClick={() => {
          navigate("/Cadastros");
        }}
      >
        Cadastros
      </button>
      <button
        onClick={() => {
          navigate("/Vendas");
        }}
      >
        Vendas
      </button>
    </div>
  );
}
