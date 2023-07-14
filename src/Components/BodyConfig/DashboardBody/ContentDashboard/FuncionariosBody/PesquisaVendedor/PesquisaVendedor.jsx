import CardVendedordashb from "./CardVendedordashb/CardVendedordashb";

import "./PesquisaVendedor.css";

export default function PesquisaVendedor() {
  return (
    <>
      <div className="PesquisaVendedor">
        <div className="topBox">
          <p>Vendedores Cadastrados</p>
        </div>

        <div className="boxCardsVendedoresDashb">
          <CardVendedordashb />
        </div>
      </div>
    </>
  );
}
