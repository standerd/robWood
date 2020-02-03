import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function ContactHeader() {
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/contact.jpg") + ")"
          }}
        ></div>
        <div className="content-center">
          <Container>
            <h1 className="title">Ready for The Trip of a Lifetime</h1>
          </Container>
        </div>
      </div>
    </>
  );
}

export default ContactHeader;
