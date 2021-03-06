import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { PROJECTS } from '../config/constants';
import AddPage from '../pages/add-page/add-page';
import { getItem, setItem } from '../service/storage';
import { Project } from '../model/project';

const AddPageContainer: FC = () => {
  const navigate = useNavigate();

  const addProject = (project: Project) => {
    const projects: Project[] = JSON.parse(getItem(PROJECTS)) || [];
    setItem(PROJECTS, [...projects, project]);
    navigate('/');
  };

  return (<AddPage addProject={addProject} />);
};

export default AddPageContainer;
