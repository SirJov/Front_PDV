import { useState, useEffect } from "react";
import { useGlobalProvider } from "../../../Contexts/DataGlobalContext";
import AsideDashboard from "./AsideDashboard/AsideDashboard";
import ContentDashboard from "./ContentDashboard/ContentDashboard";

import { DashboardProvider } from "../../../Contexts/DashboardContext";

import "./DashboardBody.css";

export default function DashboardBody() {
  const { setPage } = useGlobalProvider();

  useEffect(() => {
    setPage("Dashboard");
  }, []);
  return (
    <div className="DashboardBody">
      <DashboardProvider>
        <AsideDashboard />
        <ContentDashboard />
      </DashboardProvider>
    </div>
  );
}
