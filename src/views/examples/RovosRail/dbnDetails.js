import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

// reactstrap components
import { Table, Container, Row, Col } from "reactstrap";

// core components

import WhiteNavbar from "components/Navbars/RovosNav";
import Header from "components/Headers/RovosHeader";
import Footer from "components/Footers/FooterWhite";

function Durban() {
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
              Durban Itinerary
            </h1>
            <img
              className="ml-auto mr-auto width-full"
              alt="Durban Trip"
              src={require("assets/img/rovos/dbnDetails.jpg")}
            ></img>
            <br />
            <hr style={{ borderBottom: "1px solid white" }} />
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h3 style={{ color: "white", marginTop: "10px" }}>
                  Pretoria To Durban
                </h3>
                <h4 style={{ color: "white", textAlign: "left" }}>
                  Journey Description:
                </h4>
                <p style={{ color: "white", textAlign: "left" }}>
                  This three-day safari between Pretoria and Durban departs
                  during the summer months and includes game drives, a
                  battlefield lecture with a world-class historian and a look at
                  unusual African ceramics. Experience the Nambiti Conservancy –
                  a Big Five private retreat set on 20 000 acres of malaria-free
                  bushveld in KwaZulu-Natal. It has an incredible biodiversity
                  including savannah, grasslands, thornveld and tall acacia
                  trees. Situated on an expansive game farm, Spionkop Lodge –
                  which adjoins an 11 000-acre nature reserve – is the perfect
                  base for exploring the mountains, bush, birds and battlefields
                  of the region. Ardmore Ceramics is a story about the Zulu
                  people whose sense of rhythm, colour, dance and song, as well
                  as the spirit of the African imagination, is exerting its
                  influence on the other continents of the world. Visit this
                  charming centre in the KwaZulu-Natal Midlands before
                  travelling the Valley of a Thousand Hills to Durban. Available
                  in reverse.
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
                      <td style={{ fontWeight: "bold" }}>Day 1</td>
                      <td style={{ textAlign: "left" }}>
                        10h00 Depart Rovos Rail Station in Pretoria. Lunch is
                        served as the Drakensberg Mountains come into view.{" "}
                        <br />
                        In the afternoon the train climbs to Majuba Hill
                        (2146m/7040ft). Dinner is served en route to
                        Elandslaagte for overnight stop.
                        <br />
                        Breakfast: 07:00 - 10:00 , Lunch: 13:00 , Tea: 16:30 ,
                        Dinner: 19:30
                      </td>
                    </tr>

                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>Day 2</td>
                      <td style={{ textAlign: "left" }}>
                        06h00 Wake-up call. Tea, coffee, juices and pastries in
                        the dining car/s before embarking on a game drive in the
                        Nambiti Private Game Reserve. <br />
                        Return to the train for brunch at 11h00 and head for
                        Estcourt.
                        <br />
                        14h00 Disembark for a 40-minute drive to Spionkop Lodge
                        where a choice of two excursions is available: <br /> A
                        lecture about the Spionkop battlefield <br /> Or a game
                        drive in the Spionkop Game Reserve. <br />
                        Return to the train for dinner.
                      </td>
                    </tr>

                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold", width: "10%" }}>
                        Day 3
                      </td>
                      <td style={{ textAlign: "left" }}>
                        Breakfast is served as the train descends the escarpment
                        en route to Lions River Station. <br />
                        10h00 Visit the famous Ardmore Ceramics Gallery.
                        <br />
                        12h00 Depart for Durban. The train traverses the
                        spectacular Valley of a Thousand Hills. <br />
                        16h00 Arrive at journey’s end in Durban.
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

export default Durban;
