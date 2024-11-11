import Link from "next/link";

export default function CTAButton({ href, scrollToReg, redirectTo, text, teaser = false }) {


  return (
    <>
    
      {!href ? (
        <button
          onClick={scrollToReg}
          className={`${teaser ? "px-[30px] lg:px-0 lg:w-[360px]" : "px-[30px]"} w-fit text-[#FFF] text-[16px] lg:text-[24px] font-bold h-[40px] lg:h-[60px] border-[3px] transition duration-300 border-solid border-[#599ea8ff]  flex items-center justify-center bg-[#6FC5D2] hover:bg-[#599ea8ff]  rounded-[60px]`}
        >
          {text}
        </button>
      ) : (
        
        <Link
          href={redirectTo}
          className={`${teaser ? "px-[30px] lg:px-0 lg:w-[360px]" : "px-[30px]"} w-fit text-[#FFF] text-[16px] lg:text-[24px] font-bold h-[40px] lg:h-[60px] border-[3px] transition duration-300 border-solid border-[#599ea8ff]  flex items-center justify-center bg-[#6FC5D2] hover:bg-[#599ea8ff]  rounded-[60px]`}
        >
          {text}
        </Link>
      )
      }
    </>
  );
};
