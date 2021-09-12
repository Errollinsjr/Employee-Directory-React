import React from "react";
import "./style.css";

function SearchButton(props) {
  return <div className="searchButton">{props.children}</div>;
}

export default SearchButton;
