// Icons
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// React
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SuccessPayment = ({ setSuccess }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] fixed py-[60px] rounded-xl top-1/2 -translate-1/2 left-1/2 z-20 bg-white flex flex-col items-center justify-center gap-6 font-exo"
    >
      <FontAwesomeIcon
        className="text-[50px] text-green-500"
        icon={faCheckCircle}
      />
      <h1 className="text-[35px] font-medium">Thank you!</h1>
      <span className="w-[80%] md:w-[40%] text-center text-gray-600/80">
        Your order has been confirmed & It is on the way. Check your email for
        the details
      </span>
      <div className="flex flex-col justify-center gap-4 md:flex-row">
        <Link
          to="/"
          className="px-5 py-2 font-semibold text-white bg-black border border-black rounded-full hover:bg-black/90 active:bg-black/80 font-exo"
        >
          Go to Homepage
        </Link>
        <Link
          to="/MyAccount"
          onClick={() => setSuccess(false)}
          className="px-5 py-2 font-semibold border border-black rounded-full hover:bg-gray-100 active:bg-gray-200 font-exo"
        >
          Check Order Details
        </Link>
      </div>
    </motion.div>
  );
};

export default SuccessPayment;
