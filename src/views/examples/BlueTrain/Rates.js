import React from "react";
import Helmet from "react-helmet";

// reactstrap components
import { Table, Container, Row, Col } from "reactstrap";

// core components

import WhiteNavbar from "components/Navbars/WhiteNavbar";
import Header from "components/Headers/BlueTrainHeader";
import Footer from "components/Footers/FooterWhite";

function BlueTrainRates() {
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
            <h1 style={{ color: "white", textAlign: "left" }} className="title">
              Rate Details
            </h1>
            <p className="text-light">
              Maximum 2 guests per suite. Rates are per person, inclusive of all
              meals, high tea, drinks (alcoholic and non-alcoholic) and off-the
              train excursions excluding French champagne, caviar and external
              telephone calls. Rates quoted are for a one-way journey and are
              subject to change without prior notification. Arrival times and
              off-the train excursions cannot be guaranteed. Reservations for
              children on request only.
            </p>
            <p className="text-light">
              Special requests for meals (e.g. Kosher and Halaal) to be
              specified at time of reservation.
            </p>
            <p className="text-light">
              Bed preference (double or single) to be specified when making a
              reservation, as double beds are limited.
            </p>
            <p className="text-light">
              Guests are requested to check in 1 hour prior to departure at The
              Blue Train lounges in Pretoria and Cape Town.
            </p>
            <p className="text-light">
              The Blue Train terms and conditions apply to all bookings.
            </p>

            <hr style={{ borderBottom: "1px solid white" }} />
            <br />
            <h2 style={{ color: "white", textAlign: "left" }}>Rates 2020</h2>

            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h5 className="text-left text-light">High Season: </h5>
                <p className="text-left text-light">
                  01 September 2020 - 15 November 2020
                </p>

                <h5 className="text-left text-light">Low Season: </h5>
                <p className="text-left text-light">
                  01 January 2020 - 31 August 2020 and 16 November 2020 - 31
                  December 2020
                </p>

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
                        <strong>Suite Type</strong>
                      </th>
                      <th>
                        <strong>Low Season</strong>
                      </th>
                      <th>
                        <strong>High Season</strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Luxury Double - rate per person sharing</td>
                      <td>R 25 820-00</td>
                      <td>R 32 135-00</td>
                    </tr>
                    <tr style={{ backgroundColor: "#ccc", color: "#002147" }}>
                      <td>Luxury Single - including supplement</td>
                      <td>R 38 725-00</td>
                      <td>R 48 200-00</td>
                    </tr>
                    <tr>
                      <td>Deluxe Double - rate per person sharing</td>
                      <td>R 20 615-00</td>
                      <td>R 25 445-00</td>
                    </tr>
                    <tr style={{ backgroundColor: "#ccc", color: "#002147" }}>
                      <td>Deluxe Single - including supplement</td>
                      <td>R 30 920-00</td>
                      <td>R 38 155-00</td>
                    </tr>
                  </tbody>
                </Table>

                <br />
              </Col>
            </Row>
            <hr style={{ borderBottom: "1px solid white" }} />
            <br />
            <h2 style={{ color: "white", textAlign: "left" }}>Rates 2021</h2>

            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h5 className="text-left text-light">High Season: </h5>
                <p className="text-left text-light">
                  01 September 2021 - 15 November 2021
                </p>

                <h5 className="text-left text-light">Low Season: </h5>
                <p className="text-left text-light">
                  01 January 2021 - 31 August 2021 and 16 November 2021 - 31
                  December 2021
                </p>
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
                        <strong>Suite Type</strong>
                      </th>
                      <th>
                        <strong>Low Season</strong>
                      </th>
                      <th>
                        <strong>High Season</strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Luxury Double - rate per person sharing</td>
                      <td>R 28 915-00</td>
                      <td>R 35 990-00</td>
                    </tr>
                    <tr style={{ backgroundColor: "#ccc", color: "#002147" }}>
                      <td>Luxury Single - including supplement</td>
                      <td>R 43 370-00</td>
                      <td>R 53 980-00</td>
                    </tr>
                    <tr>
                      <td>Deluxe Double - rate per person sharing</td>
                      <td>R 23 085-00</td>
                      <td>R 28 495-00</td>
                    </tr>
                    <tr style={{ backgroundColor: "#ccc", color: "#002147" }}>
                      <td>Deluxe Single - including supplement</td>
                      <td>R 34 630-00</td>
                      <td>R 42 730-00</td>
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

export default BlueTrainRates;
