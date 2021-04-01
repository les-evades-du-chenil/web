import React from "react";
import LayoutUser from "../../package/user/layout/layoutUser";
import Account from "../../package/user/profile/account";
import ProfileSidebar from "../../package/user/profile/ProfileSidebar";

const profile = () => (
  <LayoutUser>
    <main className="lg:grid lg:grid-cols-12 lg:gap-x-5 max-w-6xl mx-auto lg:p-6 -mt-20 bg-lightGrey rounded">
      <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
        <ProfileSidebar />
      </aside>
      <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
        <Account />
      </div>
    </main>
  </LayoutUser>
);

export default profile;
