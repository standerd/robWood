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

import WhiteNavbar from "components/Navbars/RovosNav";
import Header from "components/Headers/RovosHeader";
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
      <meta charset="utf-8" />
      <link rel="icon" type="image/png" href="%PUBLIC_URL%/favicon.png" />
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/apple-icon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
      name="robots"
      content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <link rel="canonical" href="https://luxuryrailtravel.co.za" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:Luxury Rail Travel" content="Luxury rail travel packages, blue train and rovos rail" />
      <meta property="og:title" content="Blue Train and Rovos Rail - Tailored Packages and Special Offers" />
      <meta property="og:description" content="Luxury rail travel packages, offering various routes in South Africa and Africa on the Blue Train and Rovos Rail." />
      <meta property="og:url" content="https://luxuryrailtravel.co.za/" />
      <meta name="description" content="Luxury rail travel packages, offering various routes in South Africa and Africa on the Blue Train and Rovos Rail." />
      <meta name="keywords" content="Luxury Rail Travel, The Blue Train, Blue Train, Blou Trein, bloutrein, Rail Travel, train travel" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		  <meta name="google-site-verification" content="bQ0IYcOFw7qLmul2Zuj7uSbvXu8jk53weO1lyqbqudA" />
      <title>Luxury Rail Travel</title>
      </Helmet>
      <WhiteNavbar />
      <Header />
      <div className="wrapper">
        <div style={{ backgroundColor: "#095043", width: "100%" }}>
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
                    alt="Cape Town Trip"
                    src={require("assets/img/rovos/cpt.jpg")}
                    top
                  ></CardImg>
                  <CardBody>
                    <CardText>
                      Cape Town
                      <br></br>
                      <Button style={{ backgroundColor: "#095043" }}>
                        <Link style={{ color: "white" }} to="/cptDetails">
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
                    alt="Durban Trip"
                    src={require("assets/img/rovos/dbn.jpg")}
                    top
                  ></CardImg>
                  <CardBody>
                    <CardText>
                      Durban
                      <br></br>
                      <Button style={{ backgroundColor: "#095043" }}>
                        <Link style={{ color: "white" }} to="/dbnDetails">
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
                    alt="Vic Falls Trip"
                    src={require("assets/img/rovos/vic.jpg")}
                    top
                  ></CardImg>
                  <CardBody>
                    <CardText>
                      Victoria Falls
                      <br></br>
                      <Button style={{ backgroundColor: "#095043" }}>
                        <Link style={{ color: "white" }} to="/vicDetails">
                          Details
                        </Link>
                      </Button>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
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
                    alt="Golf Trip"
                    src={require("assets/img/rovos/golf.jpg")}
                    top
                  ></CardImg>
                  <CardBody>
                    <CardText>
                      Golf Safari
                      <br></br>
                      <Button style={{ backgroundColor: "#095043" }}>
                        <Link style={{ color: "white" }} to="/golfDetails">
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
                    alt="African Collage Trip"
                    src={require("assets/img/rovos/collage.jpg")}
                    top
                  ></CardImg>
                  <CardBody>
                    <CardText>
                      African Collage
                      <br></br>
                      <Button style={{ backgroundColor: "#095043" }}>
                        <Link style={{ color: "white" }} to="/collDetails">
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
                    alt="Namibia Trip"
                    src={require("assets/img/rovos/nam.jpg")}
                    top
                  ></CardImg>
                  <CardBody>
                    <CardText>
                      Namibia
                      <br></br>
                      <Button style={{ backgroundColor: "#095043" }}>
                        <Link style={{ color: "white" }} to="/namDetails">
                          Details
                        </Link>
                      </Button>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <Card
                  style={{
                    width: "20rem",
                    backgroundColor: "rgba(255,255,255,0.8)",
                    border: "1px solid white"
                  }}
                >
                  <CardImg
                    alt="Dar Es Salaam Trip"
                    src={require("assets/img/rovos/dar.jpg")}
                    top
                  ></CardImg>
                  <CardBody>
                    <CardText>
                      Dar Es Salaam
                      <br></br>
                      <Button style={{ backgroundColor: "#095043" }}>
                        <Link style={{ color: "white" }} to="/darDetails">
                          Details
                        </Link>
                      </Button>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col className="ml-auto mr-auto text-center" md="6">
                <Card
                  style={{
                    width: "20rem",
                    backgroundColor: "rgba(255,255,255,0.8)",
                    border: "1px solid white"
                  }}
                >
                  <CardImg
                    alt="Lobito Trip"
                    src={require("assets/img/rovos/lob.jpg")}
                    top
                  ></CardImg>
                  <CardBody>
                    <CardText>
                      Lobito
                      <br></br>
                      <Button style={{ backgroundColor: "#095043" }}>
                        <Link style={{ color: "white" }} to="/lobDetails">
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
