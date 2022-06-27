import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../../components";

const clickHandler = jest.fn();

test("render button and click on it", () => {
  const { rerender, asFragment } = render(
    <Button
      className="bg-sky-50 border-sky-500 text-sky-600 group"
      onClick={clickHandler}
    >
      <span className="sr-only">Anterior</span>
    </Button>
  );
  const button = screen.getByRole("button");

  expect(asFragment()).toMatchSnapshot();

  fireEvent.click(button);
  expect(clickHandler).toHaveBeenCalled();

  rerender(
    <Button
      className="bg-sky-50 border-sky-500 text-sky-600 group"
      onClick={clickHandler}
    >
      <span className="sr-only">Anterior</span>
    </Button>
  );
});
