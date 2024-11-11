import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import emailjs from "emailjs-com";
import Image from "next/image";
import likeIcon from "../../../public/like.svg";
import dislikeIcon from "../../../public/dislike.svg";
import loadingIcon from "../../../public/LoadingGif.gif"; // Asegúrate de que la ruta sea correcta
import Aos from "aos";
import "aos/dist/aos.css";

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [cvFile, setCvFile] = useState(null); // Para almacenar el archivo de CV
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Aos.init();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCvUpload = (e) => {
    const file = e.target.files[0];
    if (
      file &&
      (file.type === "application/pdf" ||
        file.type === "application/msword" ||
        file.type.includes("officedocument"))
    ) {
      setCvFile(file);
      setErrors((prev) => ({ ...prev, cvFile: "" }));
    } else {
      setErrors((prev) => ({
        ...prev,
        cvFile: "Por favor, sube un archivo en formato PDF o DOC.",
      }));
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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

    if (!validateEmail(formData.email)) {
      setErrors((prev) => ({ ...prev, email: "Correo electrónico inválido." }));
      return;
    }

    if (!cvFile) {
      setErrors((prev) => ({ ...prev, cvFile: "Es necesario subir un CV." }));
      return;
    }

    setIsLoading(true);

    // Crear un FormData y adjuntar el archivo y otros campos
    const formDataToSend = new FormData(e.target); // Esto incluye todos los campos del formulario, incluyendo el archivo

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_CV_ID, // Reemplaza con tu Service ID de EmailJS
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CV_ID, // Reemplaza con tu Template ID de EmailJS
        e.target, // Esto envía el formulario HTML
        process.env.NEXT_PUBLIC_EMAILJS_USER_CV_ID // Reemplaza con tu User ID de EmailJS
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
        setCvFile(null);
        setIsSuccess(true);
        setIsLoading(false);
        setShowModal(true);
        setTimeout(() => setShowModal(false), 3000);
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setIsSuccess(false);
        setIsLoading(false);
        setShowModal(true);
        setTimeout(() => setShowModal(false), 3000);
      });
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center mt-2 mb-2">
        Postula a un Puesto
      </h1>
      <form
        onSubmit={handleSubmit}
        className="px-6 py-6 bg-white rounded-lg"
        encType="multipart/form-data"
      >
        <div className="mb-2">
          <label className="text-[14px] block text-gray-700">Nombre*</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="text-[12px] form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="text-[14px] block text-gray-700">Apellido*</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="text-[12px] form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="text-[14px] block text-gray-700">
            Correo electrónico*
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleEmailBlur}
            required
            className="text-[12px] form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="text-[14px] block text-gray-700">
            Número de teléfono
          </label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="text-[12px] form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="text-[14px] block text-gray-700">
            Mensaje (opcional)
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="text-[12px] form-textarea mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Escribe un mensaje..."
          />
        </div>
        <div className="mb-4">
          <label className="text-[14px] block text-gray-700">
            Cargar CV (PDF o DOC)
          </label>
          <input
            type="file"
            name="cvFile"
            onChange={handleCvUpload}
            accept=".pdf,.doc,.docx"
            className="text-[12px] form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.cvFile && (
            <p className="text-red-500 text-xs mt-1">{errors.cvFile}</p>
          )}
        </div>
        <Button
          type="submit"
          variant="contained"
          className="text-[12px] w-full py-2 bg-[#3B6D38] text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Enviar Postulación
        </Button>
      </form>

      {/* Modal de éxito o error */}
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
                  ¡Gracias por tu postulación!
                </h2>
                <p>Nos pondremos en contacto contigo pronto.</p>
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
                <p>No pudimos enviar tu postulación. Intenta más tarde.</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default JobApplicationForm;
