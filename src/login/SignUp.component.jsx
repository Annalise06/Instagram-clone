import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";

const Register = () => {
  return (
    <div className="flex flex-col justify-center lg:items-center h-screen lg:pt-8 mx-auto">
      <div className="flex flex-col bg-white lg:mb-3 lg:border lg:border-gray-300 items-center justify-center w-full h-screen lg:w-80 md:w-80">
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
          <p className="text-sm text-gray-400 text-center">
            People who use our service may have uploaded your contact
            information to Instagram. Learn More
            <br />
            <br /> By signing up, you agree to our Terms , Privacy Policy and
            Cookies Policy .
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
