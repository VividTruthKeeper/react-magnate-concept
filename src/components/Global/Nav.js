// IMPORT MODULES
import React from "react";
import { Link } from "react-router-dom";

// IMPORT IMAGES
import Logo from "../../images/main_logo.jpg";

const Nav = ({ links, linkTitles, background }) => {
  return (
    <div
      className="nav"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${background})`,
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        backgroundClip: "content-box",
        backgroundSize: "cover",
      }}
    >
      <div className="deco-horizontal"></div>
      <div className="container">
        <div className="nav__inner">
          <div className="nav__inner__top">
            <div className="footer__left nav__left">
              <div className="footer__left-first nav__left-first">
                <div className="logo">
                  <img src={Logo} alt="Magnat-Logo" />
                </div>
              </div>
            </div>
            <div className="footer__right nav__right">
              <ul>
                {links.map((el, i) => {
                  console.log(background);
                  return (
                    <Link key={i} to={links[i]}>
                      {linkTitles[i]}
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
