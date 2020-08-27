import "../../scss/main.scss";
import "./_settings.scss";
import React, { FunctionComponent } from "react";
import { ReactComponent as SaveIcon } from "../../images/svg/save.svg";

type SettingsProps = {
  saveData: any;
};

export const Settings: FunctionComponent<SettingsProps> = (props: any) => {
  const { saveData } = props;

  return (
    <>
      <section className="settings">
        <article className="settings__menu">
          <h1>Ustawienia</h1>
        </article>
        <article className="settings__list">
          <div className="settings__list-item">
            <h2>Zapisz dane do pamięcie przeglądarki</h2>
            <SaveIcon onClick={saveData} />
          </div>
        </article>
      </section>
    </>
  );
};
