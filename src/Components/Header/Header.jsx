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
