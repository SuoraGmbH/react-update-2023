import React from "react";

const TableBody: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <tbody className="divide-y divide-gray-200 bg-white">{children}</tbody>
  );
};

export default TableBody;
