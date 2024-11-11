"use client";
import Image from "next/image";
import CTAButton from "./CTAButton";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { usePathname } from "next/navigation";

export default function CallToAction({
  data,
  section = "HeroTrack",
  hero = false,
  CTA = false,
  scrollToReg,
  scrollToQuot,
}) {
  const { subtitle = false, logo, description, buttons, text, image } = data;

  useEffect(() => {
    Aos.init();
  }, []);
  const pathname = usePathname();

  return (
    <div
      className={` ${
        CTA ? "h-fit my-[56px] lg:my-0 lg:h-[660px]" : "h-fit lg:pt-28 lg:pb-28"
      } w-full relative flex items-center `}
    >
      {/* Background image */}
      <div
        className={`w-full ${
          section === "CTATrack"
            ? "bg-[top_left] lg:bg-[center]"
            : "bg-[center]"
        }`}
        style={{
          overflow: "auto",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.4,
          zIndex: -1,
          ...(section === "CTATrack" && {
            backgroundPosition: "top left-600px",
          }),
          ...(section === "CTATrack" && {
            lg: { backgroundPosition: "center" },
          }),
        }}
      />

      {/* Opacity black background between image and text */}
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 1)",
          position: "absolute",
          width: "100%",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -2,
        }}
      />

      <div className="px-[24px] py-[98px] lg:py-0 lg:px-[108px] w-full h-full flex flex-col justify-start items-start gap-[16px] lg:gap-[32px]">
        {section === "HeroClient" && (
          <h1
            data-aos="fade-right"
            className="text-[#FFF] flex items-start justify-center flex-col text-[28px] lg:text-[64px] max-w-[660px] font-bold leading-tight"
          >
            Comenzá hoy
            <br />
            tu recuperación
            <br />
            online.
          </h1>
        )}

        {/* MAIN TITLE HERO Track */}
        {section === "HeroTrack" && (
          <div
            data-aos="fade-right"
            className="text-[#FFF] flex flex-col items-start relative justify-center text-[28px] lg:text-[64px] max-w-[800px] font-bold leading-tight"
          >
            <div className="flex">
              {/* MOBILE */}
              <h1 className="lg:hidden flex gap"></h1>

              {/* DESKTOP */}
              <h1 className="hidden lg:flex gap text-[#9f6565]"></h1>
            </div>
            {/* MOBILE */}
            <h1 className="lg:hidden">Queremos Solucionar</h1>
            <h1 className="lg:hidden">tu logística</h1>
            {/* DESKTOP */}
            <h1 className="hidden lg:block">Somos tu solución</h1>
            {/* SUBTITLE */}
            {subtitle && (
              <h2 className="text-[#FFF] text-[16px] lg:text-[48px] font-bold mt-4">
                {subtitle}
              </h2>
            )}
          </div>
        )}

        {/* MAIN TITLE Track CTA*/}
        {section === "CTATrack" && (
          <div
            data-aos="fade-right"
            className="text-[#FFF] flex items-start justify-center flex-col lg:mt-[128px] text-[28px] lg:text-[64px] max-w-[800px] font-bold leading-tight"
          >
            <h1 className="hidden lg:block">
              Una nueva
              <br />
              experiencia de
            </h1>

            <h1 className="hidden lg:flex">
              {/*<Image
                src={logo}
                alt="Reku logo"
                className="lg:w-[160px] lg:h-[68px]"
              />*/}
              gestión
            </h1>

            <h1 className="lg:hidden">
              Una nueva <br /> experiencia de{" "}
            </h1>

            <h1 className="flex lg:hidden">gestion</h1>
          </div>
        )}

        {/* DESCRIPTION */}
        <p
          data-aos="fade-down"
          data-aos-delay={hero && "250"}
          className="text-[#FFF] text-[16px] lg:text-[24px] w-[320px] lg:w-full font-medium "
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {/* ? BUTTONS */}
        {text && pathname === "/home" && (
          <h2
            data-aos="fade-down"
            data-aos-delay={hero && "500"}
            className="text-[#FFF] text-[16px] lg:text-[32px] font-bold max-w-[660px]"
          >
            {text}
          </h2>
        )}

        {/* ? TEXT */}

        {buttons && buttons.length > 0 && buttons[0] !== "" && (
          <div
            data-aos="fade-up"
            data-aos-delay={hero && "750"}
            className="flex flex-col lg:flex-row gap-[16px] lg:gap-[34px]"
          >
            {buttons
              .filter((button) => button.text && button.text !== "")
              .map((button, index) => (
                <CTAButton
                  scrollToReg={
                    section === "HeroTrack" ? scrollToReg : scrollToQuot
                  }
                  key={index}
                  redirectTo={button.url}
                  text={button.text}
                  href={button.href}
                />
              ))}
          </div>
        )}
        {/* {section === "HeroTrack" && (
          <div className="lg:border lg:border-[#fff] lg:rounded-full text-sm lg:text-xl text-white px-4 py-2 uppercase">
            llegamos
            <span className="text-[#eeff36] mx-1 font-bold"> para </span>{" "}
            satisfacer{" "}
            <span className="text-[#eeff36] mr-2 lg:mx-1 lg:ml-0 font-bold">
              {" "}
              tus
            </span>
            necesidades actuales
          </div>
        )} */}
      </div>
    </div>
  );
}
