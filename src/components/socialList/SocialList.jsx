import React from 'react';
import vk from '../../assets/img/svg/vk.svg'
import inst from '../../assets/img/svg/inst.svg'
import tg from '../../assets/img/svg/tg.svg'
import whatsapp from '../../assets/img/svg/whatsapp.svg'

function SocialList(){
    return(
        <ul className='social-list'>
            <li className="social-list__item">
                <a href="" className="socila-list__link">
                    <img src={vk} alt="" className="social-list__icon" />
                </a>
            </li>
            <li className="social-list__item">
                <a href="" className="socila-list__link">
                    <img src={inst} alt="" className="social-list__icon" />
                </a>
            </li>
            <li className="social-list__item">
                <a href="" className="socila-list__link">
                    <img src={tg} alt="" className="social-list__icon" />
                </a>
            </li>
            <li className="social-list__item">
                <a href="" className="socila-list__link">
                    <img src={whatsapp} alt="" className="social-list__icon" />
                </a>
            </li>
        </ul>
    )
}

export default SocialList;