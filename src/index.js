import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages
import Rates from "views/examples/BlueTrain/Rates";
import Schedule from "views/examples/BlueTrain/Schedule";
import Details from "views/examples/BlueTrain/Details";
import Itinerary from "views/examples/BlueTrain/Itinerary";
import ItineraryKruger from "views/examples/BlueTrain/KrugerItinerary";
import KrugerRates from "views/examples/BlueTrain/KrugerRates";
import RovosDetails from "views/examples/RovosRail/Details";
import RovosRates from "views/examples/RovosRail/Rates";
import RovosSchedule from "views/examples/RovosRail/Schedule";
import RovosItinerary from "views/examples/RovosRail/Journeys";
import CapeTownDetails from "views/examples/RovosRail/cptDetails";
import DBNDetails from "views/examples/RovosRail/dbnDetails";
import VICDetails from "views/examples/RovosRail/vicDetails";
import GolfDetails from "views/examples/RovosRail/golfDetails";
import NamDetails from "views/examples/RovosRail/namDetails";
import CollageDetails from "views/examples/RovosRail/collDetails";
import DARDetails from "views/examples/RovosRail/darDetails";
import LOBDetails from "views/examples/RovosRail/lobDetails";
import ShongDetail from "views/examples/Shongololo/Details";
import LandingPage from "views/examples/LandingPage.js";
import ContactUs from "views/examples/ContactUs";
import AboutUs from "views/examples/AboutUs";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/ratesB" render={props => <Rates {...props} />} />
      <Route path="/scheduleB" render={props => <Schedule {...props} />} />
      <Route path="/details" render={props => <Details {...props} />} />
      <Route path="/itinerary" render={props => <Itinerary {...props} />} />
      <Route
        path="/itineraryK"
        render={props => <ItineraryKruger {...props} />}
      />
      <Route path="/scheduleK" render={props => <KrugerRates {...props} />} />
      <Route
        path="/detailsRovos"
        render={props => <RovosDetails {...props} />}
      />
      <Route path="/ratesRovos" render={props => <RovosRates {...props} />} />
      <Route
        path="/scheduleRovos"
        render={props => <RovosSchedule {...props} />}
      />
      <Route
        path="/itineraryRovos"
        render={props => <RovosItinerary {...props} />}
      />
      <Route
        path="/cptDetails"
        render={props => <CapeTownDetails {...props} />}
      />
      <Route path="/dbnDetails" render={props => <DBNDetails {...props} />} />
      <Route path="/vicDetails" render={props => <VICDetails {...props} />} />
      <Route path="/golfDetails" render={props => <GolfDetails {...props} />} />
      <Route path="/namDetails" render={props => <NamDetails {...props} />} />
      <Route
        path="/collDetails"
        render={props => <CollageDetails {...props} />}
      />
      <Route path="/darDetails" render={props => <DARDetails {...props} />} />
      <Route path="/lobDetails" render={props => <LOBDetails {...props} />} />
      <Route
        path="/shongDetails"
        render={props => <ShongDetail {...props} />}
      />
      <Route path="/contact" render={props => <ContactUs {...props} />} />
      <Route path="/aboutus" render={props => <AboutUs {...props} />} />
      <Route path="/" render={props => <LandingPage {...props} />} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
