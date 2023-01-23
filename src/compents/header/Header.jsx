import React from 'react';
import Select from '../../ui/select/Select';

function Header(){
    return(
        <nav className='container'>
            <div className="logo">
                <a href="http://" className="logo__link">
                    QPICK
                </a>
            </div>
            <Select />
        </nav>
    )
}

export default Header;