import { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

interface Property {
  id: string;
  name: string;
  city: string;
  country: string;
  image: string;
  description?: string;
  type?: string;
}

const PropertyCard = ({ property }: { property: Property }) => (
  <div className="w-full max-w-[340px] bg-white rounded-[20px] shadow-md overflow-hidden flex flex-col">
    <div className="w-full h-[200px] overflow-hidden">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-full object-cover"
      />
    </div>

    <div className="p-4 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <FaMapMarkerAlt className="w-5 h-5 text-[#1E3A8A]" />
        <span
          className="text-black text-[16px] font-medium"
          style={{ fontFamily: "Poppins" }}
        >
          {property.name}, {property.city}
        </span>
      </div>

      <p
        className="text-[#555555] text-[14px] leading-[20px]"
        style={{ fontFamily: "Poppins" }}
      >
        {property.description || "Beautiful property with modern amenities."}
      </p>

      <div className="flex justify-between items-center mt-3">
        <span
          className="text-[#1E1E1E] font-semibold text-[18px]"
          style={{ fontFamily: "Poppins" }}
        >
          {property.type ? property.type.toUpperCase() : "SALE"}
        </span>
        <button
          className="bg-[#1E3A8A] text-white text-[14px] font-semibold px-4 py-2 rounded-[31px]"
          style={{ fontFamily: "Poppins" }}
        >
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default function PropertyListingPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filter, setFilter] = useState<"all" | "sale" | "rent">("all");

  useEffect(() => {
    fetch(
      "https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing"
    )
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.error("API Fetch Error:", err));
  }, []);

  const filteredProperties =
    filter === "all"
      ? properties
      : properties.filter(
          (p) => p.type?.toLowerCase() === filter.toLowerCase()
        );

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-12 bg-[#F9F9F9] min-h-screen">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <h2
            className="text-[#1E3A8A] font-bold text-3xl sm:text-4xl"
            style={{ fontFamily: "Poppins" }}
          >
            Property Listings
          </h2>

          <div className="flex gap-4">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 rounded-[31px] font-semibold ${
                filter === "all"
                  ? "bg-[#1E3A8A] text-white"
                  : "bg-white border border-[#1E3A8A] text-[#1E3A8A]"
              }`}
              style={{ fontFamily: "Poppins" }}
            >
              All
            </button>
            <button
              onClick={() => setFilter("sale")}
              className={`px-6 py-2 rounded-[31px] font-semibold ${
                filter === "sale"
                  ? "bg-[#1E3A8A] text-white"
                  : "bg-white border border-[#1E3A8A] text-[#1E3A8A]"
              }`}
              style={{ fontFamily: "Poppins" }}
            >
              For Sale
            </button>
            <button
              onClick={() => setFilter("rent")}
              className={`px-6 py-2 rounded-[31px] font-semibold ${
                filter === "rent"
                  ? "bg-[#1E3A8A] text-white"
                  : "bg-white border border-[#1E3A8A] text-[#1E3A8A]"
              }`}
              style={{ fontFamily: "Poppins" }}
            >
              For Rent
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
