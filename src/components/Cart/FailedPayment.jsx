// Icon
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
const FailedPayment = ({ setFailed }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-[90%] md:w-[80%] lg:w-[70%] xl:w-[50%] fixed py-[60px] rounded-xl top-1/2 -translate-1/2 left-1/2 z-20 bg-white flex flex-col items-center justify-center gap-6 font-exo border border-[#949494]"
    >
      <FontAwesomeIcon
        className="text-[50px] text-red-600"
        icon={faCircleXmark}
      />
      <h1 className="text-[35px] font-medium">Payment Failed</h1>
      <span className="w-[80%] md:w-[40%] text-center text-gray-600">
        Sorry, we can not verify your card. Please make sure to fill in the
        correct informations
      </span>
      <button
        onClick={() => setFailed(false)}
        className="px-5 py-2 font-semibold text-white bg-black border border-black rounded-full hover:bg-black/90 active:bg-black/80 font-exo hover:cursor-pointer"
      >
        Try Again
      </button>
    </motion.div>
  );
};

export default FailedPayment;
