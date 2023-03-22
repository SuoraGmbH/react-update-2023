import React, { ForwardedRef } from "react";

type Props = {
  label: string;
} & React.HTMLProps<HTMLInputElement>;

const Field: React.FunctionComponent<Props> = ({ label, ...props }) => {
  return (
    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
      <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
        {label}
        <div className="mt-1 sm:col-span-2 sm:mt-0">
          <input
            type="text"
            className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
            {...props}
          />
        </div>
      </label>
    </div>
  );
};

export default Field;
