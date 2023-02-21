import React from 'react';
import '../btn.sass';

function ButtonLang({lang, active}){
    return(
        <button className={active ? 'btn btn__lang _active' : 'btn btn__lang'}>{lang}</button>
    )
}

export default ButtonLang;