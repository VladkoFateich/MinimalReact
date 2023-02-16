import React from "react";

import { Contacts } from "./Contacts";
import { Feedback } from "./Feedback";
import GetInTouch from "../img/GetInTouch.jpg";

export const Footer = (props) => {
  const contactElem = props.contactsData.map((contact) => (
    <Contacts key={contact.id} contact={contact} />
  ));
  const fotter = {
    backgroundImage: `url(${GetInTouch})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    position: "relative",
    padding: "79px 22% 75px 22%"
  };
  const title = {
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: "Montserrat-Regular",
    fontSize: "23px",
    lineHeight: "36px"
  };
  const contacts = {
    marginTop: "63px",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    gap: "14%"
  };
  const feedback = {
    backgroundColor: "#000000",
    margin: "auto",
    padding: "69px 30% 75px 30%",
    textAlign: "center"
  };
  return (
    <footer>
      <div style={fotter}>
        {" "}
        <h2 style={title}>let`s get in touch</h2>
        <div style={contacts}>{contactElem}</div>
      </div>
      <div style={feedback}>
        <Feedback />
      </div>
    </footer>
  );
};
