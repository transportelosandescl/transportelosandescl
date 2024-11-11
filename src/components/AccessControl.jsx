import { useState } from "react";
import Image from "next/image";
import { useAuth } from "../context/AuthContext";
import TLALogo from "../../public/TLALogo.svg";
import LoadingGif from "../../public/LoadingGif.gif";

const AccessControl = () => {
  const [inputValue, setInputValue] = useState("");
  const { login, loading, failedAttempt } = useAuth();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmitPassword = (value) => {
    login(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitPassword(inputValue);
    setInputValue("");
  };

  return (
    <div className="w-full h-[100vh] flex-col flex justify-center items-center gap-6">
      {!loading ? (
        <>
          <Image
            src={TLALogo}
            alt="Reku logo"
            className="w-[103px] h-[44px] lg:w-[330px] lg:h-[141px]"
          />
          {failedAttempt && (
            <span className="text-[12px] lg:text-[16px] text-red-500">
              Contraseña incorrecta, intentelo nuevamente.
            </span>
          )}
          <form
            className="flex flex-col justify-center items-center gap-6"
            onSubmit={handleSubmit}
          >
            <input
              type="password"
              onChange={handleInputChange}
              placeholder="Insertar contraseña"
              value={inputValue}
              className="border-[3px] border-solid border-[#599ea8ff] px-[10px] rounded-[60px]"
            />
            <button
              type="submit"
              onClick={onSubmitPassword}
              className="w-fit px-[30px] text-[#FFF] text-[16px] lg:text-[24px] font-bold h-[40px] lg:h-[60px] border-[3px] transition duration-300 border-solid border-[#599ea8ff]  flex items-center justify-center bg-[#6FC5D2] hover:bg-[#599ea8ff]  rounded-[60px]"
            >
              Ingresar
            </button>
          </form>
        </>
      ) : (
        <Image
          src={LoadingGif}
          width={100}
          height={100}
          alt="Loading gif"
          className="flex items-center justify-center"
        />
      )}
    </div>
  );
};

export default AccessControl;
