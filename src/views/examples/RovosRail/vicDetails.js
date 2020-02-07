import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet"

// reactstrap components
import { Table, Container, Row, Col } from "reactstrap";

// core components

import WhiteNavbar from "components/Navbars/WhiteNavbar";
import Header from "components/Headers/RovosHeader";
import Footer from "components/Footers/FooterWhite";

function VicFalls() {
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
        <title>Luxury Rail Travel</title>
        <meta property="og:site_name" content="" />
        <meta
          property="og:title"
          content="The Blue Train - Specials, Packages and Reservations"
        />
        <meta
          property="og:description"
          content="Blue Train Tickets and Special Packages - Luxury Train Travel in South Africa with Train Safaris connecting Cape Town, Pretoria and Durban. Blou Trein pakette en kaartjies."
        />

        <meta property="og:url" content="https://www.luxuryrailtravel.co.za/" />

        <meta
          name="description"
          content="Blue Train Tickets and Special Packages - Luxury Train Travel in South Africa with Train Safaris connecting Cape Town, Pretoria and Durban. Blou Trein pakette en kaartjies."
        />
        <meta
          name="keywords"
          content="the Blue Train, Blue Train, Blou Trein, bloutrein, specials, packages, pakette, pretoria, cape town, durban"
        />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
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
              Victoria Falls Itinerary
            </h1>
            <img
              className="ml-auto mr-auto width-full"
              alt="..."
              src={require("assets/img/rovos/vicDetails.jpg")}
            ></img>
            <br />
            <hr style={{ borderBottom: "1px solid white" }} />
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h3 style={{ color: "white", marginTop: "10px" }}>
                  Pretoria To Victoria Falls
                </h3>
                <h4 style={{ color: "white", textAlign: "left" }}>
                  Journey Description:
                </h4>
                <p style={{ color: "white", textAlign: "left" }}>
                  This three-night adventure begins with the train’s departure
                  from Rovos Rail Station in Pretoria. It then winds its way
                  north through Warmbaths, so named for its mineral waters, and
                  Nylstroom, christened by the Voortrekkers as the source of the
                  Nile River as the town’s river happened to be north flowing.
                  The train then passes the edge of the escarpment and crosses
                  the Tropic of Capricorn en route to the border with Zimbabwe.
                  After formalities at Beitbridge the next morning, the train
                  travels towards Bulawayo, second city of Zimbabwe, capital of
                  Matabeleland and industrial capital of the country. The
                  following day sees the train travelling along one of the
                  world’s longest stretches of straight railway line – 114
                  kilometres – before traversing Hwange National Park, a rich
                  and diverse wildlife sanctuary where animals can be spotted
                  from the train and a game drive excursion is enjoyed. After a
                  service stop at Thompsons Junction, the sojourn ends at the
                  incomparable Victoria Falls on the mighty Zambezi River. The
                  surrounding areas offer travellers many recreational
                  opportunities including cruises, whitewater rafting as well as
                  superb game viewing and photo safaris. Available in reverse.
                  Depending upon railway capacity, this journey could be routed
                  through Botswana.
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
                        10h00 The train departs Rovos Rail Station in Pretoria.
                        <br />
                        13h00 Lunch is served in the dining cars as the train
                        travels north through Warmbaths and Nylstroom, crossing
                        the Tropic of Capricorn.
                        <br />
                        Enjoy afternoon tea and dinner en route to Messina and
                        Beitbridge for Zimbabwe border formalities.
                        <br />
                        Breakfast: 07:00 - 10:00 , Lunch: 13:00 , Tea: 16:30 ,
                        Dinner: 19:30
                      </td>
                    </tr>

                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold" }}>Day 2</td>
                      <td style={{ textAlign: "left" }}>
                        Day at leisure. Breakfast, lunch and dinner are served
                        as the train travels towards Bulawayo via West
                        Nicholson.
                        <br />
                        Overnight stop on board at Mpopoma.
                      </td>
                    </tr>

                    <tr style={{ color: "white" }}>
                      <td style={{ fontWeight: "bold" }}>Day 3</td>
                      <td style={{ textAlign: "left" }}>
                        07h00 Breakfast is served as the train departs Mpopoma.
                        <br />
                        13h00 Enjoy lunch while travelling along the eastern
                        edge of Hwange Park along one of Africa’s longest
                        stretches of straight railway line – 114 kilometres.
                        <br />
                        15h00 Arrive at Kennedy Siding for a game drive at The
                        Hide. <br />
                        19h30 Dinner is served in the dining cars en route to
                        Thompsons Junction for the overnight stop.
                      </td>
                    </tr>
                    <tr style={{ color: "black", backgroundColor: "#ccc" }}>
                      <td style={{ fontWeight: "bold", width: "10%" }}>
                        Day 4
                      </td>
                      <td style={{ textAlign: "left" }}>
                        07h00 Breakfast is enjoyed while travelling towards the
                        Zambezi River. <br />
                        10h00 Arrive at journey’s end in Victoria Falls,
                        Zimbabwe.
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

export default VicFalls;
