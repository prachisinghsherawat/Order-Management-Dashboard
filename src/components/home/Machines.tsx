
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import TextInput from "../base/TextInput";
import Pagination from "./Pagination";
import machineDetails from "../../assets/data/machineDetails.json";
import { useState } from "react";

export default function Machines() {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const totalItems = machineDetails.length;
  const totalPages = Math.ceil(totalItems / size);

  return (
    <>
      <div className="rounded-md mt-6 p-4 border border-gray-300 bg-white">
        <h1 className="text-gray-900 text-sm">Machines</h1>

        <div className="my-4 flex justify-start">
          <TextInput name="search" id="search" />
        </div>

        <div className="flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
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
                        DATE
                        <ChevronUpDownIcon className="h-4 w-4" />
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-semibold text-blue-500"
                    >
                      <div className="flex justify-between w-full">
                        ORDER ID
                        <ChevronUpDownIcon className="h-4 w-4" />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {machineDetails.map((machine) => (
                    <tr key={machine.id}>
                      <td scope="col" className="whitespace-nowrap px-3 py-3">
                        <input
                          id="comments"
                          aria-describedby="comments-description"
                          name="comments"
                          type="checkbox"
                          className="h-3 w-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
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
