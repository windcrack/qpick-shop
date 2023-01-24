import React from 'react';
import Select from '../../ui/select/Select';
import Contorls from '../contorls/Contorls';
import Logo from '../logo/Logo';

import './style.sass';

function Header(){
    return(
        <nav className='container header-nav'>
            <Logo />
            <Select />
            <Contorls />
        </nav>
    )
}

export default Header;