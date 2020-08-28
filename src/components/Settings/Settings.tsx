import "../../scss/main.scss";
import "./_settings.scss";
import React, { FunctionComponent } from "react";
import { ReactComponent as SaveIcon } from "../../images/svg/save.svg";
import { ReactComponent as TrashIcon } from "../../images/svg/trash.svg";

type SettingsProps = {
  saveData: any;
};

export const Settings: FunctionComponent<SettingsProps> = (props: any) => {
  const { saveData } = props;

  const removeData = (e: any) => {
    e.preventDefault();
    localStorage.setItem("dataLoaded", "false");
    localStorage.setItem("allData", "");
    alert("Wszsytkie dane w pamięcie przeglądarki zostały usunięte pomyślnie");
  };

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
          <div className="settings__list-item">
            <h2>Usuwanie dane z pamięcie przeglądarki</h2>
            <TrashIcon onClick={removeData} />
          </div>
        </article>
      </section>
    </>
  );
};
