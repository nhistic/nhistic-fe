import React from "react";
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBadge,
    MDBCardFooter,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBIcon,
    MDBRipple
  } from "mdb-react-ui-kit";
import { Link } from "gatsby";
import { SEO } from "../components/seo";
import Layout from "../components/layout";

const IndexPage = () => {
    return (
        <Layout>
            {/* seo */}
            <SEO title="welcome to new world, walking in the other side" keyword={["nhistic", "world", "blog", "artikel", "podcast", "belajar", "bersama"]}/>
            {/* blog */}
            <h1 className="h1-responsive fw-bold text-center mb-3" style={{ color: "#ab47bc" }}>BLOG</h1>
            <MDBRow className="row-cols-1 row-cols-md-3 g-4">
                <MDBCol>
                    <MDBCard className="h-100">
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
                            <MDBCardText>
                                <Link to="#">
                                    <MDBBadge pill color="dark" dark className="me-1" href="#">#tags</MDBBadge>
                                </Link>
                                <Link to="#">
                                    <MDBBadge pill color="primary" dark className="me-1" href="#">#tags</MDBBadge>
                                </Link>
                                <Link to="#">
                                    <MDBBadge pill color="secondary" dark className="me-1" href="#">#tags</MDBBadge>
                                </Link>
                                <Link to="#">
                                    <MDBBadge pill color="info" dark className="me-1" href="#">#tags</MDBBadge> 
                                </Link>
                                <Link to="#">
                                    <MDBBadge pill color="warning" dark className="me-1" href="#">#tags</MDBBadge>
                                </Link>
                                <Link to="#">
                                    <MDBBadge pill color="danger" dark className="me-1" href="#">#tags</MDBBadge>
                                </Link>
                                <Link to="#">
                                    <MDBBadge pill color="success" dark className="me-1" href="#">#tags</MDBBadge>
                                </Link>
                            </MDBCardText>
                            <MDBCardText>
                                This is a longer card with supporting text below as a natural lead-in to additional content.
                            </MDBCardText>
                            <MDBCardText>
                                <MDBBtn rounded href="#" size="sm" style={{ backgroundColor: "#ab47bc" }}>Baca Postingan
                                    <MDBIcon className="ms-3" fab icon="readme" />
                                </MDBBtn>
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                            <small className="text-muted">
                                <MDBIcon fas icon="user-circle" className="me-1"></MDBIcon> <Link to="#" className="pr me-3">humanhistic</Link>
                                <MDBIcon fas icon="calendar-alt" className="me-1"></MDBIcon> 20/03/2023
                            </small>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className="h-100">
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
                            <MDBCardText>
                                <Link to="#">
                                    <MDBBadge pill color="dark" dark className="me-1" href="#">#tags</MDBBadge>
                                </Link>
                                <Link to="#">
                                    <MDBBadge pill color="primary" dark className="me-1" href="#">#tags</MDBBadge>
                                </Link>
                                <Link to="#">
                                    <MDBBadge pill color="secondary" dark className="me-1" href="#">#tags</MDBBadge>
                                </Link>
                                <Link to="#">
                                    <MDBBadge pill color="info" dark className="me-1" href="#">#tags</MDBBadge> 
                                </Link>
                                <Link to="#">
                                    <MDBBadge pill color="warning" dark className="me-1" href="#">#tags</MDBBadge>
                                </Link>
                                <Link to="#">
                                    <MDBBadge pill color="danger" dark className="me-1" href="#">#tags</MDBBadge>
                                </Link>
                                <Link to="#">
                                    <MDBBadge pill color="success" dark className="me-1" href="#">#tags</MDBBadge>
                                </Link>
                            </MDBCardText>
                            <MDBCardText>
                                This is a longer card with supporting text below as a natural lead-in to additional content.
                            </MDBCardText>
                            <MDBCardText>
                                <MDBBtn rounded href="#" size="sm" style={{ backgroundColor: "#ab47bc" }}>Baca Postingan
                                    <MDBIcon className="ms-3" fab icon="readme" />
                                </MDBBtn>
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                            <small className="text-muted">
                                <MDBIcon fas icon="user-circle" className="me-1"></MDBIcon> <Link to="#" className="pr me-3">humanhistic</Link>
                                <MDBIcon fas icon="calendar-alt" className="me-1"></MDBIcon> 20/03/2023
                            </small>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className="h-100">
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
                            <MDBCardText>
                                <Link to="#">
                                    <MDBBadge pill color="dark" dark className="me-1" href="#">#tags</MDBBadge>
                                </Link>
                                <Link to="#">
                                    <MDBBadge pill color="primary" dark className="me-1" href="#">#tags</MDBBadge>
                                </Link>
                                <Link to="#">
                                    <MDBBadge pill color="secondary" dark className="me-1" href="#">#tags</MDBBadge>
                                </Link>
                                <Link to="#">
                                    <MDBBadge pill color="info" dark className="me-1" href="#">#tags</MDBBadge> 
                                </Link>
                                <Link to="#">
                                    <MDBBadge pill color="warning" dark className="me-1" href="#">#tags</MDBBadge>
                                </Link>
                                <Link to="#">
                                    <MDBBadge pill color="danger" dark className="me-1" href="#">#tags</MDBBadge>
                                </Link>
                                <Link to="#">
                                    <MDBBadge pill color="success" dark className="me-1" href="#">#tags</MDBBadge>
                                </Link>
                            </MDBCardText>
                            <MDBCardText>
                                This is a longer card with supporting text below as a natural lead-in to additional content.
                            </MDBCardText>
                            <MDBCardText>
                                <MDBBtn rounded href="#" size="sm" style={{ backgroundColor: "#ab47bc" }}>Baca Postingan
                                    <MDBIcon className="ms-3" fab icon="readme" />
                                </MDBBtn>
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                            <small className="text-muted">
                                <MDBIcon fas icon="user-circle" className="me-1"></MDBIcon> <Link to="#" className="pr me-3">humanhistic</Link>
                                <MDBIcon fas icon="calendar-alt" className="me-1"></MDBIcon> 20/03/2023
                            </small>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className="h-100">
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
                            <MDBCardText>
                                <Link to="#">
                                    <MDBBadge pill color="dark" dark className="me-1" href="#">#tags</MDBBadge>
                                </Link>
                                <Link to="#">
                                    <MDBBadge pill color="primary" dark className="me-1" href="#">#tags</MDBBadge>
                                </Link>
                                <Link to="#">
                                    <MDBBadge pill color="secondary" dark className="me-1" href="#">#tags</MDBBadge>
                                </Link>
                                <Link to="#">
                                    <MDBBadge pill color="info" dark className="me-1" href="#">#tags</MDBBadge> 
                                </Link>
                                <Link to="#">
                                    <MDBBadge pill color="warning" dark className="me-1" href="#">#tags</MDBBadge>
                                </Link>
                                <Link to="#">
                                    <MDBBadge pill color="danger" dark className="me-1" href="#">#tags</MDBBadge>
                                </Link>
                                <Link to="#">
                                    <MDBBadge pill color="success" dark className="me-1" href="#">#tags</MDBBadge>
                                </Link>
                            </MDBCardText>
                            <MDBCardText>
                                This is a longer card with supporting text below as a natural lead-in to additional content.
                            </MDBCardText>
                            <MDBCardText>
                                <MDBBtn rounded href="#" size="sm" style={{ backgroundColor: "#ab47bc" }}>Baca Postingan
                                    <MDBIcon className="ms-3" fab icon="readme" />
                                </MDBBtn>
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                            <small className="text-muted">
                                <MDBIcon fas icon="user-circle" className="me-1"></MDBIcon> <Link to="#" className="pr me-3">humanhistic</Link>
                                <MDBIcon fas icon="calendar-alt" className="me-1"></MDBIcon> 20/03/2023
                            </small>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className="h-100">
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
                            <MDBCardText>
                                <Link to="#">
                                    <MDBBadge pill color="dark" dark className="me-1" href="#">#tags</MDBBadge>
                                </Link>
                                <Link to="#">
                                    <MDBBadge pill color="primary" dark className="me-1" href="#">#tags</MDBBadge>
                                </Link>
                                <Link to="#">
                                    <MDBBadge pill color="secondary" dark className="me-1" href="#">#tags</MDBBadge>
                                </Link>
                                <Link to="#">
                                    <MDBBadge pill color="info" dark className="me-1" href="#">#tags</MDBBadge> 
                                </Link>
                                <Link to="#">
                                    <MDBBadge pill color="warning" dark className="me-1" href="#">#tags</MDBBadge>
                                </Link>
                                <Link to="#">
                                    <MDBBadge pill color="danger" dark className="me-1" href="#">#tags</MDBBadge>
                                </Link>
                                <Link to="#">
                                    <MDBBadge pill color="success" dark className="me-1" href="#">#tags</MDBBadge>
                                </Link>
                            </MDBCardText>
                            <MDBCardText>
                                This is a longer card with supporting text below as a natural lead-in to additional content.
                            </MDBCardText>
                            <MDBCardText>
                                <MDBBtn rounded href="#" size="sm" style={{ backgroundColor: "#ab47bc" }}>Baca Postingan
                                    <MDBIcon className="ms-3" fab icon="readme" />
                                </MDBBtn>
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                            <small className="text-muted">
                                <MDBIcon fas icon="user-circle" className="me-1"></MDBIcon> <Link to="#" className="pr me-3">humanhistic</Link>
                                <MDBIcon fas icon="calendar-alt" className="me-1"></MDBIcon> 20/03/2023
                            </small>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className="h-100">
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
                            <MDBCardText>
                                <Link to="#">
                                    <MDBBadge pill color="dark" dark className="me-1" href="#">#tags</MDBBadge>
                                </Link>
                                <Link to="#">
                                    <MDBBadge pill color="primary" dark className="me-1" href="#">#tags</MDBBadge>
                                </Link>
                                <Link to="#">
                                    <MDBBadge pill color="secondary" dark className="me-1" href="#">#tags</MDBBadge>
                                </Link>
                                <Link to="#">
                                    <MDBBadge pill color="info" dark className="me-1" href="#">#tags</MDBBadge> 
                                </Link>
                                <Link to="#">
                                    <MDBBadge pill color="warning" dark className="me-1" href="#">#tags</MDBBadge>
                                </Link>
                                <Link to="#">
                                    <MDBBadge pill color="danger" dark className="me-1" href="#">#tags</MDBBadge>
                                </Link>
                                <Link to="#">
                                    <MDBBadge pill color="success" dark className="me-1" href="#">#tags</MDBBadge>
                                </Link>
                            </MDBCardText>
                            <MDBCardText>
                                This is a longer card with supporting text below as a natural lead-in to additional content.
                            </MDBCardText>
                            <MDBCardText>
                                <MDBBtn rounded href="#" size="sm" style={{ backgroundColor: "#ab47bc" }}>Baca Postingan
                                    <MDBIcon className="ms-3" fab icon="readme" />
                                </MDBBtn>
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                            <small className="text-muted">
                                <MDBIcon fas icon="user-circle" className="me-1"></MDBIcon> <Link to="#" className="pr me-3">humanhistic</Link>
                                <MDBIcon fas icon="calendar-alt" className="me-1"></MDBIcon> 20/03/2023
                            </small>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="text-center">
                <MDBCol>
                    <MDBBtn href="#" size="lg" color="dark">Lihat Postingan Lebih banyak 
                        <MDBIcon className="ms-3" fas icon="newspaper" />
                    </MDBBtn>
                </MDBCol>
            </MDBRow>
            <hr className="mb-5 mt-5" />
            <br />

            {/* podcast */}
            <h1 className="h1-responsive fw-bold text-center mb-3" style={{ color: "#ab47bc" }}>PODCAST</h1>
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
                                    <MDBCardText>
                                        <Link to="#">
                                            <MDBBadge pill color="dark" dark className="me-1" href="#">#tags</MDBBadge>
                                        </Link>
                                        <Link to="#">
                                            <MDBBadge pill color="primary" dark className="me-1" href="#">#tags</MDBBadge>
                                        </Link>
                                        <Link to="#">
                                            <MDBBadge pill color="secondary" dark className="me-1" href="#">#tags</MDBBadge>
                                        </Link>
                                        <Link to="#">
                                            <MDBBadge pill color="info" dark className="me-1" href="#">#tags</MDBBadge> 
                                        </Link>
                                        <Link to="#">
                                            <MDBBadge pill color="warning" dark className="me-1" href="#">#tags</MDBBadge>
                                        </Link>
                                        <Link to="#">
                                            <MDBBadge pill color="danger" dark className="me-1" href="#">#tags</MDBBadge>
                                        </Link>
                                        <Link to="#">
                                            <MDBBadge pill color="success" dark className="me-1" href="#">#tags</MDBBadge>
                                        </Link>
                                    </MDBCardText>
                                    <MDBCardText>
                                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                    </MDBCardText>
                                    <MDBCardText>
                                        <MDBBtn rounded href="#" size="sm" style={{ backgroundColor: "#ab47bc" }}>Dengarkan Podcast
                                            <MDBIcon className="ms-3" fas icon="play" />
                                        </MDBBtn>
                                    </MDBCardText>
                                </MDBCardBody>
                                <MDBCardFooter>
                                    <small className="text-muted">
                                        <MDBIcon fas icon="user-circle" className="me-1"></MDBIcon> <Link to="#" className="pr me-3">humanhistic</Link>
                                        <MDBIcon fas icon="calendar-alt" className="me-1"></MDBIcon> 20/03/2023
                                    </small>
                                </MDBCardFooter>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </MDBCol>
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
                                    <MDBCardText>
                                        <Link to="#">
                                            <MDBBadge pill color="dark" dark className="me-1" href="#">#tags</MDBBadge>
                                        </Link>
                                        <Link to="#">
                                            <MDBBadge pill color="primary" dark className="me-1" href="#">#tags</MDBBadge>
                                        </Link>
                                        <Link to="#">
                                            <MDBBadge pill color="secondary" dark className="me-1" href="#">#tags</MDBBadge>
                                        </Link>
                                        <Link to="#">
                                            <MDBBadge pill color="info" dark className="me-1" href="#">#tags</MDBBadge> 
                                        </Link>
                                        <Link to="#">
                                            <MDBBadge pill color="warning" dark className="me-1" href="#">#tags</MDBBadge>
                                        </Link>
                                        <Link to="#">
                                            <MDBBadge pill color="danger" dark className="me-1" href="#">#tags</MDBBadge>
                                        </Link>
                                        <Link to="#">
                                            <MDBBadge pill color="success" dark className="me-1" href="#">#tags</MDBBadge>
                                        </Link>
                                    </MDBCardText>
                                    <MDBCardText>
                                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                    </MDBCardText>
                                    <MDBCardText>
                                        <MDBBtn rounded href="#" size="sm" style={{ backgroundColor: "#ab47bc" }}>Dengarkan Podcast
                                            <MDBIcon className="ms-3" fas icon="play" />
                                        </MDBBtn>
                                    </MDBCardText>
                                </MDBCardBody>
                                <MDBCardFooter>
                                    <small className="text-muted">
                                        <MDBIcon fas icon="user-circle" className="me-1"></MDBIcon> <Link to="#" className="pr me-3">humanhistic</Link>
                                        <MDBIcon fas icon="calendar-alt" className="me-1"></MDBIcon> 20/03/2023
                                    </small>
                                </MDBCardFooter>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </MDBCol>
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
                                    <MDBCardText>
                                        <Link to="#">
                                            <MDBBadge pill color="dark" dark className="me-1" href="#">#tags</MDBBadge>
                                        </Link>
                                        <Link to="#">
                                            <MDBBadge pill color="primary" dark className="me-1" href="#">#tags</MDBBadge>
                                        </Link>
                                        <Link to="#">
                                            <MDBBadge pill color="secondary" dark className="me-1" href="#">#tags</MDBBadge>
                                        </Link>
                                        <Link to="#">
                                            <MDBBadge pill color="info" dark className="me-1" href="#">#tags</MDBBadge> 
                                        </Link>
                                        <Link to="#">
                                            <MDBBadge pill color="warning" dark className="me-1" href="#">#tags</MDBBadge>
                                        </Link>
                                        <Link to="#">
                                            <MDBBadge pill color="danger" dark className="me-1" href="#">#tags</MDBBadge>
                                        </Link>
                                        <Link to="#">
                                            <MDBBadge pill color="success" dark className="me-1" href="#">#tags</MDBBadge>
                                        </Link>
                                    </MDBCardText>
                                    <MDBCardText>
                                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                    </MDBCardText>
                                    <MDBCardText>
                                        <MDBBtn rounded href="#" size="sm" style={{ backgroundColor: "#ab47bc" }}>Dengarkan Podcast
                                            <MDBIcon className="ms-3" fas icon="play" />
                                        </MDBBtn>
                                    </MDBCardText>
                                </MDBCardBody>
                                <MDBCardFooter>
                                    <small className="text-muted">
                                        <MDBIcon fas icon="user-circle" className="me-1"></MDBIcon> <Link to="#" className="pr me-3">humanhistic</Link>
                                        <MDBIcon fas icon="calendar-alt" className="me-1"></MDBIcon> 20/03/2023
                                    </small>
                                </MDBCardFooter>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            <br />
            <MDBRow className="text-center">
                <MDBCol>
                    <MDBBtn href="#" size="lg" color="dark">Dengarkan Podcast Lebih banyak 
                        <MDBIcon className="ms-3" fas icon="compact-disc" />
                    </MDBBtn>
                </MDBCol>
            </MDBRow>
        </Layout>
    )
}

export default IndexPage;