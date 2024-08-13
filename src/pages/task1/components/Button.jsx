import React from "react";

const Button = ({
  children,
  className = "",
  bgColor = "bg-blue-500",
  textColor = "text-white",
  paddingX = "px-4",
  paddingY = "py-2",
  fontWeight = "font-semibold",
  borderRadius = "rounded-lg",
  size = "small",
  onClick,
  ...props
}) => {
  return (
    <button
      className={`${bgColor} ${textColor} ${paddingX} ${paddingY} ${fontWeight} ${borderRadius} ${size} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
