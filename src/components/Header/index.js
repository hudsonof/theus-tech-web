import React from 'react';

import ProfileImage from '../../images/perfil.jpeg';

import './styles.css';

const Header = () => (
    <header>
        <div className="profile">
            <a href="http://theustech.com.br/"><img src={ProfileImage} alt="Theus Tech" /></a>
            <p>Theus Tech</p>
        </div>
    </header>
);

export default Header;
