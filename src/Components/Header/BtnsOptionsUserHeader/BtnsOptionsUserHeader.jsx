import { useProvider } from "../../../Contexts/DataUserContext";
import { useNavigate } from "react-router-dom";
import "./BtnsOptionsUserHeader.css";

export default function BtnsOptionsUserHeader() {
  const { DataUser, setDataUser, isLoged, setIsLoged } = useProvider();
  const navigate = useNavigate();

  if (isLoged) {
    const dataUserLocal = localStorage.getItem("token");
    const objectUser = JSON.parse(atob(dataUserLocal.split(".")[1]));
    setName(objectUser.name);
  }

  function setName(i) {
    if (i) {
      return i;
    }
    return "";
  }

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
      <p>{setName()}</p>
      {isLog()}
    </div>
  );
}
