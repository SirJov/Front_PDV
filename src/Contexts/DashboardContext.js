import React, { useEffect, useState } from "react";

const DashboardContext = React.createContext({});

export const DashboardProvider = (props) => {
  const [DashMsg, SetDashMsg] = useState("");
  const [CompSelect, SetCompSelect] = useState();
  const [BtnSelected, SetBtnSelected] = useState("info");
  const [ClassBtn, SetClassBtn] = useState([
    "btnAsideDashboardNotSelected",
    "btnAsideDashboardSelected",
  ]);

  return (
    <DashboardContext.Provider
      value={{
        DashMsg,
        SetDashMsg,
        CompSelect,
        SetCompSelect,
        BtnSelected,
        SetBtnSelected,
        ClassBtn,
        SetClassBtn,
      }}
    >
      {props.children}
    </DashboardContext.Provider>
  );
};

export const useDashboardProvider = () => React.useContext(DashboardContext); //Hook
