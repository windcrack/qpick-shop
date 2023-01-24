import React from 'react';

function Card({img, text}){
    return(
        <a className='card'>
            <img src={img} alt="" className="card__pick" />
            <div className="card__title">{text}</div>
        </a>
    )
}

export default Card;