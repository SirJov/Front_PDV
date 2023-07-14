import { useEffect, useState } from "react";
import "./VendedorSelected.css";
import { useDashboardProvider } from "../../../../../../../../Contexts/DashboardContext";

export default function VendedorSelected({ iten, Id, SetId }) {
  const { PutVendedores, GetVendedores } = useDashboardProvider();
  const [Email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");

  const [DataAttVendedor, setDataAttVendedor] = useState({});

  useEffect(() => {
    setDataAttVendedor({
      email: Email,
      document: cpf,
      name: nome,
    });
  }, [Email, cpf, nome]);
  useEffect(() => {
    setEmail(iten.email);
    setCpf(iten.document);
    setNome(iten.name);
  }, []);

  const EmailRegister = (event) => {
    setEmail(event.target.value);
  };

  const CpfRegister = (event) => {
    setCpf(event.target.value);
  };
  const NomeRegister = (event) => {
    setNome(event.target.value);
  };

  return (
    <div className="VendedorSelected">
      <div className="cabeçalhoVendedorDashb">
        <p>Nome</p>
        <p>Email</p>
        <p>Cpf</p>
      </div>
      <div className="dadosVendedorDashb">
        <input type="text" value={nome} onChange={NomeRegister} />
        <input type="text" value={Email} onChange={EmailRegister} />
        <input type="text" value={cpf} onChange={CpfRegister} />
      </div>
      <div className="btnOpçoesVendedorDashb">
        <button
          onClick={() => {
            SetId("");
          }}
        >
          Cancelar
        </button>
        <button
          onClick={() => {
            PutVendedores(Id, DataAttVendedor);
            SetId("");
          }}
        >
          Atualizar
        </button>
      </div>
    </div>
  );
}
