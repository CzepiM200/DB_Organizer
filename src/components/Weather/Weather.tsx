import "../../scss/main.scss";
import "./_weather.scss";
import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";

type WeatherProps = {};

export const Weather: FunctionComponent<WeatherProps> = (props: any) => {
  //   const cadreData = useSelector((state: any) => state.cadreData);

  return (
    <>
      <section className="weather">
        <article className="weather__menu">
          <h1>Pogoda</h1>
        </article>
        <article className="weather__list">W trakcie pracy...</article>
      </section>
    </>
  );
};
