import "./Header.css";

import LogoHeader from "./LogoHeader/LogoHeader";
import BtnsOptionsHeader from "./BtnsOptionsHeader/BtnsOptionsHeader";
import BtnsOptionsUserHeader from "./BtnsOptionsUserHeader/BtnsOptionsUserHeader";

export default function Header() {
  return (
    <header className="Header">
      <LogoHeader />
      <BtnsOptionsHeader />
      <BtnsOptionsUserHeader />
    </header>
  );
}
