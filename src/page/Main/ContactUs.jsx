// Motion
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <main className="w-full h-full flex justify-center my-[60px] md:my-[80px]">
      <motion.div
        className="w-[95%] md:w-[90%] h-full rounded-[20px] border-2 border-black/30 pb-[50px]"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h1 className="p-[20px] bg-[#20263E] text-white text-[25px] border-b-2 border-black/30 rounded-t-[18px] font-oxygen">
          Get In Touch With Us
        </h1>
        <section className="flex flex-col lg:flex-row px-[30px] py-[30px] gap-[30px] w-full">
          <aside className="w-full lg:w-[40%]">
            <div className="pb-[30px]">
              <h1>Phone Number</h1>
              <span className="text-gray-600">001233445566</span>
            </div>
            <div className="py-[30px] border-y-2 border-gray-300">
              <h1>Email Address</h1>
              <span className="text-gray-600">johndoe@example.com</span>
            </div>
            <div className="pt-[30px]">
              <h1>Location</h1>
              <span className="text-gray-600">Phnom Penh</span>
            </div>
          </aside>
          <aside className="w-full lg:w-[60%]">
            <h1 className="text-[22px] font-semibold font-oxygen">
              Send us a message
            </h1>
            <h1 className="text-gray-600 w-[80%] py-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elitle Lorem
              ipsum dolor sit Lorem ipsum dolor sit amet.
            </h1>
            <form
              className=" text-gray-700 mt-[30px]"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  className="rounded-full border border-gray-400 w-full px-4 py-2 focus:outline focus:outline-[#20263E]"
                  type="text"
                  placeholder="Your Name"
                  required
                />
                <input
                  className="rounded-full border border-gray-400 w-full px-4 py-2 focus:outline focus:outline-[#20263E]"
                  type="email"
                  placeholder="Your Email"
                  required
                />
                <input
                  className="rounded-full border border-gray-400 w-full px-4 py-2 focus:outline focus:outline-[#20263E]"
                  type="text"
                  placeholder="Phone Number"
                  required
                />
                <input
                  className="rounded-full border border-gray-400 w-full px-4 py-2 focus:outline focus:outline-[#20263E]"
                  type="text"
                  placeholder="Subject"
                  required
                />
              </div>
              <textarea
                className="border rounded-xl px-4 py-2 mt-5 border-gray-300 w-full focus:outline focus:outline-[#20263E] resize-none"
                placeholder="Message"
                name="message"
                rows={5}
                required
              />
              <button
                type="submit"
                className="text-white w-fit bg-[#20263E] rounded-full px-5 py-2 md:py-3 md:text-[18px] font-poppins mt-4 hover:cursor-pointer active:bg-gray-700"
              >
                Send Message
              </button>
            </form>
          </aside>
        </section>
      </motion.div>
    </main>
  );
};

export default Contact;
