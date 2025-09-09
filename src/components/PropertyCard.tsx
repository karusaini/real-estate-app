import React from "react";
import { FaMapMarkerAlt, FaBookmark } from "react-icons/fa";

interface PropertyCardProps {
  image: string;
  name: string;
  location: string;
  description: string;
  price: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  name,
  location,
  description,
  price,
}) => {
  return (
    <div className="w-full sm:w-[90%] md:w-[340px] lg:w-[648px] bg-white rounded-[20px] shadow-[4px_4px_12px_0px_rgba(0,0,0,0.16)] overflow-hidden flex flex-col">
      <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[510px] rounded-[24px] overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="p-4 flex flex-col gap-2 relative">
        <div className="flex items-center justify-between mb-2 flex-wrap sm:flex-nowrap">
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="w-6 h-6 sm:w-7 sm:h-7 text-[#1E3A8A]" />
            <span className="text-black text-[18px] sm:text-[20px] md:text-[24px] font-medium">
              {name}, {location}
            </span>
          </div>
          <FaBookmark className="w-6 h-6 sm:w-7 sm:h-7 text-[#1E3A8A] mt-2 sm:mt-0" />
        </div>

        <p className="text-[#555555] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[25px]">
          {description}
        </p>

        <div className="my-4 w-full h-[0px] border-t-2 border-[#00000033]"></div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 gap-2">
          <span className="text-[#1E1E1E] font-semibold text-[20px] sm:text-[24px]">
            {price}
          </span>
          <button className="bg-[#1E3A8A] text-white text-[12px] sm:text-[14px] font-semibold px-4 py-2 rounded-[31px] mt-2 sm:mt-0">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
