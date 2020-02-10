import React from "react";
import Helmet from "react-helmet";

// reactstrap components
import { Table, Container, Row, Col } from "reactstrap";

// core components

import WhiteNavbar from "components/Navbars/WhiteNavbar";
import Header from "components/Headers/BlueTrainHeader";
import Footer from "components/Footers/FooterWhite";

function BlueTrainSchedule() {
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
      <Header />
      <div className="wrapper">
        <div
          className="section section-about-us"
          style={{ backgroundColor: "#002147" }}
        >
          <Container>
            <br />
            <h1
              style={{ color: "white", textAlign: "center" }}
              className="title"
            >
              Train Schedule
            </h1>
            <h2 style={{ color: "white", textAlign: "center" }}>2020</h2>
            <br />
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h3 style={{ color: "white" }}>Pretoria To Cape Town</h3>
                <Table style={{ color: "white" }} responsive>
                  <thead>
                    <tr>
                      <th>Month</th>
                      <th>Day</th>
                      <th>Month</th>
                      <th>Day</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>January</td>
                      <td>
                        8, <strong>13</strong>, 15, <strong>20</strong>, 22,{" "}
                        <strong>27</strong>
                      </td>
                      <td>July</td>
                      <td>
                        6, <strong>13</strong>, <strong>20</strong>,{" "}
                        <strong>27</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>February</td>
                      <td>
                        <strong>3</strong>, <strong>10</strong>, 12,{" "}
                        <strong>17</strong>, 19, <strong>24</strong>,{" "}
                        <strong>26</strong>
                      </td>
                      <td>August</td>
                      <td>
                        <strong>17, 24 ,31</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>March</td>
                      <td>
                        <strong>2</strong>, <strong>9</strong>, 16, 18,{" "}
                        <strong>23</strong>, 25, <strong>30</strong>
                      </td>
                      <td>September</td>
                      <td>
                        <strong>7</strong>, <strong>14</strong>,{" "}
                        <strong>21</strong>, 23, <strong>28</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>April</td>
                      <td>
                        1, <strong>6</strong>, <strong>13</strong>,{" "}
                        <strong>20</strong>, <strong>27</strong>
                      </td>
                      <td>October</td>
                      <td>
                        <strong>5</strong>, <strong>12</strong>, 14,{" "}
                        <strong>19</strong>, 21, <strong>26</strong>, 28
                      </td>
                    </tr>
                    <tr>
                      <td>May</td>
                      <td>4, 11, 18, 25</td>
                      <td>November</td>
                      <td>
                        <strong>2</strong>, <strong>9</strong>, 11,{" "}
                        <strong>16</strong>, 18, <strong>23</strong>, 25,{" "}
                        <strong>30</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>June</td>
                      <td>1, 8, 15, 22, 29</td>
                      <td>December</td>
                      <td>
                        <strong>7</strong>, <strong>14</strong>, 16
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <p style={{ color: "white", lineHeight: "5px" }}>
                  Departure Time: Pretoria: 16:00 (pm) Day 1
                </p>
                <p style={{ color: "white", lineHeight: "10px" }}>
                  Arrival Time: Cape Town : 10:30 (am) Day 3
                </p>
                <br />
              </Col>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h3 style={{ color: "white" }}>Cape Town To Pretoria</h3>
                <Table style={{ color: "white" }} responsive>
                  <thead>
                    <tr>
                      <th>Month</th>
                      <th>Day</th>
                      <th>Month</th>
                      <th>Day</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>January</td>
                      <td>
                        11, <strong>16</strong>, 18, <strong>23</strong>, 25,{" "}
                        <strong>30</strong>
                      </td>
                      <td>July</td>
                      <td>
                        2, 9, <strong>16</strong>, <strong>23</strong>,{" "}
                        <strong>30</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>February</td>
                      <td>
                        <strong>6</strong>, <strong>13</strong>, 15,{" "}
                        <strong>20</strong>, 22, <strong>27</strong>, 29
                      </td>
                      <td>August</td>
                      <td>
                        <strong>20, 27</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>March</td>
                      <td>
                        <strong>5</strong>, <strong>12</strong>,{" "}
                        <strong>19</strong>, 21, <strong>26</strong>, 28
                      </td>
                      <td>September</td>
                      <td>
                        <strong>3</strong>, <strong>10</strong>,{" "}
                        <strong>17</strong>, <strong>24</strong>, 26
                      </td>
                    </tr>
                    <tr>
                      <td>April</td>
                      <td>
                        <strong>2</strong>, 4, <strong>9</strong>,{" "}
                        <strong>16</strong>, <strong>23</strong>,{" "}
                        <strong>30</strong>
                      </td>
                      <td>October</td>
                      <td>
                        <strong>1</strong>, <strong>8</strong>,{" "}
                        <strong>15</strong>, 17, <strong>22</strong>, 24,{" "}
                        <strong>29</strong>, 31
                      </td>
                    </tr>
                    <tr>
                      <td>May</td>
                      <td>7, 14, 21, 28</td>
                      <td>November</td>
                      <td>
                        <strong>5</strong>, <strong>12</strong>, 14,{" "}
                        <strong>19</strong>, 21, <strong>26</strong>, 28
                      </td>
                    </tr>
                    <tr>
                      <td>June</td>
                      <td>4, 11, 18, 25</td>
                      <td>December</td>
                      <td>
                        <strong>3</strong>, <strong>10</strong>,{" "}
                        <strong>17</strong>, 19
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <p style={{ color: "white", lineHeight: "5px" }}>
                  Departure Time: Cape Town: 16:00 (pm) Day 1
                </p>
                <p style={{ color: "white", lineHeight: "10px" }}>
                  Arrival Time: Pretoria : 10:30 (am) Day 3
                </p>
                <br />
              </Col>
            </Row>
            <br />

            <p
              style={{ color: "white", lineHeight: "10px", fontWeight: "bold" }}
            >
              Dates in bold denote the train with a maximum capacity of 82
              guests
            </p>
            <p style={{ color: "white", lineHeight: "10px" }}>
              Non-bold dates denote the train with a maximum capacity of 54
              guests
            </p>
            <p style={{ color: "white", lineHeight: "10px" }}>
              Both Train sets comprise of Conference / Observation Cars
            </p>
            <br />
            <hr style={{ borderBottom: "white solid 1px" }} />
            <h2 style={{ color: "white", textAlign: "center" }}>2021</h2>
            <br />
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h3 style={{ color: "white" }}>Pretoria to Cape Town</h3>
                <Table style={{ color: "white" }} responsive>
                  <thead>
                    <tr>
                      <th>Month</th>
                      <th>Day</th>
                      <th>Month</th>
                      <th>Day</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>January</td>
                      <td>
                        6, <strong>11</strong>, 13, <strong>18</strong>, 20,{" "}
                        <strong>25</strong>
                      </td>
                      <td>July</td>
                      <td>
                        <strong>12</strong>, <strong>19</strong>,{" "}
                        <strong>26</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>February</td>
                      <td>
                        <strong>1</strong>, <strong>8</strong>, 10,{" "}
                        <strong>15</strong>, 17, <strong>22</strong>,{" "}
                      </td>
                      <td>August</td>
                      <td>
                        <strong>16, 23</strong>, 25, <strong>30</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>March</td>
                      <td>
                        <strong>1</strong>, <strong>8</strong>, 10,{" "}
                        <strong>15</strong>, 17, <strong>22</strong>,{" "}
                        <strong>29</strong>
                      </td>
                      <td>September</td>
                      <td>
                        <strong>6</strong>, 8, <strong>13</strong>, 15,{" "}
                        <strong>20</strong>, 22, <strong>27</strong>, 29
                      </td>
                    </tr>
                    <tr>
                      <td>April</td>
                      <td>
                        <strong>7</strong>, 12, <strong>19</strong>, 21,{" "}
                        <strong>26</strong>
                      </td>
                      <td>October</td>
                      <td>
                        <strong>4</strong>, <strong>11</strong>,{" "}
                        <strong>13</strong>, <strong>18</strong>,{" "}
                        <strong>20</strong>, <strong>25</strong>,{" "}
                        <strong>27</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>May</td>
                      <td>3, 10, 17, 24, 31</td>
                      <td>November</td>
                      <td>
                        <strong>1</strong>, <strong>8</strong>,{" "}
                        <strong>15</strong>, 17, <strong>22</strong>, 24,{" "}
                        <strong>29</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>June</td>
                      <td>7, 14, 21, 28</td>
                      <td>December</td>
                      <td>
                        <strong>6</strong>, 13, <strong>15</strong>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <p style={{ color: "white", lineHeight: "5px" }}>
                  Departure Time: Pretoria: 16:00 (pm) Day 1
                </p>
                <p style={{ color: "white", lineHeight: "10px" }}>
                  Arrival Time: Cape Town : 10:30 (am) Day 3
                </p>
              </Col>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h3 style={{ color: "white" }}>Cape Town to Pretoria</h3>
                <Table style={{ color: "white" }} responsive>
                  <thead>
                    <tr>
                      <th>Month</th>
                      <th>Day</th>
                      <th>Month</th>
                      <th>Day</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>January</td>
                      <td>
                        9, <strong>14</strong>, 16, <strong>21</strong>, 23,{" "}
                        <strong>28</strong>
                      </td>
                      <td>July</td>
                      <td>
                        1, <strong>15</strong>, <strong>22</strong>,{" "}
                        <strong>29</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>February</td>
                      <td>
                        <strong>4</strong>, <strong>11</strong>, 13,{" "}
                        <strong>18</strong>, 20, <strong>25</strong>,{" "}
                      </td>
                      <td>August</td>
                      <td>
                        <strong>19, 26</strong>, 28
                      </td>
                    </tr>
                    <tr>
                      <td>March</td>
                      <td>
                        <strong>4</strong>, <strong>11</strong>, 13,{" "}
                        <strong>18</strong>, 20, <strong>25</strong>
                      </td>
                      <td>September</td>
                      <td>
                        <strong>2</strong>, <strong>9</strong>, 11,{" "}
                        <strong>16</strong>, 18, <strong>23</strong>, 25,{" "}
                        <strong>30</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>April</td>
                      <td>
                        1, <strong>10</strong>, 15, <strong>22</strong>, 24,{" "}
                        <strong>29</strong>
                      </td>
                      <td>October</td>
                      <td>
                        2, <strong>7</strong>, <strong>14</strong>, 16,{" "}
                        <strong>21</strong>, 23, <strong>28</strong>, 30
                      </td>
                    </tr>
                    <tr>
                      <td>May</td>
                      <td>6, 13, 20, 27</td>
                      <td>November</td>
                      <td>
                        <strong>4</strong>, <strong>11</strong>,{" "}
                        <strong>18</strong>, 20, <strong>25</strong>, 27
                      </td>
                    </tr>
                    <tr>
                      <td>June</td>
                      <td>3, 10, 17, 24</td>
                      <td>December</td>
                      <td>
                        <strong>2</strong>, <strong>9</strong>, 16,{" "}
                        <strong>18</strong>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <p style={{ color: "white", lineHeight: "5px" }}>
                  Departure Time: Cape Town: 16:00 (pm) Day 1
                </p>
                <p style={{ color: "white", lineHeight: "10px" }}>
                  Arrival Time: Pretoria : 10:30 (am) Day 3
                </p>
              </Col>
            </Row>
            <br />

            <br />
            <p
              style={{ color: "white", lineHeight: "10px", fontWeight: "bold" }}
            >
              Dates in bold denote the train with a maximum capacity of 82
              guests
            </p>
            <p style={{ color: "white", lineHeight: "10px" }}>
              Non-bold dates denote the train with a maximum capacity of 54
              guests
            </p>
            <p style={{ color: "white", lineHeight: "10px" }}>
              Both Train sets comprise of Conference / Observation Cars
            </p>
          </Container>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default BlueTrainSchedule;
