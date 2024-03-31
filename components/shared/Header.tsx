"use client";

import { NavLinks } from "@/constants/NavData";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import Cookies from "js-cookie";
import { usePathname } from "next/navigation";

import { ModeToggle } from "./ThemeToggle";
import MobileHeader from "./MobileHeader";
import UserDropdown from "./UserDropdown";
import Image from "next/image";
import { Axios } from "@/utils/AxiosConfig";
import { Skeleton } from "@/components/ui/skeleton";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  // get pathname

  const path = usePathname();

  const Authenticated = async () => {
    // get auth token from cookies

    const authToken = Cookies.get("ff-user-token");

    if (!authToken) {
      setLoading(false);
      return setIsAuth(false);
    } // if no auth token

    try {
      // define headers

      const response = await Axios.get("/auth/user/is-auth", {
        headers: {
          "ff-user-token": authToken,
        },
      });

      const data: UserAuthResponse = await response.data;

      if (response.status === 200) {
        setLoading(false);
        return setIsAuth(data.authenticated);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Authenticated();
  }, [path]);

  return (
    <header className="mb-2">
      <nav className="w-full md:h-full items-center flex h-20 justify-between p-4">
        {/* Left */}
        <div className="flex items-center lg:space-x-0 gap-3">
          <button className="lg:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu aria-hidden="true" className="h-6 w-6" />
            <span className="sr-only">Open main menu</span>
          </button>

          {/* Logo */}
          <div className="flex space-x-2 items-center">
            <Link href={"/"}>
              <Image
                src="/logo.png"
                alt="logo"
                width={40}
                height={40}
                className="md:w-auto w-7"
              />
            </Link>
            <Link href={"/"} className="xl:block lg:hidden block">
              <p className="md:text-xl font-semibold">
                Kolkata<span className="text-accentColor">FF</span>.space
              </p>
              <p className="text-xs -mt-1 flex">🚀 Sabse pahele result 🚀</p>
            </Link>
          </div>
          {/* Nav links */}
          <div className="flex-grow justify-center space-x-2 lg:flex hidden">
            {NavLinks.map((navItem) => (
              <Link
                href={navItem.link}
                key={navItem.heading}
                className="nav-link"
              >
                {navItem.heading}
              </Link>
            ))}
          </div>
        </div>
        {/* Right */}

        <div className="items-center space-x-3 hidden lg:flex">
          {loading ? (
            <Skeleton className="w-[150px] h-[40px] rounded-md" />
          ) : isAuth ? (
            //  Render if logged in
            <UserDropdown isAuth={isAuth} setIsAuth={setIsAuth} />
          ) : (
            <>
              {/* Render if not logged in  */}
              <Link href="/log-in" className="nav-link">
                Log In
              </Link>
              <Link href="/register" className="nav-link">
                Register
              </Link>
            </>
          )}

          <ModeToggle />
        </div>

        <div className="lg:hidden">
          <ModeToggle />
        </div>

        {/* Mobile Menu */}
        <MobileHeader
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          isAuth={isAuth}
          setIsAuth={setIsAuth}
        />
      </nav>
    </header>
  );
};

export default Header;
