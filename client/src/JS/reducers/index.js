import { combineReducers } from "redux";
import userReducer from "./user";
import coinReducer from "./profil";

const rootReducer = combineReducers({ userReducer, coinReducer });
export default rootReducer;
