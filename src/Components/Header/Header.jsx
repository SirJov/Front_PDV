import { useState } from "react";
import LogoHeader from "./LogoHeader/LogoHeader";
import BtnsOptionsHeader from "./BtnsOptionsHeader/BtnsOptionsHeader";
import BtnsOptionsUserHeader from "./BtnsOptionsUserHeader/BtnsOptionsUserHeader";

import "./Header.css";
import { useGlobalProvider } from "../../Contexts/DataGlobalContext";

export default function Header() {
  const { isLoged } = useGlobalProvider();

  function isUser() {
    if (!isLoged) {
      return;
    }
    if (isLoged) {
      const Token = localStorage.getItem("token");
      const object = JSON.parse(atob(Token.split(".")[1]));
      if (object.userId) {
        return;
      }
      return <BtnsOptionsHeader />;
    }

    return;
  }

  return (
    <header className="Header">
      <LogoHeader />
      {isUser()}
      <BtnsOptionsUserHeader />
    </header>
  );
}
