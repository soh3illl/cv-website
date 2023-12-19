import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
// components
import Navigation from "../components/navigation.component";
import Footer from "../components/footer.component";

const Layout = () => {
    return (
        <Fragment>
            <Navigation />
            <Outlet />
            <Footer />
        </Fragment>
    );
};

export default Layout;
