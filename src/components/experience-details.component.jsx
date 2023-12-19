import React, { Fragment } from "react";
import { ucwords } from "../helpers";

const ExperienceDetails = ({ job, city, company }) => {
    return (
        <Fragment>
            <div className="small fw-bolder">{ucwords(job)}</div>
            <div className="small text-muted">{ucwords(company)}</div>
            <div className="small text-muted">{ucwords(city)}</div>
        </Fragment>
    );
};

export default ExperienceDetails;
