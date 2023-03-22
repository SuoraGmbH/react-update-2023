import React from "react";

const TableToolButton: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => (
  <button
    type="button"
    className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
  >
    {children}
  </button>
);

export default TableToolButton;
