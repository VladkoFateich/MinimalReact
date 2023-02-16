import React from "react";

export const Logo = (props) => {
  const headerLogo = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  };
  const logoText = {
    marginLeft: "18px",
    // fontFamily: "Oswald-Regular",
    fontSize: "22px",
    textTransform: "uppercase",
  };
  return (
    <div style={headerLogo}>
      <img src={props.logo.url} alt={props.logo.alt} />
      <span style={logoText}>{props.logo.titleLogo}</span>
    </div>
  );
};
