import { useState } from "react";
import LogoHeader from "./LogoHeader/LogoHeader";
import BtnsOptionsHeader from "./BtnsOptionsHeader/BtnsOptionsHeader";
import BtnsOptionsUserHeader from "./BtnsOptionsUserHeader/BtnsOptionsUserHeader";

import "./Header.css";
import { useProvider } from "../../Contexts/DataUserContext";

export default function Header() {
  const { isLoged } = useProvider();

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
