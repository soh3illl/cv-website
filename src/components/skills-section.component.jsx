import React from "react";
import { useSelector } from "react-redux";
import { selectSkills } from "../store/skills/skills.selector";
import SkillsPreview from "./skills-preview.component";

const SkillsSectoin = () => {
    const skillsMap = useSelector(selectSkills);

    return (
        <section>
            {/* <!-- Skillset Card--> */}
            <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">
                    {skillsMap.map((category) => {
                        return (
                            <SkillsPreview
                                title={category.title}
                                skills={category.skills}
                                icon={category.icon}
                                key={category.id}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SkillsSectoin;
