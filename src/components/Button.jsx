import React from "react";
const Button = ({ label, icon, styles, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`flex justify-center items-center gap-4 font-bold text-white pink__gradient text-center py-4 px-8 ${
      styles ? styles : "text-[16px] sm:text-[18px] leading-5 sm:leading-6"
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);
export default Button;
