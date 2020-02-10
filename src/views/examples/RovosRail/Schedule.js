import React from "react";
import Helmet from "react-helmet"

// reactstrap components
import { Table, Container, Row, Col } from "reactstrap";

// core components

import WhiteNavbar from "components/Navbars/WhiteNavbar";
import Header from "components/Headers/RovosHeader";
import Footer from "components/Footers/FooterWhite";

function RovosSchedule() {
  React.useEffect(() => {
    window.scroll(0,0);
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
        <div
          className="section section-about-us"
          style={{ backgroundColor: "#095043" }}
        >
          <Container>
            <h1
              style={{ color: "white", textAlign: "center" }}
              className="title"
            >
              Train Schedule
            </h1>
            <h2 style={{ color: "white", textAlign: "center" }}>2020</h2>
            <h3 style={{ color: "white", textAlign: "center" }}>
              Short Journeys: 1 Feb 2020 - 30 September 2020
            </h3>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <Table style={{ color: "white" }} responsive>
                  <thead>
                    <tr>
                      <th>Journey</th>
                      <th>PRY-CPT</th>
                      <th>CPT-PRY</th>
                      <th>PRY-VFA</th>
                      <th>VFA-PRY</th>
                      <th>PRY-DUR</th>
                      <th>DUR-PRY</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>FEB 2020</td>
                      <td>7,13*,14,19,21,26,28</td>
                      <td>3,10,12,17,22,24</td>
                      <td>6,13,20,27</td>
                      <td>2,9,16,23</td>
                      <td>7</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td>MAR 2020</td>
                      <td>4,6,11,13,18,20,27</td>
                      <td>2,7,9,14,16,21,23,30</td>
                      <td>5,12,19,26</td>
                      <td>1,3*,8,15,22,29</td>
                      <td>20</td>
                      <td>23</td>
                    </tr>
                    <tr>
                      <td>APR 2020</td>
                      <td>3,10,17,24</td>
                      <td>1,6,13,20,27</td>
                      <td>2,9,16,23,30</td>
                      <td>5,12,19,26</td>
                      <td>10</td>
                      <td>13</td>
                    </tr>
                    <tr>
                      <td>MAY 2020</td>
                      <td>1,8,15,22,29</td>
                      <td>4,11,18,25,30</td>
                      <td>7,14,21,28</td>
                      <td>3,10,17,24,31</td>
                      <td>n/a</td>
                      <td>n/a</td>
                    </tr>
                    <tr>
                      <td>JUNE 2020</td>
                      <td>5,12,19,24,26</td>
                      <td>1,8,15,22,29</td>
                      <td>11,25</td>
                      <td>14,23*,28</td>
                      <td>n/a</td>
                      <td>n/a</td>
                    </tr>
                    <tr>
                      <td>JULY 2020</td>
                      <td>3,10,17,24,31</td>
                      <td>6,13,20,27</td>
                      <td>2,9,16,23,30</td>
                      <td>5,12,19,26</td>
                      <td>n/a</td>
                      <td>n/a</td>
                    </tr>
                    <tr>
                      <td>AUG 2020</td>
                      <td>7,14,21,28</td>
                      <td>3,10,17,24,31</td>
                      <td>6,13,20,27</td>
                      <td>2,9,16,23,30</td>
                      <td>14</td>
                      <td>17</td>
                    </tr>
                    <tr>
                      <td>SEP 2020</td>
                      <td>4,9,11,16,18,23,25</td>
                      <td>2,7,14,19,21,28</td>
                      <td>3,10,17,24</td>
                      <td>6,13,20,27</td>
                      <td>25</td>
                      <td>28</td>
                    </tr>
                  </tbody>
                </Table>
                <br />
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h3 style={{ color: "white" }}>
                  Long Journeys: 1 January 2020 - 31 December 2020
                </h3>
                <Table style={{ color: "white" }} responsive>
                  <thead>
                    <tr>
                      <th>CPT-DAR</th>
                      <th>DAR-CPT</th>
                      <th>COLLAGE PRY-CPT</th>
                      <th>COLLAGE CPT-PRY</th>
                      <th>NAMIBIA PRY-WVB</th>
                      <th>NAMIBIA WVB-PRY</th>
                      <th>GOLF PRY-PRY</th>
                      <th>DAR-LOBITO</th>
                      <th>LOBITO-DAR</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>27 Jun - 11 Jul</td>
                      <td>28 Jan - 11 Feb</td>
                      <td>20 May - 29 May</td>
                      <td>04 Feb - 14 Feb*</td>
                      <td>09 Apr - 17 Apr</td>
                      <td>19 Apr - 27 Apr</td>
                      <td>29 Jan - 06 Feb</td>
                      <td>14 Jul - 28 Jul</td>
                      <td>31 Jul - 14 Aug</td>
                    </tr>
                    <tr>
                      <td>26 Sep - 10 Oct</td>
                      <td>17 Mar - 31 Mar</td>
                      <td>27 Oct - 06 Nov*</td>
                      <td>09 Nov - 18 Nov</td>
                      <td>30 Apr - 08 May</td>
                      <td>10 May - 18 May</td>
                      <td>20 Feb - 28 Feb</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>29 Sep - 13 Oct</td>
                      <td></td>
                      <td></td>
                      <td>07 May - 15 May</td>
                      <td>17 May - 25 May</td>
                      <td>26 Mar - 03 Apr</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>13 Oct - 27 Oct</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>01 Oct - 10 Oct**</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>11 Nov - 19 Nov</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
                <p style={{ color: "white" }}>
                  * Shongololo Express Train Set ** 10 Day African Collage/Golf
                  Safari due to course availability
                </p>
              </Col>
            </Row>
            <br />

            <br />
            <hr style={{ borderBottom: "white solid 1px" }} />
            <h2 style={{ color: "white", textAlign: "center" }}>2021</h2>

            <br />
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h3 style={{ color: "white" }}>
                  Short Journeys: 1 October 2020 - 30 September 2021
                </h3>
                <Table style={{ color: "white" }} responsive>
                  <thead>
                    <tr>
                      <th>Journey</th>
                      <th>PRY-CPT</th>
                      <th>CPT-PRY</th>
                      <th>PRY-VFA</th>
                      <th>VFA-PRY</th>
                      <th>PRY-DUR</th>
                      <th>DUR-PRY</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>OCT 2020</td>
                      <td>2,9,14,16,23,30</td>
                      <td>5,12,14,17,19,26,28</td>
                      <td>1,8,15,22</td>
                      <td>4,11,18,25</td>
                      <td>21</td>
                      <td>24</td>
                    </tr>
                    <tr>
                      <td>NOV 2020</td>
                      <td>4,6,13,20,27</td>
                      <td>2,9,16,23,30</td>
                      <td>5,12,19,26</td>
                      <td>1,3,8,15,22,29</td>
                      <td>20</td>
                      <td>23</td>
                    </tr>
                    <tr>
                      <td>DEC 2020</td>
                      <td>4,11,18,25,30</td>
                      <td>5,7,14,21,28</td>
                      <td>24,31</td>
                      <td>27</td>
                      <td>n/a</td>
                      <td>n/a</td>
                    </tr>
                    <tr>
                      <td>JAN 2021</td>
                      <td>1,6,8,13*,15,20,22,29</td>
                      <td>2,4,11,18,23,25</td>
                      <td>7,14,21,28</td>
                      <td>3,10,17,24,31</td>
                      <td>8</td>
                      <td>11</td>
                    </tr>
                    <tr>
                      <td>FEB 2021</td>
                      <td>5,12,17,19,24,26</td>
                      <td>1,8,10,13,15,20,22</td>
                      <td>4,11,18,25</td>
                      <td>7,14,21,28</td>
                      <td>5</td>
                      <td>8</td>
                    </tr>
                    <tr>
                      <td>MAR 2021</td>
                      <td>5,10,12,19,26</td>
                      <td>1,8,13,15,22,29,31</td>
                      <td>4,11,18,25</td>
                      <td>7,14,21,28</td>
                      <td>19</td>
                      <td>22</td>
                    </tr>
                    <tr>
                      <td>APR 2021</td>
                      <td>2,9,16,23,30</td>
                      <td>5,12,19,26</td>
                      <td>1,8,15,22,29</td>
                      <td>4,11,18,25,27*</td>
                      <td>9</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>MAY 2021</td>
                      <td>7,14,21,28</td>
                      <td>3,10,17,24,29,31</td>
                      <td>6,13,20,27</td>
                      <td>2,9,16,23,30</td>
                      <td>n/a</td>
                      <td>n/a</td>
                    </tr>
                    <tr>
                      <td>JUN 2021</td>
                      <td>4,11,18,23,25</td>
                      <td>7,14,21,28</td>
                      <td>10,24</td>
                      <td>13,22*,27</td>
                      <td>n/a</td>
                      <td>n/a</td>
                    </tr>
                    <tr>
                      <td>JUL 2021</td>
                      <td>2,9,16,23,30</td>
                      <td>5,12,19,26</td>
                      <td>1,8,15,22,29</td>
                      <td>4,11,18,25</td>
                      <td>n/a</td>
                      <td>n/a</td>
                    </tr>
                    <tr>
                      <td>AUG 2021</td>
                      <td>6,13,20,27</td>
                      <td>2,9,16,23,30</td>
                      <td>5,12,19,26</td>
                      <td>1,8,15,22,29</td>
                      <td>13</td>
                      <td>16</td>
                    </tr>
                    <tr>
                      <td>SEPT 2021</td>
                      <td>3,8,10,17,22,24</td>
                      <td>1,6,11,13,20,27</td>
                      <td>2,9,16,23,30</td>
                      <td>5,12,19,26</td>
                      <td>24</td>
                      <td>27</td>
                    </tr>
                  </tbody>
                </Table>
                <br />
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h3 style={{ color: "white" }}>
                  Long Journeys: 1 January 2021 - 31 December 2021
                </h3>
                <Table style={{ color: "white" }} responsive>
                  <thead>
                    <tr>
                      <th>CPT-DAR</th>
                      <th>DAR-CPT</th>
                      <th>COLLAGE PRY-CPT</th>
                      <th>COLLAGE CPT-PRY</th>
                      <th>NAMIBIA PRY-WVB</th>
                      <th>NAMIBIA WVB-PRY</th>
                      <th>GOLF PRY-PRY</th>
                      <th>DAR-LOBITO</th>
                      <th>LOBITO-DAR</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>26 Jun - 10 Jul</td>
                      <td>26 Jan - 09 Feb</td>
                      <td>19 May - 28 May</td>
                      <td>08 Nov - 18 Nov*</td>
                      <td>08 Apr - 16 Apr</td>
                      <td>18 Apr - 26 Apr</td>
                      <td>27 Jan - 04 Feb</td>
                      <td>13 Jul - 27 Jul</td>
                      <td>30 Jul - 13 Aug</td>
                    </tr>
                    <tr>
                      <td>25 Sep - 09 Oct</td>
                      <td>12 Oct - 26 Oct</td>
                      <td>27 Oct - 05 Nov</td>
                      <td></td>
                      <td>29 Apr - 07 May</td>
                      <td>09 May - 17 May</td>
                      <td>17 Feb - 25 Feb</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>06 May - 14 May</td>
                      <td>16 May - 24 May</td>
                      <td>24 Mar - 01 Apr</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>30 Sep - 08 Oct</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>03 Nov - 11 Nov</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
                <p style={{ color: "white" }}>
                  * Shongololo Express Train Set ** 10 Day African Collage/Golf
                  Safari due to course availability
                </p>
                <p style={{ color: "white" }}>
                  CPT - Cape Town , PRY - Pretoria, VFA - Victoria Falls, DUR -
                  Durban, DAR - Dar Es Salaam, WVB - Walvis Bay
                </p>
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

export default RovosSchedule;
