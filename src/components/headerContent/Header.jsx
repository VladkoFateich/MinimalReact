import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { Baner } from "./Baner";

import "./Header.css";

export const Header = ({ open, setOpen, ...props }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const logoElem = props.logoData.map((logo) => (
    <Logo key={logo.id} logo={logo} />
  ));
  const navigationElem = props.navigationData.map((nav) => (
    <Navigation key={nav.id} nav={nav} />
  ));
  const banerElem = props.banerData.map((baner) => (
    <Baner key={baner.id} baner={baner} open={open} setOpen={setOpen} />
  ));
  const logo = {
    maxWidth: "100%",
    display: "flex",
    alignItems: "center",
    padding: "1.25% 17.5% 1.25% 17.5%",
  };
  return (
    <header>
      <div style={logo}>
        {logoElem}
        <div className={`nav ${menuOpen ? "active" : ""}`}>
          {navigationElem}
        </div>
        <div className="mobileBtn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu size={25} />
          )}
        </div>
      </div>
      <div>{banerElem}</div>
    </header>
  );
};
