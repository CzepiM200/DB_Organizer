import "./_sidebar.scss";
import React, { FunctionComponent } from "react";

type Sidebar = {};

export const Sidebar: FunctionComponent<Sidebar> = (props: any) => {
  return (
    <div className="sidebar">
      <ul className="sidebar__nav">
        <li className="sidebar__item">Uczestnicy</li>
        <li className="sidebar__item">Przydziały</li>
        <li className="sidebar__item">Finanse</li>
        <li className="sidebar__item">Inne</li>
      </ul>
    </div>
  );
};
