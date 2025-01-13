import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div id="navbar" className="md:flex flex-row bg-black border-y-4 border-red-700 border-double md:h-28">
      <div id="eaglines-main" className="flex flex-row md:w-1/2 mx-auto my-auto">
      <Link href="http://localhost:3000/" className="flex md:flex-row flex-col md:w-1/2 w-full align-middle justify-center md:h-auto h-44">
        <img src="../images/abdullah-shahid.png" alt="Abdullah Logo" className="md:h-16 h-[100px] w-[100px] md:w-auto rounded-full mx-auto my-auto md:mr-5 md:ml-10" />
        <button className="text-lg my-auto py-2 px-4 border-white border-double border-y-2 rounded-md hover:border-x-2 hover:border-y-0 hover:rounded-lg transition transform ease-out duration-500 hover:scale-105 md:w-auto hidden md:flex">Contact Now</button>
        </Link>
      </div>

      <div id="header-button" className="flex justify-end w-1/2 mr-12">
        <ul className="flex flex-row justify-start space-x-6">
          <li className="text-lg my-auto py-2 px-4 border-white border-double border-x-2 rounded-md hover:border-y-2 hover:border-x-0 hover:rounded-lg transition transform ease-out duration-500 hover:scale-105">
            <Link href="http://localhost:3000/">Home</Link>
          </li>
          <li className="text-lg my-auto py-2 px-4 border-white border-double border-x-2 rounded-md hover:border-y-2 hover:border-x-0 hover:rounded-lg transition transform ease-out duration-500 hover:scale-105">
            <Link href="http://localhost:3000/about">About</Link>
          </li>
          <li className="text-lg my-auto py-2 px-4 border-white border-double border-x-2 rounded-md hover:border-y-2 hover:border-x-0 hover:rounded-lg transition transform ease-out duration-500 hover:scale-105">
            <Link href="http://localhost:3000/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;