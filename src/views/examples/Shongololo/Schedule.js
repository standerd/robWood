import React from "react";
import Helmet from "react-helmet";

// reactstrap components
import { Table, Container, Row, Col } from "reactstrap";

// core components

import WhiteNavbar from "components/Navbars/ShongNavbar";
import Header from "components/Headers/ShongHeader";
import Footer from "components/Footers/FooterWhite";

function ShongSchedule() {
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
          style={{ backgroundColor: "#380812" }}
        >
          <Container>
            <h1
              style={{ color: "white", textAlign: "center" }}
              className="title"
            >
              Train Schedule
            </h1>
            <h2 style={{ color: "white", textAlign: "center" }}>2020</h2>

            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <Table style={{ color: "white" }} responsive>
                  <thead>
                    <tr>
                      <th>Good Hope</th>
                      <th>Dune Express</th>
                      <th>Southern Cross</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>17 March 2020</td>
                      <td>14 May 2020</td>
                      <td>2 January 2020</td>
                    </tr>
                    <tr>
                      <td>01 October 2020 *</td>
                      <td>28 May 2020 *</td>
                      <td>16 January 2020 *</td>
                    </tr>
                    <tr>
                      <td>17 November 2020</td>
                      <td>24 August 2020</td>
                      <td>20 February 2020 *</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>16 April 2020</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>30 April 2020 *</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>11 June 2020</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>06 August 2020</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>17 September 2020 *</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>22 October 2020</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
            <br />

            <br />
            <hr style={{ borderBottom: "white solid 1px" }} />
            <h2 style={{ color: "white", textAlign: "center" }}>2021</h2>

            <br />
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <Table style={{ color: "white" }} responsive>
                  <thead>
                    <tr>
                      <th>Good Hope</th>
                      <th>Dune Express</th>
                      <th>Southern Cross</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>28 January 2021</td>
                      <td>01 April 2021</td>
                      <td>01 January 2021</td>
                    </tr>
                    <tr>
                      <td>16 March 2021 *</td>
                      <td>16 April 2021 *</td>
                      <td>14 January 2021 *</td>
                    </tr>
                    <tr>
                      <td>30 September 2021</td>
                      <td>13 May 2021</td>
                      <td>18 February 2021</td>
                    </tr>
                    <tr>
                      <td>16 November 2021 *</td>
                      <td>27 May 2021 *</td>
                      <td>04 March 2021 *</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>19 August 2021</td>
                      <td>15 April 2021</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>10 June 2021</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>05 August 2021</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>16 September 2021 *</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>21 October 2021</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>04 November 2021 *</td>
                    </tr>
                  </tbody>
                </Table>
                <br />

                <h5 style={{ color: "white" }}>
                  * - indicates dated for routes run in reverse to the itinerary
                  shown on the website.
                </h5>
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

export default ShongSchedule;
