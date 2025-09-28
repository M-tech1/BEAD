import NewsList from "./newList";

export const mockNews = [
  {
    id: "1",
    title: "BEAD 2025/26 Kicks Off Nationwide Debate Challenge",
    date: "Sept 25, 2025",
    excerpt:
      "The BEAD 2025/26 initiative launches across Nigeria, empowering students to foster integrity through debate.",
    image: "/images/bead-launch.jpg",
    category: "Education",
  },
  {
    id: "2",
    title: "ICPC and UBEC Endorse BEAD 2025/26 Program",
    date: "Sept 10, 2025",
    excerpt:
      "ICPC and UBEC reaffirm their support for the BEAD program, emphasizing its role in building a corruption-free Nigeria.",
    image: "/images/icpc-ubec.jpg",
    category: "Partnership",
  },
  {
    id: "3",
    title: "Students Showcase Talent in First BEAD Debate Series",
    date: "Aug 20, 2025",
    excerpt:
      "Over 50,000 students participate in the BEAD Debate Series, highlighting their skills in communication and civic awareness.",
    image: "/images/student-debate.jpg",
    category: "Youth",
  },
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-black text-white py-16 px-6 md:px-10">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-green-500 text-center mb-10">
          Latest News & Updates
        </h1>
        <NewsList news={mockNews} />
      </section>
    </main>
  );
}
