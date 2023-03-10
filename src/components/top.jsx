import React from "react";
import { MDBNavbar, MDBNavbarNav, MDBNavbarItem, MDBContainer, MDBBadge, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";
import Waktu from "./waktu";

class Top extends React.Component {
    arrbulan = ["JANUARI", "FEBRUARI", "MARET", "APRIL", "MEI", "JUNI", "JULI", "AGUSTUS", "SEPTEMBER", "OKTOBER", "NOVEMBER", "DESEMBER"];
    tanggal = new Date().getDate();
    bulan = new Date().getMonth();
    tahun = new Date().getFullYear();
    today = this.tanggal + " " + this.arrbulan[this.bulan] + " " + this.tahun;
    
    render() {
        return (
            <MDBNavbar className="z-depth-0" dark style={{ backgroundColor: "#ab47bc", height: `51px` }}>
                <MDBContainer>
                    <MDBNavbarNav>
                        <MDBRow>
                            <MDBCol className="d-none d-sm-none d-md-none d-lg-block d-xl-block" md="4">
                                <MDBNavbarItem>
                                    <MDBBadge className="z-depth-0 shadow-none fw-bold" pill color="dark bg-opacity-50">&nbsp;TANGGAL&nbsp; : &nbsp;{this.today}&nbsp;</MDBBadge>
                                    &nbsp;<MDBBadge className="z-depth-0 shadow-none fw-bold" pill color="dark bg-opacity-50">|</MDBBadge>&nbsp;
                                    <MDBBadge className="z-depth-0 shadow-none fw-bold" pill color="dark bg-opacity-50">&nbsp;JAM&nbsp; : &nbsp;<Waktu />&nbsp;</MDBBadge>
                                </MDBNavbarItem>
                            </MDBCol>
                            <MDBCol className="d-none d-sm-none d-md-none d-lg-block d-xl-block text-end" md="8">
                                <MDBNavbarItem>
                                    <MDBBadge className="z-depth-0 shadow-none mr-2 wh" color="none" tag="a" href="https://www.facebook.com/" target="_blank"><MDBIcon fab icon="facebook" size="2x"/></MDBBadge>
                                    <MDBBadge className="z-depth-0 shadow-none mr-2 wh" color="none" tag="a" href="https://www.twitter.com/" target="_blank"><MDBIcon fab icon="twitter" size="2x"/></MDBBadge>
                                    <MDBBadge className="z-depth-0 shadow-none mr-2 wh" color="none" tag="a" href="https://www.instagram.com/" target="_blank"><MDBIcon fab icon="instagram" size="2x"/></MDBBadge>
                                    <MDBBadge className="z-depth-0 shadow-none mr-2 wh" color="none" tag="a" href="https://www.youtube.com/" target="_blank"><MDBIcon fab icon="youtube" size="2x"/></MDBBadge>
                                    <MDBBadge className="z-depth-0 shadow-none mr-2 wh" color="none" tag="a" href="https://www.tiktok.com/" target="_blank"><MDBIcon fab icon="tiktok" size="2x"/></MDBBadge>
                                    <MDBBadge className="z-depth-0 shadow-none mr-2 wh" color="none" tag="a" href="https://www.spotify.com/" target="_blank"><MDBIcon fab icon="spotify" size="2x"/></MDBBadge>
                                    <MDBBadge className="z-depth-0 shadow-none mr-2 wh" color="none" tag="a" href="https://www.telegram.com/" target="_blank"><MDBIcon fab icon="telegram" size="2x"/></MDBBadge>
                                    <MDBBadge className="z-depth-0 shadow-none mr-2 wh" color="none" tag="a" href="https://www.whatsapp.com/" target="_blank"><MDBIcon fab icon="whatsapp" size="2x"/></MDBBadge>
                                    <MDBBadge className="z-depth-0 shadow-none mr-2 wh" color="none" tag="a" href="https://www.line.com/" target="_blank"><MDBIcon fab icon="line" size="2x"/></MDBBadge>
                                </MDBNavbarItem>
                            </MDBCol>
                        </MDBRow>
                        
                        {/* mobile */}
                        <MDBRow>
                            <MDBCol className="d-xs-block d-sm-block d-md-block d-lg-none text-center" md="12">
                                <MDBNavbarItem>
                                    <MDBBadge className="z-depth-0 shadow-none fw-bold" pill color="dark bg-opacity-50">&nbsp;TANGGAL&nbsp; : &nbsp;{this.today}&nbsp;</MDBBadge>
                                    &nbsp;<MDBBadge className="z-depth-0 shadow-none fw-bold" pill color="dark bg-opacity-50">|</MDBBadge>&nbsp;
                                    <MDBBadge className="z-depth-0 shadow-none fw-bold" pill color="dark bg-opacity-50">&nbsp;JAM&nbsp; : &nbsp;<Waktu />&nbsp;</MDBBadge>
                                </MDBNavbarItem>
                            </MDBCol>
                        </MDBRow>
                    </MDBNavbarNav>
                </MDBContainer>
            </MDBNavbar>
        )
    }
}

export default Top;