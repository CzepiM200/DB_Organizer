import "../../../scss/main.scss";
import "./_addParticipant.scss";
import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { setMainData } from "../../../actions/index";
import { useDispatch } from "react-redux";

type AddParticipantProps = {};

export const AddParticipant: FunctionComponent<AddParticipantProps> = (
  props: any
) => {
  const usersMainData = useSelector((state: any) => state.usersMainData);
  const dispatch = useDispatch();

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    const newParticipant = [
      e.target.pesel.value,
      e.target.surname.value,
      e.target.name.value,
      e.target.street.value,
      e.target.city.value,
      "Kod pocztowy",
      "Poczta",
      e.target.phoneNumber.value,
      e.target.email.value,
      "Most",
      e.target.university.value,
      e.target.department.value,
      e.target.subject.value,
      e.target.year.value,
      "Płatność",
      "Data wpłay",
      "Data utworzennia",
      "Data potwierdzenia",
      "Kolor koszuki",
      "Rozmiar koszulki",
      "Transport",
      "Informacje o obozie",
      "Jedzie na obóz po raz",
      "Liceum",
    ];
    console.log(newParticipant);
    const newUsersMainData = [...usersMainData, newParticipant];
    dispatch(setMainData(newUsersMainData));
    alert("Pomyślnie dodano nowego użytkownika");
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
            <label>
              Wydział:
              <input type="text" name="department" />
            </label>
            <label>
              Kierunek:
              <input type="text" name="subject" />
            </label>
            <label>
              Rok studiów:
              <input type="number" name="year" />
            </label>
            <input className="homepage__submit" type="submit" value="Dodaj" />
          </form>
        </article>
      </section>
    </>
  );
};
