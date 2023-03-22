"use client";

import classNames from "classnames";

interface Props {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onCancel?: () => {};
  isSubmitting?: boolean;
  disableSubmit: boolean;
}
const Form: React.FunctionComponent<React.PropsWithChildren<Props>> = ({
  onSubmit,
  onCancel,
  children,
  isSubmitting,
  disableSubmit,
}) => {
  return (
    <form className="space-y-8 divide-y divide-gray-200" onSubmit={onSubmit}>
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div className="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
          <div className="space-y-6 sm:space-y-5">{children}</div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          {onCancel && (
            <button
              type="button"
              className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => {
                onCancel();
              }}
              disabled={isSubmitting}
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            className={classNames(
              {
                "bg-indigo-600 hover:bg-indigo-700": !(
                  isSubmitting || disableSubmit
                ),
                "bg-indigo-200": isSubmitting || disableSubmit,
              },
              "ml-3 inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            )}
            disabled={isSubmitting || disableSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
