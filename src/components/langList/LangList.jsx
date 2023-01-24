import React from 'react';
import lang from '../../assets/img/lang.png'
import ButtonLang from '../../ui/ButtonLang/ButtonLang';

const langs = [
    {title: 'Каз', active: false},
    {title: 'Рус', active: true},
    {title: 'Eng', active: false},
]

function LangList(){
    return(
        <>  
            <img src={lang} alt="" className="lang-list__pic" />
            <ul className='lang-list'>
                {langs.map((item, idx) => <li key={idx} className="lang-list__item"><ButtonLang lang={item.title} active={item.active} /></li>)}
            </ul>
        </>
    )
}

export default LangList;