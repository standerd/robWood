import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

// reactstrap components
import { Table, Container, Row, Col } from "reactstrap";

// core components

import WhiteNavbar from "components/Navbars/WhiteNavbar";
import Header from "components/Headers/ShongHeader";
import Footer from "components/Footers/FooterWhite";

function SouthCross() {
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
        <div style={{ backgroundColor: "#380812", width: "100%" }}>
          <Container>
            <br />
            <h6>
              <Link to="/shongJourneys" style={{ color: "white" }}>
                <i className="now-ui-icons arrows-1_minimal-left"></i> Back To
                Journeys
              </Link>
            </h6>
            <h1
              style={{ color: "white", textAlign: "center" }}
              className="title"
            >
              Southern Cross Itinerary
            </h1>
            <img
              className="ml-auto mr-auto width-full"
              alt="..."
              src={require("assets/img/shong/southImage.jpg")}
            ></img>
            <br />
            <hr style={{ borderBottom: "1px solid white" }} />
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h3 style={{ color: "white", marginTop: "10px" }}>
                  Pretoria To Vic Falls
                </h3>
                <h4 style={{ color: "white", textAlign: "left" }}>
                  Journey Description:
                </h4>
                <p style={{ color: "white", textAlign: "left" }}>
                  A panoramic journey between Pretoria and Victoria Falls.
                  Travel across the Drakensberg Mountains to join the Panorama
                  Route with game viewing in Kruger. Tour Maputo, capital of
                  Mozambique, before exploring the mountainous Kingdom of
                  Swaziland. Enjoy a game drive at Kapama and a visit to the
                  Great Zimbabwe Monument.
                  <br />
                  <br />
                  Tour Antelope Park and Matopos, site of Cecil John Rhodes’
                  grave. Continue to Hwange for game viewing before arriving in
                  Victoria Falls for a walking tour of the village and the
                  thunderous falls. End with a sunset cruise on the mighty
                  Zambezi.
                  <hr style={{ borderBottom: "1px solid white" }} />
                </p>
                <h4
                  style={{
                    color: "white",
                    marginTop: "10px",
                    textAlign: "left"
                  }}
                >
                  Itinerary:
                </h4>
                <Table style={{ color: "white" }} responsive borderless>
                  <tbody>
                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold" }}>
                        Day 1: Pretoria and Soweto
                      </td>
                      <td style={{ textAlign: "left" }}>
                        08:00 - Check-in at Rovos Rail Station, Pretoria.
                        Luggage will be stored at the station.
                        <br />
                        09:00 - Full-day tour of Pretoria and Soweto.
                        <br />
                        16:00 - Transfer to Rovos Rail Station. The train
                        departs for Waterval Boven.
                        <br />
                        16:30 - Tea is served in the lounge and observation car.
                        <br />
                        19:30 - Dinner is served in the dining cars.
                      </td>
                    </tr>

                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>
                        Day 2: Panorama Route
                      </td>
                      <td style={{ textAlign: "left" }}>
                        07:00 - Breakfast is served in the dining cars until
                        departure.
                        <br />
                        09:15 - Full-day tour of historical areas Pilgrim’s
                        Rest, Bourke’s Luck Potholes and Graskop. The Graskop
                        viewing lift takes visitors 51m down the face of the
                        gorge into the forest below where wooden walkways and
                        suspension bridges meander along a 600m trail through
                        the indigenous forest with an interactive exhibit (lift
                        for own account).
                        <br />
                        18:45 - Return to the train in Nelspruit (140km). Depart
                        for Malelane.
                        <br />
                        19:30 - Dinner is served in the dining cars.
                      </td>
                    </tr>

                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold", width: "10%" }}>
                        Day 3: Kruger National Park
                      </td>
                      <td style={{ textAlign: "left" }}>
                        05:30 - Breakfast is served in the dining cars until
                        departure.
                        <br />
                        07:00 - Full-day game viewing in the Kruger Park.
                        <br />
                        18:00 - Return to the train. Depart for Mozambique.
                        <br />
                        19:30 - Dinner is served in the dining cars.
                      </td>
                    </tr>
                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold", width: "10%" }}>
                        Day 4: Maputu Mozambique
                      </td>
                      <td style={{ textAlign: "left" }}>
                        07:00 - Breakfast is served in the dining cars until
                        departure.
                        <br />
                        09:00 - City tour of Maputo, Mozambique, with lunch.
                        <br />
                        16:00 - Return to the train.
                        <br />
                        16:30 - Tea is served in the lounge and observation car.
                        <br />
                        18:00 - After border formalities the train travels to
                        Mpaka in Swaziland.
                        <br />
                        19:30 - Dinner is served in the dining cars.
                      </td>
                    </tr>
                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold", width: "10%" }}>
                        Day 5: Swaziland
                      </td>
                      <td style={{ textAlign: "left" }}>
                        07:00 - Breakfast is served in the dining cars until
                        departure.
                        <br />
                        08:30 - Disembark at Mpaka. Transfer (90 minutes) to
                        Swazi Candles and visit Mantenga Cultural Village.
                        <br />
                        13:45 - Return to the train (75 minutes). Depart for
                        Hoedspruit.
                        <br />
                        16:30 - Tea is served in the lounge and observation car.
                        <br />
                        19:30 - Dinner is served in the dining cars.
                      </td>
                    </tr>
                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold", width: "10%" }}>
                        Day 6: Kampama Reserve and Hoedspruit
                      </td>
                      <td style={{ textAlign: "left" }}>
                        05:00 - Continental breakfast is served in the dining
                        cars until 05:30.
                        <br />
                        05:30 - Game drive in Kapama Game Reserve followed by
                        visit to the Hoedspruit Endangered Species Centre.
                        <br />
                        12:00 - Return to the train for lunch. Depart for
                        Tzaneen and Louis Trichardt.
                        <br />
                        16:30 - Tea is served in the lounge and observation car.
                        <br />
                        19:30 - Dinner is served in the dining cars.
                      </td>
                    </tr>
                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold", width: "10%" }}>
                        Day 7: Limpopo Province
                      </td>
                      <td style={{ textAlign: "left" }}>
                        07:00 - Breakfast is served in the dining cars until
                        09:00. Day on board the train travelling to Oreti in
                        Zimbabwe. Clear customs and immigration at Beitbridge.
                        <br />
                        13:00 - Lunch is served in the dining cars.
                        <br />
                        16:30 - Tea is served in the lounge and observation car.
                        <br />
                        19:30 - Dinner is served in the dining cars.
                      </td>
                    </tr>
                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold", width: "10%" }}>
                        Day 8: Great Zimbabwe Monument
                      </td>
                      <td style={{ textAlign: "left" }}>
                        06:00 - Breakfast is served in the dining cars until
                        departure.
                        <br />
                        08:00 - Transfer to the Great Zimbabwe Monument for a
                        tour with lunch.
                        <br />
                        17:00 - Return to the train at Oreti Siding. Depart for
                        Somabhula.
                        <br />
                        19:30 - Dinner is served in the dining cars.
                      </td>
                    </tr>
                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold", width: "10%" }}>
                        Day 9: Antelope Park
                      </td>
                      <td style={{ textAlign: "left" }}>
                        06:00 - Breakfast is served in the dining cars until
                        departure.
                        <br />
                        08:00 - Depart for a full day at Antelope Park. Optional
                        extras include canoeing, game drives, horseback game
                        viewing, elephant interaction, bird-watching cruises and
                        so on (see price list).
                        <br />
                        16:00 - Return to the train. Depart for Bulawayo.
                        <br />
                        16:30 - Tea is served in the lounge and observation car.
                        <br />
                        19:30 - Dinner is served in the dining cars.
                      </td>
                    </tr>
                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold", width: "10%" }}>
                        Day 10: Matopos National Park
                      </td>
                      <td style={{ textAlign: "left" }}>
                        07:00 - Breakfast is served in the dining cars until
                        departure.
                        <br />
                        09:00 - Full-day tour of Matopos National Park with
                        lunch. Visit the grave of Cecil John Rhodes as well as
                        bushmen caves.
                        <br />
                        16:00 - Return to the train. Depart for Dete.
                        <br />
                        16:30 - Tea is served in the lounge and observation car.
                        <br />
                        19:30 - Dinner is served in the dining cars.
                      </td>
                    </tr>
                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold", width: "10%" }}>
                        Day 11: Hwange National Park
                      </td>
                      <td style={{ textAlign: "left" }}>
                        05:00 - Breakfast is served in the dining cars until
                        departure.
                        <br />
                        06:30 - Full-day game viewing in Hwange National Park
                        with a packed lunch (provided).
                        <br />
                        16:00 - Transfer to Rovos Rail Station. The train
                        departs for Waterval Boven.
                        <br />
                        16:30 - Return to the train.
                        <br />
                        19:00 - Depart for Thompson’s Junction.
                        <br />
                        19:30 - Dinner is served in the dining cars.
                      </td>
                    </tr>
                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold", width: "10%" }}>
                        Day 12: Victoria Falls
                      </td>
                      <td style={{ textAlign: "left" }}>
                        07:00 - Breakfast is served in the dining cars until
                        09:00.
                        <br />
                        10:00 - Arrive Victoria Falls Station. Check out of
                        train and walk across to Victoria Falls Hotel (luggage
                        can be stored on the train).
                        <br />
                        11:00 - Meet for a walking tour of the village and the
                        falls.
                        <br />
                        16:00 - Meet at the hotel for a sunset cruise on the
                        Zambezi River.
                        <br />
                        18:30 - Transfer back to Victoria Falls Hotel. Tour
                        ends.
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

export default SouthCross;
