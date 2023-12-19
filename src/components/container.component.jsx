import React from "react";

const Container = ({ classes, children }) => {
    classes = classes ? classes : "";
    return <div className={`container px-5 ${classes}`}>{children}</div>;
};

export default Container;
