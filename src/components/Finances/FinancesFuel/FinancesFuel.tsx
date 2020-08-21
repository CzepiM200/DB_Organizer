import "./_financesFuel.scss";
import React, { FunctionComponent } from "react";
import { ReactComponent as FuelIcon } from "../../../images/svg/fuel.svg";

type FinancesFuelProps = {
  fuel: Array<string | number>;
};

export const FinancesFuel: FunctionComponent<FinancesFuelProps> = (
  props: any
) => {
  const { fuel } = props;

  const fixDate: any = (date: any) => {
    const newDate: string =
      date.substr(0, 2) + "." + date.substr(3, 2) + "." + date.substr(6, 4);
    return newDate;
  };

  return (
    <div className="finances__list-item">
      <div className="finances__icon_fuel">
        <FuelIcon />
      </div>
      <div className="finances__list-item_left">
        <p>
          <span>Data: </span>
          {fixDate(fuel[0])}
        </p>
        <p>
          <span>Kwota: </span>
          {fuel[1]} zł
        </p>
        <p>
          <span>Osoba: </span>
          {fuel[2]}
        </p>
      </div>
      <div className="finances__list-item_right">
        <p>
          <span>Stacja: </span>
          {fuel[3]}
        </p>
        <p>
          <span>Do oddania: </span>
          {fuel[4]}
        </p>
      </div>
    </div>
  );
};
