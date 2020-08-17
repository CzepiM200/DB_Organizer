import usersMainData from "./usersMainData";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  mainData: usersMainData,
});

export default allReducers;
