import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        "100": "25rem",
        "94": "23.5rem",
        headerBar: "calc(100% - 15rem)",
      },
      maxWidth: {
        "auth-card-sm": "calc(-0.75rem + 100vw)",
        "auth-card-lg": "calc(-5rem + 100vw)",
        "default-header": "calc(-2rem + 100vw)",
      },
      margin: {
        headerBarMargin: "calc(15rem + 1px)",
      },
      fontFamily: {
        quicksand: ["var(--font-quicksand)"],
        poppins: ["var(--font-poppins)"],
      },
      fontSize: {
        label: "1rem",
        "label-sm": "0.8125rem",
        "label-md": "0.85rem",
      },
      colors: {
        "text-light": "#76838f",
        "text-default": "#6C7383",
        "text-main": "#21274c",
        default: "rgba(163, 164, 165, 0.2)",
        "default-text": "#a3a4a5",
        "default-hover": "#a3a4a5",
        primary: "#4B49AC",
        "primary-opacity": "rgb(75 73 172 / 30%)",
        "primary-hover": "#3f3e91",
        hr: "rgba(0, 0, 0, 0.16)",
        light: "rgba(0, 0, 0, 0.65)",
        accent: "#5751E1",
        "accent-dark": "#4138f5",
        danger: "rgb(240, 68, 56)",
        warning: "",
        "warning-dark": "#FFC224",
        "light-border": "rgba(0, 0, 0, 0.08)",
        "bg-light": "hsla(0, 0%, 0%, 0.04)",
        dark: "hsla(0, 0%, 0%, 0.48)",
        "main-text": "#3a3a3a",
        "secondary-bg": "#efebf9",
      },
      flex: {
        social: "0 0 1.25rem",
        hr: "1 1 0%",
        input: "1 1 auto",
      },
      zIndex: {
        "1": "1",
      },
      boxShadow: {
        "auth-card": "rgba(0, 0, 0, 0.16) 0px 24px 48px",
        "input-focus": "rgb(145, 167, 247) 0px 0px 0px 1px",
        "input-danger": "rgb(240, 68, 56) 0px 0px 0px 1px",
        "header-default":
          "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
        "primary-btn": "4px 4px 0px 0px #3D3D3D",
        "inside-drawer": "0px 0px 14px rgba(0, 0, 0, 0.08)",
        "normal-card":
          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
      },
      dropShadow: {
        "filter-card": "10px 10px 0px #CAC9D6",
      },
    },
  },
  plugins: [],
};
export default config;
