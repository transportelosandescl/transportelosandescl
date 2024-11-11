import Image from "next/image";
import TrackImage1 from "../../public/primeramilla.png";
import TrackImage2 from "../../public/distribucion.png";
import TrackImage3 from "../../public/ultimamilla.png";

import ExpandableText from "./ExpandableText";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function AccordionSection({
  refComponent,
  accordion,
  FAQ = false,
  onStyle = false,
}) {
  const [openIndex, setOpenIndex] = useState(FAQ ? null : 0);
  const pathname = usePathname();

  const handleOpenAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  const accordionTrackImages = [TrackImage1, TrackImage2, TrackImage3];

  return (
    <div
      ref={refComponent}
      className={`flex flex-col justify-center items-center px-[24px] ${
        pathname === "/home" && onStyle ? "bg-[#F9F9F9] mt-[56px]" : "my-[56px]"
      } ${
        FAQ
          ? "gap-[32px] lg:gap-[80px] lg:py-[80px]"
          : "gap-[32px] lg:gap-[63px] lg:py-[140px]"
      } ${pathname === "/home" && onStyle && FAQ ? "lg:pb-[136px]" : ""}`}
    >
      {!FAQ ? (
        <div
          data-aos="fade-up"
          className="flex flex-col lg:flex-row justify-center items-center text-[28px] lg:text-[64px] font-bold "
        >
          <h2>Que servicios ofrecemos?</h2>
        </div>
      ) : (
        <h2
          data-aos="fade-up"
          data-aos-anchor-placement=""
          className="flex justify-center items-center text-center text-[28px] lg:text-[48px] font-bold "
        >
          Preguntas Frecuentes
        </h2>
      )}

      <div
        className={`${
          pathname === "/home"
            ? "lg:ml-[61px] lg:mr-[20px]  lg:gap-[80px]"
            : " w-full lg:w-[1175px] lg:gap-[105px]"
        } gap-[32px] h-full flex flex-col-reverse lg:flex-row justify-center items-center lg:items-start `}
      >
        <div
          data-aos={FAQ ? "fade-up" : "fade-right"}
          className={`${
            FAQ ? "lg:w-[972px]" : ""
          } w-full flex flex-col justify-center items-center h-full gap-[16px] lg:gap-[32px]`}
        >
          {accordion.map((item, index) => (
            <ExpandableText
              FAQ={FAQ}
              key={index}
              title={item.title}
              description={item.description}
              open={openIndex === index}
              handleOpen={() => handleOpenAccordion(index)}
              index={index}
              onToggle={setOpenIndex}
              onStyle={onStyle}
            />
          ))}
        </div>

        {!FAQ && pathname === "/home" && (
          <Image
            data-aos="zoom-in"
            src={accordionTrackImages[openIndex]}
            alt={openIndex + 1}
            className="w-full lg:w-1/2 object-cover flex flex-grow-0 justify-center self-start lg:mt-20"
          />
        )}
      </div>
    </div>
  );
}
