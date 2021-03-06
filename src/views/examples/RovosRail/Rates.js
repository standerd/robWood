import React from "react";
import Helmet from "react-helmet";

// reactstrap components
import { Table, Container, Row, Col } from "reactstrap";

// core components

import WhiteNavbar from "components/Navbars/RovosNav";
import Header from "components/Headers/RovosHeader";
import Footer from "components/Footers/FooterWhite";

function RovosRates() {
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
          style={{ backgroundColor: "#095043" }}
        >
          <Container>
            <br />
            <h1 style={{ color: "white", textAlign: "left" }} className="title">
              Rate Details
            </h1>
            <p className="text-light">
              Prices below are per person sharing and Includes:
            </p>
            <p className="text-light">
              Accomodation, Meals, Excursions as well as all beverages, incl
              alcohol while on board.
            </p>
            <p className="text-light">
              Single Supplement of 50% on all Suites.
            </p>

            <hr style={{ borderBottom: "1px solid white" }} />
            <br />
            <h3 style={{ color: "white", textAlign: "left" }}>
              Short Journeys
            </h3>
            <h3 style={{ color: "white", textAlign: "left" }}>
              1 October 2019 - 30 September 2020{" "}
            </h3>

            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <Table style={{ color: "white" }} responsive borderless>
                  <thead>
                    <tr
                      style={{
                        backgroundColor: "#ccc",
                        color: "#002147",
                        fontWeight: "bold"
                      }}
                    >
                      <th>
                        <strong>Journey</strong>
                      </th>
                      <th>
                        <strong>Pullman Suite</strong>
                      </th>
                      <th>
                        <strong>Deluxe Suite</strong>
                      </th>
                      <th>
                        <strong>Royal Suite</strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Cape Town</td>
                      <td>R 22 350-00</td>
                      <td>R 33 750-00</td>
                      <td>R 45 000-00</td>
                    </tr>
                    <tr style={{ backgroundColor: "#ccc", color: "#002147" }}>
                      <td>Victoria Falls</td>
                      <td>R 29 250-00</td>
                      <td>R 44 000-00</td>
                      <td>R 58 600-00</td>
                    </tr>
                    <tr>
                      <td>Durban Safari</td>
                      <td>R 22 350-00</td>
                      <td>R 33 750-00</td>
                      <td>R 45 000-00</td>
                    </tr>
                  </tbody>
                </Table>

                <br />
              </Col>
            </Row>
            <h3 style={{ color: "white", textAlign: "left" }}>
              1 October 2020 - 30 September 2021{" "}
            </h3>

            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <Table style={{ color: "white" }} responsive borderless>
                  <thead>
                    <tr
                      style={{
                        backgroundColor: "#ccc",
                        color: "#002147",
                        fontWeight: "bold"
                      }}
                    >
                      <th>
                        <strong>Journey</strong>
                      </th>
                      <th>
                        <strong>Pullman Suite</strong>
                      </th>
                      <th>
                        <strong>Deluxe Suite</strong>
                      </th>
                      <th>
                        <strong>Royal Suite</strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Cape Town</td>
                      <td>R 24 250-00</td>
                      <td>R 36 500-00</td>
                      <td>R 48 900-00</td>
                    </tr>
                    <tr style={{ backgroundColor: "#ccc", color: "#002147" }}>
                      <td>Victoria Falls</td>
                      <td>R 31 700-00</td>
                      <td>R 48 000-00</td>
                      <td>R 64 000-00</td>
                    </tr>
                    <tr>
                      <td>Durban Safari</td>
                      <td>R 24 250-00</td>
                      <td>R 36 500-00</td>
                      <td>R 48 900-00</td>
                    </tr>
                  </tbody>
                </Table>

                <br />
              </Col>
            </Row>
            <hr style={{ borderBottom: "1px solid white" }} />
            <br />
            <h3 style={{ color: "white", textAlign: "left" }}>Long Journeys</h3>
            <h6 style={{ color: "white", textAlign: "left" }}>
              ( ) Indicates Single Supplement to be added to prices shown
            </h6>
            <br />
            <h3 style={{ color: "white", textAlign: "left" }}>
              1 January 2020 - 31 December 2020{" "}
            </h3>

            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <Table style={{ color: "white" }} responsive borderless>
                  <thead>
                    <tr
                      style={{
                        backgroundColor: "#ccc",
                        color: "#002147",
                        fontWeight: "bold"
                      }}
                    >
                      <th>
                        <strong>Journey</strong>
                      </th>
                      <th>
                        <strong>Pullman Suite</strong>
                      </th>
                      <th>
                        <strong>Deluxe Suite</strong>
                      </th>
                      <th>
                        <strong>Royal Suite</strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Golf Safari</td>
                      <td>R 65 000.00 (40%)</td>
                      <td>R 96 000.00 (40%)</td>
                      <td>R 127 000-00 (40%)</td>
                    </tr>
                    <tr style={{ backgroundColor: "#ccc", color: "#002147" }}>
                      <td>Namibia Safari</td>
                      <td>R 75 000.00 (50%)</td>
                      <td>R 111 000.00 (50%)</td>
                      <td>R 149 000-00 (50%)</td>
                    </tr>
                    <tr>
                      <td>African Collage</td>
                      <td>R 83 000.00 (50%)</td>
                      <td>R 124 000.00 (50%)</td>
                      <td>R 165 000-00 (50%)</td>
                    </tr>
                    <tr style={{ backgroundColor: "#ccc", color: "#002147" }}>
                      <td>Dar Es Salaam</td>
                      <td>US$ 12 820.00 ($ 5 695.00)</td>
                      <td>US$ 16 995.00 ($ 7 385.00)</td>
                      <td>US$ 22 190.00 (POA)</td>
                    </tr>
                    <tr>
                      <td>DAR-Lobito</td>
                      <td>US$ 12 820.00 ($ 5 695.00)</td>
                      <td>US$ 16 995.00 ($ 7 385.00)</td>
                      <td>US$ 22 190.00 (POA)</td>
                    </tr>
                  </tbody>
                </Table>

                <br />
              </Col>
            </Row>
            <h3 style={{ color: "white", textAlign: "left" }}>
              1 January 2021 - 31 December 2021{" "}
            </h3>

            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <Table style={{ color: "white" }} responsive borderless>
                  <thead>
                    <tr
                      style={{
                        backgroundColor: "#ccc",
                        color: "#002147",
                        fontWeight: "bold"
                      }}
                    >
                      <th>
                        <strong>Journey</strong>
                      </th>
                      <th>
                        <strong>Pullman Suite</strong>
                      </th>
                      <th>
                        <strong>Deluxe Suite</strong>
                      </th>
                      <th>
                        <strong>Royal Suite</strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Golf Safari</td>
                      <td>R 69 000.00 (40%)</td>
                      <td>R 105 000.00 (40%)</td>
                      <td>R 138 000-00 (40%)</td>
                    </tr>
                    <tr style={{ backgroundColor: "#ccc", color: "#002147" }}>
                      <td>Namibia Safari</td>
                      <td>R 81 500.00 (50%)</td>
                      <td>R 120 000.00 (50%)</td>
                      <td>R 162 000-00 (50%)</td>
                    </tr>
                    <tr>
                      <td>African Collage</td>
                      <td>R 90 000.00 (50%)</td>
                      <td>R 135 000.00 (50%)</td>
                      <td>R 179 000-00 (50%)</td>
                    </tr>
                    <tr style={{ backgroundColor: "#ccc", color: "#002147" }}>
                      <td>Dar Es Salaam</td>
                      <td>US$ 13 200.00 ($ 5 865.00)</td>
                      <td>US$ 17 500.00 ($ 7 605.00)</td>
                      <td>US$ 22 900.00 (POA)</td>
                    </tr>
                    <tr>
                      <td>DAR-Lobito</td>
                      <td>US$ 13 200.00 ($ 5 865.00)</td>
                      <td>US$ 17 500.00 ($ 7 605.00)</td>
                      <td>US$ 22 900.00 (POA)</td>
                    </tr>
                  </tbody>
                </Table>

                <br />
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

export default RovosRates;
