import React from "react";
// components
import Container from "../components/container.component";
import PageTitle from "../components/page-title.component";
import ExperiencePreview from "../components/experience-preview.component";
import EducationPreview from "../components/education-preview.component";
import Divider from "../components/divider.component";
import SkillsSectoin from "../components/skills-section.component";

export const COLORS = {
    PRIMARY: "text-primary",
    SECONDARY: "text-secondary",
};

const Resume = () => {
    return (
        <main className="flex-shrink-0 h-full bg-light">
            {/* <!-- Page Content--> */}
            <Container classes="py-5">
                <PageTitle title="Resume" />
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-11 col-xl-9 col-xxl-8">
                        {/* <!-- Experiecnce --> */}
                        <ExperiencePreview />
                        {/* <!-- Education --> */}
                        <EducationPreview />
                        {/* <!-- Divider--> */}
                        <Divider />
                        {/* <!-- Skills Section--> */}
                        <SkillsSectoin />
                    </div>
                </div>
            </Container>
        </main>
    );
};

export default Resume;
