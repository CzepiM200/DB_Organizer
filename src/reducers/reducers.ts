import usersMainData from "./usersMainData";
import cadreData from "./cadreData";
import dataLoaded from "./dataLoaded";
import datesData from "./datesData";
import financesData from "./financesData";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  usersMainData: usersMainData,
  dataLoaded: dataLoaded,
  cadreData: cadreData,
  datesData: datesData,
  financesData: financesData,
});

export default allReducers;
