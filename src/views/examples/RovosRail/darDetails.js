import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

// reactstrap components
import { Table, Container, Row, Col } from "reactstrap";

// core components

import WhiteNavbar from "components/Navbars/RovosNav";
import Header from "components/Headers/RovosHeader";
import Footer from "components/Footers/FooterWhite";

function DarEsSalam() {
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
              Dar Es Salaam Itinerary
            </h1>
            <img
              className="ml-auto mr-auto width-full"
              alt="Dar Es Salaam Trip"
              src={require("assets/img/rovos/darDetails.jpg")}
            ></img>
            <br />
            <hr style={{ borderBottom: "1px solid white" }} />
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h3 style={{ color: "white", marginTop: "10px" }}>
                  Cape Town to Dar Es Salaam
                </h3>
                <h4 style={{ color: "white", textAlign: "left" }}>
                  Journey Description:
                </h4>
                <p style={{ color: "white", textAlign: "left" }}>
                  This epic 15-day train journey travels through South Africa,
                  Botswana, Zimbabwe, Zambia and Tanzania and is one of the most
                  famous in the world. The sojourn begins in Cape Town taking
                  guests to the historic village of Matjiesfontein, the diamond
                  town of Kimberley and the capital city of Pretoria for short
                  tours followed by two nights in the Madikwe Game Reserve*.
                  Continue through Botswana into Zimbabwe where guests overnight
                  at the Victoria Falls Hotel. After crossing the mighty Zambezi
                  River, the train joins the Tazara line in Zambia and continues
                  to Chisimba Falls where guests enjoy a bush walk. The train
                  climbs to the Tanzanian border then descends into the Great
                  Rift Valley negotiating the tunnels, switchbacks and viaducts
                  of the spectacular escarpment. Climbing again, it traverses
                  the Selous Game Reserve – the largest on the continent and a
                  vision of timeless Africa – before the bustling arrival in Dar
                  es Salaam the following day. Available in reverse. Please note
                  that depending upon the railway’s capacity this journey could
                  be routed northwards through Beitbridge and Zimbabwe. *Or Kwa
                  Maritane in Pilanesberg Game Reserve
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
                        11h00 Depart Cape Town Station on the Pride of Africa.
                        <br />
                        18h00 Arrive in Matjiesfontein and explore the quaint
                        village. Dinner and overnight on the train.
                        <br />
                        Breakfast: 07:00 - 10:00 , Lunch: 13:00 , Tea: 16:30 ,
                        Dinner: 19:30
                      </td>
                    </tr>

                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>Day 2</td>
                      <td style={{ textAlign: "left" }}>
                        14h00 Tour of Kimberley’s Big Hole and Diamond Mine
                        Museum. Ten minutes after departing Kimberley a shallow
                        lake appears on the left-hand side of the train where,
                        on most occasions, there are spectacular flocks of
                        Lesser Flamingos (approximately 23 000). <br />
                        Travel from the Karoo to the Highveld. Dinner and
                        overnight on board.
                      </td>
                    </tr>

                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold" }}>Day 3</td>
                      <td style={{ textAlign: "left" }}>
                        10h00 Arrive at Rovos Rail Station in Capital Park,
                        Pretoria. Enjoy a walking tour of the station and
                        locomotive workshops (weather permitting) followed by
                        lunch on the platform and a city tour of Pretoria at
                        14h15.
                        <br />
                        18h00 Depart for Zeerust in the North West Province.
                        Dinner and overnight on board.
                      </td>
                    </tr>
                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>Day 4</td>
                      <td style={{ textAlign: "left" }}>
                        11h00 Disembark at Zeerust and transfer by coach to
                        Madikwe Reserve for a two-night stay at TAU Game Lodge*.{" "}
                        <br />
                        Lunch is served upon arrival at the lodge. <br />
                        Afternoon tea and game drive (approximately 3 hours).{" "}
                        <br />
                        Dinner and overnight at the lodge.
                      </td>
                    </tr>

                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold" }}>Day 5</td>
                      <td style={{ textAlign: "left" }}>
                        Enjoy an early morning game drive, afternoon game drive
                        and other guest activities. <br />
                        Overnight at the lodge.
                      </td>
                    </tr>
                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>Day 6</td>
                      <td style={{ textAlign: "left" }}>
                        Early morning game drive followed by breakfast until
                        09h30.
                        <br />
                        10h30 Transfer to the train at with border formalities
                        en route to Gaborone, Botswana.
                        <br />
                        13h30 Depart Gaborone and travel to Plumtree for border
                        formalities and overnight.
                      </td>
                    </tr>

                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold" }}>Day 7</td>
                      <td style={{ textAlign: "left" }}>
                        Day at leisure on board. Lectures will be given during
                        the course of the morning and/or afternoon by the
                        on-board historian. The train passes Gwaai and Dete
                        along one of Africa’s longest stretches of straight
                        railway line – 114 kilometres – and along the eastern
                        edge of the Hwange National Park where occasional
                        sightings of animals can occur. The train heads for
                        Thompson’s Junction for the overnight stop.
                      </td>
                    </tr>
                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>Day 8</td>
                      <td style={{ textAlign: "left" }}>
                        12h00 Arrive at the incomparable Victoria Falls and walk
                        across to the hotel. Enjoy lunch.
                        <br />
                        16h00 Sunset Cruise on the Zambezi River. Buffet dinner
                        at Jungle Junction. Overnight at the hotel.
                      </td>
                    </tr>

                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold" }}>Day 9</td>
                      <td style={{ textAlign: "left" }}>
                        Day at leisure in the Victoria Falls with activities
                        (tour of Falls, helicopter over Falls, elephant-back
                        safari, walk with lions, whitewater rafting,
                        bungee-jumping, golf, etc).
                        <br />
                        16h00 Depart Victoria Falls and cross the bridge to
                        Livingstone, Zambia.
                      </td>
                    </tr>
                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>Day 10</td>
                      <td style={{ textAlign: "left" }}>
                        Day at leisure on board. Lectures will be given during
                        the course of the morning and/or afternoon by the
                        on-board historian.
                        <br /> The train travels across the Kafue railway bridge
                        – a 477-metre long steel girder truss bridge of 13 spans
                        each at 33 metres supported on concrete piers – towards
                        Kapiri Mposhi and the start of the TAZARA railway line.
                      </td>
                    </tr>

                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold" }}>Day 11</td>
                      <td style={{ textAlign: "left" }}>
                        Enjoy a day at leisure on the train. Lectures will be
                        given during the course of the morning and/or afternoon
                        by the on-board historian. The train passes through
                        Serenje and Mpika to Kasama.
                      </td>
                    </tr>
                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>Day 12</td>
                      <td style={{ textAlign: "left" }}>
                        08h00 Disembark at Kasama for a morning excursion to
                        Chisimba Falls.
                        <br />
                        11h00 Depart from Kasama and travel towards the
                        Tanzanian border.
                      </td>
                    </tr>

                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold" }}>Day 13</td>
                      <td style={{ textAlign: "left" }}>
                        09h00 Arrive at Makambako where guests may enjoy a
                        stroll through the town – time permitting.
                        <br />
                        10h30 Depart and travel towards Mlimba. The train
                        descends into the Rift Valley and through the Udzungwa
                        Mountains as it negotiates the tunnels, switchbacks and
                        viaducts of the escarpment.
                        <br />
                        Day at leisure on the train with lectures by the
                        on-board historian.
                      </td>
                    </tr>
                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>Day 14</td>
                      <td style={{ textAlign: "left" }}>
                        Game visit in the Selous Reserve (time permitting).
                        Travel towards Gwata for an overnight stop.
                      </td>
                    </tr>

                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold" }}>Day 15</td>
                      <td style={{ textAlign: "left" }}>
                        06h30 Depart Gwata in and travel in an easterly
                        direction towards the coast.
                        <br />
                        07h00 Breakfast is served in the dining car/s until
                        09h30.
                        <br />
                        10h00 Arrive at journey’s end in Dar es Salaam,
                        Tanzania.
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

export default DarEsSalam;
