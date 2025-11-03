// Icons
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Motion
import { motion } from "framer-motion";
const CartItem = ({
  name,
  price,
  qty,
  img,
  discount,
  remove,
  increase,
  decrease,
}) => {
  const finalPrice = (price - (price * discount) / 100).toFixed(2);
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="grid grid-cols-[1fr_1fr_1fr_1fr] md:grid-cols-[3fr_1fr_1fr_1fr] gap-3 w-full py-5 px-4 border-t border-gray-300"
    >
      <div className="flex items-center gap-4">
        <FontAwesomeIcon
          className="text-[10px] md:text-[12px] hover:cursor-pointer"
          icon={faX}
          onClick={remove}
        />
        <img
          className="md:size-[50px] size-[40px] rounded-sm border border-gray-400"
          src={img}
          alt={name}
        />
        <p className="hidden md:block text-[16px] text-[#3D3D3D]">{name}</p>
      </div>
      <h1 className="w-full flex items-center justify-center text-[14px] md:text-[16px] text-[#949494]">
        ${finalPrice}
      </h1>
      <div className="flex items-center justify-center w-full selection:bg-transparent text-[#949494] cursor-pointer">
        <h1 className="md:w-full w-[75px] rounded-full border border-[#D7D7D7] py-1 px-2 md:py-2 flex justify-between items-center gap-[6px] md:gap-4 lg:gap-2 xl:gap-3 text-[13px] md:text-[15px]">
          <p
            onClick={decrease}
            className="w-1/3 h-full flex items-center text-xl font-poppins justify-center rounded-s-full cursor-pointer"
          >
            -
          </p>
          {qty}
          <p
            onClick={increase}
            className="w-1/3 h-full flex items-center text-xl font-poppins justify-center rounded-e-full cursor-pointer"
          >
            +
          </p>
        </h1>
      </div>
      <h1 className="w-full flex justify-center items-center text-[14px] md:text-[16px] text-[#949494]">
        ${(finalPrice * qty).toFixed(2)}
      </h1>
    </motion.div>
  );
};

export default CartItem;
