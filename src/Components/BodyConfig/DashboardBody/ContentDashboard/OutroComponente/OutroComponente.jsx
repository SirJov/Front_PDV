import { useEffect } from "react";
import { useDashboardProvider } from "../../../../../Contexts/DashboardContext";
import "./OutroComponente.css";

export default function OutroComponente() {
  const { SetCompSelect, SetBtnSelected } = useDashboardProvider();
  useEffect(() => {
    SetCompSelect(<OutroComponente />);
    SetBtnSelected("info");
  }, []);
  return (
    <>
      <div className="OutroComponente"></div>
    </>
  );
}
