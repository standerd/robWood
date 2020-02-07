import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";

// reactstrap components
import { Button, Card, CardFooter, Container, Row, Col } from "reactstrap";

// core components
import WhiteNavbar from "components/Navbars/WhiteNavbar";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import FooterBlack from "components/Footers/FooterBlack";

function LandingPage() {
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
      {/* <ScrollTransparentNavbar />
       */}
      <WhiteNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div
          className="section section-about-us"
          style={{ backgroundColor: "#002147" }}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 style={{ color: "white" }} className="title">
                  Who we are?
                </h2>
                <h5 className="description">
                  We specialise in luxury train travel throughout Africa. With
                  over 20 years experience in the world of luxury train travel
                  we can help you plan and book a once in a lifetime experience
                  on one of our partner rail travel companies.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-info"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bluetrain/blue4.jpg") + ")"
                    }}
                  ></div>
                </Col>

                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bluetrain/blue3.jpg") + ")"
                    }}
                  ></div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="pricing-2">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h2 className="title">Our Partners</h2>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card
                  className="card-testimonial"
                  style={{ border: "1px solid #002147", padding: "1rem" }}
                >
                  <img
                    alt="..."
                    className="img img-raised"
                    src={require("assets/img/bluetrain/Blue.jpg")}
                  ></img>

                  <CardFooter>
                    <br />
                    <Button className="btn-round" color="primary" size="lg">
                      <Link to="/details">View</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card
                  className="card-testimonial"
                  style={{ border: "1px solid #002147", padding: "1rem" }}
                >
                  <img
                    alt="..."
                    className="img img-raised"
                    src={require("assets/img/rovos/Rovos.jpg")}
                  ></img>

                  <CardFooter>
                    <br />
                    <Button className="btn-round" color="primary" size="lg">
                      <Link to="/detailsRovos">View</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card
                  className="card-testimonial"
                  style={{ border: "1px solid #002147", padding: "1rem" }}
                >
                  <img
                    alt="..."
                    className="img img-raised"
                    src={require("assets/img/Shong.jpg")}
                  ></img>

                  <CardFooter>
                    <br />
                    <Button className="btn-round" color="primary" size="lg">
                      <Link to="">View</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        <FooterBlack />
      </div>
    </>
  );
}

export default LandingPage;
