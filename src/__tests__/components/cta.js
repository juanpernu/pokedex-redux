import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { PlusIcon } from "@heroicons/react/solid";
import { Cta, Tooltip } from "../../components";

const clickHandler = jest.fn();

test("render cta button and click on it", () => {
  const { rerender, asFragment } = render(
    <Cta onClick={clickHandler} className="group hover:bg-blue-800 sm:bottom-8">
      <>
        <PlusIcon className="flex h-7 w-7 self-center" />
        <Tooltip text="Add pokemon" className="bottom-2.5 right-16" />
      </>
    </Cta>
  );
  const cta = screen.getByRole("button");

  expect(asFragment()).toMatchSnapshot();

  fireEvent.click(cta);
  expect(clickHandler).toHaveBeenCalled();

  rerender(
    <Cta onClick={clickHandler} className="group hover:bg-blue-800 sm:bottom-8">
      <>
        <PlusIcon className="flex h-7 w-7 self-center" />
        <Tooltip text="Add pokemon" className="bottom-2.5 right-16" />
      </>
    </Cta>
  );
});
