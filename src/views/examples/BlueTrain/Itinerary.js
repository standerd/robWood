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
        <title>Luxury Rail Travel</title>
        <meta property="og:site_name" content="" />
        <meta
          property="og:title"
          content="The Blue Train - Specials, Packages and Reservations"
        />
        <meta
          property="og:description"
          content="Blue Train Tickets and Special Packages - Luxury Train Travel in South Africa with Train Safaris connecting Cape Town, Pretoria and Durban. Blou Trein pakette en kaartjies."
        />

        <meta property="og:url" content="https://www.luxuryrailtravel.co.za/" />

        <meta
          name="description"
          content="Blue Train Tickets and Special Packages - Luxury Train Travel in South Africa with Train Safaris connecting Cape Town, Pretoria and Durban. Blou Trein pakette en kaartjies."
        />
        <meta
          name="keywords"
          content="the Blue Train, Blue Train, Blou Trein, bloutrein, specials, packages, pakette, pretoria, cape town, durban"
        />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
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
