/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Container } from "reactstrap";

// core components

function FooterBlack() {
  return (
    <>
      <footer
        className="footer"
        style={{ backgroundColor: "#002147", color: "white" }}
      >
        <Container>
          <nav>
            <ul>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Designed by{" "}
            <a href="https://www.mern.co.za" target="_blank">
              Mern Development
            </a>
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default FooterBlack;
