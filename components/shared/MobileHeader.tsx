import React from "react";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import { LogIn, LogOut, NotebookPen, X } from "lucide-react";
import Cookies from "js-cookie";

import { NavLinks } from "@/constants/NavData";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import { Button } from "../ui/button";

const MobileHeader = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  isAuth,
  setIsAuth,
}: MobileMenuProps) => {
  const handleLogout = () => {
    if (isAuth) {
      Cookies.remove("ff-user-token");
      return setIsAuth(false);
    }
  };

  return (
    <Dialog
      as="div"
      className="lg:hidden"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed flex flex-col inset-y-0 left-0 z-10 w-full overflow-y-auto dark:bg-slate-900 bg-slate-300 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        {/* top section with close button */}

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link href={"/"}>
              <Image src="/logo.png" alt="logo" width={40} height={40} />{" "}
            </Link>
            <Link href={"/"}>
              <p className="md:text-2xl font-semibold">
                Kolkata <span className="text-accentColor">Fatafat</span>
              </p>
              <p className="text-xs -mt-1">🚀 Sabse pahele result 🚀</p>
            </Link>
          </div>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Clone menu</span>
            <X
              className="w-6 h-6 dark:text-white text-black"
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Show if user is logged in */}

        {isAuth && (
          <>
            <div className="mt-5 px-2 flex justify-between items-center">
              <p>Hi, Welcome Back</p>
              <button>
                <Avatar>
                  <AvatarFallback>FF</AvatarFallback>
                </Avatar>
              </button>
            </div>
            <hr className="mt-4" />
          </>
        )}

        <div className="mt-6 flow-root flex-grow">
          <div className="divide-y h-full">
            <div className="flex flex-col h-full justify-between">
              {/* Links */}

              <div className="py-6 flex-grow flex flex-col space-y-5">
                {NavLinks.map((navItem) => (
                  <Link
                    href={navItem.link}
                    key={navItem.heading}
                    className="nav-link-mobile"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <navItem.icon />
                    {navItem.heading}
                  </Link>
                ))}
              </div>
              <hr className="mb-5" />
              {isAuth ? (
                <div className="flex flex-col gap-5">
                  <Button
                    variant={"secondary"}
                    className="flex gap-4 nav-link-mobile"
                    onClick={handleLogout}
                  >
                    <LogOut /> Log Out
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col gap-5">
                  <Link href={"/log-in"} className="flex gap-4 nav-link-mobile">
                    <LogIn /> Log In
                  </Link>
                  <Link
                    href={"/register"}
                    className="flex gap-4 nav-link-mobile"
                  >
                    <NotebookPen /> Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default MobileHeader;
