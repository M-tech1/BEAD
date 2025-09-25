import { Mail, Phone, Globe } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="bg-green-950 text-white py-16 px-6 " id="callToAction">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-3">Call to Action</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Shape Nigeria’s corruption-free future. Position your brand as a
          social impact leader with unparalleled visibility to millions of
          Nigerians.
        </p>

        {/* Contact Info Box */}
        <div className="bg-black rounded-xl p-6 md:p-8 shadow-lg mb-8">
          <h3 className="font-semibold mb-6">
            Master Agent Show Contact Information
          </h3>

          <div className="grid md:grid-cols-3 grid-cols-2 gap-6 text-sm text-gray-300">
            {/* Email */}
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 text-green-500 mb-2" />
              <p>info@bead.com.ng</p>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-green-500 mb-2" />
              <p>+234 806 716 0570</p>
            </div>

            {/* Website */}
            <div className="flex flex-col items-center">
              <Globe className="w-6 h-6 text-green-500 mb-2" />
              <p>https://bead.com.ng/</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button className="bg-green-600 px-5 py-2 rounded-lg hover:bg-green-700 transition">
            <a href="#contact">Become a Sponsor</a>
          </button>
          <button className="bg-gray-900 px-5 py-2 rounded-lg hover:bg-gray-800 transition">
            <a href="BEAD_2025_Sponsorship_Proposal.pdf" download>
              Download Full Proposal{" "}
            </a>
          </button>
        </div>

        {/* Footer Text */}
        <p className="text-green-400 italic text-sm">
          Together, we can empower Nigeria’s youth and build a brighter, more
          accountable future.
        </p>
      </div>
    </section>
  );
}
