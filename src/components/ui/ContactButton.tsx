import React from "react";

const ContactButton = ({ className = "", onClick }) => {
  return (
    <button
      className={`px-6 py-2 text-primary transition-colors ${className}`}
      style={{
        backgroundColor: "#FAE0E1",
        borderRadius: "5px",
      }}
      onClick={onClick}
    >
      Contact Now
    </button>
  );
};

export default ContactButton;
