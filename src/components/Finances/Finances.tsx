import "../../scss/main.scss";
import "./_finances.scss";
import { FinancesBill } from "./FinancesBill/FinancesBill";
import { FinancesFuel } from "./FinancesFuel/FinancesFuel";
import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";

type FinancesProps = {};

export const Finances: FunctionComponent<FinancesProps> = (props: any) => {
  const financesDate = useSelector((state: any) => state.financesData);
  const billsDate = useSelector((state: any) => state.billsData);
  const fuelDate = useSelector((state: any) => state.fuelData);

  let income = 0;
  let billsExpences = billsDate.reduce(
    (acc: number, cur: Array<any>, index: number) => {
      return index !== 0 ? acc + Number(cur[1]) : 0;
    },
    0
  );
  let fuelExpences = fuelDate.reduce(
    (acc: number, cur: Array<any>, index: number) => {
      return index !== 0 ? acc + Number(cur[1]) : 0;
    },
    0
  );
  let expences = billsExpences + fuelExpences;
  let balance = income - expences;

  return (
    <>
      <section className="finances">
        <article className="finances__menu">
          <h1>Finanse</h1>
        </article>
        <article className="finances__list">
          <div className="finances__list-item finances__list-item_main">
            <div className="finances__income">
              <h2>Przychody:</h2>
              <p>
                <span>Pełna cena: </span>
                {financesDate[1][0]} zł
              </p>
              <p>
                <span>Zaliczka: </span>
                {financesDate[1][1]} zł
              </p>
              <p>
                <span>Łącznie: </span>
                {income} zł
              </p>
            </div>
            <div className="finances__expences">
              <h2>Wydatki:</h2>
              <p>
                <span>Podatek obozowy: </span>
                {financesDate[1][2]} zł
              </p>
              <p>
                <span>Osobodoba: </span>
                {financesDate[1][3]} zł/dzień
              </p>
              <p>
                <span>Faktury: </span>
                {billsExpences} zł
              </p>
              <p>
                <span>Benzyna: </span>
                {fuelExpences} zł
              </p>
              <p>
                <span>Łącznie: </span>
                {expences} zł
              </p>
            </div>
          </div>
          {billsDate.map(
            (bill: Array<number | string>, index: number) =>
              index !== 0 && <FinancesBill bill={bill} />
          )}
          {fuelDate.map(
            (fuel: Array<number | string>, index: number) =>
              index !== 0 && <FinancesFuel fuel={fuel} />
          )}
        </article>
      </section>
    </>
  );
};
