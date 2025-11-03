// React
import { Link } from "react-router-dom";
// Motion
import { motion } from "framer-motion";
const CategoryCard = ({ img, title }) => {
  return (
    <motion.article
      variants={{
        hidden: { y: -10, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { duration: 0.5, ease: "easeInOut" },
        },
      }}
      className="relative cursor-pointer overflow-hidden group rounded-3xl"
    >
      <Link to={"/Products"}>
        <img
          src={img}
          alt={title}
          className="rounded-3xl group-hover:scale-105 transition-all duration-500"
        />
        <span className=" size-full bg-black/20 absolute top-0 left-0 rounded-3xl flex items-end justify-center pb-3 lg:text-xl md:text-sm text-lg font-semibold text-white">
          {title}
        </span>
      </Link>
    </motion.article>
  );
};

export default CategoryCard;
