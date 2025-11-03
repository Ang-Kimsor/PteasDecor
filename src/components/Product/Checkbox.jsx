// Motion
import { motion } from "framer-motion";
const Checkbox = ({ label, value, topic, onChange }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <label className="flex items-center gap-3 text-[16px] text-[#414141] text-nowrap cursor-pointer">
        <input
          className="mt-1 w-5 h-5 lg:w-4 lg:h-4 accent-[#3D3D3D] cursor-pointer"
          type="checkbox"
          checked={topic === value}
          onChange={() => onChange(value)}
        />
        {label}
      </label>
    </motion.li>
  );
};

export default Checkbox;
