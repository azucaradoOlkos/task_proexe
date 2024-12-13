import React from "react";

type ButtonProps = {
  onClick: () => void;
};

const IconButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        width: "50px",
        height: "50px",
        border: "1px solid #f5dcdc",
        borderRadius: "8px",
        backgroundColor: "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      <span
        style={{
          display: "inline-block",
          border: "solid #4d4a7c",
          borderWidth: "0 2px 2px 0",
          padding: "4px",
          transform: "rotate(315deg)",
        }}
      />
    </button>
  );
};

export default IconButton;
