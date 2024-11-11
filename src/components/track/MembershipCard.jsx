import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import RemoveIcon from "@mui/icons-material/Remove";

export default function MembershipCard({ category, features, price, recommended = false }) {

  const confirmationOptions = {
    check: <CheckIcon sx={{ color: "grey" }} />,
    off: <RemoveIcon sx={{ color: "grey" }} />,
    60: <span className="font-bold text-[#ed836b]">60</span>,
    130: <span className="font-bold text-[#454b73]">130</span>,
    300: <span className="font-bold text-[#6FC5D2]">300</span>,
  };

  const outerContainerStyle = recommended ? {
    background: 'linear-gradient(to bottom right, orange, #6FC5D2, #454b73)',
    borderRadius: '1.5rem', 
    padding: '2px', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
  } : {
    borderColor: '#6FC5D2',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderRadius: '1.5rem', 
  };

  const innerContainerStyle = recommended ? {
    borderRadius: '1.5rem', 
    backgroundColor: 'white'
  } : {
    borderRadius: '1.5rem', 
    backgroundColor: 'white',
    border: 'none'
  };

  return (
    <div className="flex flex-col justify-center items-center px-6 py-5 lg:w-[18%] sm:w-[30%] md:w-[100%]">
      <div style={outerContainerStyle} className="w-full">
        <div className="relative flex flex-col justify-center items-center px-6 py-4" style={innerContainerStyle}>
          {recommended && (
            <span className="absolute top-[-34px] bg-[#6FC5D2] text-white px-8 py-1 rounded-t-2xl"><strong>RECOMENDADO</strong></span>
          )}
          <h1 className="text-[20px]">
            Reku <strong>{category}</strong>
          </h1>
          <div className="w-[33%] h-[1px] border-black border-b mt-2" />
          <div className="w-full flex-col flex mt-4 gap-1">
            {features.map((item, index) => (
              <div key={index} className="flex justify-between items-center gap-11">
                <span className="text-[13px]">{item.text}</span>
                {confirmationOptions[item.confirmation] || null}
              </div>
            ))}
          </div>
          <div className="w-[33%] h-[1px] border-black border mt-3" />
          <h2 className="text-[20px] mt-2">US$ {price}</h2>
        </div>
      </div>
    </div>
  );
}