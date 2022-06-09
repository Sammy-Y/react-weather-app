import { useCallback, useRef } from "react";

import classes from "./Search.module.css";

const Search = (props) => {
  const cityInputRef = useRef();

  const submitHandler = useCallback((event) => {
    // submit the form and fetch data
    event.preventDefault();
    props.onSearchWeather(cityInputRef.current.value);
  });

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <input
        id="city"
        type="text"
        autoComplete="off"
        placeholder="ENTER CITY , COUNTRY"
        ref={cityInputRef}
      />
      <button>Go</button>
    </form>
  );
};

export default Search;
