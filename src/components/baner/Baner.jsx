import React from 'react';
import banerImg from '../../assets/img/baner/img1.png';

function Baner(){
    return(
        <div className='baner'>
            <div className="baner__body">
                <h2 className="baner__text">Аксессуары для Iphone 13 Pro Max</h2>
                <img src={banerImg} alt="Картинка" className="baner__pick" />
            </div>
        </div>
    )
}

export default Baner;