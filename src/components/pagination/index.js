import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { usePagination, DOTS } from "../../hooks";

export const Pagination = ({
  currentPage = 1,
  limit,
  totalCount,
  siblingCount = 1,
  onPageChange,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    limit,
  });

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange && paginationRange[paginationRange.length - 1];
  const selected =
    "z-10 bg-sky-50 border-sky-500 text-sky-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer";
  const disabled =
    "relative inline-flex items-center px-2 py-2 rounded-l-md border border-sky-300 bg-sky-50 text-sm font-medium text-sky-500 hover:bg-sky-50 opacity-50 cursor-not-allowed";

  const renderPills = () =>
    paginationRange &&
    paginationRange.map((pageNumber, i) => {
      if (pageNumber === DOTS) {
        return (
          <span
            key={i}
            className="relative inline-flex items-center px-4 py-2 border border-sky-300 bg-sky-50 text-sm font-medium text-sky-700"
          >
            &#8230;
          </span>
        );
      }
      return (
        <li
          key={i}
          className={
            pageNumber === currentPage
              ? selected
              : "bg-sky-50 border-sky-300 text-sky-500 hover:bg-sky-100 relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer"
          }
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </li>
      );
    });

  // If there are less than 2 times in pagination
  // range we should not render the component.
  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  return (
    <nav
      className="relative z-0 flex rounded-md -space-x-px mt-4 justify-center"
      aria-label="Pagination"
      label="pagination"
    >
      <p
        onClick={onPrevious}
        className={
          currentPage === 1
            ? disabled
            : "relative inline-flex items-center px-2 py-2 rounded-l-md border border-sky-300 bg-sky-50 text-sm font-medium text-sky-500 hover:bg-sky-50 cursor-pointer"
        }
      >
        <ChevronLeftIcon className="h-5 w-5 text-sky-500" />
        <span className="sr-only">Anterior</span>
      </p>
      {renderPills()}
      <p
        onClick={onNext}
        className={
          currentPage === lastPage
            ? disabled
            : "relative inline-flex items-center px-2 py-2 rounded-r-md border border-sky-300 bg-sky-50 text-sm font-medium text-sky-500 hover:bg-sky-50 cursor-pointer"
        }
      >
        <ChevronRightIcon className="h-5 w-5 text-sky-500" />
        <span className="sr-only">Siguiente</span>
      </p>
    </nav>
  );
};
