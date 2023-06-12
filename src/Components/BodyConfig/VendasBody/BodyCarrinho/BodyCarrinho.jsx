import CardProdutoCarrinho from "./CardProdutoCarrinho/CardProdutoCarrinho";

import "./BodyCarrinho.css";

export default function BodyCarrinho() {
  return (
    <div className="BodyCarrinho">
      <div className="CarrinhoCabeçalho">
        <p className="CarrinhoCabeçalhoProdutos">PRODUTO</p>
        <p className="CarrinhoCabeçalhoQuantia">QUANTIDADE</p>
        <p className="CarrinhoCabeçalhoValor">VALOR UNI</p>
        <p className="CarrinhoCabeçalhoValorTotal">TOTAL</p>
      </div>
      <CardProdutoCarrinho />
      <CardProdutoCarrinho />
      <CardProdutoCarrinho />
      <CardProdutoCarrinho />
      <CardProdutoCarrinho />
      <CardProdutoCarrinho />
      <CardProdutoCarrinho />
      <CardProdutoCarrinho />
    </div>
  );
}
