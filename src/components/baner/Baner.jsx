import React from 'react';
import banerImg from '../../assets/img/baner/img1.png';

import './style.sass';

function Baner(){
    return(
        <div className='baner'>
            <div className="baner__body">
                <div className="baner__text"><h2>Аксессуары для <br /> Iphone 13 Pro Max</h2></div>
                <img src={banerImg} alt="Картинка" className="baner__pick" />
            </div>
        </div>
    )
}

export default Baner;