// IMPORT MODULES
import React from "react";

// IMPORT IMAGES
import Logo from '../../images/main_logo.jpg';

// IMPORT SVG
import Instagram from '../../svg/icon_instagram.svg';

const Footer = () => {
    return(
        <footer className="footer">
            {/* A special div to make line horizontal line deco. I found it best among other possibilities. */}
            <div className="deco-horizontal"></div>
            <div className="container">
                <div className="footer-inner">
                    <div className="footer__left">
                        <div className="footer__left-first">
                            <div className="logo">
                                <img src={Logo} alt="Magnat-Logo" />
                            </div>
                        </div>
                        <div className="footer__left-second">
                            <h2 className="footer__left-title">© 2021. Magnate Concept (Italy). <span>Все права защищены</span></h2>
                        </div>
                    </div>
                    <div className="footer__right">
                        <a href="https://www.instagram.com/magnate_concept" className="footer__right-text">@magnate_concept</a>
                        <div className="instagram">
                            <img src={Instagram} alt="Instagram" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer