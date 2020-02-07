import React from "react";
import Helmet from "react-helmet";

// reactstrap components
import { Table, Container, Row, Col } from "reactstrap";

// core components

import WhiteNavbar from "components/Navbars/WhiteNavbar";
import Header from "components/Headers/BlueTrainHeader";
import Footer from "components/Footers/FooterWhite";

function KrugerItinerary() {
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
        <div style={{ backgroundColor: "#002147", width: "100%" }}>
          <Container>
            <br />
            <h1
              style={{ color: "white", textAlign: "center" }}
              className="title"
            >
              Kruger Itinerary
            </h1>

            <br />
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h3 style={{ color: "white" }}>
                  Pretoria - Kruger Park - Pretoria
                </h3>
                <Table
                  style={{ color: "white", border: "1px solid white" }}
                  responsive
                  borderless
                >
                  <thead>
                    <tr>
                      <th style={{ fontWeight: "bold" }} colSpan="2">
                        Day 1
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ backgroundColor: "#ccc", color: "black" }}>
                      <td style={{ verticalAlign: "top" }}>10:00</td>
                      <td style={{ textAlign: "left" }}>
                        <strong>
                          Registration Blue Train Lounge Pretoria:
                        </strong>
                        <br />
                        Pre-departure snacks and drinks are served.
                      </td>
                    </tr>
                    <tr>
                      <td style={{ verticalAlign: "top" }}>12:15</td>
                      <td style={{ textAlign: "left" }}>
                        <strong>Boarding Commences:</strong>
                        <br />
                        Butlers user guests to their suites. Suites orientation
                        done by butlers. Boarding concludes at 12:30.
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "#ccc", color: "black" }}>
                      <td style={{ verticalAlign: "top" }}>13:00</td>
                      <td style={{ textAlign: "left" }}>
                        <strong>Train Departs:</strong>
                        <br />
                        Departure will be earlier if all guests have checked in.
                      </td>
                    </tr>
                    <tr>
                      <td style={{ verticalAlign: "top" }}>13:30-15:30</td>
                      <td style={{ textAlign: "left" }}>
                        <strong>
                          Five Course lunch is served in the Dining Car
                        </strong>
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "#ccc", color: "black" }}>
                      <td style={{ verticalAlign: "top" }}>16:00</td>
                      <td style={{ textAlign: "left" }}>
                        <strong>High Tea in the Non-Smoking Lounge:</strong>
                        <br />
                        Guests will enjoy pre-dinner drinks served at any of the
                        lounges and are also welcome to refresh themselves prior
                        to dinner.
                      </td>
                    </tr>
                    <tr>
                      <td style={{ verticalAlign: "top" }}>18:00-20:00</td>
                      <td style={{ textAlign: "left" }}>
                        <strong>First Dinner Sitting:</strong>
                        <br />
                        (Please Note: Dinner is an elegant affair. Gentlemen are
                        requested to at least wear a jacket/ waistcoat). Guests
                        enjoy post-dinner drinks, cognacs and Cuban cigars in
                        the Club Car before retiring to bed.
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "#ccc", color: "black" }}>
                      <td style={{ verticalAlign: "top" }}>20:30-22:30</td>
                      <td style={{ textAlign: "left" }}>
                        <strong>Second Dinner Sitting:</strong>
                        <br />
                        (Please Note: Dinner is an elegant affair. Gentlemen are
                        requested to at least wear a jacket/ waistcoat). Guests
                        enjoy post-dinner drinks, cognacs and Cuban cigars in
                        the Club Car before retiring to bed.
                      </td>
                    </tr>
                  </tbody>

                  <thead>
                    <tr>
                      <th
                        style={{
                          fontWeight: "bold",
                          borderTop: "2px solid white"
                        }}
                        colSpan="2"
                      >
                        Day 2
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ backgroundColor: "#ccc", color: "black" }}>
                      <td style={{ verticalAlign: "top" }}>05:00</td>
                      <td style={{ textAlign: "left" }}>
                        <strong>Train Arrives at Numbi Train Station</strong>
                        <strong>Off The Train Excursion</strong>
                        <br />
                        Guests disembark and are transferred through Numbi Gate
                        in open safari vehicles to a sunrise game drive that
                        will be conducted by professional tour guides.
                        <br />
                        After the sunrise game drive, guests will enjoy a bush
                        breakfast at an exclusive unfenced location inside the
                        Kruger National Park.
                        <br />
                        After breakfast, guests will return to Numbi Gate using
                        an alternative route back, thereby exposing guests to
                        more of the Kruger area.
                      </td>
                    </tr>
                    <tr>
                      <td style={{ verticalAlign: "top" }}>12:00-15:45</td>
                      <td style={{ textAlign: "left" }}>
                        <strong>
                          Five Course lunch is served in the Dining Car
                        </strong>
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "#ccc", color: "black" }}>
                      <td style={{ verticalAlign: "top" }}>16:00</td>
                      <td style={{ textAlign: "left" }}>
                        <strong>Guests are transferred to Numbi Gate</strong>
                        <br />
                        Guests are taken for a sunset game drive that will be
                        conducted by professional tour guides. The sunset game
                        drive will take place on the Nkambeni concession. The
                        Nkambeni concession represents an area of approximately
                        11 400 hectares and lies between the main entrance gates
                        of Numbi and Phabeni and stretches past Shabeni Koppie
                        near Pretoriuskop camp.
                      </td>
                    </tr>
                    <tr>
                      <td style={{ verticalAlign: "top" }}>19:30</td>
                      <td style={{ textAlign: "left" }}>
                        <strong>
                          Guests transferred to Nkambeni Safari Camp
                        </strong>
                        <br />
                        Guests will experience a spectacular boma dinner at
                        Nkambeni Safari Camp, which will include an interactive
                        cultural experience provided by a local group with
                        international accolades.
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "#ccc", color: "black" }}>
                      <td style={{ verticalAlign: "top" }}>22:00</td>
                      <td style={{ textAlign: "left" }}>
                        <strong>
                          Guests transferred back to The Blue Train
                        </strong>
                        <br />
                        Guests enjoy post-dinner drinks, cognacs and Cuban
                        cigars in the Club Car before retiring to bed
                      </td>
                    </tr>
                  </tbody>
                  <thead>
                    <tr>
                      <th
                        style={{
                          fontWeight: "bold",
                          borderTop: "2px solid white"
                        }}
                        colSpan="2"
                      >
                        Day 3
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ backgroundColor: "#ccc", color: "black" }}>
                      <td style={{ verticalAlign: "top" }}>06:30-09:30</td>
                      <td style={{ textAlign: "left" }}>
                        <strong>
                          Breakfast Served First Come First Serve Basis
                        </strong>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ verticalAlign: "top" }}>10:00</td>
                      <td style={{ textAlign: "left" }}>
                        <strong>Arrival Pretoria Station:</strong>
                        <br />
                        Butlers user guests to the arrival lounge.
                      </td>
                    </tr>
                  </tbody>
                </Table>
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

export default KrugerItinerary;
