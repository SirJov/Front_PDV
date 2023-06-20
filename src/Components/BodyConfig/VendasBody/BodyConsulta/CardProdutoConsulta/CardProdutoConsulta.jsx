import "./CardProdutoConsulta.css";

export default function CardProdutoConsulta() {
  return (
    <div className="ConsultaLista">
      <p className="ConsultaCodigoDeBarra" title="Código de barras">
        6540654654
      </p>
      <p className="ConsultaNomeProduto" title="Nome do produto">
        Pao batata
      </p>
      <p className="ConsultaEstoque" title="Quantidade no estoque">
        45
      </p>
      <p className="ConsultaValidade" title="Valido até">
        12/2024
      </p>
      <p className="ConsultaValorProduto" title="Valor unitario do produto">
        5,15
      </p>
      <p className="ConsultaCodigoEstoque" title="Código interno do estoque">
        P-45
      </p>
    </div>
  );
}
