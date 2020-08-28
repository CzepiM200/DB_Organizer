import "./_sidebar.scss";
import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

type Sidebar = {};

export const Sidebar: FunctionComponent<Sidebar> = (props: any) => {
  return (
    <div className="sidebar">
      <ul className="sidebar__nav">
        <Link className="sidebar__item" to="/">
          <li>Home</li>
        </Link>
        <Link className="sidebar__item" to="/participants">
          <li>Uczestnicy</li>
        </Link>
        <Link className="sidebar__item" to="/cadre">
          <li>Kadra</li>
        </Link>
        <Link className="sidebar__item" to="/finances">
          <li>Finanse</li>
        </Link>
        <Link className="sidebar__item" to="/statistics">
          <li>Statystki</li>
        </Link>
        <Link className="sidebar__item" to="/rooms">
          <li>Pokoje</li>
        </Link>
        {/* <Link className="sidebar__item" to="/food">
          <li>Jedzenie</li>
        </Link> */}
        <Link className="sidebar__item" to="/weather">
          <li>Pogoda</li>
        </Link>
        {/* <Link className="sidebar__item" to="/maps">
          <li>Mapy</li>
        </Link> */}
        <Link className="sidebar__item" to="/settings">
          <li>Ustawienia</li>
        </Link>
      </ul>
    </div>
  );
};
