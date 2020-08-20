import "../../scss/main.scss";
import "./_birthdays.scss";
import { ReactComponent as CakeIcon } from "../../images/svg/cake.svg";
import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";

type BirthdaysProps = {};

export const Birthdays: FunctionComponent<BirthdaysProps> = (props: any) => {
  const usersMainData = useSelector((state: any) => state.usersMainData);

  // TODO birthdays dynamic dates
  const BirthdayList = (): Array<any> => {
    const people: Array<any> = [];

    usersMainData.forEach((person: Array<any>) => {
      if (
        (person[0].substr(2, 2) == 8 && person[0].substr(4, 2) >= 29) ||
        (person[0].substr(2, 2) == 28 && person[0].substr(4, 2) >= 29) ||
        (person[0].substr(2, 2) == 9 && person[0].substr(4, 2) <= 14) ||
        (person[0].substr(2, 2) == 29 && person[0].substr(4, 2) <= 14)
      ) {
        people.push(person);
      }
    });
    return people;
  };

  const CalculateBirthday = (pesel: string): string => {
    const day = +pesel.substr(4, 2);
    const month =
      +pesel.substr(2, 2) > 20 ? +pesel.substr(2, 2) - 20 : +pesel.substr(2, 2);

    return `${day}.${month}.${new Date().getFullYear()}`;
  };

  const BirthdayItem = () => {
    const list = BirthdayList();
    return (
      <>
        {list.map((reaticipant, index) => {
          return (
            <div key={index} className="birthdays__list-item">
              <h2>
                <CakeIcon style={{ height: "1em" }} />
                {` ${reaticipant[1]} ${reaticipant[2]}`}
              </h2>
              <h2>{CalculateBirthday(reaticipant[0])}</h2>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <section className="birthdays">
        <article className="participants__menu">
          <h1>Lista urodzina uczestników</h1>
        </article>
        <article className="participants__list">{BirthdayItem()}</article>
      </section>
    </>
  );
};
