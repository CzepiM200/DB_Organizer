import "../scss/main.scss";
import "./_mainPage.scss";
import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StartPage } from "./StartPage/StartPage";
import { Sidebar } from "./Sidebar/Sidebar";
import { Navbar } from "./Navbar/Navbar";
import { Participants } from "./Participants/Participants";
import { Birthdays } from "./Birthdays/Birthdays";
import { useSelector } from "react-redux";
import { HomePage } from "./HomePage/HomePage";
import { Cadre } from "./Cadre/Cadre";
import { Finances } from "./Finances/Finances";
import { Statistics } from "./Statistics/Statistics";
import { Rooms } from "./Rooms/Rooms";
import { Food } from "./Food/Food";
import { Weather } from "./Weather/Weather";
import { Maps } from "./Maps/Maps";
import { Settings } from "./Settings/Settings";

type MainPageProps = {};

export const MainPage: FunctionComponent<MainPageProps> = (props: any) => {
  const dataLoaded = useSelector((state: any) => state.dataLoaded);
  const usersMainData = useSelector((state: any) => state.usersMainData);
  const cadreData = useSelector((state: any) => state.cadreData);
  const financesData = useSelector((state: any) => state.financesData);
  const roomsData = useSelector((state: any) => state.roomsData);
  const billsData = useSelector((state: any) => state.billsData);
  const fuelData = useSelector((state: any) => state.fuelData);
  const datesData = useSelector((state: any) => state.datesData);

  const saveData = () => {
    if (dataLoaded === true) {
      const allData = {
        usersMainData,
        cadreData,
        financesData,
        roomsData,
        billsData,
        fuelData,
        datesData,
      };

      localStorage.setItem("dataLoaded", JSON.stringify(dataLoaded));
      localStorage.setItem("allData", JSON.stringify(allData));
    }
  };

  return (
    <>
      <section className="main-page">
        <Router>
          <article className="main-page__main">
            <div className="main-page__sidebar">
              <Sidebar />
            </div>
            <div className="main-page__page">
              {!dataLoaded ? (
                <StartPage saveData={saveData} />
              ) : (
                <Switch>
                  <Route exact path="/">
                    <HomePage />
                  </Route>
                  <Route path="/participants">
                    <Participants />
                  </Route>
                  {/* <Route exact path="/participants/birthdays">
                    <Birthdays />
                  </Route> */}
                  <Route exact path="/cadre">
                    <Cadre />
                  </Route>
                  <Route exact path="/finances">
                    <Finances />
                  </Route>
                  <Route path="/statistics">
                    <Statistics />
                  </Route>
                  <Route exact path="/rooms">
                    <Rooms />
                  </Route>
                  <Route exact path="/food">
                    <Food />
                  </Route>
                  <Route exact path="/weather">
                    <Weather />
                  </Route>
                  <Route exact path="/maps">
                    <Maps />
                  </Route>
                  <Route exact path="/settings">
                    <Settings saveData={saveData} />
                  </Route>
                </Switch>
              )}
            </div>
          </article>
        </Router>
      </section>
    </>
  );
};
