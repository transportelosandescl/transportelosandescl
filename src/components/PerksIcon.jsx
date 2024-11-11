import Image from "next/image";
import LineSeparator from "../../public/LineSeparator.svg";
import  {perksTrack}  from "../mocks/perksHome";

export default function Perks({ backgroundColor = "#e8e8e8ff" }) {
  var data;
 
    data = perksTrack;
 
  return (
    <div className="w-full">
      <div
        style={{
          backgroundColor: data.backgroundColor,
          color: data.backgroundColor === "#e8e8e8ff" ? "#1F2020" : "#FFF",
        }}
        className="w-full h-fit lg:h-[375px] lg:text-base font-medium text-center py-[56px] lg:py-[102px] flex flex-col lg:flex-row justify-center items-center"
      >
        {data.perks.map((perk, index) => (
          <>
            <span>
              {perk.text.split(perk.boldText)[0]}
              <br />
              <strong className="text-[#eeff36]">{perk.boldText}</strong>
              {perk.text.split(perk.boldText)[1]}
            </span>
            {index < data.perks.length - 1 && (
  <Image
    src={LineSeparator}
    alt="Line separator One"
    className="hidden lg:inline-block h-[69px] w-2 mx-[54px] transform rotate-90 lg:rotate-0"
  />
)}
          </>
        ))}
      </div>
      <div className="w-full bg[#3B6D38] h-3">&nbsp;</div>
    </div>
  );
}
