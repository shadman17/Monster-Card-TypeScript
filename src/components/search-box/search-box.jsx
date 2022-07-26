import { Component } from "react";
import "./search-box.css";

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <div>
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  </div>
);

export default SearchBox;
