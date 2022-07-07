import React from "react";
import Dots from "./common/Dots";
import { ButtonLink } from "./common/Button";

interface Action {
  href: string;
  actionText: string;
  icon: (props: React.ComponentProps<"svg">) => JSX.Element;
}

interface CTASectionProps {
  title: string;
  description: string;
  mainAction: Action;
  secondaryAction: Action;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  mainAction,
  secondaryAction,
}) => (
  <div className="relative w-full py-16">
    <div aria-hidden="true" className="hidden sm:block">
      <div className="absolute inset-y-0 left-0 w-1/2 rounded-r-3xl bg-slate-50" />
      <Dots
        className="absolute top-8 left-1/2 -ml-3"
        width={404}
        height={392}
      />
    </div>
    <div className="mx-auto max-w-md sm:max-w-3xl lg:max-w-7xl">
      <div className="relative overflow-hidden rounded-2xl bg-indigo-500 px-6 py-10 shadow-xl sm:px-12 sm:py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
        >
          {/* Fancy card background */}
          <svg
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 1463 360"
          >
            <path
              className="text-indigo-400 text-opacity-40"
              fill="currentColor"
              d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
            />
            <path
              className="text-indigo-600 text-opacity-40"
              fill="currentColor"
              d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
            />
          </svg>
        </div>
        <div className="relative">
          <div className="sm:text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-indigo-100">
              {description}
            </p>
          </div>
          <div className="mt-12 sm:mx-auto sm:flex sm:max-w-lg">
            <ButtonLink
              variant="solid"
              color="slate"
              href={mainAction.href}
              icon={mainAction.icon}
            >
              {mainAction.actionText}
            </ButtonLink>
            <div className="mt-4 sm:mt-0 sm:ml-6">
              <ButtonLink
                variant="solid"
                color="white"
                href={secondaryAction.href}
                icon={secondaryAction.icon}
              >
                {secondaryAction.actionText}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CTASection;