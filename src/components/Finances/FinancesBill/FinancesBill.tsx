import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";

type FinancesBillProps = {
  bill: Array<string | number>;
};

export const FinancesBill: FunctionComponent<FinancesBillProps> = (
  props: any
) => {
  const { bill } = props;

  const fixDate: any = (date: any) => {
    const newDate: string =
      date.substr(0, 2) + "." + date.substr(3, 2) + "." + date.substr(6, 4);
    return newDate;
  };

  return (
    <div className="finances__list-item">
      <div className="finances__list-item_left">
        <p>
          <span>Data: </span>
          {fixDate(bill[0])}
        </p>
        <p>
          <span>Kwota: </span>
          {bill[1]} zł
        </p>
        <p>
          <span>Kategoria: </span>
          {bill[2]}
        </p>
        <p>
          <span>Srzedawca: </span>
          {bill[3]}
        </p>
      </div>
      <div className="finances__list-item_right">
        <p>
          <span>Karta/Gotówka: </span>
          {bill[4]}
        </p>
        <p>
          <span>Paragon/Faktura: </span>
          {bill[5]}
        </p>
        <p>
          <span>Informacje dodatkowe: </span>
          {bill[6]}
        </p>
      </div>
    </div>
  );
};
