// React
import { useEffect, useState } from "react";
// Motion
import { motion } from "framer-motion";
const InputForm = ({ label, type, onValidChange, value, setValue }) => {
  const [expiry, setExpiry] = useState("");
  const [error, setError] = useState("");
  const isValidExpiry = (dateStr) => {
    const today = new Date().toISOString().slice(0, 7);
    return dateStr >= today;
  };
  useEffect(() => {
    if (type != "month") return;
    if (!expiry) {
      setError("Expiration date is required.");
      return;
    }
    if (!isValidExpiry(expiry)) {
      onValidChange(false);
      setError("Your card is expired.");
      return;
    }
    setError("");
    if (isValidExpiry(expiry)) {
      onValidChange(true);
    }
  }, [expiry, type, onValidChange]);

  return (
    <motion.div
      className="flex flex-col w-full gap-2"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <label className="text-[#3D3D3D]">
        {label} <span className="text-red-500">*</span>
      </label>

      {type === "month" ? (
        <div>
          <input
            type="month"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            required
            className="ps-2 py-2 rounded-md border border-[#DEDFE1] focus:outline-0"
          />
          {error && (
            <p className="text-red-500 text-[12px] md:text-[14px] mt-1">
              {error}
            </p>
          )}
        </div>
      ) : (
        <input
          className="ps-2 py-2 rounded-md border border-[#DEDFE1] focus:outline-0"
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
      )}
    </motion.div>
  );
};

export default InputForm;
