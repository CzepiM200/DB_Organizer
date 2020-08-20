import usersMainData from "./usersMainData";
import cadreData from "./cadreData";
import dataLoaded from "./dataLoaded";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  usersMainData: usersMainData,
  dataLoaded: dataLoaded,
  cadreData: cadreData,
});

export default allReducers;
