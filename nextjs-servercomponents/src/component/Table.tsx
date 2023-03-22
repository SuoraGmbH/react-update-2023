import React from "react";

interface Props {
  description?: React.ReactNode;
  tools?: React.ReactNode;
}

const Table: React.FunctionComponent<React.PropsWithChildren<Props>> = ({
  children,
  description,
  tools,
}) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">{description}</div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">{tools}</div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                {children}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
