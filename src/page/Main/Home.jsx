// React
import { Link } from "react-router-dom";
// Loadable
import loadable from "@loadable/component";
// Skeleton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import {
  ProductCard,
  CategoryCard,
  CustomerReview,
  BlogCard,
  QuestionDropDown,
} from "../../components";
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
          height="500px"
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

const Home = () => {
  return (
    <main className="flex flex-col w-full h-fit gap-32 font-oxygen">
      {/* Bighero product section  */}
      <BigHero
        img={BigHeroData.img}
        title={BigHeroData.title}
        des={BigHeroData.des}
      />

      {/* Product Feature Section */}
      <section className="flex items-center justify-center w-full bg-white">
        <div className="md:w-[93%] w-[95%]">
          <div className="flex flex-col items-center justify-between w-full gap-3 text-center lg:text-start lg:flex-row">
            <h1 className="lg:w-[70%] md:text-4xl text-[#3D3D3D] text-2xl tracking-wider font-semibold  text-nowrap">
              Feature Products
            </h1>
            <p className="text-[#666666] md:text-sm text-[10px] lg:w-[30%] lg:px-0 px-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              fringilla nunc in molestie feugiat.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-10 lg:grid-cols-4">
            {FeatureProductData.map(
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

      {/* Categories Section */}
      <section className="flex flex-col gap-10 items-center justify-center w-full">
        <div className="text-center flex flex-col gap-5">
          <h1 className="md:text-4xl text-[#3D3D3D] text-2xl tracking-wider font-semibold  px-3">
            View Our Range Of Categories
          </h1>
          <p className="text-[#666666] md:text-sm text-[10px] px-10">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
          </p>
        </div>
        <div className="md:w-[93%] w-[95%] grid md:grid-cols-3 gap-10">
          {CategoryData.map(({ title, img }, index) => (
            <CategoryCard key={index} img={img} title={title} />
          ))}
        </div>
      </section>

      {/* Product Popular Section */}
      <section className="flex items-center justify-center w-full bg-white">
        <div className="md:w-[93%] w-[95%]">
          <div className="flex justify-between md:flex-row flex-col items-center w-full gap-3 text-start">
            <span className="md:text-start text-center">
              <h1 className="md:text-4xl text-[#3D3D3D] text-2xl tracking-wider font-semibold  md:mb-0 mb-3">
                Most Popular Products
              </h1>
              <p className="text-[#666666] md:text-sm text-[10px] mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                fringilla nunc in molestie feugiat.
              </p>
            </span>
            <Link
              to={"/Products"}
              className="text-white text-[15px] bg-[#282828] active:bg-gray-800 h-fit flex gap-2 px-4 font-semibold  py-2 rounded-3xl cursor-pointer"
            >
              View All <p className="font-poppins pt-[0.8px]">&gt;</p>
            </Link>
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
            <span className="md:text-start text-center">
              <h1 className="md:text-4xl text-2xl text-[#3D3D3D] tracking-wider font-semibold  md:mb-0 mb-3">
                Latest Ongoings
              </h1>
              <p className="text-[#666666] md:text-sm text-[10px] mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                fringilla nunc in molestie feugiat. Nunc auctor consectetur
                elit, quis pulvina.
              </p>
            </span>
            <Link
              to={"/Blog"}
              className="text-white text-[15px] bg-[#282828] active:bg-gray-800 text-nowrap h-fit flex gap-2 px-4 font-semibold  py-2 rounded-3xl cursor-pointer"
            >
              Read All Blogs <p className="font-poppins pt-[0.8px]">&gt;</p>
            </Link>
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
            <span className="lg:text-start text-center">
              <h1 className="md:text-4xl text-2xl tracking-wider text-[#3D3D3D] font-semibold  md:mb-0 mb-3">
                Most Popular Products
              </h1>
              <p className="text-[#666666] md:text-sm text-[10px] mt-3 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                fringilla nunc in molestie feugiat.
              </p>
            </span>
            <button className="w-fit text-white text-[15px] bg-[#282828] active:bg-gray-800 h-fit flex gap-2 px-4 font-semibold  py-2 rounded-3xl cursor-pointer">
              Ask A Question <p className="font-poppins pt-[0.8px]">&gt;</p>
            </button>
          </div>
          <div className="lg:w-[57%] w-full  flex flex-col gap-5">
            {QuestionData.map(({ question, answer }, index) => (
              <QuestionDropDown
                key={index}
                question={question}
                answer={answer}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
