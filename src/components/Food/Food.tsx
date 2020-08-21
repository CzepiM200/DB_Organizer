import "../../scss/main.scss";
import "./_food.scss";
import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";

type FoodProps = {};

export const Food: FunctionComponent<FoodProps> = (props: any) => {
  //   const cadreData = useSelector((state: any) => state.cadreData);

  return (
    <>
      <section className="food">
        <article className="food__menu">
          <h1>Jedzenie</h1>
        </article>
        <article className="food__list">W trakcie pracy...</article>
      </section>
    </>
  );
};
