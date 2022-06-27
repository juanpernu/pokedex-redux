import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Item } from "../../components";

const clickHandler = jest.fn();

test("render list item and click on it", () => {
  const { rerender, asFragment } = render(
    <Item
      data={{ name: "item-test", url: "https://pokeapi.co/api/v2/pokemon/1/" }}
      onClick={clickHandler}
    />
  );
  const item = screen.getByText("item-test");

  expect(asFragment()).toMatchSnapshot();

  fireEvent.click(item);
  expect(clickHandler).toHaveBeenCalled();

  rerender(
    <Item
      data={{ name: "item-test", url: "https://pokeapi.co/api/v2/pokemon/1/" }}
      onClick={clickHandler}
    />
  );
});
