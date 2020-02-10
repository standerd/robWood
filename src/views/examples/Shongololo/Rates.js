import React from "react";
import Helmet from "react-helmet";

// reactstrap components
import { Table, Container, Row, Col } from "reactstrap";

// core components

import WhiteNavbar from "components/Navbars/WhiteNavbar";
import Header from "components/Headers/ShongHeader";
import Footer from "components/Footers/FooterWhite";

function ShongRates() {
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
        <div
          className="section section-about-us"
          style={{ backgroundColor: "#380812" }}
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
              • Accommodation • Breakfast and dinner • Lunch (where stated) •
              Excursions accompanied by a qualified tour guide • Entrance fees
              as per itinerary • Return transfers to golf courses (Good Hope
              only) • Tea, coffee and bottled water on board • Government tax.
            </p>
            <p className="text-light">
              Exclusions:
              <br />• Lunch off the train (where stated) • All beverages •
              Laundry • Gratuities • Souvenirs • Course fees (Good Hope only;
              green fees payable in advance) • Visas • Travel insurance • Pre-
              and post-tour transfers, accommodation and flights.
            </p>

            <p className="text-light">
              Single Supplement of 50% on all Suites.
            </p>

            <hr style={{ borderBottom: "1px solid white" }} />
            <br />
            <h3 style={{ color: "white", textAlign: "left" }}>Rates</h3>
            <h3 style={{ color: "white", textAlign: "left" }}>2020 </h3>

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
                        <strong>Gold Suite</strong>
                      </th>
                      <th>
                        <strong>Emerald Suite</strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Good Hope</td>
                      <td>R 95 400-00</td>
                      <td>R 121 250-00</td>
                    </tr>
                    <tr style={{ backgroundColor: "#ccc", color: "#002147" }}>
                      <td>Dune Express</td>
                      <td>R 81 400-00</td>
                      <td>R 101 000-00</td>
                    </tr>
                    <tr>
                      <td>Southern Cross</td>
                      <td>R 81 400-00</td>
                      <td>R 101 000-00</td>
                    </tr>
                  </tbody>
                </Table>

                <br />
              </Col>
            </Row>
            <hr style={{ borderBottom: "1px solid white" }} />
            <h3 style={{ color: "white", textAlign: "left" }}>2021 </h3>

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
                        <strong>Gold Suite</strong>
                      </th>
                      <th>
                        <strong>Emerald Suite</strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Good Hope</td>
                      <td>R 104 000-00</td>
                      <td>R 132 000-00</td>
                    </tr>
                    <tr style={{ backgroundColor: "#ccc", color: "#002147" }}>
                      <td>Dune Express</td>
                      <td>R 92 500-00</td>
                      <td>R 113 500-00</td>
                    </tr>
                    <tr>
                      <td>Southern Cross</td>
                      <td>R 92 500-00</td>
                      <td>R 113 500-00</td>
                    </tr>
                  </tbody>
                </Table>

                <br />
              </Col>
            </Row>
          </Container>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default ShongRates;
