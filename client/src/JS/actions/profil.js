import {
  BUY_COIN,
  FAIL_COIN,
  LOAD_COIN,
  SELL_COIN,
} from "../actionTypes/profil";

import axios from "axios";
import { currentUser } from "./user";

export const add_coin = (Coin, history) => async (dispatch) => {
  // dispatch({ type: LOAD_COIN });
  try {
    const options = {
      headers: { Authorization: localStorage.getItem("token") },
    };
    const result = await axios.post("/api/profile/Profile", Coin, options);
    // dispatch({ type: BUY_COIN, payload: result.data }); //{msg,coin:{}}
    dispatch(currentUser());
    history.push("/profile");
  } catch (error) {
    dispatch({ type: FAIL_COIN, payload: error.response.data.errors });
  }
};
export const delete_coin = (id, history) => async (dispatch) => {
  console.log("test");
  try {
    const options = {
      headers: { Authorization: localStorage.getItem("token") },
    };
    await axios.delete(`/api/profile/Profile/${id}`, options);
    dispatch(currentUser()); //{msg,coin:{}}
    history.push("/profile");
  } catch (error) {
    // dispatch({ type: FAIL_COIN, payload: error.response.data.errors });
    console.log(error);
  }
};
