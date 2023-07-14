import React, { useEffect, useState } from "react";
import RequestHandler from "../Services/RequestHandler";
import { useGlobalProvider } from "./DataGlobalContext";

const DashboardContext = React.createContext({});

export const DashboardProvider = (props) => {
  const { DataUser } = useGlobalProvider();

  const [DashMsg, SetDashMsg] = useState("");
  const [CompSelect, SetCompSelect] = useState();
  const [BtnSelected, SetBtnSelected] = useState("info");
  const [ListaFuncionarios, SetListaFuncionarios] = useState([]);
  const [ClassBtn, SetClassBtn] = useState([
    "btnAsideDashboardNotSelected",
    "btnAsideDashboardSelected",
  ]);

  const Request = new RequestHandler();
  const token = localStorage.getItem("token");
  const auth = "Bearer " + token;
  const AuthR = auth.replace(/["]/g, ``);

  async function GetVendedores() {
    const reqOptions = {
      url: `https://mercado-nu.vercel.app/users/all/${DataUser.companyId}`,
      method: "GET",
      headers: {
        Accept: "*/*",
        Authorization: AuthR,
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await Request.Post(reqOptions);
      SetListaFuncionarios(response.data);
    } catch (error) {
      return console.log(error);
    }
  }
  async function PutVendedores(i, body) {
    const bodyContent = JSON.stringify(body);
    const url = `https://mercado-nu.vercel.app/users/${i}`;
    console.log(url);
    const reqOptions = {
      url: url,
      method: "PATCH",
      headers: {
        Accept: "*/*",
        Authorization: AuthR,
        "Content-Type": "application/json",
      },
      data: bodyContent,
    };
    try {
      const response = await Request.Post(reqOptions);
      GetVendedores();
    } catch (error) {
      return console.log(error);
    }
  }

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
        ListaFuncionarios,
        SetListaFuncionarios,
        GetVendedores,
        PutVendedores,
      }}
    >
      {props.children}
    </DashboardContext.Provider>
  );
};

export const useDashboardProvider = () => React.useContext(DashboardContext); //Hook
