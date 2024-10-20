import React from "react";
// Styles
import './Footer.scss';
// Images
import sponsors from '../../utils/images/components/sponsors.png';
const Footer: React.FunctionComponent = () => {
    return (
        <section className="footer-container">
            <img className="footer-image" src={sponsors} alt="sponsors" />
        </section>
    );
}

export default Footer;