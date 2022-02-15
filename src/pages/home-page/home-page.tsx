import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './home-page.css';
import Card from '../../component/card/card';
import { HomePageProps } from '../../model/home-page-props';
import { Sorting } from '../../model/sorting';

const HomePage: FC<HomePageProps> = ({ projects, removeProject, sortCards }: HomePageProps) => (
  <div className="main-body">
    <div className="controller">
      <Link to="/add"><button type="button" className="controller-btn">Add +</button></Link>
      <div className="dropdown">
        <button type="button" className="controller-btn">Sorting by:</button>
        <div className="dropdown-content">
          <span role="button" tabIndex={0} onClick={() => sortCards(Sorting.RATING)} onKeyPress={() => sortCards(Sorting.RATING)}>rating</span>
          <span role="button" tabIndex={0} onClick={() => sortCards(Sorting.DESCENDING)} onKeyPress={() => sortCards(Sorting.DESCENDING)}>latest first</span>
          <span role="button" tabIndex={0} onClick={() => sortCards(Sorting.ASCENDING)} onKeyPress={() => sortCards(Sorting.ASCENDING)}>oldest first</span>
        </div>
      </div>
    </div>
    <div className="card-container">
      {projects.map((project) => (
        <Card
          key={project.id}
          project={project}
          removeProject={removeProject}
        />
      ))}
    </div>
  </div>
);

export default HomePage;
