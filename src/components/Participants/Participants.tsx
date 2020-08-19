import "../../scss/main.scss";
import "./_participants.scss";
import { ReactComponent as PlusIcon } from "../../images/svg/plus.svg";
import { ReactComponent as CakeIcon } from "../../images/svg/cake.svg";
import React, { FunctionComponent } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

type ParticipantsProps = {};

export const Participants: FunctionComponent<ParticipantsProps> = (
  props: any
) => {
  const usersMainData = useSelector((state: any) => state.usersMainData);
  const ListItem = (data: any, index: number) => {
    return (
      <div key={index} className="participants__list-item">
        <h2>{`${data[1]} ${data[2]}`}</h2>
        <div className="participants__line"></div>
        <div className="participants__list-data">
          <div className="participants__data">
            <p>
              <span>PESEL: </span>
              {data[0]}
            </p>
            <p>
              <span>Adres: </span>
              {`${data[4]} ${data[3]}`}
            </p>
            <p>
              <span>E-mail: </span>
              {`${data[8]}`}
            </p>
            <p>
              <span>Telefon: </span>
              {`${data[7]}`}
            </p>
          </div>
          <div className="participants__data">
            <p>
              <span>Uczelnia: </span>
              {`${data[10]}`}
            </p>
            <p>
              <span>Wydział: </span>
              {`${data[11]}`}
            </p>
            <p>
              <span>Kierunek: </span>
              {`${data[12]}`}
            </p>
            <p>
              <span>Rok studiów: </span>
              {`${data[13]}`}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const ParticipantsList = () => {
    return (
      <div>
        {usersMainData.map(
          (participant: any, index: number) =>
            index !== 0 && ListItem(participant, index)
        )}
      </div>
    );
  };

  return (
    <>
      <section className="participants">
        <article className="participants__menu">
          <h1>Lista uczestników</h1>
          <div className="participants__icons">
            <CakeIcon />
            <PlusIcon />
          </div>
        </article>
        <article className="participants__list">{ParticipantsList()}</article>
      </section>
    </>
  );
};
