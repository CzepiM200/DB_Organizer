import usersMainData from "./usersMainData";
import dataLoaded from "./dataLoaded";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  usersMainData: usersMainData,
  dataLoaded: dataLoaded,
});

export default allReducers;
