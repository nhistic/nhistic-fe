import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBBtn,
  MDBCollapse
} from "mdb-react-ui-kit";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar className="position-sticky z-depth-0 shadow-none border-bottom border-muted" fixed="top" expand="lg" light bgColor="white">
      <MDBContainer>
        <MDBNavbarBrand href="/"><StaticImage class="img-fluid" src="../assets/logo.png" alt="logo" height={30} /></MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <hr />
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 fw-bold text-center">
            <MDBNavbarItem>
                <Link className="nav-link" to="/" activeStyle={{color: "#ab47bc" }}>BERANDA</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
                <Link className="nav-link" to="/blog/" activeStyle={{color: "#ab47bc" }}>BLOG</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
                <Link className="nav-link" to="/podcast/" activeStyle={{color: "#ab47bc" }}>PODCAST</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
                <Link className="nav-link" to="/belajar-bersama/" activeStyle={{color: "#ab47bc" }}>BELAJAR BERSAMA</Link>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <hr />
          <form className="d-flex input-group w-auto">
            <input type="search" className="form-control" placeholder="Pencarian..." aria-label="Pencarian" />
            <MDBBtn style={{ backgroundColor: "#ab47bc" }}>Cari</MDBBtn>
          </form>
          <hr />
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  )
}

export default Header; 