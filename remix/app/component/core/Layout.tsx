import React from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import {NavLink} from "@remix-run/react";

const navigation = [
  { name: "Home", to: "/home" },
  { name: "Projects", to: "/projects" },
  { name: "Time Entries", to: "/timeEntries" },
];

export const Header: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <header>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
          {children}
        </h1>
      </div>
    </header>
  );
};

export const Main: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <main>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
    </main>
  );
};

const Layout: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="border-b border-gray-200 bg-white">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                  <div className="flex">
                    <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                      {navigation.map((item) => (
                        <NavLink key={item.name} to={item.to}>
                          {({ isActive }) => (
                            <span
                              className={classNames(
                                isActive
                                  ? "border-indigo-500 text-gray-900"
                                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                                "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                              )}
                            >
                              {item.name}
                            </span>
                          )}
                        </NavLink>
                      ))}
                    </div>
                  </div>

                  <div className="-mr-2 flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
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
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 pt-2 pb-3">
                  {navigation.map((item) => (
                    <NavLink key={item.name} to={item.to}>
                      {({ isActive }) => (
                        <Disclosure.Button
                          key={item.name}
                          as="span"
                          className={classNames(
                            isActive
                              ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                              : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800",
                            "block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                          )}
                          aria-current={isActive ? "page" : undefined}
                        >
                          {item.name}
                        </Disclosure.Button>
                      )}
                    </NavLink>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div className="py-10">
          <Header />
          <Main children={children} />
        </div>
      </div>
    </>
  );
};

export default Layout;
