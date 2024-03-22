// 'use client'

import { useState } from 'react';
import machineDetails from '../../assets/data/machineDetails.json'
import Pagination from './Pagination';

interface Machine {
  date: string
  orderId: string
  machineName: string
  customerName: string
  contactNumber: number
  totalAmount: number
  status: string
}

export default function Table() {

  const [page,setPage] = useState(1)
  const [size, setSize] = useState(10);

  const totalItems = machineDetails.length;
  const totalPages = Math.ceil(totalItems / size);
  const startIndex = (page - 1) * size;
  const endIndex = Math.min(startIndex + size - 1, totalItems - 1);
  const displayedItems = machineDetails.slice(startIndex, endIndex + 1);

  return (
    <div className="rounded px-4 sm:px-6 lg:px-8 bg-white ">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    S.NO.
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    DATE
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    ORDER ID
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    MACHINE NAME
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    CUSTOMER NAME
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    CONTACT NUMBER
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    TOTAL AMOUNT
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    STATUS
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {displayedItems.map((machine: Machine, index: number) => (
                  <tr key={machine.orderId}>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      {index + 1}
                    </td>

                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      <div className="text-gray-900">{machine.date}</div>
                      <div className="mt-1 text-gray-500">time</div>
                    </td>

                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      {machine.orderId}
                    </td>

                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      <div className="text-gray-900">{machine.machineName}</div>
                      <div className="mt-1 text-gray-500">time</div>
                    </td>

                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      {machine.customerName}
                    </td>

                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      {machine.contactNumber}
                    </td>

                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      {machine.totalAmount}
                    </td>

                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        {machine.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              page={page}
              size={size}
              setPage={setPage}
              setSize={setSize}
              totalPages={totalPages}
              totalItems={totalItems}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
