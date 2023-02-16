import React from "react";
import { Link } from "react-router-dom";

export const Navigation = (props) => {
  const headerMenu = {
    textTransform: "uppercase"
  };
  const list = {
    marginRight: "15px"
  };

  return (
    <div>
      <ul style={headerMenu}>
        <li style={list}>
          <Link
            to={props.nav.id}
            className={(activeElem) =>
              activeElem.isActive ? "active" : "notActive"
            }
          >
            {props.nav.value}
          </Link>
        </li>
      </ul>
    </div>
  );
};
