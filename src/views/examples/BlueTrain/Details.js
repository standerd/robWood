import React from "react";
import Helmet from "react-helmet";
// react plugin used to create DropdownMenu for selecting items

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import WhiteNavbar from "components/Navbars/WhiteNavbar";

import Footer from "components/Footers/FooterWhite";
import Carousel from "./Carousel";

function BlueTrainDetails() {
  return (
    <>
      <Helmet>
        <title>Luxury Rail Travel | Blue Train | Rovos Rail</title>
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
          style={{ backgroundColor: "#002147 ", color: "white" }}
          className="section"
        >
          <div className="text-center">
            <div>
              <Container>
                <Row>
                  <Col className="mr-auto ml-auto" md="12">
                    <h2 className="title">Blue Train Information</h2>
                    <h4 className="description">
                      Below you will find images, cabin layouts and route
                      details of the Blue Train. If you can't find what you are
                      looking for please do not hesitate to contact us.
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
                  <h2 className="title">Layout</h2>
                  <h4 className="description">
                    The train layout depending on the capacity of the train in
                    use.
                  </h4>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/bluetrain/layout1.png")}
                  ></img>
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/bluetrain/layout2.png")}
                  ></img>
                </Col>
              </Row>
              <br />
            </Container>
          </div>
          <div
            style={{ backgroundColor: "#002147 ", color: "white" }}
            className="about-office"
          >
            <Container>
              <Row className="text-center">
                <Col className="ml-auto mr-auto" md="8">
                  <h2 className="title">Suites</h2>
                  <h4 className="description">
                    The train offers 2 different cabins, Deluxe and Luxury
                    Suites, with the Luxury Suites being the ultimate in luxury.
                  </h4>
                </Col>
              </Row>
              <hr style={{ borderBottom: "1px solid white" }} />
              <h4 style={{ marginTop: "0" }} className="text-center">
                Deluxe Suites
              </h4>
              <Row>
                <Col md="4">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/bluetrain/ds1.jpg")}
                  ></img>
                </Col>
                <Col md="4">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/bluetrain/ds2.jpg")}
                  ></img>
                </Col>
                <Col md="4">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/bluetrain/ds3.jpg")}
                  ></img>
                </Col>
                <p>
                  Your De Luxe Suite will forever alter your definition of what
                  style and class entail. From your elegant and relaxing lounge
                  during the day, it transforms into a subtly-lit bedroom of
                  indulgence during the night, bedecked with goose-down and 100
                  per cent percale-cotton bedding, from your
                  individually-controlled air-conditioning system, under-floor
                  heating, opulent marble and gold-fitted bathroom, its scented
                  bath salts and plush monogrammed towels, to the electronic
                  entertainment options on offer.
                </p>
                <p>
                  And then, of course, all this accompanied by the ever-changing
                  vistas of the countryside… The De Luxe coaches each have four
                  suites that measure 4 by 2 metres. One of these contains a
                  double bed and a ¾ size bath tub with handheld shower, while
                  the others have twin beds with showers.
                </p>
              </Row>
              <hr style={{ borderBottom: "1px solid white" }} />
              <h4 style={{ marginTop: "0" }} className="text-center">
                Luxury Suites
              </h4>
              <Row>
                <Col md="4">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/bluetrain/ls1.jpg")}
                  ></img>
                </Col>
                <Col md="4">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/bluetrain/ls2.jpg")}
                  ></img>
                </Col>
                <Col md="4">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/bluetrain/ls3.jpg")}
                  ></img>
                </Col>
                <p>
                  Your Luxury Suite will enchant you from the moment your
                  personal butler ushers you aboard. It extends the offering
                  from a De Luxe suite even further; by an extra metre of your
                  domain, with twin or double bedded suites which offer you long
                  and luxurious bath tubs and a private digital interactive
                  entertainment system, with an inviting selection of music CDs
                  and big-screen movies on Blue-Ray DVD.
                </p>
                <p>
                  Luxury coaches have three Luxury Suites that each measure 5,13
                  by 2 metres and give you the option of twin beds or a double
                  bed.
                </p>
                <p>
                  Your De Luxe or Luxury suites are your home-away-from-home
                  lounges. Need to send an important email halfway across the
                  world or make that urgent phone call? Relax in knowing that
                  all suites are fitted with WI-FI service that is complimentary
                  to all our guests. Use the telephone system in each suite to
                  dial your butler, at no extra charge, for an apéritif or even
                  call family and friends across the Atlantic and relay your
                  Blue Train experience at a minimal fee.
                </p>
                <p>
                  An act of alchemy transforms your sitting area into a restful
                  night-time sanctuary. Goose down duvets and pillows and 100
                  percent percale cotton bedding envelop you as you drift off
                  after a soothing, scented soak or shower in your marble and
                  gold-appointed bathroom, lulled by the rhythm of the
                  whispering wheels.
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
                <Col className="ml-auto mr-auto" md="8">
                  <h2 className="title">Public Areas</h2>
                  <h4 className="description">
                    The train offers a variety of public areas, for when you
                    feel the need to roam around.
                  </h4>
                </Col>
              </Row>
              <hr style={{ borderBottom: "1px solid #002147" }} />
              <h4 style={{ marginTop: "0" }} className="text-center">
                Dining Car
              </h4>
              <Row>
                <Col md="4">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/bluetrain/dc1.jpg")}
                  ></img>
                </Col>
                <Col md="4">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/bluetrain/dc2.jpg")}
                  ></img>
                </Col>
                <Col md="4">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/bluetrain/dc3.jpg")}
                  ></img>
                </Col>
                <p style={{ marginTop: "20px" }}>
                  While The Blue Train lives up to its five-star reputation in
                  every sense, its cuisine surpasses even the highest
                  expectations. It could be said that dinner will be the most
                  unforgettable experience of your adventure.
                </p>
                <p>
                  On board chefs regularly refresh their menus to intrigue and
                  tantalise your palate, as they prepare their signature dishes
                  using the freshest of local ingredients. From Karoo lamb,
                  ostrich and venison, to Knysna oysters and other award-winning
                  Cape cultivars. All artfully presented in delicate crystal or
                  on fine china, all contributing to the ultimate experience.
                </p>
                <p>
                  Underscoring the Dining Car’s atmosphere is a delightful
                  selection of tasteful background music, ranging from smooth
                  jazz to light classical to the mellow tones of the Soweto
                  String Quartet.
                </p>
                <p>
                  As the sky darkens over the landscape, you adorn yourself in
                  your finest silks and satins, diamonds and pearls, tuxedos and
                  ties, as you prepare to relish a banquet glowing with the
                  camaraderie of new friends or dine entwined in the subtle
                  intimacy of a table for two – or even if you opt to dine in
                  the privacy of your own suite – you become aware that every
                  taste you’re about to experience is a memory in the making, a
                  tantalising highlight on a menu of magical moments.
                </p>
                <p>
                  And indeed, there’s a menu for every taste. Whether you
                  require Kosher or Halaal meals, or gluten-free vegan options,
                  simply make your needs known at the time of reserving your
                  passage. You’ll also need to reserve your ideal dinner
                  sitting. Our very elegant Dining Car comfortably accommodates
                  42 guests in a single sitting and, in the event of having more
                  guests on the train, meals are served in two sittings to
                  ensure all our guests experience utter luxury and decadence.
                </p>
              </Row>
              <hr style={{ borderBottom: "1px solid #002147" }} />

              <h4 style={{ marginTop: "0" }} className="text-center">
                Observation Car
              </h4>
              <Row>
                <Col md="4">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/bluetrain/oc1.png")}
                  ></img>
                </Col>
                <Col md="4">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/bluetrain/oc2.png")}
                  ></img>
                </Col>
                <Col md="4">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/bluetrain/oc3.png")}
                  ></img>
                </Col>
                <p style={{ marginTop: "20px" }}>
                  As The Blue Train’s tracks roll inevitably into the distance,
                  so life’s course brings with it joys that must be celebrated.
                  Graduations, engagements, weddings and honeymoons,
                  anniversaries and milestone birthdays. All of these deserve a
                  memorable venue, a special ambience, a reminder that you’re
                  going places.
                </p>
                <p>
                  The Blue Train can be chartered for such occasions. Just for
                  you, it can meander along its standard routes, or on
                  custom-made trips and cross-border excursions that last from a
                  few hours to several nights. It’s your sojourn, it’s your
                  train. It’s our pleasure.
                </p>
                <p>
                  When not booked for use during a trip, the Conference Car is
                  converted into an Observation Car that reflects and
                  complements the amenities offered in the Lounge cars.
                </p>
                <p>
                  For those with more stern agendas, The Blue Train has the
                  facilities to service business-oriented journeys. Our
                  fully-equipped Conference Car can comfortably seat 22
                  delegates boardroom-style or accommodate smaller work areas
                  combined with Observation Car amenities.
                </p>
                <p>
                  Whether you’re rallying your sales force, rewarding
                  outstanding performance, wooing potential clients or hosting
                  your year-end function, stay on line. Keep on track. Navigate
                  your way through the ever-shifting landscape of doing business
                  in the 21st Century. Meet your challenges and celebrate your
                  successes on the move by stepping onboard a world where
                  business is pleasure…
                </p>
              </Row>
              <hr style={{ borderBottom: "1px solid #002147" }} />
              <h4 style={{ marginTop: "0" }} className="text-center">
                Club Car
              </h4>
              <Row>
                <Col md="4">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/bluetrain/cc1.jpg")}
                  ></img>
                </Col>
                <Col md="4">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/bluetrain/cc2.jpg")}
                  ></img>
                </Col>
                <Col md="4">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/bluetrain/cc3.jpg")}
                  ></img>
                </Col>
                <p style={{ marginTop: "20px" }}>
                  In the event that you are able to whisk yourself away from
                  your luxurious cocoon of comfort, The Blue Train offers two
                  convivial spaces in which to build friendships over a beverage
                  of choice. The Club Car, ideally situated behind the train’s
                  engines offers the feel of a burnished, wood-panelled
                  gentleman’s club where you are free to enjoy a Cuban cigar
                  which we serve after dinner to round off a perfect evening.
                </p>
                <p>
                  Wind down and relax with cognac or any drink of your choice.
                  Whether you’re after a game of backgammon, chess or cards, the
                  lure of the big screen or a tome from the library’s selection,
                  a fascinating chat with the barman or simply a solitary
                  reverie of the star-lit skies, then the Club Car is your ideal
                  setting.
                </p>
              </Row>
            </Container>
          </div>
          <div
            style={{ backgroundColor: "#002147 ", color: "white" }}
            className="about-office"
          >
            <Container>
              <Row className="text-center">
                <Col className="ml-auto mr-auto" md="8">
                  <h2 className="title">Map</h2>
                  <h4 className="description">
                    The Blue Train has 2 route options, one from Pretoria to
                    Cape and reverse, the other is a return trip to the Kruger
                    National Park.
                  </h4>
                  <br />
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/bluetrain/bmap.jpg")}
                    style={{ border: "1px solid white" }}
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

export default BlueTrainDetails;
