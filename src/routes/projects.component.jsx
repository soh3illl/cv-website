import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProjectSection from "../components/project-section.component";
import CallToAction from "../components/call-to-action.component";
import { getProjects } from "../utils/supabase.utils";
import { setProjects } from "../store/projects/projects.action";

const Projects = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchingProjects = async () => {
            const data = await getProjects();
            dispatch(setProjects(data));
        };

        fetchingProjects();
    }, []);
    return (
        <main className="flex-shrink-0 bg-light h-100">
            <ProjectSection />
            <CallToAction />
        </main>
    );
};

export default Projects;
