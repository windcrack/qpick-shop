import React from "react";
import LangList from "../langList/LangList";

import "./styles.sass";

function FooterChangesLang() {
  return (
    <div className="footer-changes-lang">
      <a href="#" className="footer-nav__link">
        Условия сервиса
      </a>
      <LangList />
    </div>
  );
}

export default FooterChangesLang;
