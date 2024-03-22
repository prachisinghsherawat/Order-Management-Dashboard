'use client'

import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ArrowPathIcon, ArrowTrendingUpIcon, CheckCircleIcon, NoSymbolIcon, Square2StackIcon, SquaresPlusIcon, XMarkIcon } from "@heroicons/react/24/outline";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const statuses = [
  { id: 1, name: "Successful", icon: CheckCircleIcon, color: "" },
  { id: 2, name: "Pending", icon: ArrowPathIcon, color: "" },
  { id: 3, name: "Sent", icon: ArrowTrendingUpIcon, color: "" },
  { id: 4, name: "Failure", icon: NoSymbolIcon, color: "" },
  { id: 5, name: "Refund Initiated", icon: SquaresPlusIcon, color: "" },
  { id: 6, name: "Refund Completed", icon: Square2StackIcon, color: "" }
];

export default function FilterModal({ open, setOpen }: Props) {
  const cancelButtonRef = useRef(null);

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
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
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

                {/* input here */}
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

                {/* machines here */}

                {/* status here */}

                

              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

