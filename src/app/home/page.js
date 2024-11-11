"use client"
import { useRef } from "react";
import Perks from "@/components/Perks"
import NavBar from "@/components/NavBar"
import AccordionSection from "@/components/AccordionSection"
import CallToAction from "@/components/CallToAction"
import WhatTheySay from "@/components/track/WhatTheySay"
import Footer from "@/components/Footer"
import { accordionTrack } from "@/mocks/accordionSectionTrack"
import { accordionFAQTrack } from "@/mocks/accordionFAQTrack"
import { CTATrack } from "@/mocks/CTATrack"
import { HeroTrack } from "@/mocks/HeroTrack"
import Quotation from '@/components/track/Quotation';
import FloatingWhatsAppButton from "@/components/track/FloatingWhatsAppButtom"

export default function Home() {
  const refComponent = useRef(null);
  const refComponentRegister = useRef(null);
  const refComponentQuotation = useRef(null);
  const refComponentFAQ = useRef(null);
  const refComponentContact = useRef(null);

  const scrollToRef = () => {
    if (refComponent.current) {
      refComponent.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  const scrollToRefRegister = () => {
    if (refComponentRegister.current) {
      const yOffset = -175;
      const yPosition = refComponentRegister.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
  }
  const scrollToRefQuotation = () => {
    if (refComponentQuotation.current) {
      const yOffset = -50;
      const yPosition = refComponentQuotation.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
  }
  const scrollToRefFAQ = () => {
    if (refComponentFAQ.current) {
      const yOffset = -100;
      const yPosition = refComponentFAQ.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
  }
  const scrollToRefContact = () => {
    if (refComponentContact.current) {
      const yOffset = -100;
      const yPosition = refComponentContact.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
  }
  return (
    <>
      <NavBar
        scrollTo={scrollToRef}
        scrollToReg={scrollToRefRegister}
        scrollToQuot={scrollToRefQuotation}
        scrollToFAQ={scrollToRefFAQ}
        scrollToContac={scrollToRefContact}
      />
      <CallToAction section="HeroTrack" data={HeroTrack} scrollToReg={scrollToRefRegister} hero />
      <Perks backgroundColor="#1F2020" type="1" />
      <AccordionSection refComponent={refComponent} accordion={accordionTrack} />
      <CallToAction section="CTATrack" data={CTATrack} CTA />
      <div ref={refComponentQuotation}>
        <Quotation />
      </div>
      <Perks backgroundColor="#1F2020" type="3" />
      <AccordionSection refComponent={refComponentFAQ} accordion={accordionFAQTrack} FAQ onStyle={true} />
      <WhatTheySay />
      <div ref={refComponentContact}>
        <Footer CTA />
      </div>
      <FloatingWhatsAppButton />
    </>
  )
};