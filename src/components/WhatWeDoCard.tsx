// src/components/WhatWeDoCard.tsx
import React from "react";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function WhatWeDoCard({ icon, title, description }: CardProps) {
  return (
    <div
      className="bg-[#EEEEEE] rounded-lg p-8 flex flex-col items-center gap-4 w-full max-w-[300px] mx-auto
                 transition-transform duration-300 ease-in-out hover:shadow-xl hover:scale-105"
    >
      {/* Circle with Icon */}
      <div className="w-[77px] h-[77px] rounded-full bg-[#1E3A8A] flex items-center justify-center mb-4">
        {icon ? (
          <div className="w-[40px] h-[40px] text-white">{icon}</div>
        ) : null}
      </div>

      {/* Title */}
      <h3
        className="text-center text-black text-lg sm:text-xl font-normal mb-2"
        style={{
          fontFamily: "Poppins",
          lineHeight: "26px",
          letterSpacing: "2%",
          fontWeight: 400,
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-center text-black text-xs sm:text-sm"
        style={{
          fontFamily: "Poppins",
          lineHeight: "19px",
          letterSpacing: "2%",
          fontWeight: 400,
        }}
      >
        {description}
      </p>
    </div>
  );
}
