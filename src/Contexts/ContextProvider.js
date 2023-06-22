import React, { useState, useEffect } from "react";

export const Contexts = React.createContext({});

export const ContextProvider = (props) => {
  const [DataUser, SetDataUser] = useState({});

  return (
    <Contexts.Provider value={(DataUser, SetDataUser)}>
      {props.children}
    </Contexts.Provider>
  );
};
