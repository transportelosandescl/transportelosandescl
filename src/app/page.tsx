/* "use client";

import { TLAIcon } from "@/components/icons";
import FloatingWhatsAppButton from "@/components/track/FloatingWhatsAppButtom";
import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="h-screen w-full flex flex-col gap-8 px-8 items-center justify-center bg-[url('/bg-landing-home-2.jpg')] bg-center bg-cover bg-no-repeat">
        <div className="w-full justify-center items-center flex flex-col gap-6">
          <Typography
            className="text-white"
            fontSize={20}
            fontWeight={600}
            style={{ fontSize: "clamp(14px, 1rem + 1vw, 22px)" }}
          >
            PROXIMAMENTE
          </Typography>
          <TLAIcon className="h-[58px] w-[132px] lg:h-[90px] lg:w-[210px] md:h-[60px] md:w-[160px] text-[#3B6D38]" />
        </div>
        <div className="w-full justify-center items-center flex flex-col">
          <Typography
            className="text-white text-center w-[90%] lg:w-[35%]"
            fontWeight={600}
            style={{ fontSize: "clamp(24px, 1rem + 1vw, 32px)" }}
          >
            Llevando tus envíos a nuevos horizontes Estamos preparando algo
            increíble para ti. Pronto, Transporte Los Andes estará listo para
            ofrecerte soluciones de logística y transporte confiables y
            eficientes. ¡Mantente atento!
          </Typography>
        </div>
        <div>
          <Button
            variant="contained"
            onClick={() => setIsOpen(true)}
            sx={{
              backgroundColor: "#2E5C2E !important",
              color: "white",
              borderRadius: "9999px", // Equivalente a rounded-full en Tailwind
              "&:hover": {
                backgroundColor: "#558855 !important", // Color de fondo al pasar el ratón
              },
              border: "3px solid #2E5C2E",
              fontWeight: "600",
            }}
          >
            Más info
          </Button>
        </div>
      </div>
      <Modal
        className="flex justify-center items-center"
        open={isOpen}
        onClose={onClose}
      >
        <Box className="flex w-[90%] md:w-[60%] max-h-[90%] flex-col gap-4 bg-white rounded-[20px] p-[24px]">
          <div className="w-full flex justify-end">
            <Button
              variant="contained"
              onClick={onClose}
              sx={{
                backgroundColor: "#F7F7F7 !important",
                color: "#555555",
                borderRadius: "9999px", // Equivalente a rounded-full en Tailwind
                fontWeight: "600",
                boxShadow: "none",
              }}
            >
              Cerrar
            </Button>
          </div>
          <video
            controls
            width="100%"
            className="rounded-lg shadow-lg"
            poster="/Reku–portada.jpg"
          >
            <source
              src="/video/SaveClip.App_844D0B006798833132351E1C738954A3_video_dashinit.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </Box>
      </Modal>
      <FloatingWhatsAppButton />
    </>
  );
}
 */
"use client";
import { useRef } from "react";
import Perks from "@/components/Perks";
import NavBar from "@/components/NavBar";
import AccordionSection from "@/components/AccordionSection";
import CallToAction from "@/components/CallToAction";
import WhatTheySay from "@/components/track/WhatTheySay";
import Footer from "@/components/Footer";
import { accordionTrack } from "@/mocks/accordionSectionTrack";
import { accordionFAQTrack } from "@/mocks/accordionFAQTrack";
import { CTATrack } from "@/mocks/CTATrack";
import { HeroTrack } from "@/mocks/HeroTrack";
import Quotation from "@/components/track/Quotation";
import FloatingWhatsAppButton from "@/components/track/FloatingWhatsAppButtom";

export default function Home() {
  const refComponent = useRef<HTMLDivElement | null>(null);
  const refComponentRegister = useRef<HTMLDivElement | null>(null);
  const refComponentQuotation = useRef<HTMLDivElement | null>(null);
  const refComponentFAQ = useRef<HTMLDivElement | null>(null);
  const refComponentContact = useRef<HTMLDivElement | null>(null);

  const scrollToRef = () => {
    if (refComponent.current) {
      refComponent.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToRefRegister = () => {
    if (refComponentRegister.current) {
      const yOffset = -175;
      const yPosition =
        refComponentRegister.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };
  const scrollToRefQuotation = () => {
    if (refComponentQuotation.current) {
      const yOffset = -50;
      const yPosition =
        refComponentQuotation.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };
  const scrollToRefFAQ = () => {
    if (refComponentFAQ.current) {
      const yOffset = -100;
      const yPosition =
        refComponentFAQ.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };
  const scrollToRefContact = () => {
    if (refComponentContact.current) {
      const yOffset = -100;
      const yPosition =
        refComponentContact.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };
  return (
    <>
      <NavBar
        scrollTo={scrollToRef}
        scrollToReg={scrollToRefRegister}
        scrollToQuot={scrollToRefQuotation}
        scrollToFAQ={scrollToRefFAQ}
        scrollToContac={scrollToRefContact}
      />
      <CallToAction
        section="HeroTrack"
        data={HeroTrack}
        scrollToReg={scrollToRefRegister}
        scrollToQuot={""}
        hero
      />
      <Perks backgroundColor="#1F2020" type="1" />
      <AccordionSection
        refComponent={refComponent}
        accordion={accordionTrack}
      />
      <CallToAction
        section="CTATrack"
        data={CTATrack}
        scrollToReg={""}
        scrollToQuot={""}
        CTA
      />
      <div ref={refComponentQuotation}>
        <Quotation />
      </div>
      <Perks backgroundColor="#1F2020" type="3" />
      <AccordionSection
        refComponent={refComponentFAQ}
        accordion={accordionFAQTrack}
        FAQ
        onStyle={true}
      />
      <WhatTheySay />
      <div ref={refComponentContact}>
        <Footer CTA />
      </div>
      <FloatingWhatsAppButton />
    </>
  );
}
