import "../../scss/main.scss";
import "./_maps.scss";
import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";

type MapsProps = {};

export const Maps: FunctionComponent<MapsProps> = (props: any) => {
  //   const cadreData = useSelector((state: any) => state.cadreData);

  return (
    <>
      <section className="maps">
        <article className="maps__menu">
          <h1>Mapy</h1>
        </article>
        <article className="maps__list">W trakcie pracy...</article>
      </section>
    </>
  );
};
