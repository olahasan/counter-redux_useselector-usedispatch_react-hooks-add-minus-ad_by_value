import { DECREMENT, INC_BY_VAL, INCREMENT } from "../actions/types";

const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case INC_BY_VAL:
      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
};

export default counterReducer;
