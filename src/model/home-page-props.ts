import { ReactNode } from "react";
import { Project } from "./project";
import { Sorting } from './sorting';

export interface HomePageProps {
    children?: ReactNode;
    projects: Project[];
    removeProject: (id: string) => void
    sortCards: (criteria: Sorting) => void
}
