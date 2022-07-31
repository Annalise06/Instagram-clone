import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";

const Register = () => {
  return (
    <div className="bg-gray-100 flex flex-col justify-center lg:items-center h-fit lg:pt-8 mx-auto">
      <div className="flex flex-col bg-white lg:mb-3 lg:border lg:border-gray-300 items-center justify-center w-full h-screen lg:w-80">
        <Link to="/">
          <img
            alt="Instagram"
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
          />
        </Link>
        <div className="flex flex-col text-center text-gray-400 mx-4 mt-6 font-semibold">
          <span>Sign up to see photos and videos from your friends</span>
        </div>
        <button className="flex mt-8 border rounded justify-center py-1 px-6 bg-blue-500 hover:bg-blue-700 ">
          <div className="flex justify-between mr-1">
            <FaFacebookSquare className="bg-center text-white pt-1" size={25} />
            <span className="ml-2 pt-1 text-sm text-white font-semibold">
              Log in With Facebook
            </span>
          </div>
        </button>
        <form className="flex flex-col gap-2 mt-8 w-64">
          <div className="relative">
            <input
              name="Email"
              type="text"
              className="peer bg-gray-200 rounded border border-gray-400 p-2 w-full text-xs focus:outline-none focus:border-gray-dark placeholder-transparent"
              placeholder="Email"
            />
            <label className="absolute transition-all left-2 top-0 text-gray-400 text-xxs peer-placeholder-shown:text-xs peer-placeholder-shown:top-2 pointer-events-none">
              Email
            </label>
          </div>

          <div className="relative">
            <input
              name="Fullname"
              type="text"
              className="peer bg-gray-200 rounded border border-gray-400 p-2 w-full text-xs focus:outline-none focus:border-gray-dark placeholder-transparent"
              placeholder="Fullname"
            />
            <label className="absolute transition-all left-2 top-0 text-gray-400 text-xxs peer-placeholder-shown:text-xs peer-placeholder-shown:top-2 pointer-events-none">
              Fullname
            </label>
          </div>

          <div className="relative">
            <input
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
              name="Password"
              type="password"
              className="peer bg-gray-200 rounded border border-gray-400 p-2 w-full text-xs focus:outline-none focus:border-gray-dark placeholder-transparent"
              placeholder="Password"
            />
            <label className="absolute transition-all left-2 top-0 text-gray-400 text-xxs peer-placeholder-shown:text-xs peer-placeholder-shown:top-2 pointer-events-none">
              Password
            </label>
          </div>
          <p className="text-sm text-gray-400 text-center pb-4">
            People who use our service may have uploaded your contact
            information to Instagram. Learn More
            <br />
            <br /> By signing up, you agree to our Terms , Privacy Policy and
            Cookies Policy .
          </p>
          <button className="bg-blue-600 mt-2 text-sm text-center text-white py-1 rounded font-medium hover:bg-blue-500">
            Sign Up
          </button>
        </form>
      </div>
      <div className="bg-white w-full lg:w-80 lg:pt-4 pb-4 lg:border lg:border-gray-300 text-center">
        <span className="text-sm mr-2"> Already have an account?</span>
        <a href="/login" className="text-blue-500 text-sm font-semibold">
          Log in
        </a>
      </div>
      <div className="w-full text-center bg-white pt-2 lg:bg-gray-100">
        <span>Get the app</span>
        <div className="mb-3 flex justify-center mt-3 text-center">
          <div className="bg-no-repeat bg-left w-36">
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
      <div className="bg-white lg:bg-gray-100 flex flex-row justify-center text-center items-center pt-8 pb-10 w-full">
        <ul className="flex flex-col lg:flex-row justify-center text-xxs lg:text-xs text-gray-500 w-full text-center space-x-1 gap-3">
          <div className="flex flex-row justify-center gap-3">
            <li>
              <a href="">Meta</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Jobs</a>
            </li>
            <li>
              <a href="">Help</a>
            </li>
            <li>
              <a href="">API</a>
            </li>
            <li>
              <a href="">Privacy</a>
            </li>
            <li>
              <a href="">Terms</a>
            </li>
            <li>
              <a href="">Top Accounts</a>
            </li>
          </div>
          <div className="flex flex-row justify-center gap-3">
            <li>
              <a href="">Hashtags</a>
            </li>
            <li>
              <a href="">Locations</a>
            </li>
            <li>
              <a href="">Instagram Lite</a>
            </li>
            <li>
              <a href="">Contact Uploading and Non-users</a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Register;
