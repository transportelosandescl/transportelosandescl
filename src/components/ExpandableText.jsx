import Image from "next/image";
import PlusIcon from "../../public/PlusIcon.svg";
import MinusIcon from "../../public/MinusIcon.svg";
import one from "../../public/1.svg";
import two from "../../public/2.svg";
import three from "../../public/3.svg";

export default function ExpandableText({
  FAQ,
  open = false,
  index = 1,
  title = "Sesión individual por videollamada.",
  description,
  handleOpen,
  onToggle,
  onStyle
}) {

  const handleOpenClick = () => {
    handleOpen();
    onToggle(index);
  };

  // Selección de la imagen basada en el índice
  const getImageByIndex = (index) => {
    switch (index) {
      case 0:
        return one;
      case 1:
        return two;
      case 2:
        return three;
      default:
        return one;
    }
  };

  return (
    <div
      style={!onStyle ? { borderRadius: "1.5rem", border: "1px solid #C5C5C5" } : { borderTop: "1px solid #C5C5C5" }}
      className="w-full py-[30px] px-[40px] flex flex-col justify-center items-center"
    >
      <div className="w-full flex justify-center items-center gap-[24px]">
        {!onStyle && (
          <span data-aos="zoom-in-up" className="font-bold min-w-[60px] h-[60px] text-[24px] border-t-1 border-[#C5C5C5] lg:flex justify-center items-center">
            <Image
              src={getImageByIndex(index)}
              alt={`Icon ${index}`}
              className="w-[100px]"
            />
          </span>
        )}
        <h3 className={`text-[16px] lg:text-[24px] w-full ${FAQ ? "font-bold lg:font-normal" : "font-bold"}`}>
          {title}
        </h3>
        <button
          className="min-w-[60px] h-[60px] flex justify-center items-center"
          onClick={handleOpenClick}
        >
          {open ? (
            <Image
              src={MinusIcon}
              alt="Minimize icon"
              className="w-[25px] h-[25px]"
            />
          ) : (
            <Image
              src={PlusIcon}
              alt="Expand icon"
              className="w-[25px] h-[25px]"
            />
          )}
        </button>
      </div>
      {open && (
        <div className="lg:w-full flex justify-center items-center gap-[24px]">
          <div className="hidden lg:block min-w-[60px]">&nbsp;</div>{/* SPACE TO MAKE THINGS RESPONSIVE AND ALIGN */}
          <p className="text-[16px] lg:w-full font-medium">
            {description}
          </p>
          <div className="hidden lg:block min-w-[60px]">&nbsp;</div>{/* SPACE TO MAKE THINGS RESPONSIVE AND ALIGN */}
        </div>
      )}
    </div>
  );
}
