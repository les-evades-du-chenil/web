import React from "react";
import ProfileDropdown from "./profileDropDown";

const HeaderDesktops = () => (
  <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
    <div className="border-b border-white">
      <div className="flex items-center justify-between h-16 px-4 sm:px-0">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img className="h-10 w-10" src="./images/logo.svg" alt="Workflow" />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#"
                className="bg-primaryLight text-dark px-3 py-2 rounded-md text-sm font-medium"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="text-light hover:bg-lightGrey hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Team
              </a>
              <a
                href="#"
                className="text-light hover:bg-lightGrey hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Projects
              </a>
              <a
                href="#"
                className="text-light hover:bg-lightGrey hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Calendar
              </a>
              <a
                href="#"
                className="text-light hover:bg-lightGrey hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Reports
              </a>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="ml-4 flex items-center md:ml-6">
            <button className="bg-light p-1 text-grey rounded-full hover:text-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-white">
              <span className="sr-only">View notifications</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <ProfileDropdown />
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
          <button
            type="button"
            className="bg-primary inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
);
export default HeaderDesktops;
