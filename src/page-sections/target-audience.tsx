import { Users, GraduationCap, Radio, Globe, Landmark } from "lucide-react";

const audiences = [
  {
    title: "Students & Families",
    description:
      "Millions reached through BEAD WhatsApp Group and school networks",
    icon: Users,
  },
  {
    title: "Educators",
    description: "Principals and teachers across Nigeria's 36 states and FCT",
    icon: GraduationCap,
  },
  {
    title: "General Public",
    description: "Radio and digital audiences via FRCN FM and BE.TV platforms",
    icon: Radio,
  },
  {
    title: "Diaspora",
    description: "Nigerians abroad via BE.TV online platforms",
    icon: Globe,
  },
  {
    title: "Stakeholders",
    description: "Policymakers, ICPC officials, and civic organizations",
    icon: Landmark,
  },
];

export default function TargetAudience() {
  return (
    <section className="bg-black text-white py-16 px-6" id="impact">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl font-bold mb-3">Target Audience and Reach</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Engaging a diverse and expansive audience across Nigeria:
        </p>

        {/* Audience Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {audiences.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col items-center text-center hover:border-green-500 transition"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-600/20 mb-4">
                  <Icon className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-12 bg-green-600 text-white rounded-xl py-4 px-6 font-medium">
          Nearly a million households mobilized through BEAD WhatsApp Group,
          ensuring significant brand exposure.
        </div>
      </div>
    </section>
  );
}
