import React from "react";

const ProjectItem = ({ title, imageUrl, description }) => {
    return (
        <div class="card overflow-hidden shadow rounded-4 border-0 mb-5">
            <div class="card-body p-0">
                <div class="d-flex align-items-center">
                    <div class="p-5">
                        <h2 class="fw-bolder">{title}</h2>
                        <p>{description}</p>
                    </div>
                    <img class="img-fluid" src={imageUrl} alt="..." />
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
