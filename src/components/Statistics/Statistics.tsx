import "../../scss/main.scss";
import "./_statistics.scss";
import React, { FunctionComponent } from "react";
import { Line, Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { AgeFromDate } from "age-calculator";
import { ReactComponent as CakeIcon } from "../../images/svg/cake.svg";
import { ReactComponent as ChartIcon } from "../../images/svg/chart.svg";
import { ReactComponent as ChartPieIcon } from "../../images/svg/chartPie.svg";
import { Switch, Route, Link } from "react-router-dom";

type StatisticsProps = {};

export const Statistics: FunctionComponent<StatisticsProps> = (props: any) => {
  const usersMainData = useSelector((state: any) => state.usersMainData);
  const financesDate = useSelector((state: any) => state.financesData);
  const billsDate = useSelector((state: any) => state.billsData);
  const fuelDate = useSelector((state: any) => state.fuelData);

  const ageChartData = {
    labels: ["18", "19", "20", "21", "22", "23", "24", "25+"],
    datasets: [
      {
        label: "Wiek uczestników",
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
        data: [0, 0, 0, 0, 0, 0, 0, 0],
      },
    ],
  };
  const ageChartOptions = {
    legend: {
      labels: {
        fontColor: "white",
        fontSize: 18,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "white",
            fontSize: 14,
            stepSize: 5,
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            fontColor: "white",
            fontSize: 14,
            stepSize: 1,
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const setAgeChartData = () => {
    usersMainData.forEach((element: any, index: number) => {
      if (index !== 0) {
        let year, month, day, age;
        if (+element[0].substr(2, 2) < 20) {
          year = +element[0].substr(0, 2) + 1900;
          month = +element[0].substr(2, 2);
          day = +element[0].substr(4, 2);
        } else {
          year = +element[0].substr(0, 2) + 2000;
          month = +element[0].substr(2, 2) - 20;
          day = +element[0].substr(4, 2);
        }
        let ageFromDate = new AgeFromDate(new Date(year, month, day)).age;
        console.log(year, month, day);
        console.log(ageFromDate);
        ageChartData.datasets[0].data[0] = 5;
        if (ageFromDate === 18) {
          ageChartData.datasets[0].data[0]++;
        } else if (ageFromDate === 19) {
          ageChartData.datasets[0].data[1]++;
        } else if (ageFromDate === 20) {
          ageChartData.datasets[0].data[2]++;
        } else if (ageFromDate === 21) {
          ageChartData.datasets[0].data[3]++;
        } else if (ageFromDate === 22) {
          ageChartData.datasets[0].data[4]++;
        } else if (ageFromDate === 23) {
          ageChartData.datasets[0].data[5]++;
        } else if (ageFromDate === 24) {
          ageChartData.datasets[0].data[6]++;
        } else ageChartData.datasets[0].data[7]++;
      }
    });
  };

  let income = usersMainData.reduce(
    (acc: number, cur: Array<any>, index: number) => {
      return index !== 0 ? acc + Number(cur[14]) : 0;
    },
    0
  );
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
  const moneyChartData = {
    labels: ["Wpłacone zaliczki", "Paliwo", "Faktury"],
    datasets: [
      {
        label: "Przychowy i wydatki",
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
        data: [income, billsExpences, fuelExpences],
      },
    ],
  };
  const moneyChartOptions = {
    legend: {
      labels: {
        fontColor: "white",
        fontSize: 18,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "white",
            fontSize: 14,
            stepSize: 50,
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            fontColor: "white",
            fontSize: 14,
            stepSize: 1,
            beginAtZero: true,
          },
        },
      ],
    },
  };

  setAgeChartData();

  return (
    <>
      <section className="statistics">
        <article className="statistics__menu">
          <h1>Statystyki</h1>
          <div>
            <Link className="statistics__item" to="/statistics/age">
              <CakeIcon />
            </Link>
            <Link className="statistics__item" to="/statistics/money">
              <ChartIcon />
            </Link>
            <Link className="statistics__item" to="/statistics/space">
              <ChartPieIcon />
            </Link>
          </div>
        </article>
        <article className="statistics__list">
          <Switch>
            <Route exact path="/statistics/age">
              <Bar data={ageChartData} height={120} options={ageChartOptions} />
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/statistics/money">
              <Bar
                data={moneyChartData}
                height={120}
                options={moneyChartOptions}
              />
            </Route>
          </Switch>
        </article>
      </section>
    </>
  );
};
