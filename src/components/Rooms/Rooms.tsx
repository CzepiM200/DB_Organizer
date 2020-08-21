import "../../scss/main.scss";
import "./_rooms.scss";
import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";

type RoomsProps = {};

export const Rooms: FunctionComponent<RoomsProps> = (props: any) => {
  //   const cadreData = useSelector((state: any) => state.cadreData);

  return (
    <>
      <section className="rooms">
        <article className="rooms__menu">
          <h1>Pokoje</h1>
        </article>
        <article className="rooms__list">W trakcie pracy...</article>
      </section>
    </>
  );
};
