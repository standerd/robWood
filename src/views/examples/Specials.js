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
