import React from "react";

export const LeftBtnIcon = ({ color = "currentColor", className = "" }) => {
  return (
    <svg
      width="34"
      height="35"
      viewBox="0 0 34 35"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0.333313 17.5205C0.333313 26.7205 7.79998 34.1872 17 34.1872C26.2 34.1872 33.6667 26.7205 33.6667 17.5205C33.6667 8.32049 26.2 0.853821 17 0.853821C7.79998 0.853821 0.333313 8.32049 0.333313 17.5205ZM17 15.8538H23.6667V19.1872H17V24.1872L10.3333 17.5205L17 10.8538V15.8538Z"
        // fill="#0E2152"
        fill="currentColor"
      />
    </svg>
  );
};

export const RightBtnIcon = ({ color = "currentColor", className = "" }) => {
  return (
    <svg
      width="34"
      height="35"
      viewBox="0 0 34 35"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M33.6667 17.5205C33.6667 8.32049 26.2 0.853821 17 0.853821C7.79998 0.853821 0.333313 8.32049 0.333313 17.5205C0.333313 26.7205 7.79998 34.1872 17 34.1872C26.2 34.1872 33.6667 26.7205 33.6667 17.5205ZM17 19.1872H10.3333V15.8538H17V10.8538L23.6667 17.5205L17 24.1872V19.1872Z"
        // fill="#0E2152"
        fill="currentColor"
      />
    </svg>
  );
};
