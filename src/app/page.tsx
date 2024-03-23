"use client"

import EnhancedTable from "@/components/home/Table";
import { DocumentTextIcon, MagnifyingGlassIcon, SquaresPlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import FilterModal from "@/components/home/FilterModal";
import Filters from "@/components/home/Filters";
import TextInput from "@/components/base/TextInput";


export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchMachines, setSearchMachines] = useState('')

  return (
    <>
      <div className="flex flex-1 py-8 justify-between items-center">
        <div className="w-full max-w-lg lg:max-w-xs">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <TextInput
            onChange={(e: any) => setSearchMachines(e.target.value)}
            placeholder="Search by machine names"
            name="search"
            id="search"
          />
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
        {/* left part- table */}
        <div className="w-4/6">
          <EnhancedTable searchMachines={searchMachines} />
        </div>

        {/* right part- filters  */}
        <div className="w-2/6">
          <Filters open={isModalOpen} setOpen={setIsModalOpen} />
          <FilterModal open={isModalOpen} setOpen={setIsModalOpen} />
        </div>
      </div>
    </>
  );
}
