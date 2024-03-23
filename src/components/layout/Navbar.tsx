'use client'

import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  HomeModernIcon,
  HomeIcon,
  UsersIcon,
  Cog8ToothIcon,
  ArrowRightStartOnRectangleIcon,
  MapIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import TextInput from "../base/TextInput";

const navigation = [
  { id: 0, href: "#", icon: HomeIcon, current: false },
  { id: 1, href: "#", icon: MapIcon, current: false },
  { id: 2, href: "#", icon: HomeModernIcon, current: true },
  { id: 3, href: "#", icon: UsersIcon, current: false },
  { id: 4, href: "#", icon: CalendarIcon, current: false },
  { id: 5, href: "#", icon: DocumentDuplicateIcon, current: false },
  { id: 6, href: "#", icon: ChartPieIcon, current: false },
  { id: 7, href: "#", icon: Cog8ToothIcon, current: false },
  { id: 8, href: "#", icon: ArrowRightStartOnRectangleIcon, current: false }
];

function classNames(...classes:any) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({children} : any) {
  return (
    <div className="flex min-h-full bg-gray-50">
      {/* Sidebar */}
      <div className="flex flex-col w-20 bg-white shadow-sm px-2 py-4">
        <img
          className="h-8 w-auto mx-auto"
          src="https://framerusercontent.com/images/TP9ZnVdDygftSiNA1psqTdtVs.png"
          alt="hello"
        />
        <nav className="mt-8">
          <ul role="list" className="flex flex-col gap-4">
            {navigation.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-white bg-blue-500"
                      : "text-gray-600 hover:bg-blue-50 hover:text-blue-500",
                    "group flex items-center justify-center rounded-md p-2 transition-colors duration-200"
                  )}
                >
                  <item.icon className="w-6 h-6" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Navigation Bar */}

      <div className="mx-8 flex-1">
        <Disclosure as="nav" className="bg-white shadow-sm rounded-b-lg">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-9xl px-2 sm:px-4">
                <div className="flex h-20 justify-between">
                  <div className="flex px-2 lg:px-0">
                    <div className="hidden lg:block py-3 pl-3 pr-4">
                      <h1 className="block border-l-4 border-transparent text-lg font-medium text-gray-600">
                        All Orders
                      </h1>
                      <p className="block border-l-4 border-transparent pt-2 text-sm font-medium text-blue-500 ">
                        All Orders
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
                    <TextInput id="search" name="search" />
                  </div>
                  <div className="flex items-center lg:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="hidden lg:ml-4 lg:flex lg:items-center">
                    <button
                      type="button"
                      className="relative flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-4 flex-shrink-0">
                      <div>
                        <Menu.Button className="relative flex rounded-full bg-white text-sm focus:outline-none ">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="lg:hidden">
                <div className="space-y-1 pb-3 pt-2">
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
                  >
                    All Orders
                  </Disclosure.Button>
                </div>
                <div className="border-t border-gray-200 pb-3 pt-4">
                  <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">
                        Tom Cook
                      </div>
                      <div className="text-sm font-medium text-gray-500">
                        tom@example.com
                      </div>
                    </div>
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1">
                    <Disclosure.Button
                      as="a"
                      href="#"
                      className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                    >
                      Your Profile
                    </Disclosure.Button>
                    <Disclosure.Button
                      as="a"
                      href="#"
                      className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                    >
                      Settings
                    </Disclosure.Button>
                    <Disclosure.Button
                      as="a"
                      href="#"
                      className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                    >
                      Sign out
                    </Disclosure.Button>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {children}
      </div>
    </div>
  );
}
