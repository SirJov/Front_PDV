import { useEffect, useState } from "react";
import { useDashboardProvider } from "../../../../../../../Contexts/DashboardContext";
import { BiPencil } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";

import VendedorSelected from "./VendedorSelected/VendedorSelected";
import "./CardVendedordashb.css";

export default function CardVendedordashb() {
  const { ListaFuncionarios } = useDashboardProvider();
  const arrayVendedores = ListaFuncionarios;
  const [Id, SetId] = useState("");

  return arrayVendedores.map((iten, index) => {
    if (Id != iten.userId) {
      return (
        <div key={index} className="CardVendedordashb">
          <p className="nomeListaVend">{iten.name}</p>
          <p className="emailListaVend">{iten.email}</p>
          <p className="cpfListaVend">cpf:{iten.document}</p>
          <div>
            <button
              onClick={() => {
                SetId(iten.userId);
              }}
            >
              <BiPencil />
            </button>
            <button
              onClick={() => {
                SetId(iten.userId);
              }}
            >
              <BiTrash />
            </button>
          </div>
        </div>
      );
    }
    if (Id == iten.userId) {
      return <VendedorSelected key={index} iten={iten} Id={Id} SetId={SetId} />;
    }
  });
}
