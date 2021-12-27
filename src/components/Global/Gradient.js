import React from "react";

import Logo from '../images/main_logo.jpg'

const Gradient = ({isLoading}) => {
    return(
        <div className="gradient-bg" style={!isLoading ? {display:"none"} : {display: 'block'}}>
            <div className="blur-bg">
                <div className="gradient-img">
                    <img src={Logo} alt="logo" />
                </div>
            </div>
        </div>
    )
};

export default Gradient;