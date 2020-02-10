import React, { useEffect } from "react";
import Helmet from "react-helmet";
// react plugin used to create DropdownMenu for selecting items

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import WhiteNavbar from "components/Navbars/ShongNavbar";
import Footer from "components/Footers/FooterWhite";
import Carousel from "./ShongCar";

function RovosDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Helmet>
        <title>Luxury Rail Travel | Rovos Rail | Blue Train</title>
        <meta
          name="description"
          content="Luxury Rail Travel, Blue Train, Rovos Rail"
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href="https://wwww.luxuryrailtravel.co.za" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Luxury Rail Travel | Blue Train" />
        <meta
          property="og:description"
          content="Luxury Rail Travel, Blue Train, Rovos Rail"
        />
        <meta property="og:url" content="https://wwww.luxuryrailtravel.co.za" />
        <meta property="og:site_name" content="Luxury Rail Travel" />
        <meta property="og:image" content="blue4.jpg" />
        <meta property="og:image:secure_url" content="blue4.jpg" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
      </Helmet>
      <WhiteNavbar />
      <div className="wrapper">
        <div
          style={{ backgroundColor: "#380812 ", color: "white" }}
          className="section"
        >
          <div className="text-center">
            <div>
              <Container>
                <Row>
                  <Col className="mr-auto ml-auto" md="12">
                    <h2 className="title">Shongololo Information</h2>
                    <h4 className="description">
                      Below you will find images, cabin layouts and route
                      details of The Shongololo Express. If you can't find what
                      you are looking for please do not hesitate to contact us.
                    </h4>
                  </Col>
                  <div style={{ width: "100%", margin: "0 auto" }}>
                    <Carousel />
                    <br />
                  </div>
                </Row>
              </Container>
            </div>
          </div>

          <div
            style={{ backgroundColor: "white ", color: "black" }}
            className="about-office"
          >
            <Container>
              <Row className="text-center">
                <Col className="ml-auto mr-auto" md="12">
                  <h2 style={{ color: "#095043" }} className="title">
                    Suites
                  </h2>
                  <h4 className="description">
                    The two types of cabins are refined and spacious offering
                    passengers privacy and comfort with double or twin beds and
                    fittings and facilities that are of the highest standard.
                    All have en-suite bathrooms with shower, toilet and basin,
                    tea-and-coffee facilities (Emeralds only), safes, air
                    conditioning, linen and amenities and are serviced daily.
                    There is adequate storage and small cupboards with hangers
                    and shelves.
                  </h4>
                </Col>
              </Row>
              <hr style={{ borderBottom: "1px solid white" }} />
              <h4
                style={{ marginTop: "0", color: "#095043" }}
                className="text-center"
              >
                Gold Suites
              </h4>
              <Row>
                <Col className="ml-auto mr-auto" xs="12" sm="4" md="4">
                  <img
                    alt="..."
                    className="rounded img-raised ml-auto mr-auto"
                    src={require("assets/img/shong/gld1.jpg")}
                  ></img>
                </Col>
                <Col className="ml-auto mr-auto" xs="12" sm="4" md="4">
                  <img
                    alt="..."
                    className="rounded img-raised ml-auto mr-auto"
                    src={require("assets/img/shong/gld2.jpg")}
                  ></img>
                </Col>
                <Col className="ml-auto mr-auto" xs="12" sm="4" md="4">
                  <img
                    alt="..."
                    className="rounded img-raised ml-auto mr-auto"
                    src={require("assets/img/shong/gld3.jpg")}
                  ></img>
                </Col>
              </Row>
              <hr style={{ borderBottom: "1px solid white" }} />
              <h4
                style={{ marginTop: "0", color: "#095043" }}
                className="text-center"
              >
                Emerald Suites
              </h4>
              <Row>
                <Col className="ml-auto mr-auto" xs="12" sm="4" md="4">
                  <img
                    alt="..."
                    className="rounded img-raised ml-auto mr-auto"
                    src={require("assets/img/shong/em1.jpg")}
                  ></img>
                </Col>
                <Col className="ml-auto mr-auto" xs="12" sm="4" md="4">
                  <img
                    alt="..."
                    className="rounded img-raised ml-auto mr-auto"
                    src={require("assets/img/shong/em2.jpg")}
                  ></img>
                </Col>
                <Col className="ml-auto mr-auto" xs="12" sm="4" md="4">
                  <img
                    alt="..."
                    className="rounded img-raised ml-auto mr-auto"
                    src={require("assets/img/shong/em3.jpg")}
                  ></img>
                </Col>
              </Row>
            </Container>
            <br />
          </div>
          <div
            style={{ backgroundColor: "#380812", color: "white" }}
            className="about-office"
          >
            <Container>
              <Row className="text-center">
                <Col className="ml-auto mr-auto" md="12">
                  <h2 className="title">Public Areas</h2>
                  <h5 className="description">
                    Recapture the romance of a bygone era when travellers
                    experienced the magic and mystery of Africa in a relaxed and
                    elegant fashion. The classic wood-panelled coaches are the
                    epitome of comfort with period features combining with
                    modern technology. The service is discreet and friendly with
                    an enthusiastic team of chefs ensuring guests’ every need is
                    catered for. There is an accent on fresh local ingredients
                    and traditional dishes are a specialty. Every morning there
                    is a full breakfast with dishes cooked to order. Meals are
                    served in one sitting only and are complemented by fine
                    South African wines. The dress on board the train is casual.
                    In maintaining the atmosphere there are no radios or
                    television sets on board and the use of technology that has
                    the ability to disturb other guests is confined to the
                    privacy of the cabins.
                  </h5>
                  <h5 className="description">
                    Each train has accommodation carriages, dining cars, a
                    lounge car (±36 seats), small gift shop, smoking lounge (±8
                    seats) and observation car (±32 seats) with open-air
                    balcony. The two types of cabins are refined and spacious
                    offering passengers privacy and comfort with double or twin
                    beds and fittings and facilities that are of the highest
                    standard. All have en-suite bathrooms with shower, toilet
                    and basin, tea-and-coffee facilities (Emeralds only), safes,
                    air conditioning, linen and amenities and are serviced
                    daily. There is adequate storage and small cupboards with
                    hangers and shelves.
                  </h5>
                </Col>
              </Row>
              <hr style={{ borderBottom: "1px solid white" }} />
              <Row>
                <Col className="ml-auto mr-auto" xs="12" sm="4" md="4">
                  <img
                    alt="..."
                    className="rounded img-raised ml-auto mr-auto"
                    src={require("assets/img/shong/car1.jpg")}
                  ></img>
                </Col>
                <Col className="ml-auto mr-auto" xs="12" sm="4" md="4">
                  <img
                    alt="..."
                    className="rounded img-raised ml-auto mr-auto"
                    src={require("assets/img/shong/car2.jpg")}
                  ></img>
                </Col>
                <Col className="ml-auto mr-auto" xs="12" sm="4" md="4">
                  <img
                    alt="..."
                    className="rounded img-raised ml-auto mr-auto"
                    src={require("assets/img/shong/car3.jpg")}
                  ></img>
                </Col>
              </Row>
              <br />
              <br />

              <Row>
                <Col className="ml-auto mr-auto" xs="12" sm="4" md="4">
                  <img
                    alt="..."
                    className="rounded img-raised ml-auto mr-auto"
                    src={require("assets/img/shong/car4.jpg")}
                  ></img>
                </Col>
                <Col className="ml-auto mr-auto" xs="12" sm="4" md="4">
                  <img
                    alt="..."
                    className="rounded img-raised ml-auto mr-auto"
                    src={require("assets/img/shong/car5.jpg")}
                  ></img>
                </Col>
                <Col className="ml-auto mr-auto" xs="12" sm="4" md="4">
                  <img
                    alt="..."
                    className="rounded img-raised ml-auto mr-auto"
                    src={require("assets/img/shong/car6.jpg")}
                  ></img>
                </Col>
              </Row>
            </Container>
          </div>
          <div
            style={{ backgroundColor: "white ", color: "black" }}
            className="about-office"
          >
            <Container>
              <Row className="text-center">
                <Col className="ml-auto mr-auto" md="12">
                  <h2 style={{ color: "#095043" }} className="title">
                    Maps
                  </h2>
                  <h4 className="description">
                    Shongololo Express have got various routes, below are maps
                    of the routes that they travel, details of these routes can
                    be found in the rates and schedule sections.
                  </h4>
                  <br />
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="12" md="12">
                  <img
                    style={{ width: "100%" }}
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/shong/smap2.jpg")}
                  ></img>
                </Col>
              </Row>

              <Row
                style={{
                  marginBottom: "30px",
                  marginTop: "30px",
                  paddingBottom: "30px"
                }}
              >
                <Col
                  md="4"
                  style={{
                    paddingBottom: "10px"
                  }}
                >
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/shong/smap.jpg")}
                  ></img>
                </Col>
                <Col
                  md="4"
                  style={{
                    paddingBottom: "10px"
                  }}
                >
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/shong/smap1.jpg")}
                  ></img>
                </Col>
                <Col md="4">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/shong/smap3.jpg")}
                  ></img>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default RovosDetails;
