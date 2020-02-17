import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

// reactstrap components
import { Table, Container, Row, Col } from "reactstrap";

// core components

import WhiteNavbar from "components/Navbars/ShongNavbar";
import Header from "components/Headers/ShongHeader";
import Footer from "components/Footers/FooterWhite";

function GoodHope() {
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
              Good Hope Itinerary
            </h1>
            <img
              className="ml-auto mr-auto width-full"
              alt="Good Hope"
              src={require("assets/img/shong/goodImage.jpg")}
            ></img>
            <br />
            <hr style={{ borderBottom: "1px solid white" }} />
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h3 style={{ color: "white", marginTop: "10px" }}>
                  Pretoria To Cape Town
                </h3>
                <h4 style={{ color: "white", textAlign: "left" }}>
                  Journey Description:
                </h4>
                <p style={{ color: "white", textAlign: "left" }}>
                  A grand adventure offering amazing insight into well-known
                  destinations across South Africa. Starting in Pretoria, travel
                  across the imposing Drakensberg Mountains to visit the
                  historical Panorama Route*. Enjoy a game drive at the
                  world-famous Kruger Park* then explore the Kingdom of
                  Swaziland*, Hluhluwe wildlife reserve and the world-heritage
                  site, iSimangaliso Wetland Park*. After tours of Durban’s
                  botanical gardens*, Bloemfontein (the city of roses) and
                  Kimberley’s Diamond Mine Museum* (centre of one of the world’s
                  famous diamond rushes), arrive in Oudtshoorn* to visit an
                  ostrich farm and the incredible Cango Caves. Traverse the
                  Outeniqua Mountains to the natural paradise of Knysna* for a
                  lagoon ferry ride followed by a spectacular meander along the
                  Garden Route towards Worcester.
                  <br />
                  <br />
                  Travel by road over scenic mountain passes to Hermanus*, once
                  a renowned whaling station, before arriving on the final day
                  in Cape Town for a tour of the Mother City. *Optional Golf
                  Itinerary: Leopard Creek/White River/Nelspruit, Nkonyeni,
                  Zimbali, Durban Country Club/Beachwood/Zimbali, Champagne
                  Sports Resort, Kimberley Golf Club, Fancourt, Ernie Els
                  Oubaai/Pezula and Arabella (additional)
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
                        Day 2: Panorama Tour
                      </td>
                      <td style={{ textAlign: "left" }}>
                        07:00 - Breakfast is served in the dining cars until
                        departure.
                        <br />
                        09:00 - Full-day tour of historical areas Pilgrim’s
                        Rest, Bourke’s Luck Potholes and Graskop. The Graskop
                        viewing lift takes visitors 51m down the face of the
                        gorge into the forest below where wooden walkways and
                        suspension bridges meander along a 600m trail through
                        the indigenous forest with an interactive exhibit (lift
                        for own account).
                        <br />
                        16:30 - Return to the train in Nelspruit (140km). Depart
                        for Malelane.
                        <br />
                        19:30 - Dinner is served in the dining cars.
                      </td>
                    </tr>

                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold", width: "10%" }}>
                        Day 3: Kruger Park
                      </td>
                      <td style={{ textAlign: "left" }}>
                        05:30 - Breakfast is served in the dining cars until
                        departure.
                        <br />
                        07:00 - Full-day game viewing in the Kruger Park.
                        <br />
                        16:00 - Return to the train.
                        <br />
                        16:30 - Return to the train.
                        <br />
                        18:00 - Tea is served in the lounge and observation car.
                        <br />
                        19:30 - Dinner is served in the dining cars. The train
                        departs for Mpaka, Swaziland
                      </td>
                    </tr>
                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>Day 4: Swaziland</td>
                      <td style={{ textAlign: "left" }}>
                        07:00 - Breakfast is served in the dining cars until
                        departure.
                        <br />
                        08:30 - Depart in vehicles for Swazi Candles (90
                        minutes) and visit Mantenga Cultural Village.
                        <br />
                        13:45 - Return to the train (75 minutes).
                        <br />
                        16:30 - Tea is served in the lounge and observation car.
                        Depart for Golela for border formalities.
                        <br />
                        19:30 - Dinner is served in the dining cars.
                      </td>
                    </tr>

                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold", width: "10%" }}>
                        Day 5: Hluhluwe
                      </td>
                      <td style={{ textAlign: "left" }}>
                        05:30 - Breakfast is served in the dining cars until
                        departure.
                        <br />
                        07:00 - Game drives in Hluhluwe-Imfolozi Park.
                        <br />
                        16:00 - Return to the train. Depart for Empangeni.
                        <br />
                        16:30 - Tea is served in the lounge and observation car.
                        <br />
                        19:30 - Dinner is served in the dining cars.
                      </td>
                    </tr>
                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>
                        Day 6: iSimangaliso Wetland Park
                      </td>
                      <td style={{ textAlign: "left" }}>
                        07:00 - Breakfast is served in the dining cars until
                        departure.
                        <br />
                        08:30 - Transfer (75 minutes) to the world-heritage
                        site, St Lucia (iSimangaliso) Wetland Park. Enjoy a
                        two-hour boat cruise with lunch (own account) in St
                        Lucia town.
                        <br />
                        15:00 - Return to the train.
                        <br />
                        16:30 - Tea is served in the lounge and observation car.
                        Depart for Durban.
                        <br />
                        19:30 - Dinner is served in the dining cars.
                      </td>
                    </tr>

                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold", width: "10%" }}>
                        Day 7: Durban
                      </td>
                      <td style={{ textAlign: "left" }}>
                        07:00 - Breakfast is served in the dining cars until
                        departure.
                        <br />
                        09:00 - Disembark for a Durban city tour and a visit to
                        the botanical gardens and uShaka Marine World.
                        <br />
                        16:30 - Return to the train. Depart for Ladysmith.
                        <br />
                        19:30 - Dinner is served in the dining cars.
                      </td>
                    </tr>
                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>
                        Day 8: Ladysmith Battlefields
                      </td>
                      <td style={{ textAlign: "left" }}>
                        07:00 - Breakfast is served in the dining cars until
                        departure.
                        <br />
                        09:00 - Transfer (45 minutes) to Spionkop Lodge for a
                        battlefields tour and light refreshments before moving
                        to Spionkop hill to finish this historic story.
                        <br />
                        12:30 - Return to the lodge for lunch.
                        <br />
                        14:00 - Afternoon game drive OR relax at the lodge.
                        <br />
                        16:00 - Return to the train. Depart for Kroonstad.
                        <br />
                        19:30 - Dinner is served in the dining cars.
                      </td>
                    </tr>

                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold", width: "10%" }}>
                        Day 9: Bloemfontein
                      </td>
                      <td style={{ textAlign: "left" }}>
                        07:00 - Breakfast is served in the dining cars until
                        09:00.
                        <br />
                        12:00 - Tour of Bloemfontein including the Women’s
                        Memorial, Anglo Boer Museum, Oliewenhuis Art Museum and
                        Naval Hill.
                        <br />
                        17:00 - Return to the train. Depart for Kimberley.
                        <br />
                        19:30 - Dinner is served in the dining cars.
                      </td>
                    </tr>
                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>Day 10: Kimberley</td>
                      <td style={{ textAlign: "left" }}>
                        07:00 - Breakfast is served in the dining cars until
                        departure.
                        <br />
                        09:00 - Visit to the Big Hole, Diamond Mine Museum,
                        Noord-Kaap Mall, William Humphreys Art Gallery and the
                        McGregor House Museum.
                        <br />
                        16:00 - Return to the train. Tea is served in the lounge
                        and observation car at 16:30. Depart for Noupoort.
                        <br />
                        19:30 - Dinner is served in the dining cars.
                      </td>
                    </tr>

                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold", width: "10%" }}>
                        Day 11: Day at Leisure on Board
                      </td>
                      <td style={{ textAlign: "left" }}>
                        Enjoy a day at leisure on board the train
                      </td>
                    </tr>
                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>
                        Day 12: Cango Caves and Ostrich Farm
                      </td>
                      <td style={{ textAlign: "left" }}>
                        07:00 - Breakfast is served in the dining cars until
                        departure.
                        <br />
                        09:15 - Transfer (60 minutes) to the Cango Caves and an
                        ostrich farm.
                        <br />
                        16:15 - Return to the train (90 minutes).
                        <br />
                        18:30 - Transfer to Fancourt Golf Estate for dinner.
                      </td>
                    </tr>

                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold", width: "10%" }}>
                        Day 13: Knysna
                      </td>
                      <td style={{ textAlign: "left" }}>
                        06:00 - Breakfast is served in the dining cars until
                        departure.
                        <br />
                        07:45 - Transfer to Knysna for a lagoon ferry ride.
                        <br />
                        13:00 - Return to the train. Enjoy lunch on board.
                        Depart for Voorbaai.
                        <br />
                        16:30 - Tea is served in the lounge and observation car.
                        <br />
                        19:30 - Dinner is served in the dining cars.
                      </td>
                    </tr>
                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>Day 14: Hermanus</td>
                      <td style={{ textAlign: "left" }}>
                        07:00 - Breakfast is served in the dining cars until
                        departure.
                        <br />
                        09:00 - Drive the scenic route to Hermanus (140km) for a
                        visit.
                        <br />
                        13:00 - Transfer to a wine estate in Worcester for a
                        tasting.
                        <br />
                        16:00 - Return to the train at Worcester. Depart for
                        Cape Town. Tea is served in the lounge and observation
                        car at 16:30.
                        <br />
                        19:30 - Dinner is served in the dining cars.
                      </td>
                    </tr>

                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold", width: "10%" }}>
                        Day 15: Arrival Cape Town and City Tour
                      </td>
                      <td style={{ textAlign: "left" }}>
                        07:00 - Breakfast is served in the dining cars until
                        09:00.
                        <br />
                        10:00 - Arrive at Cape Town Station. Check out of the
                        train. Luggage will be stored at our private lounge at
                        the station.
                        <br />
                        10:30 - Full-day tour of Cape Town.
                        <br />
                        16:00 - Return to Cape Town Station where your
                        Shongololo adventure ends.
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

export default GoodHope;
