import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./home-page.css";
import Card from "../../component/card/card";

const HomePage: FC = () => {
    return (
        <div className="main-body">
            <div className="controller">
                <Link to="/add"><button>Add +</button></Link>
                <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
            <div className="card-container">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    );
};

export default HomePage;
