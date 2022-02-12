import React, { FC, useEffect, useState }  from "react";
import HomePage from "../pages/home-page/home-page";
import { Project } from "../model/project";
import { getItem, setItem } from "../service/storage";
import { PROJECTS } from "../config/constants";
import {projects as p} from "../assets/projects";

const HomePageContainer: FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(()=>{
        setProjects(JSON.parse(getItem(PROJECTS)) || p);
    },[]);

    const removeProject = (id: string) => {
        const filteredProject = projects.filter((project) => project.id !== id);
        setProjects(filteredProject);
        setItem(PROJECTS, filteredProject);
    }

    return (<HomePage removeProject={removeProject} projects={projects}/>);
};

export default HomePageContainer;
