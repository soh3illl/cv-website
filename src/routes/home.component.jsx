import React, { Fragment } from "react";
// components
import Navigation from "../components/navigation.component";
import Header from "../components/header.component";
import About from "../components/about-section.component";
import Footer from "../components/footer.component";

const Home = () => {
    return (
        <Fragment>
            <main className="flex-shrink-0 h-100">
                {/* <!-- Header--> */}
                <Header />
                {/* <!-- About Section--> */}
                <About />
            </main>
        </Fragment>
    );
};

export default Home;
