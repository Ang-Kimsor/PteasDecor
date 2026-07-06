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
// React
import { Link } from "react-router-dom";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCreditCard } from "@fortawesome/free-solid-svg-icons";

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
      <div className="rounded-2xl border border-gray-100 p-6">
        <Skeleton
          width={"100%"}
          height={"80px"}
          baseColor="#f3f4f6"
          highlightColor="#e5e7eb"
          borderRadius={"16px"}
        />
      </div>
    ),
  }
);

const PaymentMethodPage = () => {
  return (
    <motion.main
      className="w-full min-h-[60vh] mx-auto px-5 md:px-8 lg:px-10 py-10 md:py-14 font-oxygen"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
      }}
    >
      {/* Breadcrumb */}
      <motion.nav
        className="flex items-center gap-2 text-sm text-gray-400 mb-8"
        variants={{
          hidden: { y: -8, opacity: 0 },
          visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
        }}
      >
        <Link to="/MyAccount" className="hover:text-gray-600 transition-colors">
          My Account
        </Link>
        <span>/</span>
        <span className="text-gray-700 font-medium">Payment & Billing</span>
      </motion.nav>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
        <motion.div
          variants={{
            hidden: { y: -10, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
          }}
        >
          <h1 className="text-3xl md:text-[36px] font-bold text-gray-900 tracking-tight">
            Payment Methods
          </h1>
          <p className="text-gray-500 mt-2 text-[15px] max-w-lg leading-relaxed">
            Manage your saved payment methods. Add, remove, or set a default card for faster checkout.
          </p>
        </motion.div>

        <motion.button
          variants={{
            hidden: { y: -10, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
          }}
          className="flex items-center gap-2.5 px-6 py-3 bg-gray-900 hover:bg-gray-800 active:scale-[0.98] text-white rounded-xl font-medium text-sm transition-all duration-200 shadow-sm w-fit cursor-pointer"
        >
          <FontAwesomeIcon icon={faPlus} className="text-xs" />
          Add New Card
        </motion.button>
      </div>

      {/* Cards count */}
      <motion.div
        className="flex items-center gap-3 mb-6"
        variants={{
          hidden: { y: -8, opacity: 0 },
          visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
        }}
      >
        <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center">
          <FontAwesomeIcon icon={faCreditCard} className="text-gray-500 text-sm" />
        </div>
        <span className="text-sm text-gray-500 font-medium">
          {paymentCards.length} saved {paymentCards.length === 1 ? "card" : "cards"}
        </span>
      </motion.div>

      {/* Card List */}
      <motion.div
        className="flex flex-col gap-4"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {paymentCards.map(
          ({ id, name, img, cardNum, cvv, expiry, Default }) => (
            <motion.div
              key={id}
              variants={{
                hidden: { y: 16, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.45, ease: "easeOut" } },
              }}
            >
              <PaymentCard
                img={img}
                name={name}
                cardNumber={cardNum}
                cvv={cvv}
                expiry={expiry}
                Default={Default}
              />
            </motion.div>
          )
        )}
      </motion.div>
    </motion.main>
  );
};

export default PaymentMethodPage;

