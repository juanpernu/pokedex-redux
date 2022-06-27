import React from "react";
import { render } from "@testing-library/react";
import { Pagination } from "../../components";

const clickHandler = jest.fn();

test("render the pagination and click on it", () => {
  const { rerender, asFragment } = render(
    <Pagination
      currentPage={1}
      onPageChange={clickHandler}
      limit={20}
      totalCount={100}
    />
  );

  expect(asFragment()).toMatchSnapshot();

  rerender(
    <Pagination
      currentPage={1}
      onPageChange={clickHandler}
      limit={20}
      totalCount={100}
    />
  );
});
