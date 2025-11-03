// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
// React
import { useEffect } from "react";

const ImagePreview = ({ imgshow, preview, setPreview }) => {
  useEffect(() => {
    if (preview) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [preview]);

  return (
    <div
      className={`${
        preview ? "visible" : "invisible"
      } w-full [height:calc(100vh-90px)] lg:flex hidden bg-black/80 items-center justify-center fixed z-[100]`}
    >
      <img
        src={imgshow}
        alt=""
        className={`w-[600px] object-cover object-center rounded-xl ${
          preview ? "scale-100 transition-all duration-500 " : "scale-0"
        }`}
      />
      <FontAwesomeIcon
        icon={faX}
        onClick={() => setPreview(false)}
        className="absolute top-5 right-5 text-white cursor-pointer"
      />
    </div>
  );
};

export default ImagePreview;
