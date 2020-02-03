/*eslint-disable*/
import React from "react";

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
                <a
                  href="http://presentation.creative-tim.com?ref=nuk-pro-react-footer-black"
                  target="_blank"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="http://blog.creative-tim.com?ref=nuk-pro-react-footer-black"
                  target="_blank"
                >
                  Contact Us
                </a>
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
