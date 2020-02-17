import React from "react";
import Helmet from "react-helmet";
// react plugin used to create google maps

// reactstrap components
import {
  Button,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Spinner
} from "reactstrap";
import Select from "react-select";

// core components
import Navbar from "components/Navbars/WhiteNavbar.js";
import ContactUsHeader from "components/Headers/ContactHeader.js";
import Footer from "components/Footers/FooterBlack";

import * as Dates from "./RovosRail/date";

let tripsRovos = [
  { value: "Pretoria - Cape Town", label: "Pretoria - Cape Town" },
  { value: "Cape Town - Pretoria", label: "Cape Town - Pretoria" },
  { value: "Pretoria - Vic Falls", label: "Pretoria - Vic Falls" },
  { value: "Vic Falls - Pretoria", label: "Vic Falls - Pretoria" },
  { value: "Pretoria - Durban", label: "Pretoria - Durban" },
  { value: "Durban - Pretoria", label: "Durban - Pretoria" },
  { value: "Cape Town - Dar Es Salaam", label: "Cape Town - Dar Es Salaam" },
  { value: "Dar Es Salaam - Cape Town", label: "Dar Es Salaam - Cape Town" },
  {
    value: "Collage: Pretoria - Cape Town",
    label: "Collage: Pretoria - Cape Town"
  },
  {
    value: "Collage: Cape Town - Pretoria",
    label: "Collage: Cape Town - Pretoria"
  },
  { value: "Pretoria - Walvis Bay", label: "Pretoria - Walvis Bay" },
  { value: "Walvis Bay - Pretoria", label: "Walvis Bay - Pretoria" },
  { value: "Golf: Pretoria - Pretoria", label: "Golf: Pretoria - Pretoria" },
  { value: "Dar Es Salaam - Lobito", label: "Dar Es Salaam - Lobito" },
  { value: "Lobito - Dar Es Salaam", label: "Lobito - Dar Es Salaam" }
];
let tripsBlueTrain = [
  { value: "Pretoria - Cape Town", label: "Pretoria - Cape Town" },
  { value: "Cape Town - Pretoria", label: "Cape Town - Pretoria" },
  {
    value: "Pretoria - Kruger - Pretoria",
    label: "Pretoria - Kruger - Pretoria"
  }
];

