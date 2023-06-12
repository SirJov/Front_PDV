import "./TransaçãoFinalizar.css";

export default function TransaçãoFinalizar() {
  return (
    <div className="TransaçãoFinalizar">
      <div className="ValoresTroco">
        <div className="BoxValorPago">
          <p className="PValorPago">Valor Pago</p>
          <div>
            <p>R$</p>
            <input type="number" placeholder="" />
          </div>
        </div>
        <div className="BoxTroco">
          <p className="PTroco">Troco</p>
          <div className="DTroco">
            <p>R$</p>
            <span>000000</span>
          </div>
        </div>
      </div>
      <div className="FinalizarCompra">
        <button>FINALIZAR COMPRA</button>
      </div>
    </div>
  );
}
