import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import ScrollToTop from "react-scroll-up";
import PageTransition from "gatsby-plugin-page-transitions";

import Top from "./top";
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import "../styles/index.scss";

const Layout = ({ children }) => {
    return (
        <>
        <Top/>
        <Header />
        <PageTransition>
            <MDBContainer id="content">
                <MDBRow >
                    <MDBCol lg="8" md="12">
                        {children}
                        <br />
                        <hr className="mb-8 mt-3" />
                    </MDBCol>
                    <MDBCol lg="4" md="6">
                        <Sidebar />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <ScrollToTop
                showUnder={160}
                style={{
                    position: "fixed",
                    bottom: 30,
                    right: 30,
                    cursor: "pointer",
                    transitionDuration: "0.2s",
                    transitionTimingFunction: "linear",
                    transitionDelay: "0s"
                }}
            >
                <MDBBtn size="lg" floating color="dark">
                    <MDBIcon fas icon="angle-double-up" />
                </MDBBtn>
            </ScrollToTop>
        </PageTransition>
        <Footer/>
        </>
    )
}

export default Layout;