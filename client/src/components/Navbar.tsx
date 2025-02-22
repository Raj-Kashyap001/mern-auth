import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="bg-violet-100 flex items-center justify-between p-2">
      <nav className="flex justify-between items-center w-full max-w-screen-lg mx-auto">
        <div className="text-2xl">
          <Link to={"/"}>
            <h1 className="font-bold text-2xl">MyAuth</h1>
          </Link>
        </div>
        <ul className="flex gap-2">
          <li>
            <Link className="hover:text-violet-700" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-violet-700" to={"/about"}>
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-violet-700" to={"/signin"}>
              Sign In
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
