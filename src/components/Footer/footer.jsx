// React
import { Link } from "react-router-dom";
// Logo
import logo from "./../../assets/Logo/PteasDecor.png";
// Data
import {
  FooterLi,
  FooterLiIconImg,
  FooterLiIconSocial,
} from "../../data/Footer";
// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Motion
import { motion } from "framer-motion";
const footer = () => {
  return (
    <footer className="w-full pt-10 mt-32 bg-[#20263e] flex flex-col items-center">
      <motion.div
        className="flex flex-col items-center justify-center w-full py-5 h-fit"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.img
          src={logo}
          alt="PteasDecor"
          className="w-[180px]"
          variants={{
            hidden: { y: -10, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: "easeInOut" },
            },
          }}
        />
        <motion.h1
          className="my-3 font-oxygen tracking-wider text-white md:text-3xl text-xl 2xl:w-1/4 2xl:px-0 px-5 md:leading-[45px] text-center"
          variants={{
            hidden: { y: -10, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: "easeInOut" },
            },
          }}
        >
          Subscribe PteasDecor To Stay Updated About Discounts
        </motion.h1>
        <motion.div
          className="relative text-white"
          variants={{
            hidden: { y: -10, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: "easeInOut" },
            },
          }}
        >
          <input
            type="text"
            className="border outline-none pl-3 py-3 rounded-full w-[290px] h-[45px] pr-[45px] font-oxygen"
            placeholder="person@gmail.com"
          />
          <button className="font-poppins size-[35px] top-1/2 -translate-y-1/2 absolute right-[7px] text-xl text-white rounded-full bg-black/50">
            &gt;
          </button>
        </motion.div>
      </motion.div>
      <div className="grid w-full grid-cols-1 px-10 py-10 mt-10 border-y-2 border-white/50 h-fit 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-7 ">
        {FooterLi.map(({ title, submenu }, index) => (
          <motion.ul
            key={index}
            className="flex flex-col gap-3 "
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.li
              className="mb-2 text-xl font-semibold text-white uppercase md:text-md font-poppins"
              variants={{
                hidden: { y: -10, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5, ease: "easeInOut" },
                },
              }}
            >
              {title}
            </motion.li>
            {submenu.map(({ name, path, icon }, i) => (
              <motion.li
                key={i}
                className="w-fit text-sm text-white/50 hover:text-white"
                variants={{
                  hidden: { y: -10, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  },
                }}
              >
                <Link
                  to={path}
                  className="flex items-center gap-2 font-medium font-poppins"
                >
                  <FontAwesomeIcon
                    className="w-[35px] py-2.5 bg-gray-200/20 rounded"
                    icon={icon}
                  />
                  {name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        ))}
        <div className="flex flex-col gap-3">
          {FooterLiIconImg.map(({ title, icon }, index) => (
            <motion.div
              key={index}
              className="w-full"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } },
              }}
            >
              <motion.h1
                className="mb-2 text-xl font-semibold text-white uppercase md:text-md font-poppins"
                variants={{
                  hidden: { y: -10, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  },
                }}
              >
                {title}
              </motion.h1>
              <motion.div
                className="w-[190px] flex justify-between pr-3 gap-5"
                variants={{
                  hidden: { y: -10, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  },
                }}
              >
                {icon.map((item, i) => (
                  <img
                    key={i}
                    src={item}
                    alt={`Payment ${i}`}
                    className="w-1/4 h-[35px]"
                  />
                ))}
              </motion.div>
            </motion.div>
          ))}
          {FooterLiIconSocial.map(({ title, icon }, index) => (
            <motion.div
              key={index}
              className="w-full"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } },
              }}
            >
              <motion.h1
                className="mb-2 text-xl font-semibold text-white uppercase md:text-md font-poppins"
                variants={{
                  hidden: { y: -10, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  },
                }}
              >
                {title}
              </motion.h1>
              <motion.div
                className="w-[200px] flex justify-between pr-3 gap-5 mt-3"
                variants={{
                  hidden: { y: -10, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  },
                }}
              >
                {icon.map(({ icon, path }, index) => (
                  <Link
                    key={index}
                    to={path}
                    className="flex items-center gap-2 font-medium font-poppins text-white/50 hover:text-white"
                  >
                    <FontAwesomeIcon
                      className="w-[35px] py-2.5 bg-gray-200/20 rounded"
                      icon={icon}
                    />
                  </Link>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        className="w-full h-[70px] flex items-center justify-center text-white/50 font-medium tracking-wider"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        Copyright <sup>©</sup> {new Date().getFullYear()} PteasDecor, Inc
      </motion.div>
    </footer>
  );
};

export default footer;
