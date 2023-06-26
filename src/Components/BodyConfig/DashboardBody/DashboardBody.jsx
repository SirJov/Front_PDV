import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RequestHandler from "../../../Services/RequestHandler";

import "./DashboardBody.css";
import { useProvider } from "../../../Contexts/DataUserContext";

export default function DashboardBody() {
  const { setPage } = useProvider();
  useEffect(() => {
    setPage("Dashboard");
  }, []);
  return (
    <>
      <div className="DashboardBody">Dashboard!!!</div>
    </>
  );
}
