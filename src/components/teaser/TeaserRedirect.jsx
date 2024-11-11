import CTAButton from "@/components/CTAButton";
import { Box } from "@mui/material";

export default function TeaserRedirect() {
  return (
    <Box className=" max-w-[774px] items-center flex flex-col gap-[24px] lg:gap-[40px] text-center mx-auto">
      <p className="text-[#212121] text-[16px] p-[16px] w-[350px] lg:w-full lg:text-[32px] font-bold mt-[12px] text-center max-w-[800px]">
        80% mejor adherencia al servicio <br />{" "}
        <span className="text-[#F2866C]">30%</span> mejores resultados en la
        gestion
      </p>
      <div className=" lg:w-full flex flex-col md:flex-row justify-center items-center gap-[16px] lg:gap-[34px]">
        <CTAButton teaser redirectTo={"/Client"} text={"SOY CLIENTE"} />
        <CTAButton teaser redirectTo={"/home"} text={"SOY TRANSPORTISTA"} />
      </div>
    </Box>
  );
}
