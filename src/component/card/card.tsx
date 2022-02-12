import React, { FC } from "react";
import { default as dayjs} from 'dayjs'
import Logo from "../../assets/logo/github-logo.svg";
import Star from "../../assets/logo/star.svg";

import "./card.css";
import { CardProps } from '../../model/card-props';

const Card: FC<CardProps> = ({ project, removeProject }) => {
    const { id, name, rating, url, created_at } = project;

    return (
        <div className="card">
            <div className="card-upper-container">
                <span className="close-button" onClick={() => removeProject(id)}>x</span>
                <a target = "_blank" rel = "noopener noreferrer" href={url} className="logo-holder"><img src={Logo} alt="logo" height={100}/></a>
            </div>
            <div className="card-body">
                <div className="card-title">{name}</div>
                <div className="card-details">
                    <span>{dayjs(created_at).format('YYYY-MM-DD')}</span>
                    <span>
                        {[...Array(parseInt(rating))].map((value, i) => <img key={i} src={Star} alt="Star" height={15}/>)}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Card;
