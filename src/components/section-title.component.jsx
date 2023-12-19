import React from "react";

const SectionTitle = ({ title, classes }) => {
    return <h2 className={`fw-bolder ${classes}`}>{title}</h2>;
};

export default SectionTitle;
