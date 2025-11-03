// React
import { useParams } from "react-router-dom";
// Motion
import { motion } from "framer-motion";
const PrivatePolicyPage = () => {
  let { privacypolicy } = useParams();
  privacypolicy = privacypolicy.replaceAll("-", " ");
  const p =
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.";
  const h1 = "Lorem ipsum dolor sit amet";
  const li = [
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et.",
    "iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
  ];
  return (
    <main className="w-full flex items-center justify-center mt-8 font-oxygen">
      <motion.div
        className="w-[95%] flex flex-col gap-5"
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
          className="text-[38px] font-bold text-[#2D2D2D]"
        >
          {privacypolicy}
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
          className="md:text-lg text-sm text-[#414141] flex flex-col gap-8"
        >
          <p>{p}</p>
          <p>{p}</p>
          <ul className="list-disc list-inside">
            {li.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h1 className="md:text-xl text-md ">{h1}</h1>
          <p>{p}</p>
          <p>{p}</p>
          <h1 className="md:text-xl text-md ">{h1}</h1>
          <p>{p}</p>
          <ul className="list-disc list-inside">
            {li.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{p}</p>
          <p>{p}</p>
          <p>{p}</p>
          <p>{p}</p>
        </motion.span>
      </motion.div>
    </main>
  );
};

export default PrivatePolicyPage;
