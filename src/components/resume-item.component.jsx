import React from "react";
import ExperienceDetails from "./experience-details.component";
import EducationDetails from "./education-details.component";

const ResumeItem = ({ data, color, children }) => {
    const { startYear, endYear = "Present", city, ...info } = data;

    let details;
    if (info.jobTitle && info.company) {
        details = (
            <ExperienceDetails
                city={city}
                company={info.company}
                job={info.jobTitle}
            />
        );
    } else if (info.college && info.major && info.degree) {
        details = (
            <EducationDetails
                college={info.college}
                major={info.major}
                degree={info.degree}
                city={city}
            />
        );
    }
    return (
        <div className="card shadow border-0 rounded-4 mb-5">
            <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                        <div className="bg-light p-4 rounded-4">
                            <div className={`${color} fw-bolder mb-2`}>
                                {startYear} - {endYear ? endYear : "Present"}
                            </div>
                            {details}
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div>{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeItem;
