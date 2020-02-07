import React from "react";
import {Link} from "react-router-dom"
import Helmet from "react-helmet"

// reactstrap components
import { Table, Container, Row, Col } from "reactstrap";

// core components

import WhiteNavbar from "components/Navbars/WhiteNavbar";
import Header from "components/Headers/RovosHeader";
import Footer from "components/Footers/FooterWhite";

function Golf() {
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
              Golf Safari Itinerary
            </h1>
            <img
              className="ml-auto mr-auto width-full"
              alt="..."
              src={require("assets/img/rovos/golfDetails.jpg")}
            ></img>
            <br />
            <hr style={{ borderBottom: "1px solid white" }} />
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h4 style={{ color: "white", textAlign: "left" }}>
                  Journey Description:
                </h4>
                <p style={{ color: "white", textAlign: "left" }}>
                  Since its establishment in 1989, Rovos Rail has earned an
                  international reputation for its truly world-class travel
                  experiences. Join the nine-day Golf Safari travelling the
                  northeastern reaches of South Africa that will entertain the
                  most discerning golfers with a delightful itinerary for
                  non-playing guests. Travel from Pretoria to Sun City* in the
                  hills of the Pilanesberg for game viewing. Cross the
                  spectacular Drakensberg Mountains to Spionkop*, the perfect
                  base for exploring the mountains, bush, birds and battlefields
                  of the region. Traverse the scenic Valley of a Thousand Hills
                  to Durban* for a tour of the city and botanical gardens. The
                  game viewing continues at Hluhluwe in Zululand (one of the
                  oldest reserves in the country), Mkhaya* (Swaziland’s refuge
                  for endangered species) and the world-famous Kruger Park in
                  Malelane*, after which this memorable journey ends in
                  Pretoria. <br />
                  *Course selection is dependent on availability: Sun City Gary
                  Player/Lost City, Champagne Sports Resort, Durban Country
                  Club/Beachwood/Zimbali, Royal Swazi, Leopard Creek/White
                  River/Nelspruit.
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
                        11h30 Depart Rovos Rail Station in Pretoria and travel
                        to Rustenburg for overnight stop. Day at leisure on the
                        train.
                        <br />
                        Breakfast: 07:00 - 10:00 , Lunch: 13:00 , Tea: 16:30 ,
                        Dinner: 19:30
                      </td>
                    </tr>

                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>Day 2</td>
                      <td style={{ textAlign: "left" }}>
                        Golfers: Morning tee off at Lost City or Gary Player
                        Country Club.
                        <br />
                        Leisure guests: Morning game drive in Pilanesberg Game
                        Reserve. Explore the Lost City followed by lunch at the
                        club. Dinner on board en route to Heidelberg.
                      </td>
                    </tr>

                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold" }}>Day 3</td>
                      <td style={{ textAlign: "left" }}>
                        All meals enjoyed on board en route to Estcourt via
                        Ladysmith. Day at leisure on the train.
                      </td>
                    </tr>
                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>Day 4</td>
                      <td style={{ textAlign: "left" }}>
                        Golfers: Morning tee off at Champagne Sports Resort.
                        <br />
                        Leisure guests: Morning lecture about the Spionkop
                        battlefield with lunch at Spionkop Lodge followed by a
                        game drive OR relax at lodge. <br />
                        Dinner en route to Durban.
                      </td>
                    </tr>

                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold" }}>Day 5</td>
                      <td style={{ textAlign: "left" }}>
                        Golfers: Morning tee off at Durban Country
                        Club/Beachwood/Zimbali. <br />
                        Leisure guests: Morning tour of Durban, a visit to the
                        botanical gardens and a coastal lunch. <br />
                        Dinner en route to Hluhluwe.
                      </td>
                    </tr>
                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>Day 6</td>
                      <td style={{ textAlign: "left" }}>
                        Morning game drive in the Hluhluwe Game Reserve. <br />
                        Dinner en route to Mpaka, Swaziland.
                      </td>
                    </tr>

                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold" }}>Day 7</td>
                      <td style={{ textAlign: "left" }}>
                        Golfers: Morning tee off at the Royal Swazi Sun.
                        <br />
                        Leisure guests: Morning game drive in Mkhaya Reserve.
                        Visit Swazi Candles and Mantenga Cultural Village with
                        shopping. <br />
                        Dinner en route to Malelane, South Africa.
                      </td>
                    </tr>
                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>Day 8</td>
                      <td style={{ textAlign: "left" }}>
                        Golfers: Morning tee off at Leopard Creek/White
                        River/Nelspruit. <br />
                        Leisure guests: Morning game drive in the Kruger Park
                        with lunch and shopping. <br />
                        Dinner en route to Witbank.
                      </td>
                    </tr>

                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold" }}>Day 9</td>
                      <td style={{ textAlign: "left" }}>
                        07h00 Enjoy breakfast as the train departs for Pretoria.
                        <br />
                        10h00 Arrive at journey’s end at Rovos Rail Station.
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

export default Golf;
