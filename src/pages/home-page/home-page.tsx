import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./home-page.css";
import Card from "../../component/card/card";
import { HomePageProps } from '../../model/home-page-props';
import { Sorting } from '../../model/sorting';

const HomePage: FC<HomePageProps> = ({projects, removeProject, sortCards}: HomePageProps) => {
    return (
        <div className="main-body">
            <div className="controller">
                <Link to="/add"><button>Add +</button></Link>
                <select name="sorting" id="sorting" onChange={(e)=>sortCards(e.target.value as Sorting)}>
                    <option>sort by</option>
                    <option value={Sorting.RATING}>rating</option>
                    <option value={Sorting.ASCENDING}>Ascending</option>
                    <option value={Sorting.DESCENDING}>descending</option>
                </select>
            </div>
            <div className="card-container">
                {projects.map((project) => <Card key={project.id} project={project} removeProject={removeProject}/>)}
            </div>
        </div>
    );
};

export default HomePage;
