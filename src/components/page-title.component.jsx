import React from "react";

const PageTitle = ({ title }) => {
    return (
        <div className="text-center mb-5">
            <h1 className="display-5 fw-bolder mb-0">
                <span className="text-gradient d-inline">{title}</span>
            </h1>
        </div>
    );
};

export default PageTitle;
