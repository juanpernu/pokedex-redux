import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { SpeakerphoneIcon, XIcon } from "@heroicons/react/outline";

export const Snackbar = ({ message, type = "success", onChange }) => {
  const [isShowing, setIsShowing] = useState(true);
  const bg = {
    error: {
      light: "bg-red-500",
      dark: "bg-red-800",
    },
    success: {
      light: "bg-green-500",
      dark: "bg-green-800",
    },
    warning: {
      light: "bg-amber-500",
      dark: "bg-amber-800",
    },
  };
  const hover = {
    error: "hover:bg-red-800",
    success: "hover:bg-green-800",
    warning: "hover:bg-amber-800",
  };

  function onClickHandler() {
    setIsShowing(false);
    setTimeout(() => onChange(), 500);
  }

  return (
    <Transition
      appear={true}
      show={isShowing}
      enter="transition-opacity duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className={`z-100 fixed inset-x-0 bottom-0 mx-auto mb-6 w-4/5 scale-100 rounded ${bg[type].light}`}
      >
        <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex w-0 flex-1 items-center">
              <span className={`flex rounded-lg p-2 ${bg[type].dark}`}>
                <SpeakerphoneIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </span>
              <p className="ml-3 truncate font-medium text-white">
                <span className="md:inline">{message}</span>
              </p>
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
                type="button"
                onClick={onClickHandler}
                className={`-mr-1 flex rounded-md p-2 ${hover[type]} focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2`}
              >
                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};
