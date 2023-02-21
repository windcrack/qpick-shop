import React from "react";
import lang from "../../assets/img/lang.png";
import ButtonLang from "../../ui/ButtonLang/ButtonLang";

import "./styles.sass";

const langs = [
  { title: "Каз", active: false },
  { title: "Рус", active: true },
  { title: "Eng", active: false },
];

function LangList() {
  return (
    <div className="lang-list">
      <img src={lang} alt="" className="lang-list__pic" />
      <ul className="lang-list__body">
        {langs.map((item, idx) => (
          <li key={idx} className="lang-list__block">
            <ButtonLang lang={item.title} active={item.active} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LangList;
