// Error Image
import ErrorImg from "./../../assets/Home/error.jpg";
// React
import { Link } from "react-router-dom";
// Motion
import { motion } from "framer-motion";
const Error = () => {
  return (
    <main className="w-full flex items-center justify-center font-oxygen">
      <motion.div
        className="w-[95%] mt-16 flex flex-col items-center py-5"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <img src={ErrorImg} alt="" />
        <h1 className=" capitalize lg:text-4xl text-md font-semibold text-[#3D3D3D] text-center px-4">
          look like you're trying to find the page that we don't have.
        </h1>
        <p className="lg:w-[70%] md:w-[80%] lg:text-lg text-[12px] px-4 text-center mt-8 text-[#919191] ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
          eos fugiat vero vitae necessitatibus et, recusandae omnis laborum
          nisi. Vel, atque corporis deleniti accusamus adipisci quis repudiandae
          excepturi laboriosam distinctio.
        </p>
        <Link
          to="/"
          className="mt-8 bg-black font-exo text-white px-5 py-3 rounded-full"
        >
          Back To Home
        </Link>
      </motion.div>
    </main>
  );
};

export default Error;
