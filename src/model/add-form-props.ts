import { ReactNode } from "react";
import { Project } from './project';

export interface AddFormProps {
    children?: ReactNode;
    addProject: (project: Project) => void
}
