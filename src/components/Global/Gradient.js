import React, { useEffect } from "react";

import Logo from '../../images/main_logo.jpg'

const Gradient = ({isLoading}) => {
    useEffect(() => {
        if(isLoading){
            document.body.style.overflowY = "hidden";
        }else{
            document.body.style.overflowY = "visible";
        }
    }, [isLoading])

    return(
        <div className="gradient-bg" style={isLoading ? {opacity: "1"} : {opacity: '0', transition: "all 0.5s ease"}}>
            <div className="blur-bg">
                <div className="gradient-img">
                    <img src={Logo} alt="logo" />
                </div>
            </div>
        </div>
    )
};

export default Gradient;