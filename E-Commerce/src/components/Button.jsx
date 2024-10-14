import React from "react";

const Button = ({
  text = "Button",
  icon = null,
  iconPosition = "left",
  variant = "primary",
  rounded = false,
  outlined = false,
  ghost = false,
  size = "md",
  color = "violet",
  action,
  children,
}) => {
  const baseStyles = `font-semibold focus:outline-none focus:ring focus:ring-opacity-75 transition duration-200 ease-in-out`;
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary-dark focus:ring-primary",
    secondary:
      "bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary",
    outline:
      "border border-primary text-primary hover:bg-primary-light focus:ring-primary",
    ghost:
      "bg-transparent text-blue-500 hover:text-blue-700 focus:ring-blue-300",
  };

  const colorStyles = {
    violet: "text-violet-500",
  };

  const shapeStyles = rounded ? "rounded-full" : "rounded-md";

  return (
    <button
      onClick={action}
      className={`${baseStyles} ${sizeStyles[size]} ${
        colorStyles[color] || ""
      } ${variantStyles[variant]} ${shapeStyles}`}
    >
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {children || text}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
