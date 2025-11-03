import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const ProductCard = ({ id, name, price, discount, stock, img }) => {
  const navigate = useNavigate();
  const path = `/Products/ProductDetail/${name.replace(/\s+/g, "-")}`;
  return (
    <motion.article
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="relative cursor-pointer font-oxygen"
    >
      <Link
        to={path}
        onClick={(e) => {
          e.preventDefault();
          navigate(path, {
            state: { productid: id },
          });
        }}
      >
        {discount > 0 && (
          <span className="absolute top-2 left-3 bg-[#3D3D3D] text-[11px] text-white px-3 tracking-wider rounded-md py-[2px]">
            -{discount}%
          </span>
        )}
        <div className="bg-[#E8E8E8] rounded-2xl">
          <img src={img} alt={name} className=" mb-2 rounded-2xl" />
        </div>
        <div className="flex flex-col justify-center gap-2 px-2 my-5">
          <h1 className="md:text-[18px] text-[14px] text-[#404040] w-full">
            {name}
          </h1>
          <div>
            <span className="md:text-sm flex gap-2 items-center text-[11px]">
              <p className="flex gap-1 text-[#414141]">
                {discount > 0 && (
                  <del className="mr-1 text-[#919191]">${price.toFixed(2)}</del>
                )}
                ${(price - (price * discount) / 100).toFixed(2)}
              </p>
              {stock == 0 && (
                <p className="text-[#42424299] text-[11px]">(Sold Out)</p>
              )}
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default ProductCard;
