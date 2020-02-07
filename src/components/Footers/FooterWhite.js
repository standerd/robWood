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
        style={{ backgroundColor: "white", color: "#002147" }}
      >
        <Container>
          <nav>
            <ul>
              <li>
                <a href="#" target="_blank">
                  About Us
                </a>
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
