import "../scss/main.scss";
import "./_mainPage.scss";
import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { StartPage } from "./StartPage/StartPage";
import { Sidebar } from "./Sidebar/Sidebar";
import { Navbar } from "./Navbar/Navbar";
import { useSelector } from "react-redux";
import { HomePage } from "./HomePage/HomePage";
type MainPageProps = {};

export const MainPage: FunctionComponent<MainPageProps> = (props: any) => {
  const dataLoaded = useSelector((state: any) => state.dataLoaded);

  return (
    <>
      <section className="main-page">
        <Router>
          {/* <article className="main-page__navbar">
            <Navbar />
          </article> */}
          <article className="main-page__main">
            <div className="main-page__sidebar">
              <Sidebar />
            </div>
            <div className="main-page__page">
              {dataLoaded ? (
                <StartPage />
              ) : (
                <Switch>
                  <Route path="/">
                    <HomePage />
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
