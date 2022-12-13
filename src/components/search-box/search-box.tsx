import { ChangeEvent, ChangeEventHandler } from "react";
import "./search-box.css";

type SearchBoxProps = {
  className: string;
  placeholder?: string; 
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ className, placeholder, onChangeHandler } : SearchBoxProps ) => (
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
