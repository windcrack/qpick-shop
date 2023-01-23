import React from 'react';
import Select from '../../ui/select/Select';
import Contorls from '../contorls/Contorls';

function Header(){
    return(
        <nav className='container'>
            <div className="logo">
                <a href="http://" className="logo__link">
                    QPICK
                </a>
            </div>
            <Select />
            <Contorls />
        </nav>
    )
}

export default Header;