import React from "react";
import {Link} from "react-router-dom"
import Helmet from "react-helmet"

// reactstrap components
import { Table, Container, Row, Col } from "reactstrap";

// core components

import WhiteNavbar from "components/Navbars/WhiteNavbar";
import Header from "components/Headers/RovosHeader";
import Footer from "components/Footers/FooterWhite";

function Collage() {
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
              African Collage Itinerary
            </h1>
            <img
              className="ml-auto mr-auto width-full"
              alt="..."
              src={require("assets/img/rovos/collDetails.jpg")}
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
                  This panoramic 10-day sojourn winds its way from Pretoria to
                  Cape Town and includes a golfing and non-golfing itinerary.
                  After a game drive in Kruger Park* guests travel through
                  Swaziland to Hluhluwe for game viewing and along the coast to
                  Durban* for a city tour. Traverse the Valley of a Thousand
                  Hills to Spionkop Lodge*, the perfect base for exploring the
                  mountains, bush, birds and battlefields of the region.Continue
                  to Port Elizabeth* for a game drive at Addo Elephant Park then
                  on to Oudtshoorn for an ostrich-farm visit followed by an
                  impressive descent through the Outeniqua Mountains to George*.
                  After visiting the natural paradise of Knysna*, the train
                  traverses the spectacular Garden Route to the winelands and
                  Cape mountains before this magnificent expedition ends in Cape
                  Town. Available in reverse.
                  <br />
                  *Courses dependent on availability: Leopard Creek/White
                  River/Nelspruit in Kruger, Durban Country
                  Club/Beachwood/Zimbali, Champagne Sports Resort in Ladysmith,
                  Humewood in Port Elizabeth, Fancourt and Ernie Els Oubaai in
                  George.
                  <br />
                  Available in reverse.
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
                        10:00 Depart from Rovos Rail Station in Pretoria.
                        <br />
                        Lunch and dinner are served as the train traverses the
                        Highveld to the Drakensberg Mountains.
                        <br />
                        Breakfast: 07:00 - 10:00 , Lunch: 13:00 , Tea: 16:30 ,
                        Dinner: 19:30
                      </td>
                    </tr>

                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>Day 2</td>
                      <td style={{ textAlign: "left" }}>
                        Golfers: Transfer to Leopard Creek OR White River
                        Country Club OR Nelspruit for tee off and lunch.
                        <br />
                        Leisure Guests: Game drive in the Kruger Park with tea
                        and lunch.
                        <br />
                        17:00 Rejoin the train at Malelane. Depart for
                        Swaziland.
                      </td>
                    </tr>

                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold" }}>Day 3</td>
                      <td style={{ textAlign: "left" }}>
                        14:00 Game drive at Hluhluwe-Imfolozi Park.
                        <br />
                        18:00 Travel alongside the St Lucia Wetland Park to
                        Durban.
                      </td>
                    </tr>
                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>Day 4</td>
                      <td style={{ textAlign: "left" }}>
                        Golfers: Transfer to Durban Country Club OR Durban
                        Beachwood for tee off and lunch.
                        <br />
                        Leisure Guests: Enjoy a tour of Durban and the botanical
                        gardens.
                        <br />
                        15:00 Travel the Valley of a Thousand Hills to Ladysmith
                        across the Drakensberg Mountains.
                      </td>
                    </tr>

                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold" }}>Day 5</td>
                      <td style={{ textAlign: "left" }}>
                        Golfers: Transfer to Champagne Sports Resort for tee off
                        and lunch. <br />
                        Leisure Guests: Spionkop battlefield lecture, game drive
                        and lunch. <br />
                        17:00 Travel across the Highveld.
                      </td>
                    </tr>
                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>Day 6</td>
                      <td style={{ textAlign: "left" }}>
                        Day at leisure as the train travel towards the coast.
                      </td>
                    </tr>

                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold" }}>Day 7</td>
                      <td style={{ textAlign: "left" }}>
                        Golfers: Transfer to Humewood for tee off and lunch.
                        <br />
                        Leisure Guests: Game drive at Addo Elephant Park. <br />
                        16:30 Travel inland to Willowmore.
                      </td>
                    </tr>
                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>Day 8</td>
                      <td style={{ textAlign: "left" }}>
                        Golfers: Transfer to Ernie Els Oubaai for tee off and
                        lunch. <br />
                        Leisure Guests: Enjoy an ostrich-farm visit in
                        Oudsthoorn. <br />
                        18:30 Dinner at Fancourt Estate.
                      </td>
                    </tr>

                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold" }}>Day 9</td>
                      <td style={{ textAlign: "left" }}>
                        Golfers: Transfer to Fancourt for tee off and lunch.
                        <br />
                        Leisure Guests: Enjoy a ferry ride on the Knysna lagoon.
                        Enjoy sightseeing and shopping in Knysna OR a guided
                        walk (60 min) on Leisure Island.
                        <br />
                        15:00 Travel the Garden Route to Riversdale.
                      </td>
                    </tr>
                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>Day 10</td>
                      <td style={{ textAlign: "left" }}>
                        Day at leisure traversing the Cape Fold Mountains.
                        <br />
                        17:00 Arrive at Platform 23 at Cape Town Station.
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

export default Collage;
