import React from "react";
import HeaderDropDown from "./dropdown";

const ProfileDropdown = () => (
  <div className="ml-3 relative">
    <div>
      <button
        type="button"
        className="max-w-xs bg-primary rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        id="user-menu"
        aria-expanded="false"
        aria-haspopup="true"
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=OSFehf2xlS&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </button>
    </div>
    <HeaderDropDown />
  </div>
);
export default ProfileDropdown;
