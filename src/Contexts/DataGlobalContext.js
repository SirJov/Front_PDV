import React, { useEffect, useState } from "react";

const globalContext = React.createContext({});

export const UserProvider = (props) => {
  const [DataUser, setDataUser] = useState(false);
  const [page, setPage] = useState("");
  const [isLoged, setIsLoged] = useState(false);

  useEffect(() => {
    const dataLocalUser = localStorage.getItem("token");
    if (dataLocalUser) {
      setIsLoged(true);
    }
  }, []);

  return (
    <globalContext.Provider
      value={{ DataUser, setDataUser, page, setPage, isLoged, setIsLoged }}
    >
      {props.children}
    </globalContext.Provider>
  );
};

export const useGlobalProvider = () => React.useContext(globalContext); //Hook criado para dados do usuario
