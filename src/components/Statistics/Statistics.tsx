import "../../scss/main.scss";
import "./_statistics.scss";
import React, { FunctionComponent } from "react";
import { Line, Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

type StatisticsProps = {};

export const Statistics: FunctionComponent<StatisticsProps> = (props: any) => {
  const usersMainData = useSelector((state: any) => state.usersMainData);
  const ageChartData = {
    labels: ["18", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  const setAgeChartData = () => {};

  setAgeChartData();

  return (
    <>
      <section className="statistics">
        <article className="statistics__menu">
          <h1>Statystyki</h1>
        </article>
        <article className="statistics__list">
          <Bar
            data={ageChartData}
            width={100}
            height={50}
            options={{
              maintainAspectRatio: false,
            }}
          />
          <Line data={ageChartData} />
          {/* <Line data={data} />
          <Line data={data} /> */}
        </article>
      </section>
    </>
  );
};
