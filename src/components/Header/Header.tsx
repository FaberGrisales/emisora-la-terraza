import React from "react";

// Styles
import '../../styles/global.scss'
import './Header.scss';
// Images
import logo from '../../utils/images/logo.png';

const Header: React.FC = () => {
    return (
        <header className="header-container">
            <section className="header-section-container">
                <img className="header-section-image" src={logo} alt="header logo" />
            </section>
        </header>
    );
}

export default Header;