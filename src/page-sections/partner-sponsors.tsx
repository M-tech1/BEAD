import Image from "next/image";
import Img1 from "@/assets/2-1.png";
import Img2 from "@/assets/3.png";
import Img3 from "@/assets/4.png";

const partners = [
  { name: "Uplift the People and unite the nation", logo: Img1 },
  { name: "ICPC", logo: Img2 },
  { name: "Master Agent Show", logo: Img3 },
];

export default function Partners() {
  return (
    <section className="bg-black text-white py-16 px-6" id="sponsorship">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-3">Our Partners & Sponsors</h2>
        <p className="text-gray-400 mb-12">
          Proudly supported by organizations committed to Nigeria’s future
        </p>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 mb-10 align-center text-center">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="bg-gray-900 border border-gray-800 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-green-500 transition"
            >
              <div className="w-20 h-20 flex items-center justify-center mb-2 bg">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={80}
                  height={48}
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-gray-300">{partner.name}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-green-900 text-white rounded-xl py-4 px-6 font-medium inline-block">
          Join these leading organizations in shaping Nigeria’s future
        </div>
      </div>
    </section>
  );
}
