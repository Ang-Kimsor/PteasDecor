// React
import { Link } from "react-router-dom";
import { useState } from "react";
// Icons
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Bg Image
import Bg from "./../../assets/Login/LoginBg.jpg";
// Motion
import { motion } from "framer-motion";
const Signup = () => {
  const [visiblePass, setVisiblePass] = useState(false);
  const [visiblePassCon, setVisiblePassCon] = useState(false);
  return (
    <main className="w-full lg:h-[550px] md:h-[600px] h-[800px] flex items-center justify-center font-oxygen mt-24">
      <motion.div
        className="lg:w-[95%] w-full h-full grid lg:grid-cols-2 lg:border border-gray-500/50 rounded-2xl relative"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <form className="lg:static lg:w-full w-[95%] absolute md:p-8 p-5 bg-white lg:rounded-s-3xl top-1/2 lg:rounded-[0] rounded-xl lg:left-0 lg:top-0 left-1/2 lg:translate-0 -translate-1/2">
          <h1 className="text-[30px] font-bold">Signup</h1>
          <p className="text-md mt-2 text-[#949494]">
            Already Have An Account,{" "}
            <Link to={"/LogIn"} className="hover:underline text-black">
              Login
            </Link>
          </p>
          <div className="grid md:grid-cols-2 gap-10 mt-8">
            <div className="flex flex-col">
              <label className="text-[#3D3D3D]">Full Name</label>
              <input
                type="text"
                className="border border-[#DEDFE1] rounded-3xl mt-3 h-[45px] pl-3 placeholder:text-sm placeholder:text-[#949494]"
                placeholder="michael joe"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[#3D3D3D]">Email</label>
              <input
                type="text"
                className="border border-[#DEDFE1] rounded-3xl mt-3 h-[45px] pl-3 placeholder:text-sm placeholder:text-[#949494]"
                placeholder="michaeljoe@gmail.com"
                required
              />
            </div>
            <div className="flex flex-col ">
              <label className="text-[#3D3D3D]">Password</label>
              <span className="relative mt-3">
                <input
                  type={visiblePass ? "text" : "password"}
                  className="border w-full border-[#DEDFE1] rounded-3xl h-[45px] pl-3 pr-10 placeholder:text-sm placeholder:text-[#949494]"
                  placeholder="********"
                  required
                />
                <FontAwesomeIcon
                  icon={visiblePass ? faEye : faEyeSlash}
                  onClick={() => setVisiblePass(!visiblePass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500/50 hover:text-black cursor-pointer"
                />
              </span>
            </div>
            <div className="flex flex-col">
              <label className="text-[#3D3D3D]">Confirm Password</label>
              <span className="relative mt-3">
                <input
                  type={visiblePassCon ? "text" : "password"}
                  className="border w-full border-[#DEDFE1] rounded-3xl h-[45px] pl-3 pr-10 placeholder:text-sm placeholder:text-[#949494]"
                  placeholder="********"
                  required
                />
                <FontAwesomeIcon
                  icon={visiblePassCon ? faEye : faEyeSlash}
                  onClick={() => setVisiblePassCon(!visiblePassCon)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500/50 hover:text-black cursor-pointer"
                />
              </span>
            </div>
          </div>
          <span className="flex gap-3 mt-5 items-center">
            <input
              type="checkbox"
              className="border size-[20px] border-gray-500/50 accent-[#3D3D3D]"
            />
            <p className="text-[#666666] text-[16px]">
              I have read and agreed to the Terms of Service and Privacy Policy
            </p>
          </span>
          <button className=" rounded-full text-white bg-black flex justify-center items-center py-3 w-full mt-7 font-exo hover:cursor-pointer active:bg-gray-800">
            Create Account
          </button>
        </form>
        <aside>
          <img
            src={Bg}
            alt=""
            className="lg:rounded-e-2xl w-full h-full object-cover object-center"
          />
        </aside>
      </motion.div>
    </main>
  );
};

export default Signup;
