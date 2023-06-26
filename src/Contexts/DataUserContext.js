import React, { useEffect, useState } from "react";

export const UserContext = React.createContext({});

export const UserProvider = (props) => {
  const [DataUser, setDataUser] = useState({ info: false });
  const [pag, setPag] = useState("");
  const [isLoged, setIsLoged] = useState(false);

  useEffect(() => {
    const dataLocalUser = localStorage.getItem("token");
    if (dataLocalUser) {
      setIsLoged(true);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ DataUser, setDataUser, pag, setPag, isLoged, setIsLoged }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export const useProvider = () => React.useContext(UserContext); //Hook criado para dados do usuario
