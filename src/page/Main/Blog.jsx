// React
import { useState } from "react";
// Data
import { BlogData1, BlogData2, BlogWidgetData } from "./../../data/Blog";
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
// Component Widget
const BlogWidget = loadable(
  () => import("./../../components/Blog/BlogWidget"),
  {
    fallback: (
      <section className="w-full  ">
        <Skeleton
          width={"100%"}
          height={"400px"}
          baseColor="#b8b8b8"
          highlightColor="#e2e2e2"
          borderRadius={"10px"}
        />
      </section>
    ),
  }
);
const Blog = () => {
  const [blogdata2, setBlogdata2] = useState(BlogData2.slice(0, 3));
  return (
    <main className="flex flex-col items-center w-full h-fit font-oxygen">
      <section className="w-[95%]">
        <motion.h1
          className="w-full my-5 md:text-[36px] md:text-start text-center md:font-medium text-[#3D3D3D] font-semibold text-[28px]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          Our Feature Posts
        </motion.h1>

        <BlogWidget
          id={BlogWidgetData.id}
          img={BlogWidgetData.img}
          title={BlogWidgetData.title}
          des={BlogWidgetData.des}
          profile={BlogWidgetData.profile}
          name={BlogWidgetData.name}
          date={BlogWidgetData.date}
        />
      </section>
      <section className="w-[95%] grid lg:grid-cols-3 lg:gap-5 gap-12 mt-10">
        {BlogData1.map(({ id, img, profile, name, date, des }, index) => (
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
      </section>
      <section className="w-[95%] flex flex-col items-center">
        <motion.h1
          className="w-full mb-10 mt-20 md:text-[36px] md:text-start text-center md:font-medium text-[#3D3D3D] font-semibold text-[28px]"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          Latest Posts
        </motion.h1>
        <div className="w-full grid lg:grid-cols-3 lg:gap-x-5 lg:gap-y-16 gap-12">
          {blogdata2.map(({ id, img, profile, name, date, des }, index) => (
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
        {blogdata2 != BlogData2 && (
          <button
            className="bg-[#282828] w-fit px-5 py-2 mt-10 text-white rounded-full outline-none flex gap-2 items-center cursor-pointer"
            onClick={() => setBlogdata2(BlogData2)}
          >
            Load More Blogs
          </button>
        )}
      </section>
    </main>
  );
};

export default Blog;
