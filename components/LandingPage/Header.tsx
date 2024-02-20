"use client";

import React from "react";
import Link from "next/link";
import { ModeToggle } from "../mode-toggle";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession(); // Get the user's session

  const handleLogout = async () => {
    const response = await signOut({ redirect: false });
    if (response.url) {
      window.location.replace(response.url);
    } else {
      console.error("Logout failed");
    }
  };

  const renderInitials = () => {
    if (session && session.user?.email) {
      // Extract initials from email
      const initials = session.user.email
        .split("@")[0]
        .split(".")
        .map((part) => part.charAt(0))
        .join("")
        .toUpperCase();

      return <div className="avatar">{initials}</div>;
    }
    return null;
  };

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
          {session && (
            <div className="flex items-center mr-4">
              <Link href="/profile">{renderInitials()}</Link>
              <button
                onClick={handleLogout}
                className="text-gray-300 hover:text-white ml-2"
              >
                Logout
              </button>
            </div>
          )}
          {!session && (
            <>
              <Link
                href="login"
                className="text-gray-300 hover:text-white mr-4"
              >
                Login
              </Link>
              <span className="px-6">||</span>
              <Link
                href="register"
                className="text-gray-300 hover:text-white mr-4"
              >
                Sign Up
              </Link>
            </>
          )}
          <div className="ml-auto">{/* Additional components */}</div>
        </div>
      </nav>
    </>
  );
};

export default Header;
