export interface Project {
    id: string;
    name: string;
    description: string;
}

export const fetchProjects = async (): Promise<Project[]> => {
    const response = await fetch("http://localhost:4712/projects");
    return response.json();
}
