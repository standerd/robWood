import React from "react";
import Helmet from "react-helmet";

// reactstrap components
import { Table, Container, Row, Col } from "reactstrap";

// core components

import WhiteNavbar from "components/Navbars/WhiteNavbar";
import Header from "components/Headers/BlueTrainHeader";
import Footer from "components/Footers/FooterWhite";

function BlueTrainItinerary() {
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
        <div style={{ backgroundColor: "#002147", width: "100%" }}>
          <Container>
            <br />
            <h1
              style={{ color: "white", textAlign: "center" }}
              className="title"
            >
              Cape Town Itinerary
            </h1>

            <br />
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h3 style={{ color: "white" }}>Pretoria To Cape Town</h3>
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
                      <td style={{ verticalAlign: "top" }}>14:00</td>
                      <td style={{ textAlign: "left" }}>
                        <strong>
                          Registration Blue Train Lounge Pretoria:
                        </strong>
                        <br />
                        Pre-departure snacks and drinks are served.
                      </td>
                    </tr>
                    <tr>
                      <td style={{ verticalAlign: "top" }}>15:15</td>
                      <td style={{ textAlign: "left" }}>
                        <strong>Boarding Commences:</strong>
                        <br />
                        Butlers user guests to their suites. Suites orientation
                        done by butlers. Boarding concludes at 15:45.
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "#ccc", color: "black" }}>
                      <td style={{ verticalAlign: "top" }}>16:00</td>
                      <td style={{ textAlign: "left" }}>
                        <strong>Train Departs:</strong>
                        <br />
                        Departure will be earlier if all guests have checked in.
                      </td>
                    </tr>
                    <tr>
                      <td style={{ verticalAlign: "top" }}>18:30-20:00</td>
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
                      <td style={{ verticalAlign: "top" }}>20:30-22:00</td>
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
                      <td style={{ verticalAlign: "top" }}>06:00-09:00</td>
                      <td style={{ textAlign: "left" }}>
                        <strong>
                          Breakfast Served First Come First Serve Basis:
                        </strong>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ verticalAlign: "top" }}>09:30</td>
                      <td style={{ textAlign: "left" }}>
                        <strong>Train Arrive at Kimberley Station:</strong>
                        <br />
                        Guests disembark and gather at the Railway Museum, from
                        where they will be ushered to a bus, which transfers
                        them to the Kimberley Open Mine Museum.
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "#ccc", color: "black" }}>
                      <td style={{ verticalAlign: "top" }}>10:00</td>
                      <td style={{ textAlign: "left" }}>
                        <strong>
                          Guests arrive at the Open Mine Museum for a tour of
                          the mine:
                        </strong>
                        <br />
                        Guests are first taken to view interesting and
                        historical sites. Guests are also taken onto an enclosed
                        ramp on the edge of the Big Hole.
                      </td>
                    </tr>
                    <tr>
                      <td style={{ verticalAlign: "top" }}>12:30</td>
                      <td style={{ textAlign: "left" }}>
                        <strong>
                          Guests depart from the Open Mine Museum for Kimberley
                          Station:
                        </strong>
                        <br />
                        At Kimberly Station guests are greeted with a glass of
                        sherry. The sherry glass engraved with The Blue Train
                        logo as a memento for guests to keep.
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "#ccc", color: "black" }}>
                      <td style={{ verticalAlign: "top" }}>13:00</td>
                      <td style={{ textAlign: "left" }}>
                        <strong>
                          Depart Kimberley Station for the southbound journey to
                          Cape Town:
                        </strong>
                        <br />
                        After this exciting tour, guests are welcome to refresh
                        themselves and enjoy aperitifs served at any one of our
                        lounges.
                      </td>
                    </tr>
                    <tr>
                      <td style={{ verticalAlign: "top" }}>13:00-14:15</td>
                      <td style={{ textAlign: "left" }}>
                        <strong>First Sitting for Lunch:</strong>
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "#ccc", color: "black" }}>
                      <td style={{ verticalAlign: "top" }}>14:30-16:00</td>
                      <td style={{ textAlign: "left" }}>
                        <strong>Second Sitting for Lunch:</strong>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ verticalAlign: "top" }}>16:30</td>
                      <td style={{ textAlign: "left" }}>
                        <strong>
                          High Tea is served in the Non-Smoking Lounge Car:
                        </strong>
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "#ccc", color: "black" }}>
                      <td style={{ verticalAlign: "top" }}>18:30-20:00</td>
                      <td style={{ textAlign: "left" }}>
                        <strong>First Dinner Sitting:</strong>
                        <br />
                        (Please Note: Dinner is an elegant affair. Gentlemen are
                        requested to at least wear a jacket/ waistcoat). Guests
                        enjoy post-dinner drinks, cognacs and Cuban cigars in
                        the Club Car before retiring to bed.
                      </td>
                    </tr>
                    <tr>
                      <td style={{ verticalAlign: "top" }}>20:30-22:00</td>
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
                        Day 3
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ backgroundColor: "#ccc", color: "black" }}>
                      <td style={{ verticalAlign: "top" }}>06:00-09:00</td>
                      <td style={{ textAlign: "left" }}>
                        <strong>
                          Breakfast Served First Come First Serve Basis:
                        </strong>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ verticalAlign: "top" }}>10:30</td>
                      <td style={{ textAlign: "left" }}>
                        <strong>Arrival Cape Town Station:</strong>
                        <br />
                        Butlers user guests to the arrival lounge.
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h3 style={{ color: "white" }}>Cape Town To Pretoria</h3>
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
                      <td style={{ verticalAlign: "top" }}>14:30</td>
                      <td style={{ textAlign: "left" }}>
                        <strong>
                          Registration Blue Train Lounge Cape Town:
                        </strong>
                        <br />
                        Pre-departure snacks and drinks are served.
                      </td>
                    </tr>
                    <tr>
                      <td style={{ verticalAlign: "top" }}>15:30</td>
                      <td style={{ textAlign: "left" }}>
                        <strong>Boarding Commences:</strong>
                        <br />
                        Butlers user guests to their suites. Suites orientation
                        done by butlers. Boarding concludes at 15:45.
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "#ccc", color: "black" }}>
                      <td style={{ verticalAlign: "top" }}>16:00</td>
                      <td style={{ textAlign: "left" }}>
                        <strong>Train Departs:</strong>
                        <br />
                        Departure will be earlier if all guests have checked in.
                      </td>
                    </tr>
                    <tr>
                      <td style={{ verticalAlign: "top" }}>18:30-20:00</td>
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
                      <td style={{ verticalAlign: "top" }}>20:15-22:00</td>
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
                      <td style={{ verticalAlign: "top" }}>06:00-09:00</td>
                      <td style={{ textAlign: "left" }}>
                        <strong>
                          Breakfast Served First Come First Serve Basis:
                        </strong>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ verticalAlign: "top" }}>11:30-13:00</td>
                      <td style={{ textAlign: "left" }}>
                        <strong>First Sitting for Lunch:</strong>
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "#ccc", color: "black" }}>
                      <td style={{ verticalAlign: "top" }}>13:15-14:00</td>
                      <td style={{ textAlign: "left" }}>
                        <strong>Second Sitting for Lunch:</strong>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ verticalAlign: "top" }}>14:00</td>
                      <td style={{ textAlign: "left" }}>
                        <strong>Train Arrive at Kimberley Station:</strong>
                        <br />
                        Guests disembark and gather at the Railway Museum, from
                        where they will be ushered to a bus, which transfers
                        them to the Kimberley Open Mine Museum.
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "#ccc", color: "black" }}>
                      <td style={{ verticalAlign: "top" }}>15:00</td>
                      <td style={{ textAlign: "left" }}>
                        <strong>
                          Guests arrive at the Open Mine Museum for a tour of
                          the mine:
                        </strong>
                        <br />
                        Guests are first taken to view interesting and
                        historical sites. Guests are also taken onto an enclosed
                        ramp on the edge of the Big Hole.
                      </td>
                    </tr>
                    <tr>
                      <td style={{ verticalAlign: "top" }}>17:00</td>
                      <td style={{ textAlign: "left" }}>
                        <strong>
                          Guests depart from the Open Mine Museum for Kimberley
                          Station:
                        </strong>
                        <br />
                        At Kimberly Station guests are greeted with a glass of
                        sherry. The sherry glass engraved with The Blue Train
                        logo as a memento for guests to keep.
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "#ccc", color: "black" }}>
                      <td style={{ verticalAlign: "top" }}>18:30</td>
                      <td style={{ textAlign: "left" }}>
                        <strong>Depart Kimberley Station:</strong>
                        <br />
                        After this exciting tour, guests are welcome to refresh
                        themselves and enjoy aperitifs served at any one of our
                        lounges.
                      </td>
                    </tr>
                    <tr>
                      <td style={{ verticalAlign: "top" }}>18:30-20:00</td>
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
                      <td style={{ verticalAlign: "top" }}>20:30-22:00</td>
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
                        Day 3
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ backgroundColor: "#ccc", color: "black" }}>
                      <td style={{ verticalAlign: "top" }}>06:00-09:00</td>
                      <td style={{ textAlign: "left" }}>
                        <strong>
                          Breakfast Served First Come First Serve Basis:
                        </strong>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ verticalAlign: "top" }}>10:30</td>
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

export default BlueTrainItinerary;
