import React, { Fragment } from "react";

const EducationDetails = ({ college, city, degree, major }) => {
    return (
        <Fragment>
            <div className="mb-2">
                <div className="small fw-bolder">{college}</div>
                <div className="small text-muted">{city}</div>
            </div>
            <div className="fst-italic">
                <div className="small text-muted">{degree}</div>
                <div className="small text-muted">{major}</div>
            </div>
        </Fragment>
    );
};

export default EducationDetails;
