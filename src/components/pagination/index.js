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
    "z-10 bg-indigo-50 border-red-500 text-red-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer";
  const disabled =
    "relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 opacity-25 cursor-not-allowed";

  const renderPills = () =>
    paginationRange &&
    paginationRange.map((pageNumber, i) => {
      if (pageNumber === DOTS) {
        return (
          <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
            &#8230;
          </span>
        );
      }
      // Render our Page Pills
      return (
        <li
          className={
            pageNumber === currentPage
              ? selected
              : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer"
          }
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </li>
      );
    });

  // If there are less than 2 times in pagination range
  // we should not render the component
  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  return (
    <nav
      class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
      aria-label="Pagination"
    >
      <p
        onClick={onPrevious}
        className={
          currentPage === 1
            ? disabled
            : "relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer"
        }
      >
        <ChevronLeftIcon className="h-5 w-5 text-red-500" />
        <span class="sr-only">Anterior</span>
      </p>
      {renderPills()}
      <p
        onClick={onNext}
        className={
          currentPage === lastPage
            ? disabled
            : "relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer"
        }
      >
        <ChevronRightIcon className="h-5 w-5 text-red-500" />
        <span class="sr-only">Siguiente</span>
      </p>
    </nav>
  );
};
