import "../../scss/main.scss";
import "./_settings.scss";
import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";

type SettingsProps = {};

export const Settings: FunctionComponent<SettingsProps> = (props: any) => {
  //   const cadreData = useSelector((state: any) => state.cadreData);

  return (
    <>
      <section className="settings">
        <article className="settings__menu">
          <h1>Ustawienia</h1>
        </article>
        <article className="settings__list">W trakcie pracy...</article>
      </section>
    </>
  );
};
