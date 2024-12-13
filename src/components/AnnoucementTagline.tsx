import React from "react";

const AnnouncementTagline: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#3b3b6c",
        textAlign: "center",
        padding: "10px 0",
        color: "white",
        fontSize: "14px",
      }}
    >
      <div className="announcement">
        This is an announcement tagline for you to insert
      </div>
      <style>
        {`
          @media (min-width: 769px) {
            .announcement {
              font-size: 16px;
            }
          }

          @media (max-width: 768px) {
            .announcement {
              font-size: 14px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default AnnouncementTagline;
