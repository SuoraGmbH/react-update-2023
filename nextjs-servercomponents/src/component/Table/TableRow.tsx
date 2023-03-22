import React from "react";
import classNames from "classnames";

interface Props {
  columns: React.ReactNode[];
}

const TableRow: React.FunctionComponent<Props> = ({ columns }) => {
  return (
    <tr>
      {columns.map((column, index) => (
        <td
          key={index}
          className={classNames(
            {
              "pl-4 pr-3 font-medium": index === 0,
              "px-3": index !== 0,
            },

            "whitespace-nowrap py-4 text-sm  text-gray-900 sm:pl-6"
          )}
        >
          {column}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
