import React, { FC }  from "react";
import Logo from "../../assets/logo/github-logo.svg";
import Star from "../../assets/logo/star.svg";

import "./card.css";

const Card: FC = () => {
    return (
        <div className="card">
            <span className="close-button">x</span>
            <a href="http://www.google.com" className="logo-holder"><img src={Logo} alt="logo"/></a>
            <div className="card-body">
                <div className="card-title">Title</div>
                <div>-------------</div>
                <div>Created on</div>
                <div className="rating">
                    <img src={Star} alt="Star" height={20}/>
                    <img src={Star} alt="Star" height={20}/>
                    <img src={Star} alt="Star" height={20}/>
                </div>
            </div>
        </div>
    );
};

export default Card;
