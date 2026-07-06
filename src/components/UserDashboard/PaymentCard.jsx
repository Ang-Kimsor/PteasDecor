// Icons
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Motion
import { motion } from "framer-motion";

const PaymentCard = ({ img, cardNumber, name, cvv, expiry, Default }) => {
  // Get last 4 digits for masked display
  const lastFour = cardNumber ? cardNumber.trim().slice(-4) : "••••";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`relative group rounded-2xl border p-5 md:p-6 transition-all duration-200 ${
        Default
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white border-gray-700 shadow-lg shadow-gray-900/20"
          : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-md"
      }`}
    >
      {/* Default badge */}
      {Default && (
        <span className="absolute top-4 right-4 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider bg-emerald-500 text-white px-3 py-1 rounded-full">
          <FontAwesomeIcon icon={faCheck} className="text-[9px]" />
          Default
        </span>
      )}

      {/* Top row: Logo + masked number */}
      <div className="flex items-center gap-4">
        <div className={`w-14 h-10 md:w-16 md:h-11 rounded-lg flex items-center justify-center overflow-hidden ${
          Default ? "bg-white/10" : "bg-gray-50 border border-gray-100"
        }`}>
          <img src={img} alt="Card brand" className="h-6 md:h-7 object-contain" />
        </div>
        <div>
          <p className={`text-base md:text-lg font-semibold tracking-wide font-mono ${Default ? "text-white" : "text-gray-800"}`}>
            •••• •••• •••• {lastFour}
          </p>
        </div>
      </div>

      {/* Card details */}
      <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <div>
          <p className={`text-[11px] md:text-xs uppercase tracking-wider mb-1 ${Default ? "text-gray-400" : "text-gray-400"}`}>
            Cardholder
          </p>
          <p className={`text-sm md:text-[15px] font-medium ${Default ? "text-gray-100" : "text-gray-700"}`}>
            {name}
          </p>
        </div>
        <div>
          <p className={`text-[11px] md:text-xs uppercase tracking-wider mb-1 ${Default ? "text-gray-400" : "text-gray-400"}`}>
            Expires
          </p>
          <p className={`text-sm md:text-[15px] font-medium ${Default ? "text-gray-100" : "text-gray-700"}`}>
            {expiry}
          </p>
        </div>
        <div className="hidden md:block">
          <p className={`text-[11px] md:text-xs uppercase tracking-wider mb-1 ${Default ? "text-gray-400" : "text-gray-400"}`}>
            CVV
          </p>
          <p className={`text-sm md:text-[15px] font-medium ${Default ? "text-gray-100" : "text-gray-700"}`}>
            •••
          </p>
        </div>
        <div className="flex items-end justify-end">
          <button className={`p-2.5 rounded-xl transition-all duration-200 cursor-pointer ${
            Default
              ? "text-gray-400 hover:text-red-400 hover:bg-white/10"
              : "text-gray-400 hover:text-red-500 hover:bg-red-50"
          }`}>
            <FontAwesomeIcon icon={faTrashCan} className="text-base" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PaymentCard;

