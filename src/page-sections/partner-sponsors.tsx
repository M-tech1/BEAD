import Image from "next/image";

const partners = [
  { name: "Major Bank Nigeria", logo: "/partners/bank.png" },
  { name: "Tech Corporation", logo: "/partners/tech.png" },
  { name: "Education Foundation", logo: "/partners/edu.png" },
  { name: "Media Group", logo: "/partners/media.png" },
  { name: "ICPC", logo: "/partners/icpc.png" },
  { name: "International NGO", logo: "/partners/ngo.png" },
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-10 ">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="bg-gray-900 border border-gray-800 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-green-500 transition"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-2">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-gray-300">{partner.name}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-green-600 text-white rounded-xl py-4 px-6 font-medium inline-block">
          Join these leading organizations in shaping Nigeria’s future
        </div>
      </div>
    </section>
  );
}
