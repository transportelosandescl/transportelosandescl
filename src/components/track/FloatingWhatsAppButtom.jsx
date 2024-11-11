import React from 'react';
import WhatsAppLogo from "../../../public/WhatsAppLogo";

const FloatingWhatsAppButton = () => {
  return (
    <div className="floating-button-container">
    <a
      href="https://api.whatsapp.com/send?phone=+56991544082"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-button"
    >
      <WhatsAppLogo />
      <span className="tooltip">Escríbenos</span>
    </a>
  </div>
  );
};

export default FloatingWhatsAppButton;