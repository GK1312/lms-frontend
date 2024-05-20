import React from "react";

const PrimaryButton = React.memo(function PrimaryButton({
  title,
  button = "button",
  type = "default",
}: {
  title: string;
  button?: "submit" | "button";
  type?:
    | "default"
    | "primary"
    | "primary-outlined"
    | "secondary"
    | "secondary-outlined";
}) {
  return (
    <button
      type={button}
      className={`${
        type === "default"
          ? "text-default-text bg-default hover:text-white hover:bg-default-hover"
          : type === "primary"
          ? "text-white bg-primary hover:bg-primary-hover"
          : type === "primary-outlined"
          ? "text-primary border border-primary bg-white hover:text-white hover:bg-primary"
          : ""
      } px-5 py-3 text-sm leading-none font-semibold uppercase rounded-3xl transition-all duration-200 ease-in-out`}
    >
      {title}
    </button>
  );
});

export default PrimaryButton;
