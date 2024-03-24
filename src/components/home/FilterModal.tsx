'use client'

import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ArrowPathIcon, ArrowTrendingUpIcon, CheckCircleIcon, NoSymbolIcon, Squares2X2Icon, SquaresPlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Button from "../base/Button";
import Machines from "./Machines";
import DateRangePicker from "./DateRangePicker";
import useFilterStore from "@/zustand/FilterValue";

interface Props {
  open: boolean;
  setOpen: any;
}

interface Status{
  id: number
  name:string
  icon: any
}

const statuses = [
  { id: 1, name: "Successful", icon: CheckCircleIcon },
  { id: 2, name: "Pending", icon: ArrowPathIcon },
  { id: 3, name: "Sent", icon: ArrowTrendingUpIcon },
  { id: 4, name: "Failure", icon: NoSymbolIcon },
  { id: 5, name: "Refund Initiated", icon: SquaresPlusIcon },
  { id: 6, name: "Refund Completed", icon: Squares2X2Icon }
];

export default function FilterModal({ open, setOpen }: Props) {
  const cancelButtonRef = useRef(null);

  const [selectedStatus , setSelectedStatus] = useState<any>([])
  const { setFilterValue } = useFilterStore();

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-y-auto"
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="min-h-screen flex items-center justify-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-2xl sm:w-full">
              <div className="px-4 py-5 sm:p-6">
                {/* title here */}
                <div className="flex items-center justify-between">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold text-center w-full leading-6 text-gray-900"
                  >
                    FILTER
                  </Dialog.Title>
                  <button
                    type="button"
                    className="focus:outline-none"
                    onClick={() => setOpen(false)}
                  >
                    <XMarkIcon
                      className="h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </button>
                </div>

                {/* Input */}
                <div className="mt-6">
                  <div className="border-2 border-gray-300 rounded-lg">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full py-2 px-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent sm:text-sm rounded-md"
                      placeholder="Search"
                    />
                  </div>
                </div>

                {/* Machines */}

                <Machines />

                {/* Status */}

                <div className="mt-6">
                  <h1 className="text-gray-900 text-sm">Status</h1>
                  <div className="grid grid-cols-5 mt-3 gap-4">
                    {statuses.map((status: Status) => (
                      <div
                        onClick={() =>
                          setSelectedStatus([...selectedStatus, status.name])
                        }
                        className={`rounded-md py-2 items-center flex flex-col border border-gray-300 ${
                          selectedStatus.includes(status.name) &&
                          "border-gray-800"
                        }`}
                      >
                        <status.icon
                          className="w-7 h-7 text-gray-700"
                          aria-hidden="true"
                        />
                        <p className="text-gray-900 mt-2 text-xs text-center">
                          {status.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Date Range */}

                <DateRangePicker />

                {/* Buttons */}

                <div className="flex justify-between items-center mt-6">
                  <Link className="underline text-sm text-gray-900" href="">
                    Clear All
                  </Link>
                  <button
                    onClick={() => {
                      setFilterValue(selectedStatus);
                      setOpen(false);
                    }}
                    type="button"
                    className="w-28 rounded-md bg-blue-500 px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

