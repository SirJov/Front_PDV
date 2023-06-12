import "./CardProdutoCarrinho.css";

export default function CardProdutoCarrinho() {
  return (
    <div className="CarrinhoLista">
      <p className="CarrinhoNomeProduto" title="Nome do produto">
        Pao de batata 50kg{" "}
      </p>
      <select className="CarrinhoOptTipo" title="Kilos ou Unidade?">
        <option value="KG">KG</option>
        <option value="UNI">UNI</option>
      </select>
      <input
        className="CarrinhoOptQuantidade"
        type="number"
        placeholder="..."
        title="Quantidade"
      />
      <p className="CarrinhoValorProduto" title="Valor unitario do produto">
        5,00
      </p>

      <div className="CarrinhoValorTotalProduto" title="Valor total do produto">
        <p>R$</p>
        <p>333,00</p>
      </div>
      <button title="Remover da Compra">X</button>
    </div>
  );
}
