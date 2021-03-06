import React from "react";
import Helmet from "react-helmet";

// reactstrap components
import { Table, Container, Row, Col } from "reactstrap";

// core components

import WhiteNavbar from "components/Navbars/WhiteNavbar";
import Header from "components/Headers/BlueTrainHeader";
import Footer from "components/Footers/FooterWhite";

function KrugerRates() {
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
        <div
          className="section section-about-us"
          style={{ backgroundColor: "#002147" }}
        >
          <Container>
            <h1
              style={{ color: "white", textAlign: "center" }}
              className="title"
            >
              Train Schedule and Rates
            </h1>
            <h2 style={{ color: "white", textAlign: "center" }}>2020</h2>
            <br />
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h3 style={{ color: "white" }}>Pretoria - Kruger - Pretoria</h3>
                <Table style={{ color: "white" }} responsive>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Luxury Double</th>
                      <th>Luxury Single</th>
                      <th>De Luxe Double</th>
                      <th>De Luxe Single</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>18 June - 20 June 2020</td>
                      <td>R 47 040-00</td>
                      <td>R 70 560-00</td>
                      <td>R 37 630-00</td>
                      <td>R 56 445-00</td>
                    </tr>
                    <tr>
                      <td>30 July - 01 August 2020</td>
                      <td>R 47 040-00</td>
                      <td>R 70 560-00</td>
                      <td>R 37 630-00</td>
                      <td>R 56 445-00</td>
                    </tr>
                  </tbody>
                </Table>
                <p
                  style={{
                    color: "white",
                    lineHeight: "8px",
                    textAlign: "left"
                  }}
                >
                  Departure Time: Pretoria: 13:00 (pm) Day 1
                </p>
                <p
                  style={{
                    color: "white",
                    lineHeight: "5px",
                    textAlign: "left"
                  }}
                >
                  Arrival Time: Kruger Park: 05:00 (am) Day 2
                </p>
                <p
                  style={{
                    color: "white",
                    lineHeight: "5px",
                    textAlign: "left"
                  }}
                >
                  Departure Time: Kruger Park: 22:00 (pm) Day 2
                </p>
                <p
                  style={{
                    color: "white",
                    lineHeight: "10px",
                    textAlign: "left"
                  }}
                >
                  Arrival Time: Pretoria : 10:00 (am) Day 3
                </p>
                <br />
              </Col>
            </Row>
            <br />
            <hr style={{ borderBottom: "white solid 1px" }} />
            <h2 style={{ color: "white", textAlign: "center" }}>2021</h2>
            <br />
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h3 style={{ color: "white" }}>Pretoria - Kruger - Pretoria</h3>
                <Table style={{ color: "white" }} responsive>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Luxury Double</th>
                      <th>Luxury Single</th>
                      <th>De Luxe Double</th>
                      <th>De Luxe Single</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>24 June - 26 June 2021</td>
                      <td>R 52 680-00</td>
                      <td>R 79 025-00</td>
                      <td>R 42 145-00</td>
                      <td>R 63 215-00</td>
                    </tr>
                  </tbody>
                </Table>
                <p
                  style={{
                    color: "white",
                    lineHeight: "8px",
                    textAlign: "left"
                  }}
                >
                  Departure Time: Pretoria: 13:00 (pm) Day 1
                </p>
                <p
                  style={{
                    color: "white",
                    lineHeight: "5px",
                    textAlign: "left"
                  }}
                >
                  Arrival Time: Kruger Park: 05:00 (am) Day 2
                </p>
                <p
                  style={{
                    color: "white",
                    lineHeight: "5px",
                    textAlign: "left"
                  }}
                >
                  Departure Time: Kruger Park: 22:00 (pm) Day 2
                </p>
                <p
                  style={{
                    color: "white",
                    lineHeight: "10px",
                    textAlign: "left"
                  }}
                >
                  Arrival Time: Pretoria : 10:00 (am) Day 3
                </p>
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

export default KrugerRates;
