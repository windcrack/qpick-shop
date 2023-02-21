import React from "react";
import Select from "../select/Select";
import Contorls from "../contorls/Contorls";
import Logo from "../logo/Logo";

import "./style.sass";

function Header() {
  return (
    <header className="container header-nav">
      <Logo />
      <Select />
      <Contorls />
    </header>
  );
}

export default Header;
