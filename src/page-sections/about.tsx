import { Award, Globe, Medal, Users } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      title: "Strategic Mission",
      description: "Empowering youth as anti-corruption advocates",
      icons: <Medal />,
    },
    {
      title: "Nationwide Reach",
      description: "All 36 states and FCT coverage",
      icons: <Users />,
    },
    {
      title: "Media Platform",
      description: "FRCN FM and BE.TV digital channels",
      icons: <Globe />,
    },
    {
      title: "Recognition Program",
      description: "Awards and continued integrity education",
      icons: <Award />,
    },
  ];

  return (
    <section
      className="bg-[#121212] text-white py-16 px-1 md:mt-20 mt-5 w-full pt-10 "
      id="about"
    >
      <div className="max-w-6xl mx-auto sm:px-6 px-2 py-12 text-gray-800 w-full ">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white ">
            About the BEAD Show
          </h2>
          <p className="text-lg leading-relaxed text-gray-400 w-full">
            The{" "}
            <span className="font-semibold">
              Basic Education Anti-Corruption Debate (BEAD) 2025/26
            </span>{" "}
            is a nationwide program organized by{" "}
            <span className="font-semibold">Master Agent Show</span> in
            partnership with the <span className="font-semibold">ICPC</span>,
            aimed at instilling anti-corruption values in junior secondary
            students. Amid Nigeria’s corruption challenges (ranked 149/180 in
            Transparency International’s 2024 Index), BEAD engages over 5,000
            schools, targeting{" "}
            <span className="font-semibold">50,000+ students</span> and{" "}
            <span className="font-semibold">10 million+ audience members</span>{" "}
            through broadcasts. Explore our sub-sections for more details.
          </p>
        </div>

        {/* Sections */}
        <section className="grid md:grid-cols-2 gap-8 ">
          {/* Event Overview */}
          <div className="p-6 bg-gray-400/10 shadow-lg rounded-2xl hover:shadow-xl hover:animate-pulse transition">
            <h3 className="text-xl font-bold mb-3 text-green-600">
              Event Overview
            </h3>
            <p className="text-gray-300 leading-relaxed text-justify">
              BEAD 2025/26 is a year-long initiative fostering integrity and
              accountability. Students submit video debates, edited into the
              daily BEAD Show for broadcast on FRCN, BE.TV, and partners.
              <br />
              <br />
              <span className="font-semibold">Phases:</span> School Engagement
              (Jul–Sep 2025), Production (Oct–Dec 2025), Broadcasting (Jan–May
              2026), Awards (Jun 2026). The program leverages the BEAD WhatsApp
              Group for mobilization, addressing systemic corruption by
              empowering youth.
            </p>
          </div>

          {/* Objectives & Impact */}
          <div className="p-6 bg-gray-400/10 shadow-lg rounded-2xl hover:shadow-xl hover:animate-pulse transition">
            <h3 className="text-xl font-bold mb-3 text-green-600">
              Objectives & Impact
            </h3>
            <p className="text-gray-300 leading-relaxed text-justify">
              <span className="font-semibold">Objectives:</span> Promote
              anti-corruption culture, enhance civic skills, mobilize
              communities, build partnerships, and achieve policy impact.
              <br />
              <br />
              <span className="font-semibold">Impact:</span> 50,000+ students
              skilled in debate, millions reached via broadcasts, 80% school
              participation, 10M+ ad impressions for sponsors, and endorsements
              by ICPC/UBEC.
            </p>
          </div>

          {/* Partners */}
          <div className="p-6 bg-gray-400/10 shadow-lg rounded-2xl hover:shadow-xl hover:animate-pulse transition md:col-span-2">
            <h3 className="text-xl font-bold mb-3 text-green-600">
              Partners & Collaborators
            </h3>
            <p className="text-gray-300 leading-relaxed text-justify">
              <span className="font-semibold">Key Partners:</span> ICPC
              (oversight), NGF (state mobilization), PTA (community engagement),
              UBEC (curriculum alignment), Sponsors (Dangote, MTN, Zenith Bank),
              Media (FRCN, BE.TV), International (UNESCO, UNICEF, British
              Council, UNDP).
              <br />
              <br />
              <span className="italic">
                “ICPC is proud to partner with BEAD for a corruption-free
                Nigeria.”
              </span>
            </p>
          </div>
        </section>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-4"
          >
            {/* Green Circle */}
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500 hover:animate-spin">
              {item.icons}
            </div>
            <h3 className="font-bold">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
