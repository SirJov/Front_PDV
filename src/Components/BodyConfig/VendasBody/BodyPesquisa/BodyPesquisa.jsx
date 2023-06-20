import iconCod from "../../../../assets/CodigodeBaarraIcon.png";
import iconNom from "../../../../assets/NomeProdutoIcon.png";

import "./BodyPesquisa.css";

export default function BodyPesquisa({ setBtnSelected, classBtnPesquisa }) {
  return (
    <div className="BodyPesquisa">
      <div className="BoxVendasPesquisa">
        <div className="VendasPesquisaCodigo">
          <img src={iconCod}></img>
          <input type="number" placeholder="Código do produto" />
        </div>
        <div className="VendasPesquisaNome">
          <img src={iconNom}></img>
          <input type="text" placeholder="Nome do produto" />
          <button>&#128269;</button>
        </div>
      </div>
      <div className="BoxVendasPesquisaBtn">
        <div
          id="SetPagCarrinho"
          className={classBtnPesquisa[0]}
          onClick={() => {
            setBtnSelected("Carrinho");
          }}
        >
          <p>CARRINHO</p>
        </div>
        <div
          id="SetPagConsulta"
          className={classBtnPesquisa[1]}
          onClick={() => {
            setBtnSelected("Consulta");
          }}
        >
          <p>CONSULTA</p>
        </div>
      </div>
    </div>
  );
}
