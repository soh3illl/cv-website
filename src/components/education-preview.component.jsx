import React from "react";
import { useSelector } from "react-redux";
import { selectEducation } from "../store/education/education.selector";
import SectionTitle from "./section-title.component";
import { COLORS } from "../routes/resume.component";
import ResumeItem from "./resume-item.component";

const EducationPreview = () => {
    const educationList = useSelector(selectEducation);

    return (
        <section>
            <SectionTitle
                classes={`mb-4 ${COLORS.SECONDARY}`}
                title="Education"
            />
            {educationList.map((education) => {
                return (
                    <ResumeItem
                        data={education}
                        key={education.id}
                        color={COLORS.SECONDARY}
                    >
                        {education.description}
                    </ResumeItem>
                );
            })}
        </section>
    );
};

export default EducationPreview;
