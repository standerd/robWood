/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container
} from "reactstrap";

function WhiteNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar
        style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
        className="fixed-top"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              style={{ color: "#380812", fontWeight: "bold" }}
              to="/"
              tag={Link}
              id="navbar-brand"
            >
              Luxury Rail Travel
            </NavbarBrand>
            <button
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              className="navbar-toggler"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse isOpen={collapseOpen} navbar>
            <Nav className="ml-auto" id="ceva" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink1"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i className="now-ui-icons transportation_bus-front-12"></i>
                  <p style={{ color: "#002147", fontWeight: "bold" }}>
                    Blue Train
                  </p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink1" right>
                  <DropdownItem to="/details" tag={Link}>
                    <i className="now-ui-icons design_bullet-list-67"></i>
                    Train Details
                  </DropdownItem>
                  <DropdownItem to="/scheduleB" tag={Link}>
                    <i className="now-ui-icons ui-1_calendar-60"></i>
                    Cape Town Schedule
                  </DropdownItem>
                  <DropdownItem to="/ratesB" tag={Link}>
                    <i className="now-ui-icons business_money-coins"></i>
                    Cape Town Rates
                  </DropdownItem>
                  <DropdownItem to="/itinerary" tag={Link}>
                    <i className="now-ui-icons travel_info"></i>
                    Cape Town Itinerary
                  </DropdownItem>
                  <DropdownItem to="/scheduleK" tag={Link}>
                    <i className="now-ui-icons ui-1_calendar-60"></i>
                    Kruger Rates/Schedule
                  </DropdownItem>
                  <DropdownItem to="/itineraryK" tag={Link}>
                    <i className="now-ui-icons travel_info"></i>
                    Kruger Itinerary
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink1"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i className="now-ui-icons transportation_bus-front-12"></i>
                  <p style={{ color: "#095043", fontWeight: "bold" }}>
                    Rovos Rail
                  </p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink1" right>
                  <DropdownItem to="/detailsRovos" tag={Link}>
                    <i className="now-ui-icons design_bullet-list-67"></i>
                    Train Details
                  </DropdownItem>
                  <DropdownItem to="/scheduleRovos" tag={Link}>
                    <i className="now-ui-icons ui-1_calendar-60"></i>
                    Schedule
                  </DropdownItem>
                  <DropdownItem to="/ratesRovos" tag={Link}>
                    <i className="now-ui-icons business_money-coins"></i>
                    Rates
                  </DropdownItem>
                  <DropdownItem to="/itineraryRovos" tag={Link}>
                    <i className="now-ui-icons travel_info"></i>
                    Itinerary
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink1"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i className="now-ui-icons transportation_bus-front-12"></i>
                  <p style={{ color: "#002147", fontWeight: "bold" }}>
                    Shongololo Express
                  </p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink1" right>
                  <DropdownItem to="/shongDetails" tag={Link}>
                    <i className="now-ui-icons travel_info"></i>
                    Details
                  </DropdownItem>

                  <DropdownItem to="/scheduleShong" tag={Link}>
                    <i className="now-ui-icons ui-1_calendar-60"></i>
                    Schedule
                  </DropdownItem>
                  <DropdownItem to="/ratesShong" tag={Link}>
                    <i className="now-ui-icons business_money-coins"></i>
                    Rates
                  </DropdownItem>
                  <DropdownItem to="/shongJourneys" tag={Link}>
                    <i className="now-ui-icons travel_info"></i>
                    Itinerary
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Button
                  style={{
                    color: "#002147",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    fontWeight: "bold"
                  }}
                  className="nav-link btn-default"
                >
                  Specials
                </Button>
              </NavItem>
              <NavItem>
                <Button
                  style={{
                    color: "white",
                    backgroundColor: "#380812",
                    fontWeight: "bold"
                  }}
                  className="nav-link btn-default"
                >
                  <Link to="/contact">Bookings</Link>
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default WhiteNavbar;
