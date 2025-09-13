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
      className="bg-[#121212] text-white py-16 px-6 md:px-20 mt-5 pt-5 "
      id="about"
    >
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-4">About the BEAD Show</h2>
        <p className="text-gray-400">
          Partnering with ICPC to engage Nigerian youth in anti-corruption
          advocacy through debate and media.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
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
