import { useState, useEffect } from "react";

import Circle from "../UI/Circle";
import classes from "./Weather.module.css";

const Weathers = (props) => {
  const [isDegreeCel, setIsDegreeCel] = useState(true);

  // transform the temperture from Kelvin to Cel and Fah
  const degreeCel = (props.curTemp.temp - 273.15).toFixed(1);
  const degreeFah = ((props.curTemp.temp * 9) / 5 - 459.67).toFixed(1);

  const degreeFahHandler = () => {
    setIsDegreeCel(false);
  };

  const degreeCelHandler = () => {
    setIsDegreeCel(true);
  };

  return (
    <section className={classes.main}>
      <Circle>
        <div className={classes.weatherIcon}>
          <img
            src={`http://openweathermap.org/img/wn/${props.curWeather.icon}@2x.png`}
          />
        </div>
        <div className={classes.content}>
          <p className={classes.weather}>{props.curWeather.description}</p>
        </div>
        <div className={classes.content}>
          <h2>{isDegreeCel ? degreeCel : degreeFah}</h2>
          <button onClick={degreeCelHandler}>°C</button>
          <p style={{ color: "rgb(141, 69, 229)" }}>|</p>
          <button onClick={degreeFahHandler}>°F</button>
        </div>
        <div className={classes.content}>
          <h2>{props.curCity}</h2>
        </div>
      </Circle>
    </section>
  );
};

export default Weathers;
