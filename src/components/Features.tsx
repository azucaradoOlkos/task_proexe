import React from "react";

const Features = () => {
  return (
    <div
      style={{ backgroundColor: "#3C3679" }}
      className="text-white py-10 p-4"
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* Desktop View */}
        <div className="hidden md:flex justify-around space-x-6">
          <FeatureBox
            icon="/images/features/button1.png"
            text="Super useful and easy to with over 100+ customisations!"
          />
          <FeatureBox
            icon="/images/features/button2.png"
            text="Super useful and easy to with over 100+ customisations!"
          />
          <FeatureBox
            icon="/images/features/button3.png"
            text="Super useful and easy to with over 100+ customisations!"
          />
        </div>

        {/* Mobile View */}
        <div className="flex flex-col space-y-8 md:hidden">
          <FeatureBox
            icon="/images/features/button1.png"
            text="Super useful and easy to with over 100+ customisations!"
          />
          <FeatureBox
            icon="/images/features/button2.png"
            text="Super useful and easy to with over 100+ customisations!"
          />
          <FeatureBox
            icon="/images/features/button3.png"
            text="Super useful and easy to with over 100+ customisations!"
          />
        </div>
      </div>
    </div>
  );
};

const FeatureBox = ({ icon, text }) => {
  return (
    <div className="flex items-center space-x-4">
      <div>
        <img
          src={icon}
          alt="Feature Icon"
          className="w-full h-full object-cover rounded-lg"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <p className="text-lg">{text}</p>
    </div>
  );
};

export default Features;
