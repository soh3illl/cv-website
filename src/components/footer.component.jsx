import React from "react";
import Container from "./container.component";

const Footer = () => {
    return (
        <footer className="bg-white py-4 mt-auto">
            <Container>
                <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div className="col-auto ">
                        <div className="small m-0">
                            Copyright &copy; Your Website 2023
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
