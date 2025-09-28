// import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { newsData } from "../newsData";

interface NewsDetailProps {
  params: { id: string };
}

export interface KeyValuePair {
  [key: string]: string | number | boolean | null;
}

export default function NewsDetailPage({ params }: NewsDetailProps) {
  const article = newsData?.map((item: KeyValuePair) => item.id === params.id);

  if (!article) return notFound();

  return (
    <main className="min-h-screen bg-black text-gray-200 py-16 px-6 md:px-10">
      <section className="max-w-4xl mx-auto space-y-6">
        {/* Back Button */}
        <Link
          href="/news"
          className="text-green-500 hover:text-green-400 text-sm flex items-center gap-2"
        >
          ← Back to News
        </Link>

        {/* <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src={article?.image}
            alt={article?.title}
            width={900}
            height={500}
            className="w-full h-72 md:h-96 object-cover"
          />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-wider text-green-400 font-semibold">
            {article?.category}
          </span>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-100">
            {article?.title}
          </h1>
          <p className="text-sm text-gray-400">
            {article?.date} — <span className="italic">{article?.author}</span>
          </p>
        </div>

   
        <article className="prose prose-invert max-w-none text-gray-300 leading-relaxed whitespace-pre-line">
          {article?.content}
        </article> */}
      </section>
    </main>
  );
}
