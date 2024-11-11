import Image from "next/image";
import TLALogo from "../../../public/TLALogo.svg";
import TLALogoW from "../../../public/TLALogoWhite.svg";

export default function TeaserHero() {
  return (
    <div className="bg bg-none ">
      <div className="w-full h-[305px] lg:h-[fit-content] lg:py-2 xl:py-8 relative bg-[none] z-1 flex items-center justify-center">
        <div
          style={{
            backgroundImage: `url(TeaserBackground.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.4,
            zIndex: -1,
          }}
        />
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 1)",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -2,
          }}
        />
        <div className="h-[402px] gap-4 lg:gap-0 flex flex-col justify-center items-center">
          <h2 className="text-[#FFF] text-[16px] lg:text-[32px] font-bold">
            LLEGÓ
          </h2>
          <Image
            src={TLALogo}
            alt="TLA logo"
            className="w-[103px] h-[44px] lg:w-[330px] lg:h-[141px] lg:mb-[40px] xl:mb-[80px]"
          />
          {/* Mobile */}
          <div className="text-[#FFF] flex lg:hidden flex-col items-center relative justify-center text-[28px] max-w-[660px] font-bold leading-tight">
            <div className="flex">
              <h1 className="flex gap">El</h1>
              <Image
                src={TLALogoW}
                alt="TLA logo"
                className="w-[34px] h-[28px] ml-6 mt-[5px] mr-1"
              />
              <h1 className="flex gap">Aliado de gestión</h1>
            </div>

            <h1>Somos</h1>
          </div>
          {/* Desktop */}
          <div className="text-[#FFF] hidden lg:flex items-start relative justify-center text-[28px] lg:text-[48px] font-bold leading-tight">
            <h1>El</h1>
            <Image
              src={TLALogoW}
              alt="TLA logo"
              className="w-[34px] h-[28px] lg:w-[50px] lg:h-[50px] ml-3 lg:ml-6 mt-[3px] lg:mt-[5px] lg:mr-1"
            />
            <h1>Aliado de gestión</h1>
          </div>
          <h3 className="text-[#FFF] text-[16px] lg:text-[32px] font-normal">
            de forma ágil y efectiva.
          </h3>
        </div>
      </div>
    </div>
  );
}
