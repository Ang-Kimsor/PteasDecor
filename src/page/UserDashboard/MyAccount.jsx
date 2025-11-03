// Image Payment
import Visa from "./../../assets/Payment/visa.jpg";
import Master from "./../../assets/Payment/master.jpg";
// React
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// Loadable
import loadable from "@loadable/component";
// Skeleton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// Motion
import { motion } from "framer-motion";
const OrderEntry = loadable(
  () => import("./../../components/UserDashboard/OrderEntry"),
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
const PaymentMethod = loadable(
  () => import("./../../components/UserDashboard/PaymentMethod"),
  {
    fallback: (
      <Skeleton
        width={"400px"}
        height={"60px"}
        baseColor="#b8b8b8"
        highlightColor="#e2e2e2"
      />
    ),
  }
);
const MyAccount = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const payment = [
    {
      name: "MasterCard (Default)",
      img: Master,
      number: "2736 3286 8332 2138",
    },
    {
      name: "Visa",
      img: Visa,
      number: "2736 3286 8332 2138",
    },
  ];
  return (
    <>
      <motion.main
        className="flex flex-col items-center justify-center w-full mt-10 font-oxygen"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.h1
          className="w-[95%] text-[30px] font-bold text-[#2D2D2D]"
          variants={{
            hidden: { y: -10, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: "easeInOut" },
            },
          }}
        >
          Account Overview
        </motion.h1>
        <motion.p
          className="w-[95%] text-[16px] text-[#575757] mt-4"
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
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </motion.p>
        <section className="w-[95%] mt-5">
          <div className="flex items-center justify-between mt-5">
            <h1 className="text-[20px] font-bold text-[#2d2d2d]">
              Order History
            </h1>
            <Link
              to={"TrackOrder"}
              className="hover:underline text-[16px] text-[#575757] cursor-pointer"
            >
              Track An Order
            </Link>
          </div>
          <div className="py-5 bg-[#20263E] mt-5 rounded-t-[11px] grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] md:grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] gap-3 text-white md:text-[14px] text-[10px] font-bold">
            <h1 className="ps-[10px] md:ps-[20px]">Order no</h1>
            <h1 className="w-full">Items</h1>
            <h1 className="w-full">Status</h1>
            <h1 className="w-full">Tracking ID</h1>
            <h1 className="w-full">Delivery Date</h1>
            <h1 className="w-full">Price</h1>
          </div>
          {cartItems.length == 0 ? (
            <motion.p
              variants={{
                hidden: { y: -10, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5, ease: "easeInOut" },
                },
              }}
              className="w-full text-lg h-[345px] border-t-0 flex items-center justify-center text-[#919191] border-2 border-[#DEDFE1] rounded-b-[11px]"
            >
              No Items In Order.
            </motion.p>
          ) : (
            <div className="md:text-[16px] text-[11px]">
              {cartItems.map(({ image, name, price, discount, qty }, index) => (
                <OrderEntry
                  key={index}
                  orderid={2003}
                  img={image}
                  name={name}
                  status={"Succeed"}
                  trackingid={2176413876}
                  deliverydate={"23-07-2021"}
                  price={price}
                  discount={discount}
                  qty={qty}
                />
              ))}
            </div>
          )}
        </section>
        <section className="w-[95%] mt-10">
          <div className="flex items-center justify-between mt-5">
            <motion.h1
              className="text-[20px] font-bold text-[#2d2d2d]"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              Billing Methods
            </motion.h1>
            <Link
              to={"PaymentAndBilling"}
              className="hover:underline text-[16px] text-[#575757] cursor-pointer"
            >
              View All
            </Link>
          </div>
          {payment.map(({ name, img, number }, index) => (
            <PaymentMethod key={index} name={name} img={img} number={number} />
          ))}
        </section>
      </motion.main>
    </>
  );
};

export default MyAccount;
