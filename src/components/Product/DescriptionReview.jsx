// React
import { useState } from "react";
// Profile Image
import Profile from "./../../assets/Blog/Profile1.jpg";
// Data
import { reviewUser } from "../../data/Product";
// Motion
import { motion } from "framer-motion";
// Component
import UserReview from "./UserReview";
const DescriptionReview = () => {
  const [showdes, setShowdes] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [reviewinput, setReviewinput] = useState("");
  const [review, setReview] = useState(reviewUser);
  const handleInputToState = (nameinput, reviewinput, emailinput) => {
    setReview((review) => [
      ...review,
      {
        img: Profile,
        username: nameinput,
        review: reviewinput,
        email: emailinput,
      },
    ]);
    setUsername("");
    setEmail("");
    setReviewinput("");
  };
  return (
    <div className="w-[95%]">
      <motion.span
        className="flex gap-4 items-center text-[23px]"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h1
          className={`${showdes && "font-bold"} text-[#696969] cursor-pointer`}
          onClick={() => setShowdes(true)}
        >
          Description
        </h1>
        |
        <h1
          className={`${!showdes && "font-bold"} text-[#696969] cursor-pointer`}
          onClick={() => setShowdes(false)}
        >
          Reviews
        </h1>
      </motion.span>
      {showdes ? (
        <motion.div
          className="mt-5"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h1 className=" text-[#575757] text-[12px] md:text-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </h1>
          <ul className="list-disc list-inside md:text-sm text-[12px] text-[#575757] mt-5 leading-[170.5%]">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </li>
          </ul>
        </motion.div>
      ) : (
        <div className="flex flex-col gap-8 mt-5">
          {review.map(({ img, username, review }, index) => (
            <UserReview
              key={index}
              img={img}
              username={username}
              review={review}
            />
          ))}
          <motion.div
            className="flex border-2 rounded-2xl gap-5 border-[#D3D3D3] bg-[#F2F2F2] p-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <span>
              <img src={Profile} className="size-[40px] rounded-full" alt="" />
            </span>
            <form
              className="[width:calc(100%-60px)]"
              onSubmit={(e) => {
                e.preventDefault();
                handleInputToState(username, reviewinput, email);
              }}
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-3">
                  <label htmlFor="" className="font-exo text-[#3D3D3D]">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="border-2 outline-none rounded-3xl px-4 py-2 border-[#919191] text-[#919191]"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="" className="font-exo text-[#3D3D3D]">
                    Your Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-2 outline-none rounded-3xl px-4 py-2 border-[#919191] text-[#919191]"
                    placeholder="person@gmail.com"
                  />
                </div>
              </div>
              <textarea
                rows={8}
                className="border-2 outline-none mt-5 resize-none w-full rounded-3xl px-4 py-3 border-[#919191] text-[#919191]"
                required
                placeholder="Write your review"
                value={reviewinput}
                onChange={(e) => setReviewinput(e.target.value)}
              />
              <button
                className="text-white w-fit bg-black px-5 py-3 mt-4 rounded-full active:bg-black/80 cursor-pointer font-exo flex items-center gap-5"
                type="submit"
              >
                Post Review <p className="font-poppins text-xl">&gt;</p>
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default DescriptionReview;
