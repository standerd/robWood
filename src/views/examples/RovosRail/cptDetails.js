import React from "react";
import {Link} from "react-router-dom"
import Helmet from "react-helmet"

// reactstrap components
import { Table, Container, Row, Col } from "reactstrap";

// core components

import WhiteNavbar from "components/Navbars/WhiteNavbar";
import Header from "components/Headers/RovosHeader";
import Footer from "components/Footers/FooterWhite";

function CapeTown() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
    <Helmet>
        <title>Luxury Rail Travel</title>
        <meta property="og:site_name" content="" />
        <meta
          property="og:title"
          content="The Blue Train - Specials, Packages and Reservations"
        />
        <meta
          property="og:description"
          content="Blue Train Tickets and Special Packages - Luxury Train Travel in South Africa with Train Safaris connecting Cape Town, Pretoria and Durban. Blou Trein pakette en kaartjies."
        />

        <meta property="og:url" content="https://www.luxuryrailtravel.co.za/" />

        <meta
          name="description"
          content="Blue Train Tickets and Special Packages - Luxury Train Travel in South Africa with Train Safaris connecting Cape Town, Pretoria and Durban. Blou Trein pakette en kaartjies."
        />
        <meta
          name="keywords"
          content="the Blue Train, Blue Train, Blou Trein, bloutrein, specials, packages, pakette, pretoria, cape town, durban"
        />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      </Helmet>
      <WhiteNavbar />
      <Header />
      <div className="wrapper">
        <div style={{ backgroundColor: "#095043", width: "100%" }}>
          <Container>
            <br />
            <h6>
            <Link to="/itineraryRovos" style={{ color: "white" }}>
                <i className="now-ui-icons arrows-1_minimal-left"></i> Back To
                Journeys
              </Link>
            </h6>
            <h1
              style={{ color: "white", textAlign: "center" }}
              className="title"
            >
              Cape Town Itinerary
            </h1>
            <img
              className="ml-auto mr-auto width-full"
              alt="..."
              src={require("assets/img/rovos/cptRovos.jpg")}
            ></img>
            <br />
            <hr style={{ borderBottom: "1px solid white" }} />
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h3 style={{ color: "white", marginTop: "10px" }}>
                  Pretoria To Cape Town
                </h3>
                <h4 style={{ color: "white", textAlign: "left" }}>
                  Journey Description:
                </h4>
                <p style={{ color: "white", textAlign: "left" }}>
                  This 1 600-kilometre meander is a perfect illustration of
                  South Africa as a world in one country. Travel the grasslands
                  of the gold-rich Highveld to the haunting barrenness of the
                  Great Karoo; trundle through the spectacular mountain ranges
                  and scenic winelands of the Cape. Journey’s end is Cape Town,
                  the Mother City of South Africa, cradled by the imposing bulk
                  of Table Mountain, Devil’s Peak and Lion’s Head. Highlights of
                  the north- and southbound routes include a visit to the
                  historic village of Matjiesfontein; this authentic perfectly
                  preserved Victorian Village – founded by Mr Logan as a
                  refreshment stop in 1890 – also boasts an impressive museum on
                  the platform. Another stop is made in Kimberley providing an
                  opportunity to enjoy a city tour and a visit to the Diamond
                  Mine Museum and the world’s largest man-made excavation, the
                  Big Hole. Available in reverse.
                  <hr style={{ borderBottom: "1px solid white" }} />
                </p>
                <h4
                  style={{
                    color: "white",
                    marginTop: "10px",
                    textAlign: "left"
                  }}
                >
                  Itinerary:
                </h4>
                <Table style={{ color: "white" }} responsive borderless>
                  <tbody>
                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold", width: "10%" }}>
                        Day 1
                      </td>
                      <td style={{ textAlign: "left" }}>
                        Depart from Rovos Rail Station in Pretoria. Dinner and
                        Overnight on the train
                        <br />
                        Breakfast: 07:00 - 10:00 , Lunch: 13:00 , Tea: 16:30 ,
                        Dinner: 19:30
                      </td>
                    </tr>

                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>Day 2</td>
                      <td style={{ textAlign: "left" }}>
                        Visit the extraordinary Big Hole and Diamond Museum in
                        Kimberley.
                        <br />
                        Travel across the Karoo toward Matjiesfontein. Overnight
                        on board.
                      </td>
                    </tr>

                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold" }}>Day 3</td>
                      <td style={{ textAlign: "left" }}>
                        Visit the historic village of Matjiesfontein. Travel
                        through the Hex River Valley to Cape Town.
                        <br />
                        18:00 arrive at Cape Town Station's Platform 24.
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
            <br />
          </Container>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default CapeTown;
