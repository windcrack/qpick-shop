import React from 'react';
import FooterChangesLang from '../footerChangeLang/FooterChangeLang';
import FooterNav from '../footerNav/FooterNav';
import Logo from '../logo/Logo';
import SocialList from '../socialList/SocialList';

function Footer(){
    return(
        <footer className='container footer'>
            <Logo />
            <FooterNav />
            <FooterChangesLang />
            <SocialList />
        </footer>
    )
}

export default Footer;