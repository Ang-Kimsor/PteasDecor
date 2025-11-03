// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faCheck,
  faExternalLink,
  faX,
} from "@fortawesome/free-solid-svg-icons";
// Motion
import { motion } from "framer-motion";
const OrderEntry = ({
  orderid,
  status,
  img,
  name,
  trackingid,
  deliverydate,
  price,
  discount,
  qty,
}) => {
  return (
    <motion.div
      className={`w-full grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] items-center md:grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] gap-3 ${
        status == "Failed" && "rounded-b-xl"
      } py-7 border-2 border-t-0 border-[#CECECE]`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <p className="ps-[10px] md:ps-[20px] font-bold text-[#6A6A6A]">
        {orderid}
      </p>
      <div className="flex items-center gap-2">
        <img src={img} className="md:size-[70px] size-[40px]" alt={name} />
        <p className=" text-[#3D3D3D] md:block hidden">{name}</p>
      </div>
      <div
        className={`${
          status == "In Progress"
            ? "bg-orange-500"
            : status == "Succeed"
            ? "bg-green-500"
            : "bg-red-500"
        } text-white font-bold w-fit py-1 px-2 flex gap-2 text-sm items-center rounded`}
      >
        <FontAwesomeIcon
          icon={
            status == "In Progress"
              ? faClock
              : status == "Succeed"
              ? faCheck
              : faX
          }
        />
        <p className="text-[10px] md:block hidden">{status}</p>
      </div>
      <div className="text-[8px] md:text-[12px] hover:underline flex cursor-pointer text-[#6A6A6A]">
        <p>{trackingid}</p>
        <p className="hidden md:block ps-2">
          <FontAwesomeIcon icon={faExternalLink} />
        </p>
      </div>
      <p className="text-[8px] md:text-[12px] text-[#6A6A6A]">{deliverydate}</p>
      <p className="text-[8px] md:text-[12px] text-[#6A6A6A]">
        ${(price * (1 - discount / 100) * qty).toFixed(2)}
      </p>
    </motion.div>
  );
};

export default OrderEntry;
