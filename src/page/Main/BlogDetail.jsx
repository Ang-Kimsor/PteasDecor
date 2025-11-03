// React
import { useLocation } from "react-router-dom";
// Data
import { BlogDataAll } from "../../data/Blog";
// Loadable
import loadable from "@loadable/component";
// Skeleton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// Motion
import { motion } from "framer-motion";
// Component Blog Card
const BlogCard = loadable(() => import("./../../components/Home/BlogCard"), {
  fallback: (
    <div className="xl:h-[265px] lg:h-[200px] h-[calc(300px)] mb-20">
      <Skeleton
        width={"100%"}
        height={"100%"}
        baseColor="#b8b8b8"
        highlightColor="#e2e2e2"
        borderRadius={"20px"}
      />
      <div className="flex gap-4 items-center">
        <Skeleton
          width={"30px"}
          height={"30px"}
          baseColor="#b8b8b8"
          highlightColor="#e2e2e2"
          borderRadius={"50%"}
        />
        <Skeleton
          width={"200px"}
          height={"20px"}
          baseColor="#b8b8b8"
          highlightColor="#e2e2e2"
        />
      </div>
      <Skeleton
        width={"100%"}
        height={"20px"}
        baseColor="#b8b8b8"
        highlightColor="#e2e2e2"
      />
      <Skeleton
        width={"100%"}
        height={"20px"}
        baseColor="#b8b8b8"
        highlightColor="#e2e2e2"
      />
    </div>
  ),
});
const BlogDetail = () => {
  const { state } = useLocation();
  const blogid = state.blogid;
  const p =
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.";
  const h1 = "Lorem Ipsum Heading";
  const { img, profile, name, date } = BlogDataAll.find(
    (item) => item.id == blogid
  );
  const FeatureBlog = BlogDataAll.filter((item) => item.id != blogid).slice(
    1,
    4
  );
  return (
    <main className="w-full flex flex-col items-center mt-10 font-oxygen gap-10">
      <motion.section
        className="w-[95%] flex flex-col gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.img
          src={img}
          className="lg:w-full lg:h-[600px] object-cover object-center rounded-3xl"
          alt={name}
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
          className="lg:text-[30px] md:text-2xl text-md  font-bold text-[#3D3D3D]"
          variants={{
            hidden: { y: -10, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: "easeInOut" },
            },
          }}
        >
          Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog
        </motion.h1>
        <motion.div
          className="w-full flex px-2 items-center gap-2 mt-2"
          variants={{
            hidden: { y: -10, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: "easeInOut" },
            },
          }}
        >
          <img src={profile} alt="" className="size-[30px] rounded-full" />
          <p className="text-[15px] font-[400] text-[#404040]">
            {name} • {date}
          </p>
        </motion.div>
        <motion.p
          variants={{
            hidden: { y: -10, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: "easeInOut" },
            },
          }}
          className="font-exo md:text-lg text-sm text-[#666666] mt-3"
        >
          {p}
        </motion.p>
        <motion.h1
          variants={{
            hidden: { y: -10, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: "easeInOut" },
            },
          }}
          className="font-exo font-semibold text-xl my-3"
        >
          {h1}
        </motion.h1>
        <motion.p
          variants={{
            hidden: { y: -10, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: "easeInOut" },
            },
          }}
          className="font-exo md:text-lg text-sm text-[#666666]"
        >
          {p}
        </motion.p>
      </motion.section>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
        className="w-[95%] flex flex-col gap-8"
      >
        <motion.div
          variants={{
            hidden: { y: -10, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: "easeInOut" },
            },
          }}
          className="w-full grid md:grid-cols-2 gap-5 grid-cols-1"
        >
          <img src={img} className="rounded-3xl" alt={name} />
          <img src={img} className="rounded-3xl" alt={name} />
        </motion.div>
        <motion.p
          variants={{
            hidden: { y: -10, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: "easeInOut" },
            },
          }}
          className="font-exo md:text-lg text-sm text-[#666666]"
        >
          {p}
        </motion.p>
        <motion.h1
          variants={{
            hidden: { y: -10, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: "easeInOut" },
            },
          }}
          className="font-exo font-semibold text-xl my-3"
        >
          {h1}
        </motion.h1>
        <motion.p
          variants={{
            hidden: { y: -10, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: "easeInOut" },
            },
          }}
          className="font-exo md:text-lg text-sm text-[#666666]"
        >
          {p}
        </motion.p>
      </motion.section>
      <section className="w-[95%] flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full mb-10 md:text-[36px] md:text-start text-center md:font-medium text-[#3D3D3D] font-semibold text-[28px]"
        >
          Suggested Posts
        </motion.h1>
        <div className="w-full grid lg:grid-cols-3 lg:gap-x-5 lg:gap-y-16 gap-12">
          {FeatureBlog.map(({ id, img, profile, name, date, des }, index) => (
            <BlogCard
              key={index}
              id={id}
              img={img}
              profile={profile}
              name={name}
              date={date}
              des={des}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default BlogDetail;
