import { ReactNode } from "react";
import { Project } from "./project";

export interface HomePageProps {
    children?: ReactNode;
    projects: Project[];
    removeProject: (id: string) => void
}
