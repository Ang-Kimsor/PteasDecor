// React
import { Link } from "react-router-dom";
// Loadable
import loadable from "@loadable/component";
// Skeleton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// Motion
import { motion } from "framer-motion";
// Data
import {
  BigHeroData,
  FeatureProductData,
  CategoryData,
  PopularProductData,
  CustomerReviewData,
  BlogData,
  QuestionData,
} from "../../data/Home";
// Component Big Hero
const BigHero = loadable(
  () => import("./../../components/Home/BigHeroSection"),
  {
    fallback: (
      <section className="relative w-full h-auto">
        <Skeleton
          width="100%"
          height="600px"
          baseColor="#b8b8b8"
          highlightColor="#e2e2e2"
        />
        <div className="absolute top-0 left-0 flex items-center justify-center size-full">
          <div className="lg:w-[700px] md:w-[70%] w-[88%]">
            <Skeleton
              height="50px"
              baseColor="#949292"
              highlightColor="#bebebe"
            />
            <Skeleton
              height="20px"
              baseColor="#949292"
              highlightColor="#bebebe"
            />
            <Skeleton
              className="mt-5"
              height="30px"
              baseColor="#949292"
              highlightColor="#bebebe"
            />
          </div>
        </div>
      </section>
    ),
  }
);
// Component Product Card
const ProductCard = loadable(
  () => import("./../../components/Product/ProductCard"),
  {
    fallback: (
      <div className="xl:h-[350px] lg:h-[240px] h-[200px]">
        <Skeleton
          width={"100%"}
          height={"100%"}
          baseColor="#b8b8b8"
          highlightColor="#e2e2e2"
          borderRadius={"20px"}
        />
        <Skeleton
          width={"150px"}
          height={"20px"}
          baseColor="#b8b8b8"
          highlightColor="#e2e2e2"
        />
        <Skeleton
          width={"100px"}
          height={"20px"}
          baseColor="#b8b8b8"
          highlightColor="#e2e2e2"
        />
      </div>
    ),
  }
);
// Component Category Card
const CategoryCard = loadable(
  () => import("./../../components/Home/CategoryCard"),
  {
    fallback: (
      <div className="xl:h-[450px] lg:h-[310px] md:h-[200px] h-[400px] relative">
        <Skeleton
          width={"100%"}
          height={"100%"}
          baseColor="#b8b8b8"
          highlightColor="#e2e2e2"
          borderRadius={"30px"}
        />
        <div className="absolute w-full bottom-5 flex justify-center">
          <div className="w-[80%]">
            <Skeleton
              width={"100%"}
              height="30px"
              baseColor="#949292"
              highlightColor="#bebebe"
            />
          </div>
        </div>
      </div>
    ),
  }
);
// Component Customer Rating
const CustomerReview = loadable(
  () => import("./../../components/Home/CustomerRating"),
  {
    fallback: (
      <section className="w-full">
        <Skeleton
          width="100%"
          height="600px"
          baseColor="#b8b8b8"
          highlightColor="#e2e2e2"
        />
      </section>
    ),
  }
);
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
// Component question dropdown
const QuestionDropDown = loadable(
  () => import("./../../components/Home/QuestionDropDown"),
  {
    fallback: (
      <Skeleton
        width={"100%"}
        height={"50px"}
        baseColor="#b8b8b8"
        highlightColor="#e2e2e2"
      />
    ),
  }
);
const Home = () => {
  return (
    <main className="flex flex-col w-full h-fit gap-24 font-oxygen">
      {/* Bighero product section  */}
      <BigHero
        img={BigHeroData.img}
        title={BigHeroData.title}
        des={BigHeroData.des}
      />
      {/* Product Feature Section */}
      <section className="flex items-center justify-center w-full bg-white">
        <div className="md:w-[93%] w-[95%]">
          <motion.div
            className="flex flex-col items-center justify-between w-full gap-3 text-center lg:text-start lg:flex-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.h1
              className="lg:w-[70%] md:text-4xl text-[#3D3D3D] text-2xl tracking-wider font-semibold  text-nowrap"
              variants={{
                hidden: { y: -10, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5, ease: "easeInOut" },
                },
              }}
            >
              Feature Products
            </motion.h1>
            <motion.p
              className="text-[#666666] md:text-sm text-[10px] lg:w-[30%] lg:px-0 px-5"
              variants={{
                hidden: { y: -10, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5, ease: "easeInOut" },
                },
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              fringilla nunc in molestie feugiat.
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-2 gap-4 mt-10 lg:grid-cols-4">
            {FeatureProductData.map(
              ({ id, name, price, discount, stock, rate, category, img }) => (
                <ProductCard
                  key={id}
                  id={id}
                  name={name}
                  price={price}
                  discount={discount}
                  stock={stock}
                  rate={rate}
                  category={category}
                  img={img}
                />
              )
            )}
          </div>
        </div>
      </section>
      {/* Categories Section */}
      <section className="flex flex-col gap-10 items-center justify-center w-full">
        <motion.div
          className="text-center flex flex-col gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.h1
            className="md:text-4xl text-[#3D3D3D] text-2xl tracking-wider font-semibold  px-3"
            variants={{
              hidden: { y: -10, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, ease: "easeInOut" },
              },
            }}
          >
            View Our Range Of Categories
          </motion.h1>
          <motion.p
            className="text-[#666666] md:text-sm text-[10px] px-10"
            variants={{
              hidden: { y: -10, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, ease: "easeInOut" },
              },
            }}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
          </motion.p>
        </motion.div>
        <motion.div
          className="md:w-[93%] w-[95%] grid md:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {CategoryData.map(({ title, img }, index) => (
            <CategoryCard key={index} img={img} title={title} />
          ))}
        </motion.div>
      </section>
      {/* Product Popular Section */}
      <section className="flex items-center justify-center w-full bg-white">
        <div className="md:w-[93%] w-[95%]">
          <div className="flex justify-between md:flex-row flex-col items-center w-full gap-3 text-start">
            <motion.span
              className="md:text-start text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } },
              }}
            >
              <motion.h1
                className="md:text-4xl text-[#3D3D3D] text-2xl tracking-wider font-semibold  md:mb-0 mb-3"
                variants={{
                  hidden: { y: -10, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  },
                }}
              >
                Most Popular Products
              </motion.h1>
              <motion.p
                className="text-[#666666] md:text-sm text-[10px] mt-3"
                variants={{
                  hidden: { y: -10, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  },
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                fringilla nunc in molestie feugiat.
              </motion.p>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Link
                to={"/Products"}
                className="text-white text-[15px] bg-[#282828] active:bg-gray-800 h-fit flex gap-2 px-4 font-semibold  py-2 rounded-3xl cursor-pointer"
              >
                View All <p className="font-poppins pt-[0.8px]">&gt;</p>
              </Link>
            </motion.span>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-10 lg:grid-cols-4">
            {PopularProductData.map(
              (
                { id, name, price, discount, stock, rate, category, img },
                index
              ) => (
                <ProductCard
                  key={index}
                  id={id}
                  name={name}
                  price={price}
                  discount={discount}
                  stock={stock}
                  rate={rate}
                  category={category}
                  img={img}
                />
              )
            )}
          </div>
        </div>
      </section>
      {/* Customer Review Section */}
      <section className="w-full">
        <CustomerReview
          img={CustomerReviewData.img}
          title={CustomerReviewData.title}
          des={CustomerReviewData.des}
          subdes={CustomerReviewData.subdes}
        />
      </section>
      {/* Blog Feature Section*/}
      <section className="flex items-center justify-center w-full">
        <div className="md:w-[93%] w-[95%]">
          <div className="flex justify-between md:flex-row flex-col items-center w-full gap-3 text-start">
            <motion.span
              className="md:text-start text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } },
              }}
            >
              <motion.h1
                variants={{
                  hidden: { y: -10, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  },
                }}
                className="md:text-4xl text-2xl text-[#3D3D3D] tracking-wider font-semibold  md:mb-0 mb-3"
              >
                Latest Ongoings
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
                className="text-[#666666] md:text-sm text-[10px] mt-3"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                fringilla nunc in molestie feugiat. Nunc auctor consectetur
                elit, quis pulvina.
              </motion.p>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Link
                to={"/Blog"}
                className="text-white text-[15px] bg-[#282828] active:bg-gray-800 text-nowrap h-fit flex gap-2 px-4 font-semibold  py-2 rounded-3xl cursor-pointer"
              >
                Read All Blogs <p className="font-poppins pt-[0.8px]">&gt;</p>
              </Link>
            </motion.span>
          </div>
          <div className="grid lg:grid-cols-3 lg:gap-5 gap-16 mt-8">
            {BlogData.map(({ id, img, profile, name, date, des }, index) => (
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
        </div>
      </section>
      {/* Most Ask Questions Section */}
      <section className="w-full  flex items-center justify-center">
        <div className="w-[93%]  flex flex-wrap gap-[3%] gap-y-5">
          <div className="lg:w-[40%] w-full flex flex-col lg:items-baseline items-center">
            <motion.span
              className="lg:text-start text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } },
              }}
            >
              <motion.h1
                className="md:text-4xl text-2xl tracking-wider text-[#3D3D3D] font-semibold  md:mb-0 mb-3"
                variants={{
                  hidden: { y: -10, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  },
                }}
              >
                Most Popular Products
              </motion.h1>
              <motion.p
                className="text-[#666666] md:text-sm text-[10px] mt-3 mb-8"
                variants={{
                  hidden: { y: -10, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  },
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                fringilla nunc in molestie feugiat.
              </motion.p>
            </motion.span>
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-fit text-white text-[15px] bg-[#282828] active:bg-gray-800 h-fit flex gap-2 px-4 font-semibold  py-2 rounded-3xl cursor-pointer"
            >
              Ask A Question <p className="font-poppins pt-[0.8px]">&gt;</p>
            </motion.button>
          </div>
          <motion.div
            className="lg:w-[57%] w-full  flex flex-col gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {QuestionData.map(({ question, answer }, index) => (
              <QuestionDropDown
                key={index}
                question={question}
                answer={answer}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;
