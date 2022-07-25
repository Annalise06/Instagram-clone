import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { useState, useRef } from "react";
import { FaFacebookSquare } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [enteredInput, setEnteredInput] = useState(false);
  const formRef = useRef(null);
  const clickShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleChange = () => {
    const form = formRef.current;
    if (
      form["Username"].value.length > 0 &&
      form["Password"].value.length > 0
    ) {
      setEnteredInput(true);
    } else {
      setEnteredInput(false);
    }
  };

  return (
    <Fragment>
      <div className="flex flex-col bg-gray-100 justify-center items-center h-screen">
        <div className="flex flex-col bg-white mb-3 border border-gray-300 items-center w-80 pt-8 pb-4">
          <Link to="/">
            <img
              alt="Instagram"
              src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
            />
          </Link>

          <form ref={formRef} className="flex flex-col gap-1 mt-8 w-64">
            <div className="relative">
              <input
                onChange={handleChange}
                name="Username"
                type="text"
                className="peer bg-gray-200 rounded border border-gray-400 p-2 w-full text-xs focus:outline-none focus:border-gray-dark placeholder-transparent"
                placeholder="Username"
              />
              <label className="absolute transition-all left-2 top-0 text-gray-400 text-xxs peer-placeholder-shown:text-xs peer-placeholder-shown:top-2 pointer-events-none">
                Username
              </label>
            </div>

            <div className="relative">
              <input
                onChange={handleChange}
                name="Password"
                type={showPassword ? "text" : "password"}
                className="peer bg-gray-200 rounded border border-gray-400 p-2 w-full text-xs focus:outline-none focus:border-gray-dark placeholder-transparent"
                placeholder="Password"
              />
              <label className="absolute transition-all left-2 top-0 text-gray-400 text-xxs peer-placeholder-shown:text-xs peer-placeholder-shown:top-2 pointer-events-none">
                Password
              </label>
              <button
                onClick={(e) => clickShow(e)}
                className="absolute right-2 bottom-2 focus:text-gray-500 text-sm font-semibold"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <button
              className={`${
                enteredInput ? "bg-IgBlue" : "bg-blue-300"
              } mt-2 text-sm text-center text-white py-1 rounded font-medium`}
            >
              Log In
            </button>
          </form>
          <div className="flex space-x-2 w-64 mt-4 items-center">
            <span className="bg-gray-300 h-px flex-1" />
            <span className="p-2 text-xs text-gray-400 font-semibold">OR</span>
            <span className="bg-gray-300 h-px flex-1" />
          </div>
          <button className="flex mt-4 ">
            <div className="flex justify-between bg-no-repeat mr-1">
              <FaFacebookSquare className="bg-center pt-1" size={25} />
              <span className="ml-2 pt-1 text-sm text-blue-800 font-semibold">
                Login With Facebook
              </span>
            </div>
          </button>
          <button className="bg-white text-sm py-4 text-center hover:text-blue-500">
            <a href="">Forgot password?</a>
          </button>
        </div>
        <div className="bg-white w-80 py-4 border border-gray-300 text-center">
          <span className="text-sm mr-2"> Don't have an account?</span>
          <a href="/register" className="text-blue-500 text-sm font-semibold">
            Sign Up
          </a>
        </div>
        <div className="mt-3 text-center">
          <span>Get the app</span>
          <div className="flex justify-between mt-3 text-center">
            <div className=" bg-no-repeat bg-left w-36">
              <img
                alt="appstore"
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
              />
            </div>

            <div className="bg-no-repeat bg-left w-36 ml-2">
              <img
                alt="googleplay"
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
