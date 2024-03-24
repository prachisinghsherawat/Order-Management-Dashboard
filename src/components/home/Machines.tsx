
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import TextInput from "../base/TextInput";
import Pagination from "./Pagination";
import machineDetails from "../../assets/data/machineDetails.json";
import { useEffect, useState } from "react";
import useFilterMachineStore from "@/zustand/FilterValueMachine";

export default function Machines() {

  const { setFilterMachineValue } = useFilterMachineStore();

  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [checked, setChecked] = useState<any>([])
  const [displayedItems, setDisplayItems] = useState(machineDetails);
  const [searchMachines, setSearchMachines] = useState('')
  const totalItems = machineDetails.length;
  const totalPages = Math.ceil(totalItems / size);

  useEffect(() => {
    if (searchMachines) {
      let filteredItems = displayedItems.filter((items: any) =>
        items.machineName.toLowerCase().includes(searchMachines.toLowerCase())
      );
      setDisplayItems(filteredItems);
    } else {
      const startIndex = (page - 1) * size;
      const endIndex = Math.min(startIndex + size - 1, totalItems - 1);
      const updatedItems = machineDetails.slice(startIndex, endIndex + 1);
      setDisplayItems(updatedItems);
    }
  }, [searchMachines, page, size]);

  return (
    <>
      <div className="rounded-md mt-6 p-4 border border-gray-300 bg-white">
        <h1 className="text-gray-900 text-sm">Machines</h1>

        <div className="my-4 flex justify-start">
          <TextInput
            placeholder="search by machine names"
            onChange={(e: any) => setSearchMachines(e.target.value)}
            name="search"
            id="search"
          />
        </div>

        <div className="flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="flex gap-3 flex-wrap">
                {checked &&
                  checked.map((machine: any, i:number) => (
                    <div className="w-fit flex items-center justify-between border-2 border-gray-200 rounded-lg p-2">
                      <p className="text-gray-800 text-xs">
                        {machine.machineName}
                      </p>
                      <p onClick={() => {
                        let filteredList = checked.filter((_:any,index:number) => index!== i)
                        setChecked(filteredList)
                      }} className="ml-2 text-gray-400 text-sm cursor-pointer">x</p>
                    </div>
                  ))}
              </div>
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th scope="col" className="px-3 py-3 text-left">
                      <input
                        id="comments"
                        aria-describedby="comments-description"
                        name="comments"
                        type="checkbox"
                        className="h-3 w-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-semibold text-blue-500"
                    >
                      <div className="flex justify-between w-full">
                        MACHINE NAME
                        <ChevronUpDownIcon className="h-4 w-4" />
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-semibold text-blue-500"
                    >
                      <div className="flex justify-between w-full">
                        ADDRESS
                        <ChevronUpDownIcon className="h-4 w-4" />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {displayedItems.map((machine: any) => (
                    <tr key={machine.id}>
                      <td scope="col" className="whitespace-nowrap px-3 py-3">
                        <input
                          onClick={() => {
                            setChecked([...checked, machine]);
                          }}
                          id="comments"
                          aria-describedby="comments-description"
                          name="comments"
                          type="checkbox"
                          className="h-3 w-3 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </td>

                      <div className="flex items-center">
                        <div className="h-6 w-6 flex-shrink-0">
                          <img
                            className="h-6 w-6 rounded-full"
                            src="https://plus.unsplash.com/premium_photo-1667667720425-6972aff75f6b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                          />
                        </div>
                        <div className="ml-2">
                          <div className="whitespace-nowrap px-3 py-3 text-xs text-gray-900">
                            {machine.machineName}
                          </div>
                        </div>
                      </div>
                      <td className="whitespace-nowrap px-3 py-3 text-xs text-gray-900">
                        {machine.machineAddress}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <Pagination
          page={page}
          size={size}
          setPage={setPage}
          setSize={setSize}
          totalPages={totalPages}
          totalItems={totalItems}
        />
      </div>
    </>
  );
}
