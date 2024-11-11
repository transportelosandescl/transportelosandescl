"use client";
import Perks from "../../components/Perks";
import NavBar from "../../components/NavBar";
import AccordionSection from "../../components/AccordionSection";
import Footer from "../../components/Footer";
import CallToAction from "../../components/CallToAction";
import { accordionClient } from "@/mocks/accordionSectionClient";
import { accordionFAQClient } from "@/mocks/accordionFAQClient";
import { CTAClient } from "@/mocks/CTAClient";
import { HeroClient } from "@/mocks/HeroClient"
import { useAuth } from "../../context/AuthContext";
import { useRef } from "react";

export default function Client() {
  const { access } = useAuth();
  const refComponent = useRef(null);

  const scrollToRef = () => {
    if (refComponent.current) {
      refComponent.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  // return access ? (
  return (
    <>
      <NavBar scrollTo={scrollToRef} />
      <CallToAction section="HeroPaClient" data={HeroClient} hero />
      <Perks />
      <AccordionSection refComponent={refComponent} accordion={accordionClient} />
      <CallToAction section="CTAClient" data={CTAClient} CTA />
      <AccordionSection accordion={accordionFAQClient} FAQ onStyle={true} />
      <Footer />
    </>

  )
  // ) : (
  //   <AccessControl />
  // );
};  
