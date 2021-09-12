import React from "react";
import "./style.css";

function SearchBar(props) {
  return <div className="searchBar">{props.children}</div>;
}

export default SearchBar;
