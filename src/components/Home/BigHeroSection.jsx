// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// Animation
import { motion } from "framer-motion";
const BigHeroSection = ({ img, title, des }) => {
  return (
    <motion.section
      className="relative w-full h-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      {/* Image */}
      <motion.img
        src={img}
        alt={title}
        className="w-full md:h-auto h-[400px] xl:[height:calc(100vh-200px)] object-cover object-center"
        variants={{
          hidden: { y: -10, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeInOut" },
          },
        }}
      />
      {/* Description */}
      <motion.div
        className="absolute top-0 left-0 flex flex-col items-center justify-center gap-5 size-full md:bg-black/65 bg-black/70"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeInOut" },
          },
        }}
      >
        <h1 className="lg:w-[800px] md:w-[70%] w-[88%] text-center text-white font-oxygen font-bold lg:text-[45px] md:text-[30px] text-[17px]">
          {title}
        </h1>
        <p className="lg:w-[800px] md:w-[70%] w-[88%] text-center md:text-[16px] text-[11px] text-[#CECCCC]">
          {des}
        </p>
        <div className="relative text-white">
          <input
            type="text"
            className="border outline-none pl-3 py-3 placeholder:text-white/80 rounded-full md:w-[330px] w-[280px] h-[45px] pr-[45px] font-oxygen"
            placeholder="Search An Item"
          />
          <button className="font-poppins size-[35px] top-1/2 -translate-y-1/2 absolute right-[7px] text-md text-white rounded-full bg-black/90 cursor-pointer">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default BigHeroSection;
