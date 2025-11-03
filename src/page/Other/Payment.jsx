// React
import { useEffect, useState } from "react";
// Loadable
import loadable from "@loadable/component";
// Skeleton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// Motion
import { motion } from "framer-motion";
// Component
import { SuccessPayment, FailedPayment } from "../../components";
const InputForm = loadable(() => import("./../../components/Cart/InputForm"), {
  fallback: (
    <Skeleton
      width={"100%"}
      height={"40px"}
      baseColor="#b8b8b8"
      highlightColor="#e2e2e2"
    />
  ),
});
const CartDetails = loadable(
  () => import("./../../components/Cart/CartDetails"),
  {
    fallback: (
      <Skeleton
        width={"100%"}
        height={"440px"}
        baseColor="#b8b8b8"
        highlightColor="#e2e2e2"
        borderRadius={"5px"}
      />
    ),
  }
);
const Payment = () => {
  const validCard = [
    { name: "John Doe", cardnum: 12345, cvv: 9999 },
    { name: "Dil Doe", cardnum: 12345, cvv: 9999 },
    { name: "Nin Doe", cardnum: 12345, cvv: 9999 },
    { name: "Sor Doe", cardnum: 12345, cvv: 9999 },
  ];
  const isValidCard = (name, cardnum, cvv) => {
    return validCard.some(
      (c) =>
        name === c.name &&
        Number(cardnum) === c.cardnum &&
        Number(cvv) === c.cvv
    );
  };
  const [Name, setName] = useState("");
  const [CardNum, setCardNum] = useState("");
  const [CVV, setCVV] = useState("");
  const [isExpiryValid, setIsExpiryValid] = useState(false);
  const [failed, setFailed] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleExpiryValid = (isValid) => {
    setIsExpiryValid(isValid);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const found = isValidCard(Name, CardNum, CVV);
    if (isExpiryValid) {
      if (found) {
        setSuccess(true);
        setFailed(false);
      } else {
        setFailed(true);
        setSuccess(false);
      }
    }
  };
  useEffect(() => {
    const disableScroll = failed || success;
    if (disableScroll) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "auto";
    }
    return () => (document.documentElement.style.overflowY = "auto");
  }, [success, failed]);
  return (
    <main className="w-full h-full flex flex-col items-center gap-8 mt-[50px] font-exo">
      <section className="w-[95%]">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-3xl  font-bold text-[#2d2d2d]"
        >
          Payment
        </motion.h1>
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
      </section>
      <section className="w-[95%] flex flex-col lg:flex-row gap-10 lg:gap-[4%]">
        <aside className="w-full lg:w-[58%] h-fit rounded-xl flex flex-col pb-5">
          <div className="py-5 bg-[#20263E] rounded-t-[11px] grid grid-cols-3 gap-3 font-semibold text-white text-[18px] md:text-[20px]">
            <h1 className="w-full text-center">Personal</h1>
            <h1 className="w-full text-center">Billing</h1>
            <h1 className="w-full text-center">Confirmation</h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 px-4 py-4 border-2 border-[#DEDFE1] rounded-b-[11px]"
            action="#"
          >
            <InputForm
              label="Name On Card"
              type="text"
              value={Name}
              setValue={setName}
            />
            <InputForm
              label="Card Number"
              type="number"
              value={CardNum}
              setValue={setCardNum}
            />
            <div className="grid grid-cols-2 gap-8">
              <InputForm
                label="Valid Through"
                type="month"
                onValidChange={handleExpiryValid}
              />
              <InputForm
                label="CVV"
                type="number"
                value={CVV}
                setValue={setCVV}
              />
            </div>
            <div className="flex items-center gap-3 text-[16px]">
              <input
                type="checkbox"
                className=" w-5 h-5 accent-[#3D3D3D] hover:cursor-pointer"
              />
              Save As Default Payment Method
            </div>
            <button
              type="submit"
              className="px-4 py-3 mt-2 text-white bg-black rounded-full hover:bg-black/90 active:bg-black/80 w-fit font-exo hover:cursor-pointer"
            >
              Proceed to Next Step
            </button>
          </form>
        </aside>
        <aside className="w-full lg:w-[38%] h-fit rounded-xl flex flex-col">
          <CartDetails />
        </aside>
      </section>
      {success && (
        <>
          <div className="fixed top-0 left-0 z-10 w-screen h-screen bg-black/50"></div>
          <SuccessPayment setSuccess={setSuccess} />
        </>
      )}
      {failed && (
        <>
          <div className="fixed top-0 left-0 z-10 w-screen h-screen bg-black/50"></div>
          <FailedPayment setFailed={setFailed} />
        </>
      )}
    </main>
  );
};

export default Payment;
