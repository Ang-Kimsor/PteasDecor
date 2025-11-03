// React
import { useSelector, useDispatch } from "react-redux";
import { removefromwishlist, emptywishlist } from "../../app/wishlistSlice";
import { wishlistocart } from "./../../app/cartSlice";
// Loadable
import loadable from "@loadable/component";
// Skeleton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// Motion
import { motion } from "framer-motion";
const WishlistEntry = loadable(
  () => import("./../../components/UserDashboard/WishlistEntry"),
  {
    fallback: (
      <Skeleton
        width={"100%"}
        height={"100px"}
        baseColor="#b8b8b8"
        highlightColor="#e2e2e2"
      />
    ),
  }
);
const Wishlist = () => {
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  return (
    <>
      <main className="flex flex-col items-center justify-center w-full mt-10 font-exo">
        <section className="w-[95%]">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex items-center justify-between"
          >
            <h1 className="text-3xl  font-bold text-[#2d2d2d]">Wishlist</h1>
            <p
              onClick={() => dispatch(emptywishlist())}
              className="hover:underline text-[16px] text-[#575757] cursor-pointer text-nowrap"
            >
              Clear All
            </p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-[16px] text-[#575757] mt-4 "
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </motion.p>
          <div className="py-5 bg-[#20263E] mt-5 rounded-t-[11px] grid grid-cols-[1fr_1fr_1fr_1fr_1fr] md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-3 text-white md:text-[14px] text-[10px] font-bold">
            <h1 className="ps-[10px] md:ps-[20px]">Items</h1>
            <h1 className="w-full">Price</h1>
            <h1 className="w-full">Stock</h1>
            <h1 className="w-full text-center">Remove</h1>
            <h1 className="w-full text-center">Add to Cart</h1>
          </div>
          {wishlistItems.length == 0 ? (
            <p className="w-full text-lg h-[345px] border-t-0 flex items-center justify-center text-[#919191] border-2 border-[#DEDFE1] rounded-b-[11px]">
              No Items In Wishlist.
            </p>
          ) : (
            <div className="md:text-[16px] text-[11px]">
              {wishlistItems.map(
                ({ id, image, name, price, stock, discount }, index) => (
                  <WishlistEntry
                    key={id}
                    id={id}
                    img={image}
                    name={name}
                    price={price}
                    stock={stock}
                    discount={discount}
                    len={wishlistItems.length - 1 == index}
                    remove={() => dispatch(removefromwishlist(id))}
                    addtocart={() => {
                      const qty = 1;
                      dispatch(
                        wishlistocart({
                          id,
                          name,
                          price,
                          discount,
                          stock,
                          qty,
                          image,
                        })
                      );
                    }}
                  />
                )
              )}
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default Wishlist;
