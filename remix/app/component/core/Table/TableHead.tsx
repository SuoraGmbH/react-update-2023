import React from "react";
import classNames from "classnames";

interface Props {
  columns: string[];
}

const TableHead: React.FunctionComponent<Props> = ({ columns }) => {
  return (
    <thead className="bg-gray-50">
      <tr>
        {columns.map((column, index) => {
          return (
            <th
              key={index}
              scope="col"
              className={classNames(
                {
                  "pl-4 pr-3": index === 0,
                  "px-3 ": index !== 0,
                },
                "py-3.5 text-left text-sm font-semibold text-gray-900 sm:pl-6"
              )}
            >
              {column}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
