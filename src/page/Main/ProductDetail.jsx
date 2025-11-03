// React
import { useRef, useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// Data
import { ProductItem } from "../../data/Product";
// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import {
  faBoxesStacked,
  faHeart,
  faMagnifyingGlass,
  faParachuteBox,
  faStar,
  faTruckArrowRight,
} from "@fortawesome/free-solid-svg-icons";
// Components
import { CartWidget, ImagePreview, WishlistWidget } from "../../components";
// Loadable
import loadable from "@loadable/component";
// Skeleton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// Motion
import { motion } from "framer-motion";
// Redux State
import { addtocart } from "./../../app/cartSlice";
import { addtowishlist, removefromwishlist } from "../../app/wishlistSlice";
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
// Component Description
const DescriptionReview = loadable(
  () => import("./../../components/Product/DescriptionReview"),
  {
    fallback: (
      <section className="mt-16 w-full">
        <Skeleton
          width={"100%"}
          height={"300px"}
          baseColor="#b8b8b8"
          highlightColor="#e2e2e2"
        />
      </section>
    ),
  }
);
const ProductDetail = () => {
  const { state } = useLocation();
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const productid = state.productid;
  const { id, name, price, discount, img, stock, rate, category } =
    ProductItem.find((item) => item.id == parseInt(productid));
  let overstock = cartItems.find((item) => item.id === productid);
  const image = img;
  const reviewCount = useRef(Math.round(Math.random() * 100) + 1);
  const [qty, setQty] = useState(1);
  const [imgshow, setImgshow] = useState(image[0]);
  const heart = wishlistItems.some((item) => item.id === id);
  const [cart, setCart] = useState(false);
  const [over, setOver] = useState(false);
  const [wishlist, setWishlist] = useState(false);
  const [preview, setPreview] = useState(false);

  const handleDecrease = () => {
    setQty(qty - 1 <= 0 ? 1 : parseInt(qty - 1));
  };
  const handleIncrease = () => {
    setQty(qty >= stock ? stock : parseInt(qty + 1));
  };
  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      setQty("");
      return;
    }
    const num = parseInt(value);
    if (num <= 0) setQty(1);
    else if (num > stock) setQty(stock);
    else setQty(num);
  };
  const handleBlur = () => {
    if (qty === "") setQty(1);
  };
  const handleCart = () => {
    if (!overstock || overstock.qty + qty <= stock) {
      setCart(true);
      setTimeout(() => setCart(false), 5000);
    } else {
      setCart(false);
      setOver(true);
      setTimeout(() => setOver(false), 5000);
    }
  };
  const handleWishlist = () => {
    const image = img[0];
    let wishlistProduct = wishlistItems.find((item) => item.id === productid);
    if (!wishlistProduct) {
      setWishlist(true);
      setTimeout(() => setWishlist(false), 5000);
      dispatch(
        addtowishlist({
          id,
          name,
          qty,
          price,
          discount,
          image,
          stock,
        })
      );
    } else {
      setWishlist(false);
      dispatch(removefromwishlist(id));
    }
  };
  const similarProduct = useMemo(() => {
    return ProductItem.filter(
      (f) => f.category == category && f.id != productid
    )
      .sort(() => Math.random() - 0.5)
      .slice(0, 4)
      .map((p) => ({ ...p, img: p.img[0] }));
  }, [productid]);
  useEffect(() => {
    setImgshow(img[0]);
    setCart(false);
    setWishlist(false);
    setOver(false);
  }, [productid]);
  return (
    <>
      <ImagePreview
        imgshow={imgshow}
        preview={preview}
        setPreview={setPreview}
      />
      {stock != 0 && (
        <CartWidget
          img={image[0]}
          name={name}
          price={price}
          discount={discount}
          qty={qty}
          cart={cart}
          setCart={setCart}
          over={over}
        />
      )}
      <WishlistWidget
        img={image[0]}
        name={name}
        price={price}
        discount={discount}
        wishlist={wishlist}
        setHeart={setWishlist}
      />
      <main className="w-full mt-10 flex flex-col items-center justify-center font-oxygen selection:bg-transparent">
        <motion.section
          className="w-[95%] flex flex-col"
          initial="hidden"
          animate="visible"
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
            className="flex md:text-[16px] text-[13px] items-center text-[#414141] gap-2"
          >
            <Link to={"/Products"} className="text-[#7B7B7B]">
              Product Listing
            </Link>

            <p className="font-poppins text-[#7B7B7B] text-lg">&gt;</p>
            {category}
            <p className="font-poppins text-[#7B7B7B] text-lg">&gt;</p>
            {name}
          </motion.h1>
          <motion.article
            className="w-full mt-5 grid lg:grid-cols-2 lg:gap-6 gap-5"
            variants={{
              hidden: { y: -10, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, ease: "easeInOut" },
              },
            }}
          >
            <div className="flex lg:flex-row flex-col-reverse gap-5">
              <motion.div
                className={`${
                  image.length < 3 ? "justify-start gap-5" : "justify-between"
                } lg:w-[120px] 2xl:w-[200px] w-full h-fit lg:h-[600px] flex lg:flex-col flex-row lg:gap-5 lg:justify-start `}
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.2 } },
                }}
              >
                {image.map((item, index) => (
                  <motion.img
                    key={index}
                    src={item}
                    onClick={() => setImgshow(item)}
                    className="rounded-md cursor-pointer lg:w-fit w-[32%] lg:h-1/3 object-cover object-center"
                    alt={`Item Image - ${index}`}
                    variants={{
                      hidden: { y: -10, opacity: 0 },
                      visible: {
                        y: 0,
                        opacity: 1,
                        transition: { duration: 0.5, ease: "easeInOut" },
                      },
                    }}
                  />
                ))}
              </motion.div>
              <motion.div
                className="w-full lg:[width:calc(100%-140px)] relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <img
                  src={imgshow}
                  className="lg:h-[600px] 2xl:h-full h-full w-full object-cover object-center rounded-md"
                  alt={name}
                />
                {discount > 0 && (
                  <span className="text-white absolute top-3 left-3 rounded bg-black/70 px-3 text-[12px] py-1">
                    -{discount}%
                  </span>
                )}
                <div
                  onClick={() => setPreview(true)}
                  className="bg-black/70 size-[35px] lg:group-hover:flex hidden cursor-pointer items-center justify-center absolute top-3 right-3 text-white  rounded-full"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
              </motion.div>
            </div>
            <motion.div
              className="lg:px-5 py-3 flex flex-col 2xl:gap-5 gap-3"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } },
              }}
            >
              <motion.span
                className="flex flex-row justify-between items-center"
                variants={{
                  hidden: { y: -10, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  },
                }}
              >
                <h1 className="md:text-[30px] text-[20px] font-bold text-[#2D2D2D]">
                  {name}
                </h1>
                <FontAwesomeIcon
                  className={`${
                    heart ? "text-red-500" : "text-[#AEAEAE]"
                  } text-[20px] cursor-pointer transition-all duration-200`}
                  onClick={handleWishlist}
                  icon={faHeart}
                />
              </motion.span>
              <motion.div
                className="flex items-center gap-3"
                variants={{
                  hidden: { y: -10, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  },
                }}
              >
                <p className=" border-r-2 md:text-[25px] text-[18px] text-[#414141] pr-3">
                  {discount > 0 && (
                    <del className="pr-2 md:text-lg text-sm text-black/40">
                      ${price.toFixed(2)}
                    </del>
                  )}
                  ${(price * (1 - discount / 100)).toFixed(2)}
                </p>
                <span className="flex gap-1 text-[#A6A6A6] md:text-sm text-[12px]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={rate > index ? faStar : faStarRegular}
                      className={rate > index ? "text-yellow-400" : ""}
                    />
                  ))}
                </span>
                <p className="md:text-md text-[#414141] text-sm">
                  ({reviewCount.current} review)
                </p>
              </motion.div>
              <hr className="border-[#DDDDDD] my-3" />
              <motion.p
                className="text-[15px] text-[#414141]"
                variants={{
                  hidden: { y: -10, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  },
                }}
              >
                Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magn.
                Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magn.
              </motion.p>
              <motion.ul
                className="list-disc list-inside text-[15px] text-[#414141]"
                variants={{
                  hidden: { y: -10, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  },
                }}
              >
                <li>Lorem ipsum dolor sit amet, adipi scing elit</li>
                <li>
                  Lorem ipsum dolor sit amet, consectetuer adipi scing elit
                </li>
                <li>Lorem ipsum dolor sit amet, consectetuer adipi </li>
              </motion.ul>

              {stock == 0 ? (
                <motion.span
                  className="flex items-center gap-5"
                  variants={{
                    hidden: { y: -10, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: { duration: 0.5, ease: "easeInOut" },
                    },
                  }}
                >
                  <FontAwesomeIcon
                    className="text-[#B9B9B9]"
                    icon={faBoxesStacked}
                  />
                  <p className="text-[#424242] text-[15px]">Sold Out</p>
                </motion.span>
              ) : (
                <>
                  <motion.div
                    className="w-full h-[50px] flex gap-5 selection:bg-transparent"
                    variants={{
                      hidden: { y: -10, opacity: 0 },
                      visible: {
                        y: 0,
                        opacity: 1,
                        transition: { duration: 0.5, ease: "easeInOut" },
                      },
                    }}
                  >
                    <div className="w-[130px] h-full flex items-center font-bold justify-between rounded-full border border-[#D7D7D7] text-[#414141]">
                      <p
                        onClick={handleDecrease}
                        className="w-1/3 h-full flex items-center justify-center rounded-s-full cursor-pointer"
                      >
                        -
                      </p>
                      <input
                        type="number"
                        value={qty}
                        onChange={(e) => handleChange(e)}
                        onBlur={handleBlur}
                        min={1}
                        max={10}
                        className="w-1/3 border-0 outline-0 text-center h-full flex items-center justify-center no-spinner"
                      />

                      <p
                        onClick={handleIncrease}
                        className="w-1/3 h-full flex items-center justify-center rounded-e-full cursor-pointer"
                      >
                        +
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        const image = img[0];
                        handleCart();
                        dispatch(
                          addtocart({
                            id,
                            name,
                            qty,
                            price,
                            discount,
                            image,
                            stock,
                          })
                        );
                      }}
                      className="[width:calc(100%-130px)] font-bold text-[17px] rounded-full  h-full cursor-pointer bg-black text-white flex items-center justify-center"
                    >
                      Add to Cart
                    </button>
                  </motion.div>
                  <motion.button
                    variants={{
                      hidden: { y: -10, opacity: 0 },
                      visible: {
                        y: 0,
                        opacity: 1,
                        transition: { duration: 0.5, ease: "easeInOut" },
                      },
                    }}
                    className="w-full border rounded-full h-[50px] font-bold text-[17px] cursor-pointer"
                  >
                    Buy Now
                  </motion.button>
                </>
              )}
              <motion.span
                variants={{
                  hidden: { y: -10, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  },
                }}
                className="flex items-center gap-5"
              >
                <FontAwesomeIcon
                  className="text-[#B9B9B9]"
                  icon={faTruckArrowRight}
                />
                <p className="text-[#424242] text-[15px]">
                  Free worldwide shipping on all orders over $100
                </p>
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
                className="flex items-center gap-5"
              >
                <FontAwesomeIcon
                  className="text-[#B9B9B9]"
                  icon={faParachuteBox}
                />
                <p className="text-[#424242] text-[15px]">
                  Delivers in: 3-7 Working Days Shipping & Return
                </p>
              </motion.span>
            </motion.div>
          </motion.article>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-[#F8F8F8] mt-16 w-full flex items-center justify-center py-10"
        >
          <DescriptionReview />
        </motion.section>

        <section className="flex mt-24 flex-col w-[95%] bg-white">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="md:text-4xl md:text-start text-center text-[#3D3D3D] text-2xl tracking-wider font-semibold  md:mb-0 mb-3"
          >
            Similar Products
          </motion.h1>
          <div className="grid grid-cols-2 gap-4 mt-10 lg:grid-cols-4">
            {similarProduct.map(
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
        </section>
      </main>
    </>
  );
};

export default ProductDetail;
