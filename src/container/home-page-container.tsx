import React, { FC, useEffect, useState }  from "react";
import HomePage from "../pages/home-page/home-page";
import { Project } from "../model/project";
import { getItem, setItem } from "../service/storage";
import { PROJECTS } from "../config/constants";
import {projects as defaultProjects} from "../assets/projects";
import { Sorting } from "../model/sorting";
import {default as dayjs} from "dayjs";

const HomePageContainer: FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(()=>{
        const getLocalProjects = getItem(PROJECTS);
        if(!getLocalProjects) {
            setItem(PROJECTS, defaultProjects);
        }
        setProjects(JSON.parse(getItem(PROJECTS)));
    },[]);

    const removeProject = (id: string) => {
        const filteredProject = projects.filter((project) => project.id !== id);
        setProjects(filteredProject);
        setItem(PROJECTS, filteredProject);
    }

    const sortCards = (criteria: Sorting) => {
        const bufferProjects = [...projects];
        switch (criteria) {
            case Sorting.RATING:
                bufferProjects.sort((a,b) => parseInt( b.rating) - parseInt(a.rating));
                break;
            case Sorting.ASCENDING:
                bufferProjects.sort((a,b) => dayjs(a.created_at).diff(b.created_at));
                break;
            case Sorting.DESCENDING:
                bufferProjects.sort((a,b) => dayjs(b.created_at).diff(a.created_at));
                break;
            default:
                return 1;
        }
        setProjects(bufferProjects);
    }

    return (<HomePage removeProject={removeProject} projects={projects} sortCards={sortCards}/>);
};

export default HomePageContainer;
