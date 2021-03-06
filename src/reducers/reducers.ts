import usersMainData from "./usersMainData";
import cadreData from "./cadreData";
import dataLoaded from "./dataLoaded";
import datesData from "./datesData";
import financesData from "./financesData";
import roomsData from "./roomsData";
import billsData from "./billsData";
import fuelData from "./fuelData";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  usersMainData: usersMainData,
  dataLoaded: dataLoaded,
  cadreData: cadreData,
  datesData: datesData,
  financesData: financesData,
  roomsData: roomsData,
  billsData: billsData,
  fuelData: fuelData,
});

export default allReducers;
