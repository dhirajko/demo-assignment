import React, { FC, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import HomePage from '../pages/home-page/home-page';
import { Project } from '../model/project';
import { getItem, setItem } from '../service/storage';
import { PROJECTS } from '../config/constants';
import { projects as defaultProjects } from '../assets/projects';
import { Sorting } from '../model/sorting';

const HomePageContainer: FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const getLocalProjects = getItem(PROJECTS);
    if (!getLocalProjects) {
      setItem(PROJECTS, defaultProjects);
    }
    setProjects(JSON.parse(getItem(PROJECTS)));
  }, []);

  const removeProject = (id: string) => {
    const filteredProject = projects.filter((project) => project.id !== id);
    setProjects(filteredProject);
    setItem(PROJECTS, filteredProject);
  };

  const sortCards = (criteria: Sorting): void => {
    const bufferProjects = [...projects];
    switch (criteria) {
      case Sorting.RATING:
        bufferProjects.sort((a, b) => parseInt(b.rating, 10) - parseInt(a.rating, 10));
        break;
      case Sorting.ASCENDING:
        bufferProjects.sort((a, b) => dayjs(a.createdAt).diff(b.createdAt));
        break;
      case Sorting.DESCENDING:
        bufferProjects.sort((a, b) => dayjs(b.createdAt).diff(a.createdAt));
        break;
      default:
    }
    setProjects(bufferProjects);
  };

  return (<HomePage removeProject={removeProject} projects={projects} sortCards={sortCards} />);
};

export default HomePageContainer;
