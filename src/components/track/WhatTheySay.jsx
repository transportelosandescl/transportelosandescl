"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";
import "swiper/css";
import "swiper/css/pagination";
import "./WhatTheySay.styles.css";

const mockCards = [
  {
    text: "Transporte Los Andes es muy eficiente. Pude programar el envío de mis productos de manera rápida y sencilla. Llegaron puntualmente y en perfecto estado.",
    name: "María Fernández",
    company:"BioCargo Solutions",
    rating: 5, // Calificación de ejemplo para el primer usuario
  },
  {
    text: "Estoy muy satisfecho con el servicio de Transporte Los Andes. La plataforma es intuitiva y permite hacer seguimiento en tiempo real de mis envíos.",
    name: "Juan Pérez",
    company:"EcoLogistics Group",
    rating: 4, // Calificación de ejemplo para el segundo usuario
  },
  {
    text: "Transporte Los Andes cumplió con todas mis expectativas. Manejan una logística impecable y el personal es muy atento y profesional.",
    name: "Laura Gómez",
    company:"GreenTech Supplies",
    rating: 4, // Calificación de ejemplo para el tercer usuario
  },
  {
    text: "Me encanta la facilidad que ofrece Transporte Los Andes para coordinar mis entregas. Es perfecto para gestionar múltiples envíos de forma eficiente.",
    name: "Carlos Martínez",
    company:"GreenTech Supplies",
    rating: 5, // Calificación de ejemplo para el cuarto usuario
  },
  {
    text: "Utilizar Transporte Los Andes ha sido una experiencia muy positiva. Su sistema de reservas es claro y preciso, y el servicio al cliente es excelente.",
    name: "Ana Rodríguez",
    company:"TechLog Solutions",
    rating: 4, // Calificación de ejemplo para el quinto usuario
  },
];

export default function WhatTheySay() {
  return (
    <div className="flex flex-col justify-center items-center gap-[48px] lg:gap-[80px] py-[56px]  lg:py-[140px] bg-[#F2F2F2]">
      <h2 className="flex justify-center items-center text-center px-[24px] text-[28px] lg:text-[48px] font-bold ">
        Lo que dicen nuestros clientes
      </h2>
      <div className="flex relative justify-center items-center">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          initialSlide={1}
          centeredSlides={true}
          className="mySwiper"
        >
          {mockCards.map((card, index) => (
            <SwiperSlide key={index}>
              <Card key={index} text={card.text} name={card.name} company={card.company}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
