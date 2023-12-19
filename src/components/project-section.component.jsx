import React from "react";
import PageTitle from "./page-title.component";
import Container from "./container.component";
import ProjectItem from "./project-item.component";
import { useSelector } from "react-redux";
import { selectProjects } from "../store/projects/projects.selector";

const ProjectSection = () => {
    const projectsList = useSelector(selectProjects);

    return (
        <section className="py-5">
            <Container classes="mb-5">
                <PageTitle title="Projects" />
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-11 col-xl-9 col-xxl-8">
                        {projectsList.map((project) => {
                            const { title, imageUrl, description } = project;
                            return (
                                <ProjectItem
                                    title={title}
                                    imageUrl={imageUrl}
                                    description={description}
                                />
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ProjectSection;
