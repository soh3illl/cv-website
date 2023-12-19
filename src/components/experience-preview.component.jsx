import React from "react";
import { useSelector } from "react-redux";
import {
    selectResume,
    selectResumeIsLoading,
} from "../store/resume/resume.selector";
// components
import SectionTitle from "./section-title.component";
import ResumeItem from "./resume-item.component";
import Spinner from "./spinner/spinner.component";
// color
import { COLORS } from "../routes/resume.component";

const ExperiencePreview = () => {
    const resumeList = useSelector(selectResume);
    const isLoading = useSelector(selectResumeIsLoading);

    return (
        <section>
            <div className="d-flex align-items-center justify-content-between mb-4">
                <SectionTitle
                    classes={`mb-0 ${COLORS.PRIMARY}`}
                    title="Experience"
                />
                <a className="btn btn-primary px-4 py-3" href="#!">
                    <div className="d-inline-block bi bi-download me-2"></div>
                    Download Resume
                </a>
            </div>
            {isLoading ? (
                <Spinner />
            ) : (
                resumeList.map((resume) => {
                    return (
                        <ResumeItem
                            key={resume.id}
                            data={resume}
                            color={COLORS.PRIMARY}
                        >
                            {resume.description}
                        </ResumeItem>
                    );
                })
            )}
        </section>
    );
};

export default ExperiencePreview;
