import "../../../scss/main.scss";
import "./_addParticipant.scss";
import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";

type AddParticipantProps = {};

export const AddParticipant: FunctionComponent<AddParticipantProps> = (
  props: any
) => {
  const usersMainData = useSelector((state: any) => state.usersMainData);

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="add-participants">
        <article className="add-participants__menu">
          <h1>Dodawanie nowego obozowicza</h1>
        </article>
        <article className="add-participants__list">
          <form onSubmit={onSubmitHandler}>
            <label>
              Imię:
              <input type="text" name="name" />
            </label>
            <label>
              Nazwisko:
              <input type="text" name="surname" />
            </label>
            <label>
              Pesel:
              <input type="number" name="pesel" />
            </label>
            <label>
              Miejscowość:
              <input type="text" name="city" />
            </label>
            <label>
              Ulica i numer:
              <input type="text" name="street" />
            </label>
            <label>
              Numer telefonu:
              <input type="number" name="phoneNumber" />
            </label>
            <label>
              Email:
              <input type="email" name="email" />
            </label>
            <label>
              Uczelnia:
              <input type="text" name="university" />
            </label>
            <input className="homepage__submit" type="submit" value="Dodaj" />
          </form>
        </article>
      </section>
    </>
  );
};
