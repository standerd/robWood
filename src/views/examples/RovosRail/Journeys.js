import React from "react";
import { Link } from "react-router-dom";

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

import WhiteNavbar from "components/Navbars/WhiteNavbar";
import Header from "components/Headers/RovosHeader";
import Footer from "components/Footers/FooterWhite";

function Journeys() {
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
                    alt="..."
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
                    alt="..."
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
                    alt="..."
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
                    alt="..."
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
                    alt="..."
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
                    alt="..."
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
                    alt="..."
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
                    alt="..."
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
