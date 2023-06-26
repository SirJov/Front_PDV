import React, { useEffect, useState } from "react";

export const UserContext = React.createContext({});

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
    <UserContext.Provider
      value={{ DataUser, setDataUser, page, setPage, isLoged, setIsLoged }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export const useProvider = () => React.useContext(UserContext); //Hook criado para dados do usuario
