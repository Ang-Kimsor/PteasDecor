// Icons
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Motion
import { motion } from "framer-motion";
const PaymentCard = ({ img, cardNumber, name, cvv, expiry, Default }) => {
  return (
    <motion.main
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="relative grid grid-cols-[3fr_2fr_1fr] md:grid-cols-[3fr_2fr_1fr_2fr_1fr] py-2 md:py-4 gap-6 border border-[#949494] rounded-md text-[10px] md:text-[14px] lg:text-[15px] bg-gray-100"
    >
      <div className="flex flex-col gap-1 ps-4">
        <label>Card Number</label>
        <span className="rounded-full w-full py-[4px] px-1 md:px-2 flex items-center gap-1 border border-[#949494] bg-white text-gray-500 font-oxygen">
          <img className="h-[12px] md:h-[30px]" src={img} alt="" />
          {cardNumber}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <label>Name On Card</label>
        <span className="rounded-full w-full py-1 md:py-2 px-3 border border-[#949494] bg-white text-gray-500 font-oxygen">
          {name}
        </span>
      </div>
      <div className="md:flex flex-col gap-1 hidden">
        <label>CVV</label>
        <span className="rounded-full w-full py-1 md:py-2 px-3 border border-[#949494] bg-white text-gray-500 font-oxygen">
          {cvv}
        </span>
      </div>
      <div className="md:flex flex-col gap-1 hidden">
        <label>Expiry Date</label>
        <span className="rounded-full w-full py-1 md:py-2 px-3 border border-[#949494] bg-white text-gray-500 font-oxygen">
          {expiry}
        </span>
      </div>
      <div className="flex justify-center items-center w-full h-full">
        <FontAwesomeIcon
          className="hover:cursor-pointer mt-2 md:mt-3"
          icon={faX}
        />
      </div>
      {Default && (
        <span className="absolute top-0 right-0 px-2 py-1 bg-blue-500/80 text-white rounded-tr-[5px]">
          Default
        </span>
      )}
    </motion.main>
  );
};

export default PaymentCard;
