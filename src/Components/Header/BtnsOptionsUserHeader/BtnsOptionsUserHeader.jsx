import { useGlobalProvider } from "../../../Contexts/DataGlobalContext";
import { useNavigate } from "react-router-dom";
import "./BtnsOptionsUserHeader.css";

export default function BtnsOptionsUserHeader() {
  const { DataUser, setDataUser, isLoged, setIsLoged } = useGlobalProvider();
  const navigate = useNavigate();

  const ClearUserLoged = () => {
    localStorage.removeItem("token");
    navigate("/Login");
    setDataUser({ info: false });
    setIsLoged(false);
    return;
  };

  function isLog() {
    if (!isLoged) {
      return;
    }
    if (isLoged) {
      return <button onClick={ClearUserLoged}>Desconectart</button>;
    }
  }

  return (
    <div className="BtnsOptionsUserHeader">
      <p>{DataUser.name}</p>
      {isLog()}
    </div>
  );
}
