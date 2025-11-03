// Image
import track from "./../../assets/TrackOrder/trackorder.jpg";
// React
import { Link } from "react-router-dom";
// Motion
import { motion } from "framer-motion";
const TrackingOrder = () => {
  return (
    <motion.main
      className="w-full mt-16 pt-5 flex gap-20 items-start justify-center font-oxygen"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="w-[95%] py-10 lg:pr-10 bg-[#f6f6f8] grid lg:grid-cols-2 grid-cols-1">
        <div className="lg:px-10 px-5 size-full flex justify-center">
          <img
            src={track}
            alt="Tracking Image"
            className="h-[300px] object-cover object-center"
          />
        </div>
        <div className=" lg:px-5 mx-5 lg:m-0 mt-5  bg-white p-4">
          <h1 className="text-3xl font-semibold">Track Order</h1>
          <p className="text-[#505157] text-[13px] md:text-sm mt-3">
            To track your order please enter your order ID in the input field
            below and press the "Track Order" button. this was given to you on
            your receipt and in the confirmation email you should have received.
          </p>
          <div className="mt-8 grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div className="flex flex-col">
              <label className="text-[#505157] font-semibold text-[13px] mb-2">
                Order ID
              </label>
              <input
                type="text"
                className="pl-3 border border-gray-500/30 rounded-full h-[40px] placeholder:text-[#807D7E] text-[13px] outline-0"
                placeholder="Enter Order ID"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[#505157] font-semibold text-[13px] mb-2">
                Billing Email
              </label>
              <input
                type="email"
                className="pl-3 border border-gray-500/30 rounded-full h-[40px] placeholder:text-[#807D7E] text-[13px] outline-0"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="mb-6 mt-4">
              <Link
                to={"TrackOrderDetail"}
                className="bg-black rounded-full px-5 py-3 text-[15px] font-exo text-white"
              >
                Track Order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default TrackingOrder;
