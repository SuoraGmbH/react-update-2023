"use client";
import { UseFormRegisterReturn } from "react-hook-form";
import React, { ForwardedRef } from "react";

type Props<FieldName extends string> = React.PropsWithChildren<
  {
    label: string;
  } & UseFormRegisterReturn<FieldName>
>;

const Select = React.forwardRef(
  <FieldName extends string>(
    { children, label, ...register }: Props<FieldName>,
    ref: ForwardedRef<HTMLSelectElement>
  ) => {
    return (
      <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
        <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
          {label}
          <div className="mt-1 sm:col-span-2 sm:mt-0">
            <select
              className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
              {...register}
              ref={ref}
            >
              {children}
            </select>
          </div>
        </label>
      </div>
    );
  }
);

export default Select;
