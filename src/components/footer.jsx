import React from "react";
import { 
  MDBFooter, 
  MDBContainer, 
  MDBRow, 
  MDBCol 
} from "mdb-react-ui-kit";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";


const Footer = () => {
  return (
    <MDBFooter className="text-white text-center" style={{ backgroundColor: "#ab47bc" }}>
      <MDBContainer className="p-4">
        <MDBRow>
          <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
            <h5 className="text-uppercase fw-bold mb-4">
                <StaticImage className="img-fluid" src="../assets/icon.png" alt="logo" class="me-3" height={25} />
                nhistic World
              </h5>
            <p>nhistic World adalah dunia informasi, blog, berita, podcast dan tempat untuk belajar bersama secara online yang disajikan dalam format yang menarik dan mudah dipahami.</p>
            <p className="mb-4">welcome to the new World, walking in the other side.</p>
            <hr className="mb-3 mt-3" />
          </MDBCol>

          <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Seputar nhistic</h5>
            <ul className="list-unstyled mb-0">
              <li className="list-unstyled py-2 mr-5">
                  <Link to="/tentang-kami/" className="yl">Tentang Kami</Link>
              </li>
              <li className="list-unstyled py- mr-5">
                  <Link to="/disclaimer/" className="yl">Disclaimer</Link>
              </li>
              <li className="list-unstyled py-2 mr-5">
                  <Link to="/privacy-policy/" className="yl">Privacy Policy</Link>
              </li>
            </ul>
            <br />
          </MDBCol>

          <MDBCol lg="3" md="6">
            <h5 className="text-uppercase">Diskusi</h5>
            <ul className="list-unstyled mb-0">
              <li className="list-unstyled py-2 mr-5">
                  <Link to="/forum/" className="yl">Forum</Link>
              </li>
              <li className="list-unstyled py- mr-5">
                  <Link to="/author/" className="yl">Author</Link>
              </li>
              <li className="list-unstyled py-2 mr-5">
                  <Link to="/terms-and-condition/" className="yl">Terms & Condition</Link>
              </li>
            </ul>
            <br />
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        &copy; 2020-{new Date().getFullYear()} | <strong>nhistic World</strong>
        <br/>Built with 
        <Link to="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer" className="yl"> GatsbyJS </Link> and <Link to="https://www.strapi.io/" target="_blank" rel="noopener noreferrer" className="yl"> StrapiJS</Link  >
      </div>
    </MDBFooter>
  );
}

export default Footer;