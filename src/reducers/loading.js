import {
  START_LOADING,
  FINISH_LOADING,
  SET_SNACKBAR,
  RESET_SNACKBAR,
} from "../types";

const init = {
  snackbarHandler: {
    showSnackbar: false,
    snackbarMessage: "",
    snackbarType: "",
  },
  isLoading: false,
};

const loading = (state = init, action) => {
  const { type, payload } = action;
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
    case SET_SNACKBAR: {
      const { snackbarHandler } = payload;
      return {
        ...state,
        snackbarHandler,
      };
    }
    case RESET_SNACKBAR: {
      return {
        ...state,
        snackbarHandler: {
          showSnackbar: false,
          snackbarMessage: "",
          snackbarType: "",
        },
      };
    }
    default:
      return state;
  }
};

export default loading;
