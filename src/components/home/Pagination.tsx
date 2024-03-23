import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

type Props = {
  page: number;
  size: number;
  setPage: any;
  setSize:any;
  totalPages: number;
  totalItems: number;
};

export default function Pagination(props: Props) {
  const { page, size, setPage, setSize, totalPages, totalItems } = props;

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handleSizeChange = (e: any) => {
    setSize(parseInt(e.target.value));
    setPage(1);
  };

  return (
    <div className="flex items-center justify-between rounded-md bg-white px-4 py-3 sm:px-6">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
   
        <p className="text-xs text-gray-700">
          Showing{" "}
          <span className="font-medium">
            {Math.min((page - 1) * size + 1, totalItems)}
          </span>{" "}
          to{" "}
          <span className="font-medium">
            {Math.min(page * size, totalItems)}
          </span>{" "}
          of <span className="font-medium">{totalItems}</span> results
        </p>
     
        <div className="flex gap-x-3 items-center">
          <label htmlFor="rowsPerPage" className="text-xs text-gray-800">
            Rows per page
          </label>
          <select
            id="rowsPerPage"
            name="rowsPerPage"
            value={size}
            onChange={handleSizeChange}
            className="text-xs h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:outline-none"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
        </div>
    
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              onClick={handlePrevPage}
              disabled={page === 1}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          
            {[...Array(totalPages).keys()].map((num) => (
              <button
                key={num + 1}
                onClick={() => setPage(num + 1)}
                className={`relative ${
                  page === num + 1
                    ? "z-10 bg-blue-500 text-white rounded-md"
                    : "text-gray-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                } inline-flex items-center px-4 py-1 text-xs font-semibold`}
              >
                {num + 1}
              </button>
            ))}
            <button
              onClick={handleNextPage}
              disabled={page === totalPages}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile view */}
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={page === totalPages}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
