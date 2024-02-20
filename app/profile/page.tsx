import getCurrentUser from "@/lib/getCurrentUser";
import React from "react";

const Page = async () => {
  const user = await getCurrentUser();

  if (!user) {
    return (
      <h1 className="text-2xl font-semibold mb-4">Login to view profile</h1>
    );
  }

  // Extract the first letter of the user's name
  const initials = user.name ? user.name.charAt(0).toUpperCase() : "";

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center mt-8">
        <div className="px-4 sm:w-[300px] w-full items-center flex justify-center mb-4">
          <div className="h-[100px] w-[100px] rounded-full border-2 flex items-center justify-center text-3xl font-semibold dark:bg-[#181545]">
            {initials}
          </div>
        </div>
        <div className="px-4 sm:w-[300px] w-full">
          <div className="text-left w-full text-gray-400 select-none dark:text-dark-gray-400 text-xs font-semibold uppercase truncate ml-3.5">
            Email
          </div>
          <div className="text-sm pt-2 pb-2 pl-3 border-2 mt-1 pr-3 rounded-lg text-gray-900 w-full">
            {user.email}
          </div>
        </div>
        <div className="px-4 sm:w-[300px] w-full mt-4">
          <div className="text-left w-full text-gray-400 select-none dark:text-dark-gray-400 text-xs font-semibold uppercase truncate ml-3.5">
            Name
          </div>
          <div className="text-sm pt-2 pb-2 pl-3 border-2 mt-1 pr-3 rounded-lg text-gray-900 w-full">
            {user.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
