import React from "react";
import { render } from "@testing-library/react";
import { Snackbar } from "../../components";

const onChangeHandler = jest.fn();

test("render success snackbar", () => {
  const { rerender, asFragment } = render(
    <Snackbar
      data-testid="snackbar-test-id"
      message="Pokemon successfully added"
      type="success"
      onChange={onChangeHandler}
    />
  );

  expect(asFragment()).toMatchSnapshot();

  rerender(
    <Snackbar
      message="Pokemon successfully added"
      type="success"
      onChange={onChangeHandler}
    />
  );
});

test("render error snackbar", () => {
  const { rerender, asFragment } = render(
    <Snackbar
      message="Ups! We where unable to find Pokemons"
      type="error"
      onChange={onChangeHandler}
    />
  );

  expect(asFragment()).toMatchSnapshot();

  rerender(
    <Snackbar
      message="Ups! We where unable to find Pokemons"
      type="error"
      onChange={onChangeHandler}
    />
  );
});
