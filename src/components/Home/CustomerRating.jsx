// Motion
import { motion } from "framer-motion";
const CustomerRating = ({ img, title, des, subdes }) => {
  return (
    <article className="w-full relative">
      <motion.img
        className="w-full h-[550px] lg:h-[700px] object-cover object-bottom"
        src={img}
        alt={title}
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      <div className="w-full h-full bg-black/60 absolute top-0 flex items-center justify-center">
        <div className="w-[90%] h-[500px] flex lg:flex-row flex-col items-center justify-center lg:justify-between lg:gap-10 gap-8">
          <motion.div
            className="lg:w-[40%] w-full lg:items-baseline items-center text-white lg:h-full flex justify-center flex-col gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.h1
              className="font-oxygen lg:text-start text-center lg:text-[36px] text-[25px] font-[700] "
              variants={{
                hidden: { y: -10, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5, ease: "easeInOut" },
                },
              }}
            >
              {title}
            </motion.h1>
            <motion.button
              className="w-fit text-[15px] bg-[#282828] active:bg-gray-800 h-fit hidden lg:flex gap-2 px-5 font-semibold font-oxygen py-2 rounded-3xl cursor-pointer"
              variants={{
                hidden: { y: -10, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5, ease: "easeInOut" },
                },
              }}
            >
              Read More <p className="font-poppins pt-[0.8px]">&gt;</p>
            </motion.button>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className=" lg:w-[60%] w-full lg:h-full flex gap-5 flex-col justify-center text-white/90 lg:text-start text-center"
          >
            <motion.h1
              className="lg:text-lg md:text-sm text-[12px]"
              variants={{
                hidden: { y: -10, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5, ease: "easeInOut" },
                },
              }}
            >
              {des}
            </motion.h1>
            <motion.div
              variants={{
                hidden: { y: -10, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5, ease: "easeInOut" },
                },
              }}
            >
              <motion.div
                className="w-full flex gap-5 justify-between lg:text-lg text-[12px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.2 } },
                }}
              >
                {subdes.map(({ percent, review }, index) => (
                  <motion.div
                    key={index}
                    className="w-[45%]"
                    variants={{
                      hidden: { y: -10, opacity: 0 },
                      visible: {
                        y: 0,
                        opacity: 1,
                        transition: { duration: 0.5, ease: "easeInOut" },
                      },
                    }}
                  >
                    <h1 className="lg:text-4xl text-2xl mb-4">{percent}%</h1>
                    <p>{review}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.button
            className="w-fit text-[15px] text-white lg:hidden bg-[#282828] active:bg-gray-800 h-fit flex gap-2 px-5 font-semibold font-oxygen py-2 rounded-3xl cursor-pointer"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            Read More <p className="font-poppins pt-[0.8px]">&gt;</p>
          </motion.button>
        </div>
      </div>
    </article>
  );
};

export default CustomerRating;
