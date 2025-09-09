import { FaArrowRight } from "react-icons/fa";

export default function ListingsFeatured() {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-12 bg-[#F9F9F9]">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        <h2
          className="text-[#1E3A8A] font-bold text-4xl sm:text-5xl md:text-[40px]"
          style={{
            lineHeight: "100%",
            textAlign: "center",
          }}
        >
          Featured Property
        </h2>

        <button className="flex items-center gap-2 bg-white border-2 border-[#1E3A8A] rounded-[24px] px-5 py-2 text-[#1E3A8A] font-medium text-lg hover:bg-[#1E3A8A] hover:text-white transition">
          <span>See 268 New Projects</span>
          <FaArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
