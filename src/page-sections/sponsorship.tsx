import { FC } from "react";
import { Shield, Crown, Medal } from "lucide-react";

const sponsorships = [
  {
    id: 1,
    tier: "Platinum Sponsor",
    range: "₦50,000,000 - ₦100,000,000",
    color: "green-500",
    icon: Crown,
    role: "Primary funding for production, broadcasting, promotional materials, and student awards. Support branded merchandise distribution and community engagement events.",
    benefits: [
      "Title Sponsor recognition across all materials",
      "30-second ad spots on each episode",
      "Digital presence on all BE.TV platforms",
      "CSR leadership association with anti-corruption initiative",
    ],
    highlight: true,
  },
  {
    id: 2,
    tier: "Gold Sponsor",
    range: "₦25,000,000 - ₦49,999,999",
    color: "yellow-500",
    icon: Medal,
    role: "Fund specific segments, educational content development, and marketing campaigns.",
    benefits: [
      "Gold Sponsor recognition",
      "15-second ad spots on select episodes",
      "50% digital presence on BE.TV platforms",
      "CSR recognition for youth education support",
    ],
    highlight: false,
  },
  {
    id: 3,
    tier: "Silver Sponsor",
    range: "₦10,000,000 - ₦24,999,999",
    color: "gray-400",
    icon: Shield,
    role: "Support student incentives, promotional campaigns, and digital marketing efforts.",
    benefits: [
      "Silver Sponsor recognition",
      "Logo placement in episode credits",
      "25% digital presence on social media",
      "CSR alignment with national anti-corruption initiative",
    ],
    highlight: false,
  },
];

const SponsorshipOpportunities: FC = () => {
  return (
    <main className="min-h-screen bg-black text-white px-6 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-3">Sponsorship Opportunities</h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Three sponsorship tiers with distinct benefits aligned to your
          marketing and CSR objectives.
        </p>

        <div className="grid md:grid-cols-3 gap-8 ">
          {sponsorships.map((sponsor) => {
            const Icon = sponsor.icon;
            return (
              <div
                key={sponsor.id}
                className={`rounded-2xl border p-6 shadow-lg hover:animate-pulse ${
                  sponsor.highlight
                    ? "border-green-500 bg-black/40"
                    : "border-gray-700 bg-gray-900/40"
                }`}
              >
                <div
                  className={`flex items-center justify-center w-14 h-14 rounded-full mx-auto mb-4 bg-${sponsor.color}/20`}
                >
                  <Icon className={`w-7 h-7 text-${sponsor.color}`} />
                </div>
                <h2 className="text-xl font-semibold mb-2 text-center">
                  {sponsor.id}. {sponsor.tier}
                </h2>
                <p className="text-green-400 font-bold mb-4 text-center">
                  {sponsor.range}
                </p>
                <h3 className="font-semibold mb-2">Role and Contribution:</h3>
                <p className="text-gray-300 mb-4 text-sm">{sponsor.role}</p>
                <h3 className="font-semibold mb-2">Benefits:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                  {sponsor.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default SponsorshipOpportunities;
