import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

// reactstrap components
import { Table, Container, Row, Col } from "reactstrap";

// core components

import WhiteNavbar from "components/Navbars/ShongNavbar";
import Header from "components/Headers/ShongHeader";
import Footer from "components/Footers/FooterWhite";

function DuneDetails() {
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
              Dune Express Itinerary
            </h1>
            <img
              className="ml-auto mr-auto width-full"
              alt="Dune Explorer"
              src={require("assets/img/shong/duneImage.jpg")}
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
                  A spectacular odyssey starting in Pretoria and winding its way
                  to the coast of Namibia, a country of compelling beauty,
                  abundant sunshine and seemingly endless horizons. First stop
                  is Kimberley to visit the Big Hole and Diamond Mine Museum
                  village before continuing across the Karoo to Upington for a
                  walking tour and wine tasting. After crossing the border,
                  visit the Fish River Canyon, second in size to the Grand
                  Canyon, followed by tours of historical towns Lüderitz,
                  Kolmanskop and Keetmanshoop.
                  <br />
                  <br />
                  Enjoy a night at a Sossusvlei lodge surrounded by the dramatic
                  dunes of the Namib-Naukluft Park with visits to the natural
                  Sesriem Canyon and the 170m-high star dune “45”. Leave the
                  vast stillness of the Kalahari Desert for a tour of Windhoek
                  and an overnight stay in Etosha with game-viewing activities.
                  Arrive at journey’s end in the seaside town of Walvis Bay.
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
                      <td style={{ fontWeight: "bold" }}>Day 1: Pretoria</td>
                      <td style={{ textAlign: "left" }}>
                        14:00 - Check-in at Rovos Rail Station, Pretoria.
                        <br />
                        15:00 - The train departs. Travel south across the
                        goldfields of the Witwatersrand.
                        <br />
                        16:30 - Tea is served in the lounge car and observation
                        car at the rear of the train.
                        <br />
                        19:30 - Dinner is served in the dining cars en route to
                        Kimberley.
                      </td>
                    </tr>
                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>Day 2: Kimberley</td>
                      <td style={{ textAlign: "left" }}>
                        07:00 - Breakfast is served in the dining cars until
                        09:00.
                        <br />
                        09:45 - A shallow lake appears on the right-hand side of
                        the train where, on most occasions, there are
                        spectacular flocks of Lesser Flamingos (approximately 23
                        000).
                        <br />
                        10:00 - Arrive Kimberley. Disembark for a tour of the
                        city, Diamond Mine Museum and the Big Hole.
                        <br />
                        12:30 - Depart Kimberley. Travel through the Karoo.
                        <br />
                        13:00 - Lunch is served in the dining cars.
                        <br />
                        16:30 - Tea is served in the lounge car and observation
                        car at the rear of the train.
                        <br />
                        19:30 - Dinner is served in the dining cars.
                      </td>
                    </tr>
                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold" }}>Day 3: Upington</td>
                      <td style={{ textAlign: "left" }}>
                        07:00 - Breakfast is served in the dining cars until
                        09:00.
                        <br />
                        10:00 - Arrive Upington. Visit historical sights
                        beginning with a drive past the Donkey Memorial – which
                        honours the life of the working donkey – and the railway
                        on the Orange River followed by a tour and tasting at
                        Bezalel Wine & Brandy Estate.
                        <br />
                        12:00 - Return to the train. Depart for Nakop and
                        Ariumsvlei for border formalities.
                        <br />
                        13:00 - Lunch is served in the dining cars.
                        <br />
                        16:30 - Tea is served in the lounge car and observation
                        car at the rear of the train.
                        <br />
                        19:30 - Dinner is served in the dining cars.
                      </td>
                    </tr>
                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>
                        Day 4: Fish River Canyon
                      </td>
                      <td style={{ textAlign: "left" }}>
                        07:00 - Breakfast is served in the dining cars until
                        departure.
                        <br />
                        09:00 - Visit the Fish River Canyon.
                        <br />
                        13:00 - Return to the train. Lunch is served in the
                        dining cars.
                        <br />
                        16:30 - Tea is served in the lounge car and observation
                        car at the rear of the train.
                        <br />
                        19:30 - Dinner is served in the dining cars.
                      </td>
                    </tr>
                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold" }}>
                        Day 5: Kolmanskop and Luderitz
                      </td>
                      <td style={{ textAlign: "left" }}>
                        07:00 - Breakfast is served in the dining cars until
                        departure.
                        <br />
                        08:00 - Visit the ghost town of Kolmanskop. Arrive in
                        Lüderitz, known for its museum, colonial architecture
                        and wildlife including seals, penguins, flamingos and
                        ostriches. Look out for the legendary horses rumoured to
                        roam the Namib.
                        <br />
                        18:00 - Return to the train. Depart for Keetmanshoop.
                        <br />
                        19:30 - Dinner is served in the dining cars.
                      </td>
                    </tr>
                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>
                        Day 6: Keetmanshoop and Garas Park
                      </td>
                      <td style={{ textAlign: "left" }}>
                        07:00 - Breakfast is served in the dining cars until
                        departure.
                        <br />
                        09:00 - Visit Keetmanshoop and Garas Park (Quiver
                        Trees), home to roughly 300 specimens of the Aloe
                        dichotomy. The prehistoric trees have forked branches
                        that reach up to 5m making for great photographic
                        opportunities.
                        <br />
                        13:00 - Return to the train for lunch. Depart for
                        Mariental.
                        <br />
                        16:30 - Tea is served in the lounge car and observation
                        car at the rear of the train.
                        <br />
                        19:30 - Dinner is served in the dining cars.
                      </td>
                    </tr>
                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold" }}>Day 7: Sossusvlei</td>
                      <td style={{ textAlign: "left" }}>
                        07:00 - Breakfast is served in the dining cars until
                        departure. Please have overnight bag ready for
                        departure. Tog bags have been placed in your cabin for
                        your convenience.
                        <br />
                        09:00 - Transfer (3.5 hours) to a Sossusvlei lodge in
                        Namib-Naukluft Park for overnight. Enjoy lunch on
                        arrival. Afternoon at leisure.
                        <br />
                        19:30 - Dinner and overnight at the lodge
                      </td>
                    </tr>
                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>
                        Day 8: Sossusvlei and Namib-Naukluft Park
                      </td>
                      <td style={{ textAlign: "left" }}>
                        06:00 - Early breakfast is served at the lodge. Please
                        be checked out with luggage before departure.
                        <br />
                        07:00 - Transfer (1 hour) to Deadvlei. Visit Dune 45 and
                        Sesriem Canyon.
                        <br />
                        11:00 - Return to the lodge for lunch.
                        <br />
                        13:00 - Scenic drive across the Great Escarpment –
                        formed over 80-million years ago.
                        <br />
                        17:00 - Arrive at Mariental. Depart for Rehoboth.
                        <br />
                        19:30 - Dinner is served in the dining cars.
                      </td>
                    </tr>
                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold" }}>Day 9: Windhoek</td>
                      <td style={{ textAlign: "left" }}>
                        07:00 - Breakfast is served in the dining cars until
                        departure.
                        <br />
                        09:00 - Enjoy a city tour of Windhoek with visits to the
                        Trans-Namib Transport Museum, the Alte Feste, the
                        Evangelical Lutheran Church (one of the city’s most
                        striking landmarks) and the Namibia Craft Centre in the
                        old Breweries Building.
                        <br />
                        12:00 - Return to the train. Depart for Otjiwarongo.
                        <br />
                        13:00 - Lunch is served in the dining cars.
                        <br />
                        16:30 - Tea is served in the lounge car and observation
                        car at the rear of the train.
                        <br />
                        19:30 - Dinner is served in the dining cars.
                      </td>
                    </tr>
                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>
                        Day 10: Etosha National Park
                      </td>
                      <td style={{ textAlign: "left" }}>
                        07:00 - Breakfast is served in the dining cars until
                        09:00. Please have overnight bag ready for departure.
                        <br />
                        10:00 - Transfer to a lodge in Etosha for overnight.
                        Enjoy lunch on arrival.
                        <br />
                        10:00 - Arrive Kimberley. Disembark for a tour of the
                        city, Diamond Mine Museum and the Big Hole.
                        <br />
                        15:30 - Game drive in Etosha National Park.
                        <br />
                        19:30 - Dinner and overnight at the lodge
                      </td>
                    </tr>
                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold" }}>
                        Day 11: Etosha National Park
                      </td>
                      <td style={{ textAlign: "left" }}>
                        06:00 - Breakfast at the lodge followed by a morning of
                        game viewing in Etosha National Park. Please be checked
                        out with luggage before departure.
                        <br />
                        12:30 - Return to the train with lunch en route.
                        <br />
                        14:30 - Arrive at Otjiwarongo Station. Depart for
                        Kranzberg.
                        <br />
                        13:00 - Lunch is served in the dining cars.
                        <br />
                        16:30 - Tea is served in the lounge car and observation
                        car at the rear of the train.
                        <br />
                        19:30 - Dinner is served in the dining cars.
                      </td>
                    </tr>
                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>Day 12: Walvis Bay</td>
                      <td style={{ textAlign: "left" }}>
                        07:00 11:30 07:00 - Breakfast is served in the dining
                        cars until 10:00. Please have luggage ready for
                        collection at 10:30.
                        <br />
                        11:30 - Arrive Walvis Bay Station. Check out of train.
                        Journey ends.
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

export default DuneDetails;
