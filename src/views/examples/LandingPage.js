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
        <title>Luxury Rail Travel | Blue Train</title>
        <meta
          name="description"
          content="Luxury Rail Travel offers you customised packages on the Blue Train and Rovos Rail"
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href="https://luxuryrailtravel.co.za" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Luxury Rail Travel | Blue Train |Rovos Rail"
        />
        <meta
          property="og:description"
          content="Luxury Rail Travel, Blue Train, Rovos Rail"
        />
        <meta property="og:url" content="https://luxuryrailtravel.co.za" />
        <meta property="og:site_name" content="Luxury Rail Travel" />
        <meta property="og:image" content="blue4.jpg" />
        <meta property="og:image:secure_url" content="blue4.jpg" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
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
              <Col className="ml-auto mr-auto text-center" md="12">
                <h2 style={{ color: "white" }} className="title">
                  Who We Are
                </h2>
                <h5 className="description">
                  Meet the Spirit of South Africa and the wonderful people of
                  our magnificent nation. Indulge and spoil yourself and your
                  partners, family, friends and colleagues with an extraordinary
                  way of traveling, it’s all about the journey! Our team has
                  been traveling by rail throughout South Africa and surrounds
                  for over 5 decades.{" "}
                </h5>
                <h5 className="description">
                  We are dedicated to meeting your needs on a close knit and
                  personal experience. Traveling by rail is a timeless journey
                  and we believe one that focuses on the gentle rhythms of life
                  rather than the stressful modern way's.
                </h5>
                <h5 className="description">
                  We are able to provide you with a complete custom travel
                  package including but not limited to:
                </h5>
                <p className="description">
                  <i className="now-ui-icons ui-1_check"></i> Return Flights
                </p>
                <p className="description">
                  <i className="now-ui-icons ui-1_check"></i> Accomodation at
                  final destination and before departure
                </p>
                <p className="description">
                  <i className="now-ui-icons ui-1_check"></i> Excursions prior
                  to and post your rail trip
                </p>
                <p className="description">
                  <i className="now-ui-icons ui-1_check"></i> Transfers to and
                  from the rail stations
                </p>
                <p className="description">
                  <i className="now-ui-icons ui-1_check"></i> Advice on routes
                  and rail partners
                </p>
                <p>
                  <Link style={{ fontWeight: "bold" }} to="/aboutus">
                    Read More
                  </Link>
                </p>
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
                      <Link to="/shongDetails">View</Link>
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
