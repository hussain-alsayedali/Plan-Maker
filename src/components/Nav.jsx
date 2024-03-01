import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ names }) => {
  return (
    <nav className=" h-screen">
      <h1 className="text-center text-3xl font-bold p-4 mt-8 text-sky-400">
        Choose Your Plan
      </h1>
      <ul className="grid grid-cols-3 gap-1 justify-center justify-items-center content-center h-full  max-md:grid-cols-1">
        {names.map((name, index) => (
          <li className="w-40" key={index}>
            <Link
              className="block text-center border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 font-bold py-2 px-4 rounded duration-300 w-full"
              to={`/${name}`}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
