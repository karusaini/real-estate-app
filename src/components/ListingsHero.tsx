import heroImg from "../assets/listings-hero.jpg";

export default function ListingsHero() {
  return (
    <section className="w-full flex justify-center px-4 sm:px-6 lg:px-12 mt-6">
      <div className="relative w-full max-w-[1334px] h-[527px] rounded-[34px] overflow-hidden">
        <img
          src={heroImg}
          alt="Listings Hero"
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-0 w-full h-[208px] bg-[#3F3F3F99] backdrop-blur-[20px] rounded-b-[34px] flex flex-col justify-center px-8 md:px-16">
          <h1
            className="text-white font-bold text-3xl sm:text-4xl md:text-[48px] mb-2"
            style={{ fontFamily: "Poppins", lineHeight: "100%" }}
          >
            Featured Properties For Sale
          </h1>

          <p
            className="text-[#EEEEEE] text-base sm:text-lg md:text-[20px]"
            style={{ fontFamily: "Poppins", lineHeight: "100%" }}
          >
            Discover, Buy, or Rent Verified Properties with Ease.
          </p>
        </div>
      </div>
    </section>
  );
}
