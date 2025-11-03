// React
import { useState } from "react";
// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
// Motion
import { motion } from "framer-motion";
const QuestionDropDown = ({ question, answer }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <motion.div
      className={`w-full ${
        dropdown
          ? "2xl:h-[120px] xl:h-[140px] lg:h-[160px] md:h-[120px] h-fit"
          : "md:h-[55px] h-[75px]"
      } border-[1px] rounded border-[#A6A6A6] transition-[height] duration-400 cursor-pointer p-4 selection:bg-transparent`}
      onClick={() => setDropdown(!dropdown)}
      variants={{
        hidden: { y: -10, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { duration: 0.5, ease: "easeInOut" },
        },
      }}
    >
      <motion.h1
        className={`w-full ${
          dropdown ? "h-fit " : "h-full"
        } relative text-[#222222] lg:text-sm items-center md:items-baseline text-sm pr-5 flex justify-between`}
        variants={{
          hidden: { y: -10, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeInOut" },
          },
        }}
      >
        {question}
        <FontAwesomeIcon icon={dropdown ? faCaretUp : faCaretDown} />
      </motion.h1>
      <motion.p
        className={`${
          dropdown ? "opacity-100 visible" : "opacity-0 invisible"
        } md:transition-[opacity] md:duration-500 text-[#666666] lg:text-sm text-[12px] mt-5`}
        variants={{
          hidden: { y: -10, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeInOut" },
          },
        }}
      >
        {answer}
      </motion.p>
    </motion.div>
  );
};

export default QuestionDropDown;
