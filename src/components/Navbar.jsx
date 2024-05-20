import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogbizLogo from "../assets/logo.png";

const Navbar = () => {
  const navLinks = [
    {
      id: "services",
      title: "Services",
    },
    {
      id: "dashboard",
      title: "Dashboard",
    },
    {
      id: "services-listing",
      title: "Service Listing",
    },
  ];

  const mobileNavLinks = [
    {
      id: "/",
      title: "Home",
    },
    {
      id: "services",
      title: "Services",
    },
    {
      id: "dashboard",
      title: "Dashboard",
    },
    {
      id: "services-listing",
      title: "Service Listing",
    },
    {
      id: "contact",
      title: "Contact Us",
    },
    {
      id: "login",
      title: "SignUp/Login",
    },
  ];

  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="lg:flex items-center justify-between text-white bg-black rounded-lg p-3 sticky top-3 hidden w-11/12">
        <div className="flex-1 flex justify-start">
          <ul className="flex gap-4 items-center px-4">
            <li
              className={`p-2 ${
                active === "" ? "text-[#ff6600]" : "text-white"
              } hover:bg-[#ff6600] hover:text-white hover:rounded-md cursor-pointer whitespace-nowrap flex-shrink-0`}
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              <Link to="/">Home</Link>
            </li>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`p-2 ${
                  active === nav.title ? "text-[#ff6600]" : "text-secondary"
                } hover:bg-[#ff6600] hover:text-white hover:rounded-md cursor-pointer whitespace-nowrap flex-shrink-0`}
                onClick={() => setActive(nav.title)}
              >
                <Link to={`/${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-none mx-auto">
          <Link
            to="/"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={LogbizLogo} alt="Logbiz" className="h-10" />
          </Link>
        </div>
        <div className="flex-1 flex justify-end gap-2 items-center text-sm">
          <Link
            to="/contact"
            className="rounded-sm p-2 bg-white text-black hover:bg-[#ff6600] hover:text-white whitespace-nowrap flex-shrink-0"
          >
            Contact Us
          </Link>
          <Link
            to="/login"
            className="rounded-sm p-2 bg-white text-black hover:bg-[#ff6600] hover:text-white whitespace-nowrap flex-shrink-0"
          >
            Sign Up / Login
          </Link>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="w-11/12 lg:hidden flex justify-between bg-black py-3 items-center px-4 rounded-md">
        <Link
          to="/"
          onClick={() => {
            setActive("");
          }}
        >
          <img src={LogbizLogo} alt="Logbiz" className="h-8" />
        </Link>
        <svg
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-6 h-6 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </nav>

      {/* Overlay and Sidebar */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black opacity-50"
          onClick={() => setMenuOpen(false)}
        ></div>

        {/* Sliding sidebar */}
        <aside
          className={`fixed top-0 right-0 md:w-2/6 w-1/2 h-full bg-black transition-transform transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } z-50`}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white p-4 text-end"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="flex flex-col items-start justify-center gap-4 mt-8 px-4">
            {mobileNavLinks.map((nav) => (
              <li
                key={nav.id}
                className="text-white hover:bg-[#ff6600] hover:text-white hover:rounded-md w-full p-2"
              >
                <Link
                  to={`/${nav.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`${
                    active === nav.title ? "text-[#ff6600]" : "text-white"
                  }`}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </>
  );
};

export default Navbar;
