const HeaderUserMobile = () => (
  <div className="border-b border-white md:hidden" id="mobile-menu">
    {/* Mobile menu, show/hide based on menu state. */}
    <div className="px-2 py-3 space-y-1 sm:px-3">
      <a
        href="#"
        className="bg-grey text-white block px-3 py-2 rounded-md text-base font-medium"
      >
        Dashboard
      </a>
      <a
        href="#"
        className="text-light hover:bg-grey hover:text-white block px-3 py-2 rounded-md text-base font-medium"
      >
        Team
      </a>
      <a
        href="#"
        className="text-light hover:bg-grey hover:text-white block px-3 py-2 rounded-md text-base font-medium"
      >
        Projects
      </a>
      <a
        href="#"
        className="text-light hover:bg-grey hover:text-white block px-3 py-2 rounded-md text-base font-medium"
      >
        Calendar
      </a>
      <a
        href="#"
        className="text-light hover:bg-grey hover:text-white block px-3 py-2 rounded-md text-base font-medium"
      >
        Reports
      </a>
    </div>
    <div className="pt-4 pb-3 border-t border-white">
      <div className="flex items-center px-5">
        <div className="flex-shrink-0">
          <img
            className="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=OSFehf2xlS&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div className="ml-3">
          <div className="text-base font-medium leading-none text-white">
            Tom Cook
          </div>
          <div className="text-sm font-medium leading-none text-light">
            tom@example.com
          </div>
        </div>
        <button className="ml-auto bg-primary flex-shrink-0 p-1 text-gray-400 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
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
      </div>
      <div className="mt-3 px-2 space-y-1">
        <a
          href="#"
          className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-grey"
        >
          Your Profile
        </a>
        <a
          href="#"
          className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-grey"
        >
          Settings
        </a>
        <a
          href="#"
          className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-grey"
        >
          Sign out
        </a>
      </div>
    </div>
  </div>
);

export default HeaderUserMobile;
