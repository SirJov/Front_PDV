import PagPagamentos from "./PagPagamentos/PagPagamentos";
import BodyCarrinho from "./BodyCarrinho/BodyCarrinho";
import BodyConsulta from "./BodyConsulta/BodyConsulta";

import "./VendasBody.css";

export default function VendasBody() {
  return (
    <div className="VendasBody">
      <div className="VendasBodyBox1">
        <BodyCarrinho />
      </div>
      <div className="VendasBodyBox2">
        <PagPagamentos />
      </div>
    </div>
  );
}
 