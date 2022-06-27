import reducer from "../../reducers/loading";
import { START_LOADING, FINISH_LOADING } from "../../types";

describe("loading reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  test("should handle START_LOADING", () => {
    const action = {
      type: START_LOADING,
    };
    expect(reducer({}, action)).toEqual({ isLoading: true });
  });

  test("should handle FINISH_LOADING", () => {
    const action = {
      type: FINISH_LOADING,
    };
    expect(reducer({}, action)).toEqual({ isLoading: false });
  });
});
