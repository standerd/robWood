import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  CardImg,
  CardBody,
  CardText
} from "reactstrap";

// core components

import WhiteNavbar from "components/Navbars/ShongNavbar";
import Header from "components/Headers/ShongHeader";
import Footer from "components/Footers/FooterWhite";

function Journeys() {
  React.useEffect(() => {
    window.scroll(0, 0);
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
      <Header />
      <div className="wrapper">
        <div style={{ backgroundColor: "#380812", width: "100%" }}>
          <Container>
            <br />
            <h1
              style={{ color: "white", textAlign: "center" }}
              className="title"
            >
              Journeys
            </h1>

            <br />
            <Row>
              <Col className="ml-auto mr-auto text-center" md="4">
                <Card
                  style={{
                    width: "20rem",
                    backgroundColor: "rgba(255,255,255,0.8)",
                    border: "1px solid white"
                  }}
                >
                  <CardImg
                    alt="..."
                    src={require("assets/img/shong/dune.jpg")}
                    top
                  ></CardImg>
                  <CardBody>
                    <CardText>
                      Dune Express
                      <br></br>
                      <Button style={{ backgroundColor: "#380812" }}>
                        <Link style={{ color: "white" }} to="/dune">
                          Details
                        </Link>
                      </Button>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col className="ml-auto mr-auto text-center" md="4">
                <Card
                  style={{
                    width: "20rem",
                    backgroundColor: "rgba(255,255,255,0.8)",
                    border: "1px solid white"
                  }}
                >
                  <CardImg
                    alt="..."
                    src={require("assets/img/shong/goodHope.jpg")}
                    top
                  ></CardImg>
                  <CardBody>
                    <CardText>
                      Good Hope
                      <br></br>
                      <Button style={{ backgroundColor: "#380812" }}>
                        <Link style={{ color: "white" }} to="/goodHope">
                          Details
                        </Link>
                      </Button>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col className="ml-auto mr-auto text-center" md="4">
                <Card
                  style={{
                    width: "20rem",
                    backgroundColor: "rgba(255,255,255,0.8)",
                    border: "1px solid white"
                  }}
                >
                  <CardImg
                    alt="..."
                    src={require("assets/img/shong/scross.jpg")}
                    top
                  ></CardImg>
                  <CardBody>
                    <CardText>
                      Southern Cross
                      <br></br>
                      <Button style={{ backgroundColor: "#380812" }}>
                        <Link style={{ color: "white" }} to="/southCross">
                          Details
                        </Link>
                      </Button>
                    </CardText>
                  </CardBody>
                </Card>
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

export default Journeys;
