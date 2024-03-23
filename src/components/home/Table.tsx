import { useEffect, useState } from 'react';
import machineDetails from '../../assets/data/machineDetails.json'
import Pagination from './Pagination';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';

interface Machine {
  date: string
  orderId: string
  machineName: string
  customerName: string
  contactNumber: number
  totalAmount: number
  status: string
  machineAddress: string
}

export default function Table({ searchMachines }:any) {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [displayedItems, setDisplayItems] = useState(machineDetails);

  const totalItems = machineDetails.length;
  const totalPages = Math.ceil(totalItems / size);

  useEffect(() => {
    if (searchMachines) {
      let filteredItems = displayedItems.filter(
        (items: any) => items.machineName.toLowerCase().includes(searchMachines.toLowerCase())
      );
      setDisplayItems(filteredItems);
    } else {
      const startIndex = (page - 1) * size;
      const endIndex = Math.min(startIndex + size - 1, totalItems - 1);
      const updatedItems = machineDetails.slice(startIndex, endIndex + 1);
      setDisplayItems(updatedItems);
    }
  }, [searchMachines, page, size]);

  const handleSorting = (field:any) => {

    if(field==="date"){
      const sortByDate = displayedItems.sort()
      console.log(sortByDate)
    }

  }

  return (
    <>
      <div className="rounded-md px-4 bg-white ">
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full">
                <thead>
                  <tr className="align-top">
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-xs font-semibold text-blue-500 sm:pl-0"
                    >
                      S.NO.
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-xs font-semibold text-blue-500"
                    >
                      <div className="flex justify-between w-full">
                        DATE
                        <ChevronUpDownIcon
                          onClick={() => handleSorting("date")}
                          className="h-4 w-4 cursor-pointer"
                        />
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-xs font-semibold text-blue-500"
                    >
                      <div className="flex justify-between w-full">
                        ORDER ID
                        <ChevronUpDownIcon
                          onClick={() => handleSorting("orderId")}
                          className="h-4 w-4"
                        />
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-xs font-semibold text-blue-500"
                    >
                      MACHINE NAME
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-xs font-semibold text-blue-500"
                    >
                      CUSTOMER NAME
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-xs font-semibold text-blue-500"
                    >
                      CONTACT NUMBER
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-xs font-semibold text-blue-500"
                    >
                      <div className="flex justify-between w-full">
                        TOTAL AMOUNT
                        <ChevronUpDownIcon
                          onClick={() => handleSorting("totalAmount")}
                          className="h-4 w-4"
                        />
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-xs font-semibold text-blue-500"
                    >
                      STATUS
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {displayedItems.map((machine: Machine, index: number) => (
                    <tr key={machine.orderId} className="align-top">
                      <td className="whitespace-nowrap px-3 py-5 text-xs text-gray-500">
                        {index + 1}.
                      </td>

                      <td className="whitespace-nowrap px-3 py-5 text-xs text-gray-500">
                        <div className="text-gray-900">
                          {new Date(machine.date).toLocaleDateString("en-IN")}{" "}
                        </div>
                        <div className="mt-1 text-gray-500">
                          {new Date(machine.date).toLocaleTimeString([], {
                            hour12: false
                          })}{" "}
                        </div>
                      </td>

                      <td className="whitespace-nowrap px-3 py-5 text-xs text-gray-900">
                        {machine.orderId}
                      </td>

                      <td className="whitespace-nowrap px-3 py-5 text-xs text-gray-500">
                        <div className="text-gray-900">
                          {machine.machineName.split(" (")[0]}
                        </div>
                        <div className="mt-1 text-gray-500">
                          {"(" + machine.machineName.split(" (")[1]}
                        </div>
                      </td>

                      <td className="whitespace-nowrap px-3 py-5 text-xs text-gray-900">
                        {machine.customerName}
                      </td>

                      <td className="whitespace-nowrap px-3 py-5 text-xs text-gray-900">
                        {machine.contactNumber}
                      </td>

                      <td className="whitespace-nowrap px-3 py-5 text-xs text-gray-900">
                        ₹ {machine.totalAmount}
                      </td>

                      <td className="whitespace-nowrap px-3 py-5 text-xs text-gray-500">
                        <span
                          className={`inline-flex items-center rounded-xl px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                            machine.status === "success"
                              ? "ring-green-500 text-green-500"
                              : machine.status === "failure"
                              ? "ring-red-500 text-red-500"
                              : machine.status === "pending"
                              ? "ring-yellow-500 text-yellow-500"
                              : machine.status === "sent"
                              ? "ring-orange-500 text-orange-500"
                              : machine.status === "refund initiated"
                              ? "ring-indigo-500 text-indigo-500"
                              : "ring-purple-500 text-purple-500"
                          }`}
                        >
                          {machine.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="my-6">
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
