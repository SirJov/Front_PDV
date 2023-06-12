import TotalCompras from "./TotalCompras/TotalCompras";
import TransaçãoFinalizar from "./TransaçãoFinalizar/TransaçãoFinalizar";
import FormasPagPropaganda from "./FormasPagPropaganda/FormasPagPropaganda";

import "./PagPagamentos.css";

export default function PagPagamentos() {
  return (
    <div className="PagPagamentos">
      <TotalCompras />
      <TransaçãoFinalizar />
      <FormasPagPropaganda />
    </div>
  );
}