function ContactUs() {
  const [nameFocus, setNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [numberFocus, setNumberFocus] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [rail, setRail] = React.useState("");
  const [trip, setTrip] = React.useState("");
  const [date, setDate] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);
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

  let rovosTrip = Dates.default.rovos[trip.value];
  let blueTrip = Dates.default.blueTrain[trip.value];
  let datePicker;
  let tripPicker;

  const emailSet = e => {
    setEmail(e.target.value);
  };

  const nameSet = e => {
    setName(e.target.value);
  };
  const phoneSet = e => {
    setPhone(e.target.value);
  };

  const messageSet = e => {
    setMessage(e.target.value);
  };

  //email client setup

  const onSubmitHandler = e => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);
    const templateId = "template_050fCUxk";

    sendFeedback(templateId, {
      name: name,
      email: email,
      telNo: phone,
      provider: rail.value,
      trip: trip.value,
      date: date.value,
      message: message
    });
  };

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("gmail", templateId, variables)
      .then(res => {
        console.log("Email successfully sent!");
        setLoading(false);
        setError(false);
        setSuccess(true);
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => {
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        );
        setError(true);
        setLoading(false);
        setSuccess(false);
      });
  };

  //Check for the rail supplier selected and then load the the appropriate rail journeys options
  if (rail.value === "Blue Train") {
    tripPicker = tripsBlueTrain;
  } else if (rail.value === "Rovos Rail") {
    tripPicker = tripsRovos;
  }

  //check for the journeys that was selected and load the appropriate dates for the journey
  if (rail.value === "Rovos Rail") {
    datePicker = rovosTrip;
  } else if (rail.value === "Blue Train") {
    datePicker = blueTrip;
  }

  //form display, set accordinging to initial state, loading, success or error.
  let formDisplay;
  let errorDisplay;

  if (!loading && !success) {
    formDisplay = (
      <div>
        <h2 className="title">Booking Enquiry</h2>
        <p className="description">
          Please complete the below information and we will get back to you soon
          with availability and final rates. <br></br>
          <br></br>
        </p>
        <Form id="contact-form" method="post" role="form">
          <Row>
            <Col md="6">
              <label>Your name</label>
              <InputGroup className={nameFocus ? "input-group-focus" : ""}>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="now-ui-icons users_circle-08"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  aria-label="Your Name..."
                  autoComplete="name"
                  placeholder="Your Name..."
                  type="text"
                  value={name}
                  onChange={nameSet}
                  onFocus={() => setNameFocus(true)}
                  onBlur={() => setNameFocus(false)}
                ></Input>
              </InputGroup>
            </Col>
            <Col md="6">
              <label>Email address</label>
              <InputGroup className={emailFocus ? "input-group-focus" : ""}>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="now-ui-icons ui-1_email-85"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  aria-label="Email Here..."
                  autoComplete="email"
                  placeholder="Email Here..."
                  type="email"
                  value={email}
                  onChange={emailSet}
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                ></Input>
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <label>Phone</label>
              <InputGroup className={numberFocus ? "input-group-focus" : ""}>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="now-ui-icons tech_mobile"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  autoComplete="number"
                  placeholder="Number Here..."
                  type="text"
                  value={phone}
                  onChange={phoneSet}
                  onFocus={() => setNumberFocus(true)}
                  onBlur={() => setNumberFocus(false)}
                ></Input>
              </InputGroup>
            </Col>
            <Col md="6">
              <label>Preferred Railway</label>
              <Select
                className="react-select"
                classNamePrefix="react-select"
                name="railSet"
                value={rail}
                onChange={value => {
                  setRail(value);
                  setTrip("");
                  setDate("");
                }}
                options={[
                  { value: "Blue Train", label: "Blue Train" },
                  { value: "Rovos Rail", label: "Rovos Rail" },
                  { value: "Shongololo Express", label: "Shongololo Express" }
                ]}
                placeholder="Please Select a Rail Partner"
              />
            </Col>
          </Row>

          <Row>
            <Col md="6">
              <label>Journey</label>

              <Select
                className="react-select"
                classNamePrefix="react-select"
                name="singleSelect"
                value={trip}
                onChange={value => setTrip(value)}
                options={tripPicker}
                placeholder="Please Select Journey"
              />
            </Col>
            <Col md="6">
              <label>Date</label>
              <Select
                className="react-select"
                classNamePrefix="react-select"
                name="singleSelect"
                value={date}
                onChange={value => setDate(value)}
                options={datePicker}
                placeholder="Please Select a Date"
              />
              {/* <InputGroup className={dateFocus ? "input-group-focus" : ""}>
                <Input
                  aria-label="Please select a date"
                  autoComplete="date"
                  type="select"
                  onChange={dateSet}
                  value={date}
                  style={{
                    fontSize: "1.03rem",
                    border: "1px solid #E3E3E3"
                  }}
                  onFocus={() => setDateFocus(true)}
                  onBlur={() => setDateFocus(false)}
                >
                  <option>Please Select a Date</option>
                  {datePicker}
                </Input>
              </InputGroup> */}
            </Col>
          </Row>
          <br />
          <FormGroup>
            <label>Your message</label>
            <Input
              id="message"
              name="message"
              rows="6"
              type="textarea"
              onChange={messageSet}
              value={message}
            ></Input>
          </FormGroup>
          <div className="submit text-center">
            <Button
              style={{
                backgroundColor: "rgb(0,33,71)",
                fontWeight: "bold"
              }}
              className="btn-raised btn-round"
              defaultValue="Send Enquiry"
              type="submit"
              onClick={onSubmitHandler}
            >
              Send Enquiry
            </Button>
          </div>
        </Form>
      </div>
    );
  } else if (loading) {
    formDisplay = (
      <div style={{ textAlign: "center", color: "green", fontWeight: "bold" }}>
        <Spinner style={{ width: "5rem", height: "5rem" }} />
        <h4>Processing Request</h4>
      </div>
    );
  } else if (success) {
    formDisplay = (
      <div style={{ textAlign: "center", color: "green" }}>
        <h2>Request Processed Successfully</h2>
        <h2>We will get back to you within the next 24 Hours</h2>
      </div>
    );
  }

  error
    ? (errorDisplay = (
        <h5 style={{ color: "red", fontWeight: "bold", textAlign: "center" }}>
          There was an error submitting the request, please try again
        </h5>
      ))
    : (errorDisplay = <p></p>);

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
          <div className="contact-content">
            <Container>
              <Col className="ml-auto mr-auto" md="12">
                {formDisplay}
                {errorDisplay}
              </Col>
              <br />
              <h2 className="title text-center">Or Contact Us</h2>
              <Row>
                <Col md="6">
                  <div className="info info-horizontal">
                    <div className="icon" style={{ color: "rgb(0,33,71)" }}>
                      <i className="now-ui-icons location_pin"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Office Address</h4>
                      <p>
                        3 Hythe Avenue <br></br>
                        Mulbarton Extension 2 <br></br>
                        Johannesburg
                        <br />
                        South Africa
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div className="info info-horizontal">
                    <div className="icon" style={{ color: "rgb(0,33,71)" }}>
                      <i className="now-ui-icons tech_mobile"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Give us a call</h4>
                      <p>
                        Rob Wood <br></br>
                        +27 83 2676539 <br></br>
                        Mon - Fri, 8:00-17:00
                      </p>
                    </div>
                  </div>
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

export default ContactUs;
