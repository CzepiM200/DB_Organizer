import usersMainData from "./usersMainData";
import cadreData from "./cadreData";
import dataLoaded from "./dataLoaded";
import datesData from "./datesData";
import financesData from "./financesData";
import roomsData from "./roomsData";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  usersMainData: usersMainData,
  dataLoaded: dataLoaded,
  cadreData: cadreData,
  datesData: datesData,
  financesData: financesData,
  roomsData: roomsData,
});

export default allReducers;
