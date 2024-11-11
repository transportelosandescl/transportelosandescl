import Image from "next/image";
import LineSeparator from "../../public/LineSeparator.svg";
import { perksHome } from "../mocks/perksHome";
import { perksEnvio } from "../mocks/perkSEnvio";
import { usePathname } from "next/navigation";
import basket from "../../public/basket-svgrepo-com.svg";
import check from "../../public/check-mark-svgrepo-com.svg";
import target from "../../public/target-svgrepo-com.svg";
import note from "../../public/note-svgrepo-com.svg";

const icons = {
  basket,
  check,
  target,
  note,
};

export default function Perks({ backgroundColor = "#e8e8e8ff", type = "1" }) {
  const pathname = usePathname();
  let data;

  switch (type) {
    case "1":
    case "2":
      data = perksHome;
      break;
    case "3":
      data = {
        backgroundColor: perksEnvio.backgroundColor,
        perks: perksEnvio.perks.map((perk) => {
          switch (perk.text) {
            case "Envíos a domicilio":
              return { ...perk, icon: "basket" };
            case "Puntos de despacho":
              return { ...perk, icon: "check" };
            case "Puntos de Entrega":
              return { ...perk, icon: "target" };
            case "Recolecciones":
              return { ...perk, icon: "note" };
            default:
              return perk;
          }
        }),
      };
      break;
    default:
      data = perksHome;
      break;
  }

  return (
    <div className="w-full">
      <div
        style={{
          backgroundColor: data.backgroundColor,
          color: data.backgroundColor === "#e8e8e8ff" ? "#1F2020" : "#FFF",
        }}
        className="w-full lg:text-base font-medium py-8 px-8 lg:py-16 flex flex-col lg:flex-row items-start lg:items-center justify-center gap-4"
      >
        {data.perks.map((perk, index) => (
          <div data-aos="fade-right"
            key={index}
            className={`flex gap-2 lg:gap-4 w-full lg:w-auto ${
              perk.icon && type === "3" ? "items-start lg:items-center" : "justify-center items-center"
            }`}
          >
            {perk.icon && type === "3" && (
              <div className="mr-2" >
                <Image src={icons[perk.icon]} alt={`${perk.icon} icon`} width={48} height={48} />
              </div>
            )}
            <span className={`${perk.icon ? "text-left" : "text-center"}`}>
              {perk.text.split(perk.boldText)[0]}
              <br />
              <strong className="text-[#eeff36]">{perk.boldText}</strong>
              {perk.text.split(perk.boldText)[1]}
            </span>
            {index < data.perks.length - 1 && (
              <Image 
                src={LineSeparator}
                alt="Line separator"
                className="hidden lg:inline-block h-[69px] w-2 mx-[54px] transform rotate-90 lg:rotate-0"
              />
            )}
          </div>
        ))}
      </div>
      <div className="w-full bg-[#3B6D38] h-3">&nbsp;</div>
    </div>
  );
}
