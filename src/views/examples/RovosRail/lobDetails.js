import React from "react";
import {Link} from "react-router-dom"
import Helmet from "react-helmet"

// reactstrap components
import { Table, Container, Row, Col } from "reactstrap";

// core components

import WhiteNavbar from "components/Navbars/WhiteNavbar";
import Header from "components/Headers/RovosHeader";
import Footer from "components/Footers/FooterWhite";

function Lobito() {
  React.useEffect(() => {
    window.scroll(0,0);
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
        <title>Luxury Rail Travel | Rovos  Rail | Blue Train</title>
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
        <div style={{ backgroundColor: "#095043", width: "100%" }}>
          <Container>
            <br />
            <h6>
            <Link to="/itineraryRovos" style={{ color: "white" }}>
                <i className="now-ui-icons arrows-1_minimal-left"></i> Back To
                Journeys
              </Link>
            </h6>
            <h1
              style={{ color: "white", textAlign: "center" }}
              className="title"
            >
              Lobito Itinerary
            </h1>
            <img
              className="ml-auto mr-auto width-full"
              alt="..."
              src={require("assets/img/rovos/lobDetails.jpg")}
            ></img>
            <br />
            <hr style={{ borderBottom: "1px solid white" }} />
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h3 style={{ color: "white", marginTop: "10px" }}>
                  Dar Es Salaam to Lobito
                </h3>
                <h4 style={{ color: "white", textAlign: "left" }}>
                  Journey Description:
                </h4>
                <p style={{ color: "white", textAlign: "left" }}>
                  In July 2019 Rovos Rail set off on a new 15-day expedition
                  traversing Tanzania, Zambia, the Democratic Republic of Congo
                  (DRC) and Angola. It was the first time in history that a
                  passenger train travelled the famous east-to-west copper trail
                  on this route. The trip was a great success. <br />
                  This voyage sets off from the Tanzanian capital, Dar es Salaam
                  (a city familiar to Rovos Rail as it has been running its
                  15-day Cape to Dar trip since 1993), and includes a game visit
                  in the Selous Reserve, a fly-in two-night safari in the South
                  Luangwa National Park (Zambia) and a city tour of Lubumbashi
                  (DRC). Thereafter it joins the Benguela line for short walking
                  tours detailing Angola’s recent history with journey’s end in
                  Lobito. Available in reverse.
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
                      <td style={{ fontWeight: "bold", width: "10%" }}>
                        Day 1
                      </td>
                      <td style={{ textAlign: "left" }}>
                        DEPART DAR, TANZANIA
                        <br />
                        12h00 The Pride of Africa departs Dar es Salaam and
                        travels the TAZARA line.
                        <br />
                        13h00 Lunch is served in the dining cars as the train
                        travels the fertile lands of Tanzania towards the Selous
                        Game Reserve.
                        <br />
                        16h30 Tea is served in the lounge car and observation
                        car.
                        <br />
                        19h30 Dinner is served in the dining cars en route to
                        Fuga Halt.
                      </td>
                    </tr>

                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>Day 2</td>
                      <td style={{ textAlign: "left" }}>
                        SELOUS GAME RESERVE VISIT and LECTURES
                        <br />
                        05h30 Breakfast is served in the dining cars until
                        departure at 07h00.
                        <br />
                        07h00 Game visit in the Selous Game Reserve, the largest
                        in Africa at 55 000km² (time permitting).
                        <br />
                        12h30 Return to the train.
                        <br />
                        13h00 Lunch is served in the dining cars as the train
                        passes the Udzungwa Mountains.
                        <br />
                        16h30 Tea is served in the lounge car and observation
                        car.
                        <br />
                        19h30 Dinner is served in the dining cars en route to
                        Mlimba.
                      </td>
                    </tr>

                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold" }}>Day 3</td>
                      <td style={{ textAlign: "left" }}>
                        MAKAMBAKO VISIT and LECTURES
                        <br />
                        07h00 Breakfast is served in the dining cars until
                        10h00. The train ascends the escarpment negotiating the
                        dramatic switchbacks, viaducts and tunnels.
                        <br />
                        09h00 Arrive at Makambako and enjoy a stroll through the
                        town (time permitting).
                        <br />
                        13h00 Lunch is served in the dining cars as the train
                        passes Baobab forests.
                        <br />
                        16h30 Tea is served in the lounge car and observation
                        car.
                        <br />
                        19h30 Dinner is served in the dining cars en route to
                        Tunduma.
                      </td>
                    </tr>
                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>Day 4</td>
                      <td style={{ textAlign: "left" }}>
                        CHISIMBA FALLS VISIT and LECTURES
                        <br />
                        07h00 Breakfast is served in the dining cars until
                        10h00. Tanzanian and Zambian border formalities take
                        place.
                        <br />
                        13h00 Lunch is served in the dining cars. The train
                        travels in a southwesterly direction across Zambia.
                        <br />
                        14h30 Disembark at Kasama for an excursion to Chisimba
                        Falls.
                        <br />
                        18h00 Depart Kasama.
                        <br />
                        19h30 Dinner is served in the dining cars en route to
                        Mpika.
                      </td>
                    </tr>

                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold" }}>Day 5</td>
                      <td style={{ textAlign: "left" }}>
                        SOUTH LUANGWA NATIONAL PARK STAY
                        <br />
                        07h00 Breakfast is served in the dining cars until
                        09h30.
                        <br />
                        10h00 Disembark and transfer to Mpika Airport for a
                        chartered flight to the South Luangwa National Park.
                        <br />
                        12h00 Transfer to respective camps. Enjoy lunch and
                        check-in on arrival.
                        <br />
                        15h30 Afternoon game drive in the Luangwa Valley.
                        <br />
                        19h30 Dinner and overnight at camps.
                      </td>
                    </tr>
                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>Day 6</td>
                      <td style={{ textAlign: "left" }}>
                        SOUTH LUANGWA NATIONAL PARK STAY
                        <br />
                        06h00 Wake-up call and continental breakfast.
                        <br />
                        06h30 Early morning game drive (approximately 3 hours).
                        <br />
                        10h00 Brunch is served at the lodge. Afternoon at
                        leisure.
                        <br />
                        15h30 Afternoon game drive (approximately 3 hours).
                        <br />
                        19h30 Dinner at the lodge.
                      </td>
                    </tr>

                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold" }}>Day 7</td>
                      <td style={{ textAlign: "left" }}>
                        SOUTH LUANGWA NATIONAL PARK
                        <br />
                        Breakfast, a morning game drive (approximately 2 hours)
                        and check-out times will be confirmed.
                        <br />
                        Transfer to the airport for the chartered flight to
                        Ndola, Zambia. 12h00 On arrival, transfer to Ndola
                        Station to rejoin the train.
                        <br />
                        13h00 Lunch is served in the dining cars as the train
                        travels towards Misundu.
                        <br />
                        15h00 Arrive at Sakania for Zambian/DRC border
                        formalities.
                        <br />
                        16h30 Tea is served in the lounge car and observation
                        car.
                        <br />
                        19h30 Dinner is served in the dining cars as the train
                        travels through Kabemba en route to Mushoshi.
                      </td>
                    </tr>
                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>Day 8</td>
                      <td style={{ textAlign: "left" }}>
                        LUBUMBASHI VISIT and LECTURES
                        <br />
                        06h00 Breakfast is served in the dining cars until
                        08h00.
                        <br />
                        08h00 Enjoy a drive through Lubumbashi.
                        <br />
                        11h00 Rejoin the train and travel towards Lukuni.
                        <br />
                        13h00 Lunch served in the dining cars. The train passes
                        Luishia, an old open-pit copper and cobalt mine.
                        <br />
                        16h30 Tea is served in the lounge and observation car.
                        <br />
                        19h30 Dinner is served in the dining cars en route to
                        Tenke.
                      </td>
                    </tr>

                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold" }}>Day 9</td>
                      <td style={{ textAlign: "left" }}>
                        COPPER MINE VISIT and LECTURES
                        <br />
                        06h00 Breakfast is served in the dining cars until
                        departure at 08h00.
                        <br />
                        08h00 Enjoy a visit to a copper mine in an area that
                        holds one of the world’s largest known copper and cobalt
                        resources.
                        <br />
                        10h30 Enjoy brunch at Katebi Lodge.
                        <br />
                        10h00 Return to the train and depart for Kasombo.
                        <br />
                        15h30 Tea is served in the lounge car and observation
                        car.
                        <br />
                        19h30 Dinner is served in the dining cars en route to
                        Mutshatsha.
                      </td>
                    </tr>
                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>Day 10</td>
                      <td style={{ textAlign: "left" }}>
                        DAY ON BOARD WITH LECTURES
                        <br />
                        07h00 Breakfast is served in the dining cars until
                        10h00.
                        <br />
                        13h00 Lunch is served in the dining cars as the train
                        passes Kakopa en route to Malonga.
                        <br />
                        16h30 Tea is served in the lounge car and observation
                        car.
                        <br />
                        17h30 Dinner is served in the dining cars en route to
                        Dilolo on the DRC/Angola Border.
                        <br />
                      </td>
                    </tr>

                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold" }}>Day 11</td>
                      <td style={{ textAlign: "left" }}>
                        LUAU WALKING TOUR and LECTURES
                        <br />
                        07h00 Breakfast is served in the dining cars until
                        10h00. Border formalities take place with Angola.
                        <br />
                        11h00 Enjoy a walking tour of Luau, the start of the
                        Benguela line.
                        <br />
                        12h00 The train departs for Luena.
                        <br />
                        13h00 Lunch is served in the dining cars.
                        <br />
                        16h30 Tea is served as the train travels alongside the
                        Kasai River. The catchment of the Kasai River
                        encompasses a vast eco-region of 900 000km2 with an
                        incredibly rich fish fauna. As the train passes the
                        villages of Cassai and Cameia there is sometimes an
                        opportunity to see the local fisherman at work.
                        <br />
                        19h30 Dinner is served in the dining cars en route to
                        Luena.
                      </td>
                    </tr>
                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>Day 12</td>
                      <td style={{ textAlign: "left" }}>
                        LUENA WALKING TOUR and LECTURES
                        <br />
                        07h00 Breakfast is served in the dining cars until
                        10h00.
                        <br />
                        10h00 Enjoy a walking tour of Luena to learn more about
                        the recent history of Angola.
                        <br />
                        11h00 Depart for Tchicala Tcholohanga.
                        <br />
                        13h00 Lunch is served in the dining cars.
                        <br />
                        16h30 Tea is served in the lounge car and observation
                        car.
                        <br />
                        19h30 Dinner is served in the dining cars en route to
                        Kuito.
                      </td>
                    </tr>

                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold" }}>Day 13</td>
                      <td style={{ textAlign: "left" }}>
                        KUITO WALKING TOUR and LECTURES
                        <br />
                        07h00 Breakfast is served in the dining cars until
                        09h00.
                        <br />
                        09h00 Enjoy a stroll through the town of Kuito, built in
                        the historical heart of the Ovimbundu kingdom.
                        <br />
                        11h00 Depart for Huambo.
                        <br />
                        13h00 Lunch is served in the dining cars.
                        <br />
                        16h30 Tea is served in the lounge car and observation
                        car.
                        <br />
                        19h30 Dinner is served in the dining cars en route to
                        Huambo.
                      </td>
                    </tr>
                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>Day 14</td>
                      <td style={{ textAlign: "left" }}>
                        HUAMBO WALKING TOUR
                        <br />
                        07h00 Breakfast is served in the dining cars until
                        09h00.
                        <br />
                        09h00 Enjoy a walking tour of Huambo, the second largest
                        city in Angola and one of the old kingdoms on the
                        central plateau.
                        <br />
                        11h00 Depart for Lépi.
                        <br />
                        13h00 Lunch is served in the dining cars.
                        <br />
                        16h30 Tea is served in the lounge car and observation
                        car.
                        <br />
                        19h30 Dinner is served in the dining cars en route to
                        Caimbambo.
                      </td>
                    </tr>

                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold" }}>Day 15</td>
                      <td style={{ textAlign: "left" }}>
                        ARRIVE LOBITO, ANGOLA
                        <br />
                        07h00 Breakfast is served in the dining cars until
                        09h30.
                        <br />
                        10h00 Arrive at journey’s end, Lobito Station, Benguela
                        Province, Angola.
                        <br />
                        <br />
                        Optional Extension: Rates TBA
                        <br />
                        14h30 Transfer to Hotel Terminus for check-in and lunch.
                        Enjoy a city tour of Benguela. Dinner and overnight at
                        the hotel.
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

export default Lobito;
