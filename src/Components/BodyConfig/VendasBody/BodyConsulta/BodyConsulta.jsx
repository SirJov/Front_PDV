import CardProdutoConsulta from "./CardProdutoConsulta/CardProdutoConsulta";

import "./BodyConsulta.css";

export default function BodyConsulta() {
  return (
    <div className="BodyConsulta">
      <div className="ConsultaCabeçalho">
        <p className="ConsultaCabeçalhoCodigoBarra">Código Barra</p>
        <p className="ConsultaCabeçalhoNomeProduto">Nome Produto</p>
        <p className="ConsultaCabeçalhoESTOQUE">Quantia Estoque</p>
        <p className="ConsultaCabeçalhoVALIDADE">Validade</p>
        <p className="ConsultaCabeçalhoValor">Valor</p>
        <p className="ConsultaCabeçalhoValorCodigoArmazen">Cod-Estoque</p>
      </div>
      <CardProdutoConsulta />
      <CardProdutoConsulta />
      <CardProdutoConsulta />
      <CardProdutoConsulta />
      <CardProdutoConsulta />
    </div>
  );
}
