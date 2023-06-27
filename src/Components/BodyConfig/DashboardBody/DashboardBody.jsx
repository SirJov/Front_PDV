import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RequestHandler from "../../../Services/RequestHandler";
import { useGlobalProvider } from "../../../Contexts/DataGlobalContext";

import "./DashboardBody.css";

export default function DashboardBody() {
  const { setPage } = useGlobalProvider();
  useEffect(() => {
    setPage("Dashboard");
  }, []);
  return (
    <>
      <div className="DashboardBody">Dashboard!!!</div>
    </>
  );
}
