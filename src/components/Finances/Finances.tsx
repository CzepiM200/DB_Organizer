import "../../scss/main.scss";
import "./_finances.scss";
import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";

type FinancesProps = {};

export const Finances: FunctionComponent<FinancesProps> = (props: any) => {
  //   const cadreData = useSelector((state: any) => state.cadreData);

  return (
    <>
      <section className="finances">
        <article className="finances__menu">
          <h1>Finanse</h1>
        </article>
        <article className="finances__list">W trakcie pracy...</article>
      </section>
    </>
  );
};
