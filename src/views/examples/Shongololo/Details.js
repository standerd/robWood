import React from "react";
import Helmet from "react-helmet";
// react plugin used to create DropdownMenu for selecting items

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import WhiteNavbar from "components/Navbars/ShongNavbar";
import Footer from "components/Footers/FooterWhite";
import Carousel from "./ShongCar";

function RovosDetails() {
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
      <div className="wrapper">
        <div
          style={{ backgroundColor: "#380812 ", color: "white" }}
          className="section"
        >
          <div className="text-center">
            <div>
              <Container>
                <Row>
                  <Col className="mr-auto ml-auto" md="12">
                    <h2 className="title">Shongololo Information</h2>
                    <h4 className="description">
                      Below you will find images, cabin layouts and route
                      details of The Shongololo Express. If you can't find what
                      you are looking for please do not hesitate to contact us.
                    </h4>
                  </Col>
                  <div style={{ width: "100%", margin: "0 auto" }}>
                    <Carousel />
                    <br />
                  </div>
                </Row>
              </Container>
            </div>
          </div>

          <div
            style={{ backgroundColor: "white ", color: "black" }}
            className="about-office"
          >
            <Container>
              <Row className="text-center">
                <Col className="ml-auto mr-auto" md="8">
                  <h2 style={{ color: "#095043" }} className="title">
                    Suites
                  </h2>
                  <h4 className="description">
                    The train offers 2 different cabins, Emerald Suites and Gold Suites with the latter being the ultimate
                    in luxury.
                  </h4>
                </Col>
              </Row>
              <hr style={{ borderBottom: "1px solid white" }} />
              <h4
                style={{ marginTop: "0", color: "#095043" }}
                className="text-center"
              >
                Gold Suites
              </h4>
              <Row>
                <img
                  alt="..."
                  className="rounded img-raised ml-auto mr-auto"
                  src={require("assets/img/rovos/pullman.jpg")}
                ></img>

                <p style={{ marginTop: "10px" }}>
                  The Pullman Suites (±7 sq metres/±76 sq feet) are equipped
                  with a comfortable sofa-seat during the day with a conversion
                  to double or twin beds for the evening, and also have an
                  en-suite bathroom with shower. The wood-panelled rebuilt
                  sleeper coaches, remodelled and refurbished to mint condition,
                  offer every modern convenience and comfort. In the en-suite
                  bathrooms, original fittings combine with the modern
                  technology of hot showers, hair dryers and shaver plugs.
                </p>
                <p>
                  The spacious suites offer passengers the opportunity to travel
                  in privacy, comfort and luxury, with fittings and facilities
                  that are of the highest standard. All are equipped with a
                  writing surface and a personal safe for valuables. There is
                  tea drawer and room service is available 24 hours a day.
                </p>
              </Row>
              <hr style={{ borderBottom: "1px solid white" }} />
              <h4
                style={{ marginTop: "0", color: "#095043" }}
                className="text-center"
              >
                Emerald Suites
              </h4>
              <Row>
                <img
                  alt="..."
                  className="rounded img-raised ml-auto mr-auto"
                  src={require("assets/img/rovos/deluxSuite.jpg")}
                ></img>

                <p style={{ marginTop: "10px" }}>
                  The Deluxe Suites (±10 sq metres/±108 sq feet) accommodate two
                  passengers in either twin or double beds and have a lounge
                  area and en-suite bathroom with shower. The wood-panelled
                  rebuilt sleeper coaches, remodelled and refurbished to mint
                  condition, offer every modern convenience and comfort.
                </p>
                <p>
                  In the en-suite bathrooms, original fittings combine with the
                  modern technology of hot showers, hair dryers and shaver
                  plugs. The spacious suites offer passengers the opportunity to
                  travel in privacy, comfort and luxury, with fittings and
                  facilities that are of the highest standard. All are equipped
                  with a writing surface and a personal safe for valuables.
                  There is also a bar fridge filled with beverages of the
                  passengers’ choice and room service is available 24 hours a
                  day.
                </p>
              </Row>
           
            </Container>
          </div>
          <div
            style={{ backgroundColor: "#380812", color: "white" }}
            className="about-office"
          >
            <Container>
              <Row className="text-center">
                <Col className="ml-auto mr-auto" md="8">
                  <h2 className="title">Public Areas</h2>
                  <h4 className="description">
                    The train offers a variety of public areas, for when you
                    feel the need to roam around.
                  </h4>
                </Col>
              </Row>
              <hr style={{ borderBottom: "1px solid white" }} />
              <h4 style={{ marginTop: "0" }} className="text-center">
                Lounge Car
              </h4>
              <Row>
                <img
                  alt="..."
                  className="rounded img-raised"
                  src={require("assets/img/rovos/lounge.jpg")}
                ></img>

                <p style={{ marginTop: "20px" }}>
                  Expansion plans in 1995 saw the Classic trains move from 42 to
                  72 guests, making a second lounge car a necessity. Coaches
                  3215, 8337 and 3293 were originally modern steel-sided sleeper
                  cars. They were stripped and refurbished to create comfortable
                  non-smoking lounge cars, which are placed in the middle of the
                  trains usually ahead of the dining cars. Deep sofas and
                  wingback chairs make for an extremely comfortable car in which
                  guests nodding off for an afternoon snooze are a common sight.
                </p>

                <p>
                  The lounge cars are used as lecture rooms on the annual Dar es
                  Salaam journeys and also house a small, discreet gift shop. As
                  with all the service cars the lounges are air-conditioned, yet
                  the windows can be opened allowing in the sights, sounds and
                  scents of Africa. There are few, if any, luxury trains
                  anywhere in the world with this special feature, which has
                  proved of particular benefit when a train has been chartered
                  for a Steam Safari – steam enthusiasts like to enjoy the full
                  majesty of a working locomotive and windows that open are top
                  priority.
                </p>
                <p>
                  This feature, coupled with luxury and service as well as a
                  selection of Rovos Rail steam locomotives, makes this a truly
                  unique opportunity to sample long-distance travel behind steam
                  traction.
                </p>
              </Row>
              <hr style={{ borderBottom: "1px solid white" }} />

              <h4 style={{ marginTop: "0" }} className="text-center">
                Dining Car
              </h4>
              <Row>
                <img
                  alt="..."
                  className="rounded img-raised"
                  src={require("assets/img/rovos/diningC.jpg")}
                ></img>

                <p style={{ marginTop: "20px" }}>
                  The Classic and Edwardian trains travel with beautiful
                  pre-1940 dining cars. Two A-22 twin diners, characterised by
                  their carved roof-supporting pillars and arches, derived their
                  twin designation from running with a dedicated kitchen car.
                  Coach 195 SHANGANI was found in a scrap yard in 1986; her
                  severely dilapidated condition required 18 months of
                  painstaking restoration.
                </p>
                <p>
                  Tragically this coach was destroyed in a fire one dismal night
                  in 2008. Coach 197 LETABA was acquired in 1987; she became the
                  third dining car restored to service. Coach 205 UMHLALI was
                  purchased in Johannesburg and was fully restored by 2006. In
                  1936, SAR introduced the A-28/A-29 series of dining cars. This
                  was a big step forward as they had fly-up, fixed seats, large
                  picture windows with ventilators above and no pillars, giving
                  clean modern lines to the interior and exterior.
                </p>
                <p>
                  The first batch of four entered traffic in 1936 and Rovos has
                  two in the fleet. Coach 232 UMVOTI was bought by Rovos in
                  1998. Kitchen car AA-34 286 was sold to Rovos in 1985. Her
                  dining car 231 ZAMBEZI was extracted with difficulty from a
                  shopping centre and returned to service in 2000. During
                  restoration, the ceiling of the coach was improved with
                  extensive use of wooden trimmings while button-leather seats
                  added opulence. It was fitting that they were reunited several
                  years later. In 2010, dining cars 6447 and 5274 were added to
                  the consist.
                </p>
                <p>
                  The first was built from a second-class sleeper, while 5274
                  was rusted through and a third-class sleeper conversion fondly
                  referred to by the staff as the ‘Rust Bucket’.
                </p>
              </Row>
              <hr style={{ borderBottom: "1px solid white" }} />
              <h4 style={{ marginTop: "0" }} className="text-center">
                Club Car
              </h4>
              <Row>
                <img
                  alt="..."
                  className="rounded img-raised"
                  src={require("assets/img/rovos/clubL.jpg")}
                ></img>

                <p style={{ marginTop: "20px" }}>
                  The Club Car area was created by demolishing the end suite in
                  a deluxe carriage. This was done specifically to host the
                  smokers on the train in a public area and also as an overflow
                  facility adjoining the Observation Car. With a glass passage
                  wall, guests can comfortably watch the scenery on both sides
                  of the train.
                </p>
              </Row>
              <hr style={{ borderBottom: "1px solid white" }} />
              <h4 style={{ marginTop: "0" }} className="text-center">
                Observation Car
              </h4>
              <Row>
                <img
                  alt="..."
                  className="rounded img-raised"
                  src={require("assets/img/rovos/observe.jpg")}
                ></img>

                <p style={{ marginTop: "20px" }}>
                  The Observation Cars were originally A-28 dining cars built to
                  drawings by Mr W Day. Permission was granted by SAR to run
                  Rovos Rail’s observation cars at the back of the trains,
                  enabling the enlargement of the windows and the construction
                  of unique open-air balconies. Coaches 225 NILE, 226 MODDER and
                  220 KEI entered service between 1935 and 1938 and stayed with
                  SAR until 1983 when they were sold to Mr S Krok of
                  Johannesburg.
                </p>
                <p>
                  They were transported to the Jewish Guild Sports Club grounds
                  in Morningside, Sandton, to become the nucleus of a novel
                  restaurant. Rovos Rail purchased them in 1988 and restored
                  them to service as observation cars. During 2010, a 1960
                  third-class sleeper 6320 was rebuilt as an observation car and
                  has proved a great success. The ride is also a little better
                  than its counterparts as the bogies are the more modern,
                  commonwealth type.
                </p>
              </Row>
            </Container>
          </div>
          <div
            style={{ backgroundColor: "white ", color: "black" }}
            className="about-office"
          >
            <Container>
              <Row className="text-center">
                <Col className="ml-auto mr-auto" md="12">
                  <h2 style={{ color: "#095043" }} className="title">
                    Maps
                  </h2>
                  <h4 className="description">
                    Shongololo Express have got various routes, below are maps
                    of the routes that they travel, details of these routes can
                    be found in the rates and schedule sections.
                  </h4>
                  <br />
                </Col>
              </Row>
              <img
                alt="..."
                className="rounded img-raised"
                src={require("assets/img/shong/smap2.jpg")}
              ></img>
              <Row
                style={{
                  marginBottom: "30px",
                  marginTop: "30px",
                  paddingBottom: "30px"
                }}
              >
                <Col
                  md="4"
                  style={{
                    paddingBottom: "10px"
                  }}
                >
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/shong/smap.jpg")}
                  ></img>
                </Col>
                <Col
                  md="4"
                  style={{
                    paddingBottom: "10px"
                  }}
                >
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/shong/smap1.jpg")}
                  ></img>
                </Col>
                <Col md="4">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/shong/smap3.jpg")}
                  ></img>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default RovosDetails;