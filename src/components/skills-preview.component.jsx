import React from "react";
import { chunk } from "../helpers";
import SkillItem from "./skill-item.component";

const SkillsPreview = ({ icon, title, skills }) => {
    const chunkedSkills = chunk(skills, 3);
    return (
        <div className="mb-5">
            <div className="d-flex align-items-center mb-4">
                <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                    <i className={icon}></i>
                </div>
                <h3 className="fw-bolder mb-0">
                    <span className="text-gradient d-inline">{title}</span>
                </h3>
            </div>
            {chunkedSkills.map((skillList, index) => {
                return (
                    <div
                        className="row row-cols-1 row-cols-md-3 mb-4"
                        key={index}
                    >
                        {skillList.map((skill) => {
                            return (
                                <SkillItem title={skill.title} key={skill.id} />
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default SkillsPreview;
