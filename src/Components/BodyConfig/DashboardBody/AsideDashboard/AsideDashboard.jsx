import { useEffect } from "react";
import "./AsideDashboard.css";
import { useGlobalProvider } from "../../../../Contexts/DataGlobalContext";
import { useDashboardProvider } from "../../../../Contexts/DashboardContext";

import { BiFace } from "react-icons/bi";
import { BiBarChartAlt2 } from "react-icons/bi";

export default function AsideDashboard() {
  const { setDataUser, setIsLoged, setPage } = useGlobalProvider();
  const { BtnSelected, SetBtnSelected, ClassBtn, SetClassBtn } =
    useDashboardProvider();

  const Token = localStorage.getItem("token");

  useEffect(() => {
    if (BtnSelected == "info") {
      SetClassBtn([
        "btnAsideDashboardSelected",
        "btnAsideDashboardNotSelected",
      ]);
    }
    if (BtnSelected == "Vendedores") {
      SetClassBtn([
        "btnAsideDashboardNotSelected",
        "btnAsideDashboardSelected",
      ]);
    }
  }, [BtnSelected]);

  function seterBtn(i) {
    SetBtnSelected(i);
  }

  return (
    <>
      <div className="AsideDashboard">
        <div
          className={ClassBtn[0]}
          onClick={() => {
            seterBtn("info");
          }}
        >
          <BiBarChartAlt2 />
          <p>Info</p>
        </div>
        <div
          className={ClassBtn[1]}
          onClick={() => {
            seterBtn("Vendedores");
          }}
        >
          <BiFace />
          <p>Vendedores</p>
        </div>
      </div>
    </>
  );
}
