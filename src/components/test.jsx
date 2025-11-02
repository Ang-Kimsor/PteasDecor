import { motion } from "framer-motion";

const MyHeavyComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        padding: "20px",
        backgroundColor: "#4caf50",
        color: "white",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      I am a heavy component loaded lazily!
    </motion.div>
  );
};

export default MyHeavyComponent;
