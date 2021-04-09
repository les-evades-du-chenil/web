import { getAccessToken } from "../../package/auth/accessToken";
import LayoutUser from "../../package/user/layout/layoutUser";

const UserHomePage = () => {
  console.log(getAccessToken());

  return (
    <LayoutUser>
      <main className="-mt-32">
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-darkIndigo rounded-lg shadow px-5 py-6 sm:px-6">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
          </div>
        </div>
      </main>
    </LayoutUser>
  );
};
export default UserHomePage;
