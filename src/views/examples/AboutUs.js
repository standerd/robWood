import React from "react";
import Helmet from "react-helmet";
// react plugin used to create google maps

// reactstrap components
import { Container, Col } from "reactstrap";

// core components
import Navbar from "components/Navbars/WhiteNavbar.js";
import ContactUsHeader from "components/Headers/AboutUsHeader.js";
import Footer from "components/Footers/FooterBlack";

function ContactUs() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add("contact-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("contact-page");
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
      <Navbar />
      <div className="wrapper">
        <ContactUsHeader />
        <div className="main">
          <div>
            <Container>
              <Col
                className="ml-auto mr-auto"
                md="12"
                style={{ margin: "50px 0" }}
              >
                <br />
                <h2>Who We Are:</h2>
                <h5 style={{ color: "black" }} className="description">
                  Meet the Spirit of South Africa and the wonderful people of
                  our magnificent nation. Indulge and spoil yourself and your
                  partners, family, friends and colleagues with an extraordinary
                  way of traveling, it’s all about the journey! Our team has
                  been traveling by rail throughout South Africa and surrounds
                  for over 5 decades.{" "}
                </h5>
                <h5 style={{ color: "black" }} className="description">
                  We are dedicated to meeting your needs on a close knit and
                  personal experience. Traveling by rail is a timeless journey
                  and we believe one that focuses on the gentle rhythms of life
                  rather than the stressful modern way's.
                </h5>
                <br />
                <h2>Services We Offer:</h2>
                <h5 style={{ color: "black" }} className="description">
                  We are able to provide you with a complete custom travel
                  package including but not limited to:
                </h5>
                <p style={{ color: "black" }} className="description">
                  <i className="now-ui-icons ui-1_check"></i> Flights: We are
                  able to assist with local and international flights prior to
                  and after your rail journey.
                </p>
                <p style={{ color: "black" }} className="description">
                  <i className="now-ui-icons ui-1_check"></i> Accomodation: We
                  can assist in arranging accomodation before or after your rail
                  journey and can also offer tailored accomodation packages
                  should you wish to extend your stay in South Africa / Africa
                  or if you wish to start your holiday a little earlier.
                </p>
                <p style={{ color: "black" }} className="description">
                  <i className="now-ui-icons ui-1_check"></i> Excursions: We can
                  assist with a large array of excursions prior to or after your
                  rail journey. From Safari's to tours of towns. Contact us to
                  discuss the variety of options available.
                </p>
                <p style={{ color: "black" }} className="description">
                  <i className="now-ui-icons ui-1_check"></i> Transfers: We can
                  arrange for tranfers from the airports to your hotels and also
                  provide transfers to your hotel after your journey and to the
                  station on the day of your journey.
                </p>
                <p style={{ color: "black" }} className="description">
                  <i className="now-ui-icons ui-1_check"></i> Advice: With the
                  variety of routes and partner options we understand that
                  making a decision might be difficult. Speak to us for some
                  advice on what is available to best suite your needs.
                </p>
              </Col>
            </Container>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default ContactUs;
