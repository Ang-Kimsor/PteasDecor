// React
import { Link, useNavigate } from "react-router-dom";
// Motion
import { motion } from "framer-motion";
const BlogWidget = ({ id, img, title, des, profile, name, date }) => {
  const navigate = useNavigate();
  const path = `/Blog/BlogDetail/${name.replaceAll(/\s+/g, "-")}`;
  return (
    <motion.article
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Link
        to={path}
        onClick={(e) => {
          e.preventDefault();
          navigate(path, {
            state: { blogid: id },
          });
        }}
        className="w-full grid lg:grid-cols-2 grid-cols-1 gap-10 cursor-pointer"
      >
        <img src={img} alt={title} className="rounded-3xl" />
        <div className="flex flex-col items-center lg:items-baseline justify-center gap-5">
          <h1 className="lg:text-[20px] lg:text-start text-center text-xl font-bold text-[#404040]">
            {title}
          </h1>
          <p className="lg:text-[15px] lg:text-start text-center md:text-sm text-[10px] lg:w-full w-[90%] text-[#666666]">
            {des}
          </p>
          <div className="lg:w-full w-[90%] md:justify-start justify-center flex px-2 items-center gap-2">
            <img
              src={profile}
              alt={name}
              className="size-[40px] rounded-full"
            />
            <p className="text-[15px] font-[400] text-[#404040]">
              {name} • {date}
            </p>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};
export default BlogWidget;
