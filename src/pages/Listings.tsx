import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ListingsHero from "../components/ListingsHero";
import HeroFilters from "../components/HeroFilters";
import ListingsFeatured from "../components/ListingsFeatured";
import PropertyCard from "../components/PropertyCard";
import { fetchProperties, type Property } from "../services/propertyService";

export default function Listings() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "sale" | "rent">("all");

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const filterParam = params.get("filter") as "sale" | "rent" | null;
    if (filterParam) {
      setFilter(filterParam);
    } else {
      setFilter("all");
    }
  }, [location.search]);

  useEffect(() => {
    const loadProperties = async () => {
      const data = await fetchProperties();
      setProperties(data);
      setLoading(false);
    };
    loadProperties();
  }, []);

  // 👇 Apply filter
  const filteredProperties =
    filter === "all"
      ? properties
      : properties.filter((p) => p.type?.toLowerCase() === filter);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ListingsHero />
      <HeroFilters />
      <ListingsFeatured />

      <section className="flex-1 px-4 sm:px-6 lg:px-12 py-12 max-w-[1440px] mx-auto">
        {loading ? (
          <p className="text-center text-lg">Loading properties...</p>
        ) : (
          <>
            <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
              <h2 className="text-[#1E3A8A] font-bold text-3xl sm:text-4xl">
                {filter === "sale"
                  ? "Properties For Sale"
                  : filter === "rent"
                  ? "Rental Properties"
                  : "All Properties"}
              </h2>

              <div className="flex gap-4 mt-4 sm:mt-0">
                <button
                  onClick={() => setFilter("all")}
                  className={`px-6 py-2 rounded-[31px] font-semibold ${
                    filter === "all"
                      ? "bg-[#1E3A8A] text-white"
                      : "bg-white border border-[#1E3A8A] text-[#1E3A8A]"
                  }`}
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
                >
                  For Rent
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 justify-items-center">
              {filteredProperties.length > 0 ? (
                filteredProperties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    image={property.image}
                    name={property.name}
                    location={`${property.city}, ${property.state}`}
                    description={
                      property.description ||
                      "Spacious property in a prime location with modern amenities."
                    }
                    price={
                      property.type?.toLowerCase() === "rent"
                        ? `$${Math.floor(Math.random() * 4000) + 500} / month`
                        : `$${Math.floor(Math.random() * 900000) + 100000}`
                    }
                  />
                ))
              ) : (
                <p className="text-center text-lg text-gray-600">
                  No properties found for this filter.
                </p>
              )}
            </div>
          </>
        )}
      </section>

      <Footer />
    </div>
  );
}
