import "../../scss/main.scss";
import "./_cadre.scss";
import { ReactComponent as CakeIcon } from "../../images/svg/cake.svg";
import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";

type CadreProps = {};

export const Cadre: FunctionComponent<CadreProps> = (props: any) => {
  const usersMainData = useSelector((state: any) => state.usersMainData);

  return (
    <>
      <section className="cadre">
        <article className="cadre__menu">
          <h1>Kadra</h1>
        </article>
        <article className="cadre__list">
          <div className="cadre__list-item">
            <h2>Tytuł</h2>xD
          </div>
        </article>
      </section>
    </>
  );
};
