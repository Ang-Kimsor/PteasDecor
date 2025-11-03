// Image Payment
import master from "../../assets/Payment/master.jpg";
import visa from "../../assets/Payment/visa.jpg";
import paypal from "../../assets/Payment/paypal.jpg";
// Loadable
import loadable from "@loadable/component";
// Skeleton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// Motion
import { motion } from "framer-motion";
const paymentCards = [
  {
    id: 1,
    name: "Dil Doe",
    img: master,
    cardNum: "1234 5678 4321 8765",
    cvv: 999,
    expiry: "November 2028",
    Default: true,
  },
  {
    id: 2,
    name: "Big D",
    img: visa,
    cardNum: "1234 5678 4321 8765",
    cvv: 629,
    expiry: "December 2028",
    Default: false,
  },
  {
    id: 3,
    name: "Lil Bob",
    img: paypal,
    cardNum: "1234 5678 4321 8765",
    cvv: 168,
    expiry: "January 2029",
    Default: false,
  },
];
const PaymentCard = loadable(
  () => import("./../../components/UserDashboard/PaymentCard"),
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
const PaymentMethodPage = () => {
  return (
    <motion.main
      className="w-full h-full px-[20px] lg:px-[50px] flex flex-col gap-5 mt-[50px] font-oxygen"
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
        className="text-[30px] font-semibold"
      >
        Payment Methods
      </motion.h1>
      <motion.span
        variants={{
          hidden: { y: -10, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeInOut" },
          },
        }}
        className="font-medium"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam natus
        aliquam, rerum incidunt consectetur Lorem ipsum dolor sit..
      </motion.span>
      <motion.div
        variants={{
          hidden: { y: -10, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeInOut" },
          },
        }}
        className="w-full h-full flex flex-col gap-3"
      >
        {paymentCards.map(
          ({ id, name, img, cardNum, cvv, expiry, Default }) => (
            <PaymentCard
              key={id}
              img={img}
              name={name}
              cardNumber={cardNum}
              cvv={cvv}
              expiry={expiry}
              Default={Default}
            />
          )
        )}
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
        className="px-[10%] w-fit py-2 md:py-3 rounded-full text-white bg-black hover:bg-black/90 active:bg-black/80 font-exo"
      >
        Add New Card
      </motion.button>
    </motion.main>
  );
};

export default PaymentMethodPage;
