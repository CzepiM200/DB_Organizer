import "../../scss/main.scss";
import "./_cadre.scss";
import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";

type CadreProps = {};

export const Cadre: FunctionComponent<CadreProps> = (props: any) => {
  const cadreData = useSelector((state: any) => state.cadreData);

  return (
    <>
      <section className="cadre">
        <article className="cadre__menu">
          <h1>Kadra</h1>
        </article>
        <article className="cadre__list">
          {cadreData.map((element: any, index: any) => {
            return (
              <div className="cadre__list-item">
                <h2>
                  {element[0]} {element[1]}
                </h2>
                <h2>{element[3]}</h2>
              </div>
            );
          })}
        </article>
      </section>
    </>
  );
};
