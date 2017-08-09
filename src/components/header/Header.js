import * as React from 'react';
import './Header.css';
const descomplicaImg = require('../../assets/images/descomplica.svg');

const Header = () => {

    return (<nav className="navbar Header">
        <a className="navbar-brand">
            <img src={descomplicaImg}  height="80" alt=""/>
        </a>
    </nav>)


};
export default Header;