import React from "react";
import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardImage,
    MDBBadge,
    MDBRipple,
    MDBCardText,
    MDBCardFooter,
    MDBIcon,
    MDBRow,
    MDBCol,
    MDBBtn
} from "mdb-react-ui-kit";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Sidebar = () => {
    return (
        <MDBContainer>
            <MDBCard className="z-depth-0 shadow-none border border-0">
                <MDBCardBody>
                    <MDBCardTitle className="fw-bold border-bottom border-muted py-2 mb-3 text-center">SPACE IKLAN</MDBCardTitle>
                    <StaticImage class="img-fluid" src="../assets/iklan.png" alt="iklan" />
                </MDBCardBody>
            </MDBCard>
            <br />
            <MDBCard className="z-depth-0 shadow-none border border-0">
                <MDBCardBody>
                    <MDBCardTitle className="fw-bold border-bottom border-muted py-2 mb-3 text-center">POSTINGAN TERPOPULER</MDBCardTitle>
                    <MDBRow className="row-cols-1 row-cols-md-1 g-4">
                        <MDBCol>
                            <MDBCard className="h-100 shadow-1">
                                <Link to="#">
                                    <MDBRipple rippleColor="light" rippleTag="div" className="bg-image hover-overlay">
                                        <MDBCardImage className="img-fluid"
                                            src="https://mdbootstrap.com/img/new/standard/city/044.webp"
                                            alt="..."
                                            position="top"
                                        />
                                        <a><div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div></a>
                                    </MDBRipple>
                                </Link>
                                <MDBCardBody className="text-center">
                                    <Link to="#" className="dr">
                                        <MDBCardTitle className="fw-bold">Card title</MDBCardTitle>
                                    </Link>
                                    <hr />
                                    <small className="text-muted">
                                        <MDBIcon fas icon="user-circle" className="me-1"></MDBIcon> <Link to="#" className="pr me-3">humanhistic</Link>
                                        <MDBIcon fas icon="calendar-alt" className="me-1"></MDBIcon> 20/03/2023
                                    </small>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol>
                            <MDBCard className="h-100 shadow-1">
                                <Link to="#">
                                    <MDBRipple rippleColor="light" rippleTag="div" className="bg-image hover-overlay">
                                        <MDBCardImage className="img-fluid"
                                            src="https://mdbootstrap.com/img/new/standard/city/044.webp"
                                            alt="..."
                                            position="top"
                                        />
                                        <a><div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div></a>
                                    </MDBRipple>
                                </Link>
                                <MDBCardBody className="text-center">
                                    <Link to="#" className="dr">
                                        <MDBCardTitle className="fw-bold">Card title</MDBCardTitle>
                                    </Link>
                                    <hr />
                                    <small className="text-muted">
                                        <MDBIcon fas icon="user-circle" className="me-1"></MDBIcon> <Link to="#" className="pr me-3">humanhistic</Link>
                                        <MDBIcon fas icon="calendar-alt" className="me-1"></MDBIcon> 20/03/2023
                                    </small>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol>
                            <MDBCard className="h-100 shadow-1">
                                <Link to="#">
                                    <MDBRipple rippleColor="light" rippleTag="div" className="bg-image hover-overlay">
                                        <MDBCardImage className="img-fluid"
                                            src="https://mdbootstrap.com/img/new/standard/city/044.webp"
                                            alt="..."
                                            position="top"
                                        />
                                        <a><div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div></a>
                                    </MDBRipple>
                                </Link>
                                <MDBCardBody className="text-center">
                                    <Link to="#" className="dr">
                                        <MDBCardTitle className="fw-bold">Card title</MDBCardTitle>
                                    </Link>
                                    <hr />
                                    <small className="text-muted">
                                        <MDBIcon fas icon="user-circle" className="me-1"></MDBIcon> <Link to="#" className="pr me-3">humanhistic</Link>
                                        <MDBIcon fas icon="calendar-alt" className="me-1"></MDBIcon> 20/03/2023
                                    </small>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
            <br />
            <MDBCard className="z-depth-0 shadow-none border border-0">
                <MDBCardBody>
                    <MDBCardTitle className="fw-bold border-bottom border-muted py-2 mb-3 text-center">PODCAST TERPOPULER</MDBCardTitle>
                    <MDBRow className="row-cols-1 row-cols-md-1 g-4">
                        <MDBCol>
                            <MDBCard className="h-100">
                                <MDBRow>
                                    <MDBCol md="5">
                                        <Link to="#">
                                            <MDBRipple rippleColor="light" rippleTag="div" className="bg-image hover-overlay">
                                                <MDBCardImage className="img-fluid"
                                                    src="https://mdbootstrap.com/img/new/standard/city/044.webp"
                                                    alt="..."
                                                    position="top"
                                                />
                                                <a><div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div></a>
                                            </MDBRipple>
                                        </Link>
                                    </MDBCol>
                                    <MDBCol md="7">
                                        <MDBCardBody>
                                            <Link to="#" className="dr">
                                                <MDBCardTitle className="fw-bold">Card title</MDBCardTitle>
                                            </Link>
                                            <hr />
                                            <small className="text-muted">
                                                <MDBIcon fas icon="user-circle" className="me-1"></MDBIcon> <Link to="#" className="pr me-3">humanhistic</Link>
                                                <MDBIcon fas icon="calendar-alt" className="me-1"></MDBIcon> 20/03/2023
                                            </small>
                                        </MDBCardBody>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
            <br />
            <MDBCard className="z-depth-0 shadow-none border border-0">
                <MDBCardBody>
                    <MDBCardTitle className="fw-bold border-bottom border-muted py-2 mb-3 text-center">KATEGORI</MDBCardTitle>
                    <MDBCardText>
                        <Link to="#">
                            <MDBBadge pill color="dark" dark className="me-1" href="#">#tags</MDBBadge>
                        </Link>
                    </MDBCardText>
                    <MDBCardText>
                        <Link to="#">
                            <MDBBadge pill color="primary" dark className="me-1" href="#">#tags</MDBBadge>
                        </Link>
                    </MDBCardText>
                    <MDBCardText>
                        <Link to="#">
                            <MDBBadge pill color="secondary" dark className="me-1" href="#">#tags</MDBBadge>
                        </Link>
                    </MDBCardText>
                    <MDBCardText>
                        <Link to="#">
                            <MDBBadge pill color="info" dark className="me-1" href="#">#tags</MDBBadge> 
                        </Link>
                    </MDBCardText>
                    <MDBCardText>
                        <Link to="#">
                            <MDBBadge pill color="warning" dark className="me-1" href="#">#tags</MDBBadge>
                        </Link>
                    </MDBCardText>
                    <MDBCardText>
                        <Link to="#">
                            <MDBBadge pill color="danger" dark className="me-1" href="#">#tags</MDBBadge>
                        </Link>
                    </MDBCardText>
                    <MDBCardText>
                        <Link to="#">
                            <MDBBadge pill color="success" dark className="me-1" href="#">#tags</MDBBadge>
                        </Link>
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    )
}

export default Sidebar
