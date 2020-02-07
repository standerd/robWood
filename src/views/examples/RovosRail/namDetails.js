import React from "react";
import {Link} from "react-router-dom"
import Helmet from "react-helmet"

// reactstrap components
import { Table, Container, Row, Col } from "reactstrap";

// core components

import WhiteNavbar from "components/Navbars/WhiteNavbar";
import Header from "components/Headers/RovosHeader";
import Footer from "components/Footers/FooterWhite";

function Namibia() {
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
              Namibia Safari Itinerary
            </h1>
            <img
              className="ml-auto mr-auto width-full"
              alt="..."
              src={require("assets/img/rovos/namDetails.jpg")}
            ></img>
            <br />
            <hr style={{ borderBottom: "1px solid white" }} />
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h3 style={{ color: "white", marginTop: "10px" }}>
                  Pretoria To Walvis Bay
                </h3>
                <h4 style={{ color: "white", textAlign: "left" }}>
                  Journey Description:
                </h4>
                <p style={{ color: "white", textAlign: "left" }}>
                  This nine-day 3 400-kilometre journey takes the train from the
                  savannahs of the Highveld to the Atlantic in the west.
                  Departing from Pretoria, the first stop is Kimberley, centre
                  of one of the world’s famous diamond rushes where there is an
                  opportunity to savour the 1870s atmosphere of the mine
                  village. The train traverses the stark vistas of the Northern
                  Cape to the Fish River Canyon – second in size to the Grand
                  Canyon – and Garas Park with its Quiver Tree Forest and the
                  Giant’s Playground. Guests continue across the untamed beauty
                  of the Kalahari Desert to Namibia’s capital for a tour;
                  Windhoek is a lively, cosmopolitan city with a strong German
                  flavour. Then it’s a short flight to Sossusvlei, a stunning
                  pan in the Namib Desert, for an overnight stay followed by a
                  night in the game-rich Etosha National Park. On the last
                  morning, the train travels the Namib to the perfectly
                  preserved 19th-century German Hansa town of Swakopmund and
                  Walvis Bay – an unforgettable end to a remarkable journey.
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
                        15h00 Depart Rovos Rail Station in Pretoria and travel
                        south towards the goldfields of the Witwatersrand.
                        <br />
                        Breakfast: 07:00 - 10:00 , Lunch: 13:00 , Tea: 16:30 ,
                        Dinner: 19:30
                      </td>
                    </tr>

                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>Day 2</td>
                      <td style={{ textAlign: "left" }}>
                        09h45 Arrive Kimberley for Big Hole and Diamond Museum.
                        <br />
                        12h30 Depart for Upington and travel the Karoo
                        semi-desert.
                      </td>
                    </tr>

                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold" }}>Day 3</td>
                      <td style={{ textAlign: "left" }}>
                        08h00 Optional two-hour walking tour of Upington.
                        <br />
                        23h00 Arrive at Holoog after border formalities at Nakop
                      </td>
                    </tr>
                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>Day 4</td>
                      <td style={{ textAlign: "left" }}>
                        08h00 One-hour transfer to visit the Fish River Canyon.
                        <br />
                        11h00 Depart for Keetmanshoop. Traverse the Kalahari.
                        <br />
                        15h00 Visit Garas Park (Quiver Tree Forest/Giant’s
                        Playground).
                      </td>
                    </tr>

                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold" }}>Day 5</td>
                      <td style={{ textAlign: "left" }}>
                        09h00 Arrive in Windhoek for a city tour. <br />
                        11h00 Depart in light aircraft for 1-hour flight to
                        Sossusvlei Lodge for lunch, desert drive, bush dinner
                        and overnight.
                      </td>
                    </tr>
                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>Day 6</td>
                      <td style={{ textAlign: "left" }}>
                        06h00 Sossusvlei drive with breakfast in the vlei.{" "}
                        <br />
                        12h00 Depart Sossusvlei for one-hour flight to Windhoek.{" "}
                        <br />
                        14h00 Depart Windhoek and travel north towards the
                        game-rich Etosha National Park.
                      </td>
                    </tr>

                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold" }}>Day 7</td>
                      <td style={{ textAlign: "left" }}>
                        09h30 Transfer to a lodge in the Etosha National Park
                        for lunch, game drive and overnight.
                      </td>
                    </tr>
                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>Day 8</td>
                      <td style={{ textAlign: "left" }}>
                        06h00 Early morning game drive in the Etosha National
                        Park. <br />
                        13h00 Enjoy lunch on board en route to the Atlantic.
                      </td>
                    </tr>

                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold" }}>Day 9</td>
                      <td style={{ textAlign: "left" }}>
                        07h00 Enjoy breakfast as the train traverses the Namib.
                        <br />
                        12h30 Arrive at journey’s end in Walvis Bay, Namibia.
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

export default Namibia;
