import { Users, Radio, Share2, Target } from "lucide-react"; // lucide-react icons

export default function ProgramOverview() {
  const items = [
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: "Participants",
      description:
        "Junior secondary students nationwide submitting video debate speeches",
    },
    {
      icon: <Radio className="w-6 h-6 text-green-500" />,
      title: "Format",
      description:
        "Professional daily radio/TV series on FRCN FM and BE.TV platforms",
    },
    {
      icon: <Share2 className="w-6 h-6 text-green-500" />,
      title: "Reach",
      description:
        "Millions of homes via BEAD WhatsApp Group and school networks",
    },
    {
      icon: <Target className="w-6 h-6 text-green-500" />,
      title: "Objective",
      description:
        "Cultivate integrity and empower youth toward a corruption-free Nigeria",
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-4">Program Overview</h2>
        <p className="text-gray-400">
          A year-long initiative inspiring young Nigerians on integrity and
          accountability in combating corruption.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl p-6 flex gap-4 items-start hover:bg-gray-800 transition"
          >
            <div className="flex-shrink-0">{item.icon}</div>
            <div>
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
