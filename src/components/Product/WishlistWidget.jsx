// Icons
import { faHeart, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Link
import { Link } from "react-router-dom";
const WishlistWidget = ({ img, name, price, discount, wishlist, setHeart }) => {
  return (
    <div
      className={`${
        wishlist ? "translate-x-0" : "translate-x-[110%]"
      } transition-all duration-300 w-[310px] h-[160px] fixed right-3 bottom-3 p-3 bg-white shadow-[0_0_10px_2px] z-[100] shadow-gray-400/40 rounded-md font-oxygen`}
    >
      <div className="flex gap-3 h-[90px] items-center">
        <img src={img} className="size-[80px] rounded-md" alt="" />
        <span className="text-[#414141] flex flex-col gap-1">
          <p className="text-md">{name}</p>
          <p className="text-[12px]">
            Price: ${(price * (1 - discount / 100)).toFixed(2)}
          </p>
          <FontAwesomeIcon
            icon={faX}
            onClick={() => setHeart(false)}
            className="absolute right-5 top-5 text-sm cursor-pointer"
          />
        </span>
      </div>
      <div className="w-full mt-[8px] h-[40px]">
        <Link
          to={"/MyAccount/Wishlist"}
          className="size-full bg-black flex items-center justify-center gap-2 text-white rounded-md font-exo"
        >
          <FontAwesomeIcon icon={faHeart} />
          Wishlist
        </Link>
      </div>
    </div>
  );
};

export default WishlistWidget;
