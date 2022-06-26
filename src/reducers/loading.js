import { START_LOADING, FINISH_LOADING } from "../types";

const loading = (state = {}, action) => {
  const { type } = action;
  switch (type) {
    case START_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FINISH_LOADING: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};

export default loading;
