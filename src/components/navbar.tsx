import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="flex items-center px-4 md:px-12 justify-between top-0 w-full z-50 shadow-lg fixed h-[90px] mb-[90px] bg-white">
      <Link href={"/"} className="text-[34px] font-bold text-blue-600 ">
        E-buy
      </Link>
      <div className="flex  space-x-2.5 text-sm">
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"/"} className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link href={"/products"} className="mr-5 hover:text-gray-900">
            All products
          </Link>
        </nav>
        <button className="button bg-blue-600 text-white  border-transparent hover:bg-transparent hover:border-blue-600 hover:text-black">
          Log in
        </button>
        <button className="button bg-transparent text-black  border-blue-600 hover:bg-blue-600 hover:border-transparent hover:text-white">
          Sign up
        </button>
      </div>
    </header>
  );
};

export default Navbar;
