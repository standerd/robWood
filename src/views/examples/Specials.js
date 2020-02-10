import React from "react";
import Helmet from "react-helmet";

// reactstrap components
import { Table, Container, Row, Col } from "reactstrap";

// core components

import WhiteNavbar from "components/Navbars/WhiteNavbar";
import Header from "components/Headers/BlueTrainHeader";
import Footer from "components/Footers/FooterWhite";

function Specials() {
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
        <title>Luxury Rail Travel | Blue Train | Rovos Rail</title>
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
          style={{ backgroundColor: "#002147" }}
        >
          <Container>
            <br />
            <h1
              style={{ color: "white", textAlign: "center" }}
              className="title"
            >
              Specials
            </h1>

            <hr style={{ borderBottom: "1px solid white" }} />
            <br />
            <h5 style={{ color: "white", textAlign: "left" }}>
              Please note the below Blue Train Specials are only for African
              residents. Proof of residence will be required to finalise the
              booking.
            </h5>
            <br />
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
                        <strong>Route</strong>
                      </th>
                      <th>
                        <strong>Departure Date</strong>
                      </th>
                      <th>
                        <strong>Special Price - Double</strong>
                      </th>

                      <th>
                        <strong>Special Price - Single</strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Cape Town to Pretoria</td>
                      <td>06 February 2020</td>
                      <td>R 11 975-00</td>
                      <td>R 17 960-00</td>
                    </tr>
                    <tr style={{ backgroundColor: "#ccc", color: "#002147" }}>
                      <td>Pretoria to Cape Town</td>
                      <td>12 February 2020</td>
                      <td>R 11 975-00</td>
                      <td>R 17 960-00</td>
                    </tr>
                    <tr>
                      <td>Pretoria to Cape Town</td>
                      <td>19 February 2020</td>
                      <td>R 11 975-00</td>
                      <td>R 17 960-00</td>
                    </tr>
                    <tr style={{ backgroundColor: "#ccc", color: "#002147" }}>
                      <td>Pretoria to Cape Town</td>
                      <td>02 March 2020</td>
                      <td>R 11 975-00</td>
                      <td>R 17 960-00</td>
                    </tr>
                    <tr>
                      <td>Cape Town to Pretoria</td>
                      <td>05 March 2020</td>
                      <td>R 11 975-00</td>
                      <td>R 17 960-00</td>
                    </tr>
                    <tr style={{ backgroundColor: "#ccc", color: "#002147" }}>
                      <td>Cape Town to Pretoria</td>
                      <td>12 March 2020</td>
                      <td>R 11 975-00</td>
                      <td>R 17 960-00</td>
                    </tr>
                    <tr>
                      <td>Pretoria to Cape Town</td>
                      <td>16 March 2020</td>
                      <td>R 11 975-00</td>
                      <td>R 17 960-00</td>
                    </tr>
                    <tr style={{ backgroundColor: "#ccc", color: "#002147" }}>
                      <td>Cape Town to Pretoria</td>
                      <td>19 March 2020</td>
                      <td>R 11 975-00</td>
                      <td>R 17 960-00</td>
                    </tr>
                    <tr>
                      <td>Cape Town to Pretoria</td>
                      <td>21 March 2020</td>
                      <td>R 11 975-00</td>
                      <td>R 17 960-00</td>
                    </tr>
                    <tr style={{ backgroundColor: "#ccc", color: "#002147" }}>
                      <td>Cape Town to Pretoria</td>
                      <td>26 March 2020</td>
                      <td>R 11 975-00</td>
                      <td>R 17 960-00</td>
                    </tr>
                    <tr>
                      <td>Cape Town to Pretoria</td>
                      <td>28 March 2020</td>
                      <td>R 11 975-00</td>
                      <td>R 17 960-00</td>
                    </tr>
                  </tbody>
                </Table>

                <br />
                <h5 style={{ color: "white", textAlign: "left" }}>
                  These specials will also be available for April and May,
                  please contact us for available dates.
                </h5>
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

export default Specials;
