// React
import { useEffect, useMemo, useState } from "react";
// Loadable
import loadable from "@loadable/component";
// Skeleton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// Motion
import { motion } from "framer-motion";
// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSliders, faX } from "@fortawesome/free-solid-svg-icons";
// Data
import { ProductItem } from "./../../data/Product";
// Component Product Card
const ProductCard = loadable(
  () => import("./../../components/Product/ProductCard"),
  {
    fallback: (
      <div className="xl:h-[250px] lg:h-[240px] h-[200px] mb-10">
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
// Check Box Component
const Checkbox = loadable(() => import("./../../components/Product/Checkbox"), {
  fallback: (
    <Skeleton
      width={"150px"}
      height={"20px"}
      baseColor="#b8b8b8"
      highlightColor="#e2e2e2"
    />
  ),
});
const ProductPage = () => {
  const options = [
    { label: "All Categories", value: "All Categories" },
    { label: "Bedroom", value: "Bedroom" },
    { label: "Bathroom", value: "Bathroom" },
    { label: "Kitchen", value: "Kitchen" },
    { label: "Living Room", value: "Living Room" },
    { label: "Dining Room", value: "Dining Room" },
  ];
  const priceRange = [
    { label: "Default Price", value: "Default Price" },
    { label: "$0.00 - $30.00", value: "0.00-30.00" },
    { label: "$30.00 - $60.00", value: "30.00-60.00" },
    { label: "$60.00 - $90.00", value: "60.00-90.00" },
    { label: "$90.00 - $120.00", value: "90.00-120.00" },
    { label: "$120+", value: "120.00" },
  ];
  const [category, setCategory] = useState(options[0].value);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [submitSearch, setSubmitSearch] = useState("");
  const handleCategory = (value) => {
    setCategory(value);
  };
  const [price, setPrice] = useState(priceRange[0].value);
  const handlePrice = (value) => {
    setPrice(value);
  };
  const [filter, setFilter] = useState(false);
  useEffect(() => {
    if (filter) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [filter]);
  const Filter = useMemo(() => {
    let filtered = [...ProductItem];
    if (category !== "All Categories")
      filtered = filtered.filter((p) => p.category === category);
    if (price !== "Default Price") {
      const [min, max] = price.includes("-")
        ? price.split("-").map((pr) => parseFloat(pr))
        : [parseFloat(price), Infinity];
      filtered = filtered.filter(
        (p) =>
          p.price * (1 - p.discount / 100) >= min &&
          p.price * (1 - p.discount / 100) <= max
      );
    }
    if (submitSearch.trim !== "")
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().startsWith(submitSearch.toLowerCase())
      );
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
    return filtered;
  }, [category, price, submitSearch]);

  return (
    <main className="w-full mx-auto px-4 md:px-6 py-6 relative lg:flex gap-8 font-oxygen mt-[20px]">
      {/* Overlay Backdrop */}
      <div
        className={`bg-black/50 backdrop-blur-xs fixed inset-0 z-[105] lg:hidden transition-all duration-300 ${filter ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setFilter(false)}
      ></div>

      {/* Filter Sidebar / Mobile Drawer */}
      <aside
        className={`fixed lg:sticky top-0 lg:top-[110px] left-0 h-screen lg:h-fit lg:max-h-[calc(100vh-130px)] w-[320px] max-w-[85vw] lg:w-[27%] xl:w-[22%] z-[110] lg:z-10 bg-white lg:bg-transparent shadow-2xl lg:shadow-none transition-transform duration-300 ease-in-out lg:translate-x-0 flex flex-col lg:self-start ${filter ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Mobile Drawer Header */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100 lg:hidden">
          <span className="text-xl font-semibold text-gray-800">Filters</span>
          <button
            onClick={() => setFilter(false)}
            className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-50 hover:bg-gray-100 active:scale-95 transition-all text-gray-500"
          >
            <FontAwesomeIcon icon={faX} className="text-sm" />
          </button>
        </div>

        {/* Scrollable Container */}
        <div className="flex-1 overflow-y-auto px-6 py-6 lg:p-0 lg:overflow-y-auto flex flex-col gap-6 lg:gap-5">
          <div className="bg-white lg:border lg:border-gray-200/80 lg:rounded-2xl lg:p-6 lg:shadow-xs space-y-6">
            <div>
              <span className="text-[17px] font-semibold text-gray-900 border-s-3 border-[#3D3D3D] ps-2.5 block mb-4">
                Categories
              </span>
              <ul className="flex flex-col gap-2.5">
                {options.map(({ label, value }) => (
                  <Checkbox
                    key={value}
                    label={label}
                    value={value}
                    topic={category}
                    onChange={handleCategory}
                  />
                ))}
              </ul>
            </div>

            <div className="border-t border-gray-100 pt-6 lg:pt-5">
              <span className="text-[17px] font-semibold text-gray-900 border-s-3 border-[#3D3D3D] ps-2.5 block mb-4">
                Price Range
              </span>
              <ul className="flex flex-col gap-2.5">
                {priceRange.map(({ label, value }) => (
                  <Checkbox
                    key={value}
                    label={label}
                    value={value}
                    topic={price}
                    onChange={handlePrice}
                  />
                ))}
              </ul>
            </div>

            {/* Clear Filters Button inside Sidebar */}
            {(category !== options[0].value || price !== priceRange[0].value) && (
              <button
                onClick={() => {
                  setCategory(options[0].value);
                  setPrice(priceRange[0].value);
                }}
                className="w-full mt-4 bg-gray-100 hover:bg-gray-200/85 text-gray-700 font-medium py-2.5 rounded-xl transition-all duration-200 text-sm flex items-center justify-center gap-2 active:scale-98"
              >
                Clear All Filters
              </button>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <aside className="lg:w-[73%] xl:w-[78%] w-full h-full flex flex-col items-center z-[1]">
        <div className="lg:w-[98%] w-full flex flex-col items-center lg:items-baseline gap-5">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-[26px] lg:text-[36px] w-full lg:w-fit text-center font-oxygen font-semibold text-[#3D3D3D]"
          >
            Our Collection Of Products
          </motion.span>
          <motion.form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitSearch(search);
            }}
            className="relative w-[95%] lg:w-full"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <input
              className="w-full sticky top-0 font-oxygen ps-[20px] pe-[8px] text-[16px] text-[#5F5F5F] rounded-[42px] border-[1px] border-[#00000026] py-[8px] focus:outline-none focus:bg-transparent focus:ring-0"
              type="search"
              placeholder="Search An Item"
              value={search}
              onChange={(e) => {
                e.target.value === "" && setSubmitSearch("");
                setSearch(e.target.value);
              }}
            />
            <FontAwesomeIcon
              className="absolute right-[5px] top-1/2 -translate-y-1/2 bg-[#666666] text-white rounded-[24px] p-[8px] hover:cursor-pointer active:bg-black/90"
              icon={faSearch}
              onClick={() => setSubmitSearch(search)}
            />
          </motion.form>
          <motion.div
            className="w-[95%] flex gap-2 items-center lg:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div
              className="w-fit h-[40px] bg-white cursor-pointer font-oxygen text-sm items-center flex px-4 mt-2 border text-black/80 lg:hidden border-black/30 gap-3"
              onClick={() => setFilter(true)}
            >
              <FontAwesomeIcon icon={faSliders} />
              <p>Filter</p>
            </div>
          </motion.div>

          <motion.span
            className="text-[#949494] text-[16px] w-[95%] lg:w-full"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            sapiente nihil maxime blanditiis repellendus.
          </motion.span>
          {Filter.length == 0 ? (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full text-[#919191] h-[405px] flex flex-col items-center justify-center"
            >
              No products were found matching your selection.
              <button
                className="mt-5 bg-black text-white py-3 px-5 rounded-full font-exo"
                onClick={() => {
                  setCategory(options[0].value);
                  setPrice(priceRange[0].value);
                  setSearch("");
                  setSubmitSearch("");
                }}
              >
                Clear Filter
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-2 w-[95%] md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-[30px] space-y-5 mx-10 lg:mx-0">
              {loading
                ? Filter.map((_, index) => (
                  <div
                    key={index}
                    className="xl:h-[250px] lg:h-[240px] h-[200px] mb-10"
                  >
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
                ))
                : Filter.map(
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
                      img={img[0]}
                    />
                  )
                )}
            </div>
          )}
        </div>
      </aside>
    </main>
  );
};

export default ProductPage;
