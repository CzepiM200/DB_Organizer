import "../../scss/main.scss";
import "./_homePage.scss";
import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
type HomePageProps = {};

export const HomePage: FunctionComponent<HomePageProps> = (props: any) => {
  return (
    <>
      <section className="home-page">
        <Link className="home-page__item" to="/">
          <h3>Uczestnicy</h3>
        </Link>
        <Link className="home-page__item" to="/">
          <h3>Kadra</h3>
        </Link>
        <Link className="home-page__item" to="/">
          <h3>Finanse</h3>
        </Link>
        <Link className="home-page__item" to="/">
          <h3>Statystyki</h3>
        </Link>
        <Link className="home-page__item" to="/">
          <h3>Uczestnicy</h3>
        </Link>
        <Link className="home-page__item" to="/">
          <h3>Uczestnicy</h3>
        </Link>
      </section>
    </>
  );
};
