import React from "react";

const Loader = React.memo(function Loader({
  size = "xs",
  dark = true,
}: {
  size?: "xs" | "sm" | "md" | "lg";
  dark?: boolean;
}) {
  return (
    <div
      className={`loader ${
        size === "xs"
          ? "w-5"
          : size === "sm"
          ? "w-8"
          : size === "md"
          ? "w-10 medium"
          : size === "lg"
          ? "w-14 large"
          : ""
      } ${dark ? "dark-loader" : ""} rounded-full`}
    ></div>
  );
});

Loader.displayName = "LoaderComponent";

export default Loader;
