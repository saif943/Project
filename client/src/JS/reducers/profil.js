import {
  BUY_COIN,
  SELL_COIN,
  FAIL_COIN,
  LOAD_COIN,
} from "../actionTypes/profil";

const X = {
  coin: null,
  loadCoin: false,
  errors: [],
};
const coinReducer = (state = X, { type, payload }) => {
  switch (type) {
    case LOAD_COIN:
      return { ...state, loadCoin: true };
    case BUY_COIN:
      return {
        ...state,
        loadCoin: false,

        coin: payload.coin,
        errors: [],
      };
    case SELL_COIN:
      return {
        ...state,
        loadCoin: false,
        coin: payload.coin,
        errors: [],
      };
    default:
      return state;
  }
};
export default coinReducer;
