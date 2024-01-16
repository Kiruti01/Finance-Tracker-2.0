import Link from "next/link";
import React from "react";
import { auth, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "../mode-toggle";

const Header = () => {
  const { userId } = auth();

  return (
    <>
      <nav className="bg-blue-700 py-4 px-6 flex items-center justify-between mb-5">
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Link href="/">
            <div className="text-lg uppercase font-bold text-white">
              Track Smart
            </div>
          </Link>
        </div>
        <div className="text-white flex items-center">
          {!userId && (
            <>
              <Link
                href="login"
                className="text-gray-300 hover:text-white mr-4"
              >
                Login
              </Link>
              <span className="px-6">||</span>
              <Link
                href="sign-up"
                className="text-gray-300 hover:text-white mr-4"
              >
                Sign Up
              </Link>
            </>
          )}
          {userId && (
            <Link
              href="profile"
              className="text-gray-300 hover:text-white mr-4"
            >
              Profile
            </Link>
          )}
          <div className="ml-auto">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
