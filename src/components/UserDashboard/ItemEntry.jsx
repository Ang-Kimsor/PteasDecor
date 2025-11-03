// Motion
import { motion } from "framer-motion";
const List = ({
  length,
  index,
  name,
  price,
  qty,
  discount,
  isListImg,
  img,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`${
        length - 1 == index ? "border-y" : "border-t"
      } h-[65px] border-gray-500/40 flex items-center justify-between`}
    >
      {isListImg ? (
        <div className="flex gap-4 items-center">
          <img
            src={img}
            alt={name}
            className="size-[50px] object-cover object-center"
          />
          <h1 className="self-start mt-2 text-[13px] text-[#3D3D3D]">{name}</h1>
        </div>
      ) : (
        <h1 className="self-start mt-2 text-[13px]">{name}</h1>
      )}
      <p className="flex flex-col items-end">
        <span className="text-[12px] text-gray-500/80 font-medium">
          {qty} x {(price * (1 - discount / 100)).toFixed(2)}
        </span>
        <span className="text-[15px] font-normal tracking-wider text-[#414141]">
          ${(qty * price * (1 - discount / 100)).toFixed(2)}
        </span>
      </p>
    </motion.div>
  );
};

export default List;
