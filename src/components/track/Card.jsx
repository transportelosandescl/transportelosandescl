import Image from "next/image";
import starIcon from "../../../public/star.svg"; // Asegúrate de que la ruta sea correcta

export default function Card({ text, name, company, rating }) {
  const renderRatingStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Image
          key={i}
          src={starIcon}
          alt="Star"
          className={i < rating ? "text-yellow-500" : "text-gray-300"}
          width={15}
          height={15}
        />
      );
    }
    return stars;
  };

  return (
    <div className="w-[243px] h-[264px] flex flex-col justify-between text-start gap-[10px] p-[20px] bg-white shadow-md rounded-md">
      <p className="italic text-[13px] font-medium">&quot;{text}&quot;</p>
      <div className="flex flex-col">
        <span className="text-[14px] font-bold">{name}</span>
        <span className="text-[14px] text-green-600">{company}</span>
      </div>
      <div className="flex items-center gap-[5px]">
        {renderRatingStars()}
      </div>
    </div>
  );
}
