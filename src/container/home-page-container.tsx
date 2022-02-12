import React, { FC }  from "react";
import HomePage from "../pages/home-page/home-page";
import { Project } from '../model/project';
import { getItem, setItem } from '../service/storage';
import { PROJECTS } from '../config/constants';

const HomePageContainer: FC = () => {

    const removeProject = (id: string) => {
        const projects: Project[] = JSON.parse(getItem(PROJECTS)) || [];
        const filteredProject = projects.filter((project) => project.id !== id);
        setItem(PROJECTS, filteredProject)
    }

    return (<HomePage/>);
};

export default HomePageContainer;
