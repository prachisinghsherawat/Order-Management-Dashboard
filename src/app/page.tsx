"use client"

import Navbar from "@/components/Navbar";
import EnhancedTable from "@/components/home/Table";
import { DocumentTextIcon, MagnifyingGlassIcon, SquaresPlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import FilterModal from '@/components/FilterModal';


export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-1 py-8 justify-between items-center">
        <div className="w-full max-w-lg lg:max-w-xs">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <input
              id="search"
              name="search"
              className="block w-full rounded-md border-0 bg-white py-2 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-xs sm:leading-6"
              placeholder="Search"
              type="search"
            />
          </div>
        </div>

        <div className="flex space-x-4 items-center">
          <SquaresPlusIcon
            className="h-9 w-9 p-1.5 rounded-lg border bg-white border-gray-300 text-gray-800"
            aria-hidden="true"
          />
          <DocumentTextIcon
            className="h-9 w-9 p-1.5 rounded-lg border bg-white border-gray-300 text-gray-800"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="flex space-x-8 justify-between">
        <div className="w-2/3">
          <EnhancedTable />
        </div>

        <div className="rounded-lg w-1/3 bg-white">
          <button
            className="bg-gray-900"
            onClick={() => setIsModalOpen(true)}
          >
            Open
          </button>

          <FilterModal open={isModalOpen} setOpen={setIsModalOpen} />
        </div>
      </div>
    </>
  );
}
