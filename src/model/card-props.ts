/* eslint-disable no-unused-vars */
import { ReactNode } from 'react';
import { Project } from './project';

export interface CardProps {
    children?: ReactNode;
    project: Project;
    removeProject: (id: string) => void
}
