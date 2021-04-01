const HeaderDropDown = () => (
  <div
    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-lightGrey ring-1 ring-black ring-opacity-5 focus:outline-none"
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="user-menu"
  >
    {/* Dropdown menu, show/hide based on menu state. Entering: "transition
    ease-out duration-100" From: "transform opacity-0 scale-95" To: "transform
    opacity-100 scale-100" Leaving: "transition ease-in duration-75" From:
    "transform opacity-100 scale-100" To: "transform opacity-0 scale-95" */}
    <a
      href="#"
      className="block px-4 py-2 text-sm text-light hover:text-primaryLight"
      role="menuitem"
    >
      Your Profile
    </a>
    <a
      href="#"
      className="block px-4 py-2 text-sm text-light hover:text-primaryLight"
      role="menuitem"
    >
      Settings
    </a>
    <a
      href="#"
      className="block px-4 py-2 text-sm text-light hover:text-primaryLight"
      role="menuitem"
    >
      Sign out
    </a>
  </div>
);

export default HeaderDropDown;
