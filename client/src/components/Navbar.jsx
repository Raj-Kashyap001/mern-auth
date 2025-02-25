import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className="bg-violet-100 flex items-center justify-between p-2">
      <nav className="flex justify-between items-center w-full max-w-screen-lg mx-auto">
        <div className="text-2xl">
          <Link to={"/"}>
            <h1 className="font-bold text-2xl">MyAuth</h1>
          </Link>
        </div>
        <ul className="flex items-center gap-2">
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
          <Link to={"/profile"}>
            {currentUser ? (
              <img
                className="w-8 aspect-square mx-2 rounded-full"
                src={currentUser.profilePicture}
                alt="profile-photo"
              ></img>
            ) : (
              <li className="hover:text-violet-700">Sign In</li>
            )}
          </Link>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
