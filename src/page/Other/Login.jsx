// React
import { useState } from "react";
import { Link } from "react-router-dom";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// Bg Image
import Bg from "./../../assets/Login/LoginBg.jpg";
// Motion
import { motion } from "framer-motion";
const Login = () => {
  const [visible, setVisible] = useState(false);
  return (
    <main className="w-full h-[550px] flex justify-center font-oxygen mt-24">
      <motion.div
        className="w-full lg:w-[95%] h-full relative flex lg:rounded-2xl lg:border border-gray-500/50"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-white h-fit rounded-xl lg:w-1/2 w-[95%] lg:h-full absolute top-1/2 left-1/2 -translate-1/2 lg:translate-0 lg:static lg:rounded-s-2xl lg:rounded-e-none p-8"
        >
          <h1 className="text-[30px] font-bold">Login</h1>
          <h1 className="text-gray-600 mb-12 mt-2">
            Do not have an account,{" "}
            <Link
              to="/SignUp"
              className="hover:underline decoration-black text-black"
            >
              Create A New One
            </Link>
          </h1>
          <div className="flex flex-col gap-3">
            <label className="text-[#3D3D3D]" htmlFor="email">
              Enter Your Email or Phone
            </label>
            <input
              className="rounded-full px-3 py-2 w-full border border-gray-500/50 text-sm"
              type="email"
              placeholder="michael.joe@example.com"
              required
            />
          </div>
          <div className="flex flex-col gap-3 mt-6">
            <label className="text-[#3D3D3D]" htmlFor="password">
              Enter Your Password
            </label>
            <div className="relative">
              <input
                className="rounded-full px-3 py-2 w-full border border-gray-500/50 text-sm"
                type={`${visible ? "text" : "password"}`}
                placeholder="*******"
                required
              />
              <FontAwesomeIcon
                onClick={() => setVisible(!visible)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500/50 hover:text-black cursor-pointer"
                icon={visible ? faEye : faEyeSlash}
              />
            </div>
          </div>
          <button
            type="submit"
            className=" rounded-full text-white bg-black flex justify-center items-center py-3 w-full mt-7 font-exo hover:cursor-pointer active:bg-gray-800"
          >
            Login
          </button>
          <p className="w-full text-center mt-4 hover:underline hover:cursor-pointer">
            Forgot your Password
          </p>
        </form>
        <aside className="w-full lg:w-1/2 h-full lg:rounded-e-2xl">
          <img
            className="w-full h-full lg:rounded-e-2xl object-center object-cover"
            src={Bg}
            alt="Backgroud Image"
          />
        </aside>
      </motion.div>
    </main>
  );
};

export default Login;
