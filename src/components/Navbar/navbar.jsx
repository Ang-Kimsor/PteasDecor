// React
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Logo
import logo from "./../../assets/Logo/PteasDecor.png";
// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShoppingBag,
  faBars,
  faX,
} from "@fortawesome/free-solid-svg-icons";
// Data
import { MenuLi, SocialIcon } from "../../data/Navbar";
// Animation
import { motion } from "framer-motion";
const navbar = () => {
  // menu state open/close
  const [menuopen, setMenuopen] = useState(false);
  // effect
  useEffect(() => {
    if (menuopen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuopen]);
  return (
    <>
      {/* Aside */}
      <aside
        className={`${
          menuopen ? "translate-x-0" : "-translate-x-full"
        } transition-all duration-500 fixed z-[101] left-0 flex flex-col justify-between bg-white w-full h-screen md:hidden`}
      >
        <div className="relative w-full h-[90px] border-b-2 border-black/30 flex justify-center items-center">
          <img src={logo} alt="" className="w-[120px] h-[70px]" />
          <FontAwesomeIcon
            className="absolute -translate-y-1/2 cursor-pointer right-5 top-1/2"
            icon={faX}
            onClick={() => setMenuopen(false)}
          />
        </div>
        <ul className="flex-col items-center px-5 font-semibold text-center uppercase text-md font-oxygen">
          {MenuLi.map(({ name, path }, index) => (
            <li className="py-5" key={index} onClick={() => setMenuopen(false)}>
              <Link to={path}>{name}</Link>
            </li>
          ))}
        </ul>
        <div className="w-full h-[100px] flex items-center justify-center gap-5 text-2xl text-black/50 border-t-2 border-black/30">
          {SocialIcon.map(({ icon, path }, index) => (
            <Link key={index} to={path} className="hover:text-black">
              <FontAwesomeIcon icon={icon} />
            </Link>
          ))}
        </div>
      </aside>
      {/* Navbar */}
      <motion.nav
        className="sticky top-0 w-full h-[90px] flex items-center justify-between md:px-10 px-5 bg-white border-b-2 border-black/30 z-[100]"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {/* Icon Logo */}
        <motion.div
          className="w-[100px] h-[65px] flex items-center font-poppins"
          variants={{
            hidden: { y: -10, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: "easeInOut" },
            },
          }}
        >
          <img src={logo} alt="Pteas Decor Logo" className="size-full" />
        </motion.div>
        {/* Menu list */}
        <motion.div
          variants={{
            hidden: { y: -10, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: "easeInOut" },
            },
          }}
        >
          <motion.ul
            className="justify-center hidden gap-6 font-semibold uppercase md:flex text-md font-oxygen"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {MenuLi.map(({ name, path }, index) => (
              <motion.li
                key={index}
                className="text-black/70 hover:text-black"
                onClick={() => setMenuopen(false)}
                variants={{
                  hidden: { y: -10, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  },
                }}
              >
                <Link to={path}>{name}</Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        {/* Icon list */}
        <motion.div
          variants={{
            hidden: { y: -10, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: "easeInOut" },
            },
          }}
        >
          <motion.div
            className="flex items-center h-full gap-4 text-lg"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.span
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
                to={"/LogIn"}
                className="flex items-center gap-2 cursor-pointer"
              >
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </motion.span>
            <motion.span
              variants={{
                hidden: { y: -10, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5, ease: "easeInOut" },
                },
              }}
            >
              <Link to="/Cart">
                <FontAwesomeIcon
                  className="cursor-pointer"
                  icon={faShoppingBag}
                />
              </Link>
            </motion.span>
            <motion.span
              className="md:hidden"
              onClick={() => setMenuopen(true)}
              variants={{
                hidden: { y: -10, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5, ease: "easeInOut" },
                },
              }}
            >
              <FontAwesomeIcon className="cursor-pointer" icon={faBars} />
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default navbar;
