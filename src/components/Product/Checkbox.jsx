// Motion
import { motion } from "framer-motion";

const Checkbox = ({ label, value, topic, onChange }) => {
  const isSelected = topic === value;

  return (
    <motion.li
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="list-none"
    >
      <label className="flex items-center gap-3.5 text-[15px] text-[#555555] hover:text-black cursor-pointer group py-1.5 transition-colors select-none">
        <input
          className="sr-only"
          type="checkbox"
          checked={isSelected}
          onChange={() => onChange(value)}
        />
        <div
          className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all duration-200 ${
            isSelected
              ? "bg-[#3D3D3D] border-[#3D3D3D] shadow-md scale-105"
              : "border-gray-300 group-hover:border-gray-400 bg-white"
          }`}
        >
          {isSelected && (
            <motion.svg
              className="w-3.5 h-3.5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </motion.svg>
          )}
        </div>
        <span className={`transition-colors duration-200 ${isSelected ? "font-semibold text-black" : "text-[#555555] font-normal"}`}>
          {label}
        </span>
      </label>
    </motion.li>
  );
};

export default Checkbox;

