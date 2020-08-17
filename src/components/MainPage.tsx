import "../scss/main.scss";
import "./_mainPage.scss";
import React, { FunctionComponent } from "react";
import { HomePage } from "./HomaPage/HomePage";
import { Sidebar } from "./Sidebar/Sidebar";
import { Navbar } from "./Navbar/Navbar";

type MainPageProps = {};

export const MainPage: FunctionComponent<MainPageProps> = (props: any) => {
  return (
    <>
      <section className="main-page">
        <article className="main-page__navbar">
          <Navbar />
        </article>
        <article className="main-page__main">
          <div className="main-page__sidebar">
            <Sidebar />
          </div>
          <div className="main-page__page">
            <HomePage />
          </div>
        </article>
      </section>
    </>
  );
};
