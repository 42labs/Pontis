import React, { useState } from "react";
import StyledTransition from "./common/StyledTransition";
import { ExclamationIcon, XIcon } from "@heroicons/react/outline";

const Banner = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 pb-2 sm:pb-5">
      <StyledTransition show={isOpen}>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-yellow-400 p-2 shadow-lg sm:p-3">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex w-0 flex-1 items-center">
                <ExclamationIcon
                  className="m-2 h-6 w-6 text-slate-700"
                  aria-hidden="true"
                />
                <p className="ml-3 text-slate-700">
                  <span>StarkNet is experiencing delays.</span>
                  <span className="hidden md:inline">
                    {" "}
                    Our feeds will update again once there is less congestion.
                  </span>
                </p>
              </div>
              <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                <a
                  href="#"
                  className="flex items-center justify-center rounded-md border border-transparent bg-slate-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-600"
                >
                  Learn more
                </a>
              </div>
              <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
                <button
                  type="button"
                  className="-mr-1 flex rounded-md p-2 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-white"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="sr-only">Dismiss</span>
                  <XIcon
                    className="h-6 w-6 text-slate-700"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </StyledTransition>
    </div>
  );
};

export default Banner;