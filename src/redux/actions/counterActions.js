import { INCREMENT, DECREMENT, INC_BY_VAL } from "./types";

export const incrementAction = () => {
  return { type: INCREMENT };
};
export const decrementAction = () => {
  return { type: DECREMENT };
};
export const inrementByValAction = (val) => {
  return {
    type: INC_BY_VAL,
    payload: val,
  };
};
