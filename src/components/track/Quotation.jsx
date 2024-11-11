import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import emailjs from "emailjs-com";
import Image from "next/image";
import likeIcon from "../../../public/like.svg";
import dislikeIcon from "../../../public/dislike.svg";
import loadingIcon from "../../../public/LoadingGif.gif"; // Asegúrate de que la ruta sea correcta
import Aos from "aos";
import "aos/dist/aos.css";

const QuotationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    country: "",
    email: "",
    companyName: "",
    region: "",
    industryType: "",
    distributionService: "",
    detail: "",
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    Aos.init();
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const countries = [{ name: "Chile", code: "+56" }];

  const industries = [
    "ALIMENTOS",
    "BANCA",
    "FARMACIA",
    "HOGAR",
    "INDUSTRIA",
    "MODA",
    "OTROS",
    "RETAIL",
    "TECNOLOGÍA",
    "TEMPERATURA CONTROLADA",
  ];

  const services = [
    "E-commerce - Flota consolidada",
    "Flota dedicada última milla",
    "Flota dedicada primera milla",
    "Distribución de Tiendas y Supermercados",
    "Movimiento de Contenedores y Ramplas",
  ];

  const regions = [
    "Arica y Parinacota",
    "Tarapacá",
    "Antofagasta",
    "Atacama",
    "Coquimbo",
    "Valparaíso",
    "Libertador Gral. Bernardo O’Higgins",
    "Maule",
    "Biobío",
    "Araucanía",
    "Los Ríos",
    "Los Lagos",
    "Aisén del Gral. Carlos Ibáñez del Campo",
    "Magallanes",
    "Metropolitana de Santiago",
    "Ñuble",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDetailChange = (e) => {
    const value = e.target.value;
    const noSpecialChars = /^[A-Za-z0-9\s]+$/;

    if (value.length <= 1000 && (value === "" || noSpecialChars.test(value))) {
      setFormData({ ...formData, detail: value });
    }
  };

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/; // Expresión regular para números de teléfono internacionales
    return phoneRegex.test(number);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handlePhoneNumberBlur = () => {
    if (!validatePhoneNumber(formData.phoneNumber)) {
      setErrors((prev) => ({
        ...prev,
        phoneNumber: "Número de teléfono inválido.",
      }));
    } else {
      setErrors((prev) => ({ ...prev, phoneNumber: "" }));
    }
  };

  const handleEmailBlur = () => {
    if (!validateEmail(formData.email)) {
      setErrors((prev) => ({ ...prev, email: "Correo electrónico inválido." }));
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    if (!validatePhoneNumber(formData.phoneNumber)) {
      setErrors((prev) => ({
        ...prev,
        phoneNumber: "Número de teléfono inválido.",
      }));
      valid = false;
    }

    if (!validateEmail(formData.email)) {
      setErrors((prev) => ({ ...prev, email: "Correo electrónico inválido." }));
      valid = false;
    }

    if (!valid) return;

    setIsLoading(true); // Iniciar el loading
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formDataToSend,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        // Limpiar el formulario
        setFormData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          country: "",
          email: "",
          companyName: "",
          region: "",
          industryType: "",
          distributionService: "",
          detail: "",
        });
        setIsSuccess(true);
        setIsLoading(false); // Detener el loading
        setShowModal(true); // Mostrar el modal de éxito
        setTimeout(() => setShowModal(false), 3000); // Ocultar el modal después de 3 segundos
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setIsSuccess(false);
        setIsLoading(false); // Detener el loading
        setShowModal(true); // Mostrar el modal de fallo
        setTimeout(() => setShowModal(false), 3000); // Ocultar el modal después de 3 segundos
      });
  };

  return (
    <div className="w-full gap-[32px] lg:gap-[63px] lg:py-[140px] quotation-form">
      <style jsx>{`
        .quotation-form {
          position: relative;
          overflow: hidden;
        }

        .circle {
          position: absolute;
          border-radius: 50%;
          background: #3b6d38;
          animation: ripple 15s infinite;
          box-shadow: 0px 0px 1px 0px #508fb9;
        }

        .small {
          width: 200px;
          height: 200px;
          left: -100px;
          bottom: -100px;
        }

        .medium {
          width: 400px;
          height: 400px;
          left: -200px;
          bottom: -200px;
        }

        .large {
          width: 600px;
          height: 600px;
          left: -300px;
          bottom: -300px;
        }

        .xlarge {
          width: 800px;
          height: 800px;
          left: -400px;
          bottom: -400px;
        }

        .xxlarge {
          width: 1000px;
          height: 1000px;
          left: -500px;
          bottom: -500px;
        }

        .shade1 {
          opacity: 0.2;
        }

        .shade2 {
          opacity: 0.5;
        }

        .shade3 {
          opacity: 0.7;
        }

        .shade4 {
          opacity: 0.8;
        }

        .shade5 {
          opacity: 0.9;
        }

        @keyframes ripple {
          0% {
            transform: scale(0.8);
          }

          50% {
            transform: scale(1.2);
          }

          100% {
            transform: scale(0.8);
          }
        }
      `}</style>
      <h1 className="text-3xl font-bold text-center mt-10 mb-6">
        ¡HAGAMOS JUNTOS LA MEJOR LOGÍSTICA!
      </h1>
      <form onSubmit={handleSubmit} className="max-w-md px-8 py-8 mx-auto">
        <div className="flex mb-4">
          <div className="w-1/2 pr-2">
            <label className="block text-gray-700">Nombre*</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="w-1/2 pl-2">
            <label className="block text-gray-700">Apellido*</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="flex mb-4">
          <div className="w-1/2 pr-2">
            <label className="block text-gray-700">País*</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="form-select mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">SELECCIONA UN PAÍS</option>
              {countries.map((country) => (
                <option key={country.name} value={country.name}>
                  {country.name.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          <div className="w-1/2 pl-2">
            <label className="block text-gray-700">Número de teléfono*</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              onBlur={handlePhoneNumberBlur}
              required
              className="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Número de teléfono"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Correo electrónico*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleEmailBlur}
            required
            className="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Correo electrónico"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Nombre de la empresa*</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
            className="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Nombre de la empresa"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Región*</label>
          <select
            name="region"
            value={formData.region}
            onChange={handleChange}
            required
            className="form-select mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">SELECCIONA UNA REGIÓN</option>
            {regions.map((region, index) => (
              <option key={index} value={region}>
                {region.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Tipo de industria*</label>
          <select
            name="industryType"
            value={formData.industryType}
            onChange={handleChange}
            required
            className="form-select mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">SELECCIONAR</option>
            {industries.map((industry, index) => (
              <option key={index} value={industry}>
                {industry.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            Tipo de servicio de Distribución*
          </label>
          <select
            name="distributionService"
            value={formData.distributionService}
            onChange={handleChange}
            required
            className="form-select mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">SELECCIONA UN TIPO DE SERVICIO</option>
            {services.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">
            Detalle (hasta 1000 caracteres, sin caracteres especiales)
          </label>
          <textarea
            name="detail"
            value={formData.detail}
            onChange={handleDetailChange}
            maxLength={1000}
            className="form-textarea mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Escriba los detalles aquí..."
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          className="w-full py-2 bg-[#3B6D38] text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          ENVIAR
        </Button>
        {/* Condicional para cargar los div con className "circle" solo si no es móvil */}
        {!isMobile && (
          <>
            <div className="circle xxlarge shade1"></div>
            <div className="circle xlarge shade2"></div>
            <div className="circle large shade3"></div>
            <div className="circle medium shade4"></div>
            <div className="circle small shade5"></div>
          </>
        )}
      </form>

      {/* Modal de éxito o fallo */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg text-center">
            {isLoading ? (
              <Image
                src={loadingIcon}
                alt="Loading"
                width={100}
                height={100}
                data-aos="zoom-out"
              />
            ) : isSuccess ? (
              <>
                <Image
                  src={likeIcon}
                  alt="Success"
                  width={100}
                  height={100}
                  data-aos="zoom-out"
                />
                <h2 className="mt-4 text-xl font-bold">
                  ¡Gracias por tu solicitud!
                </h2>
                <p>Nos pondremos en contacto contigo lo antes posible.</p>
              </>
            ) : (
              <>
                <Image
                  src={dislikeIcon}
                  alt="Error"
                  width={100}
                  height={100}
                  data-aos="zoom-out"
                />
                <h2 className="mt-4 text-xl font-bold">Lo sentimos</h2>
                <p>No podemos recibir tu consulta en este momento.</p>
                <p>Por favor, visita nuestra sección de contacto.</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuotationForm;
