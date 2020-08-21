import "../../scss/main.scss";
import "./_statistics.scss";
import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";

type StatisticsProps = {};

export const Statistics: FunctionComponent<StatisticsProps> = (props: any) => {
  //   const cadreData = useSelector((state: any) => state.cadreData);

  return (
    <>
      <section className="statistics">
        <article className="statistics__menu">
          <h1>Statystyki</h1>
        </article>
        <article className="statistics__list">W trakcie pracy...</article>
      </section>
    </>
  );
};
