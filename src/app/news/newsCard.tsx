"use client";

import Image from "next/image";
import Link from "next/link";

interface NewsCardProps {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
}

export default function NewsCard({
  // id,
  title,
  date,
  excerpt,
  image,
  category,
}: NewsCardProps) {
  return (
    <div className="bg-neutral-900 rounded-xl overflow-hidden shadow-lg hover:shadow-green-700/40 transition-all duration-300">
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="w-full h-52 object-cover"
      />
      <div className="p-5 space-y-2">
        <span className="text-xs uppercase tracking-widest text-green-400 font-semibold">
          {category}
        </span>
        <h3 className="text-lg font-semibold text-gray-100">{title}</h3>
        <p className="text-sm text-gray-400">{excerpt}</p>
        <div className="flex justify-between items-center mt-3 text-xs text-gray-500">
          <span>{date}</span>
          <Link
            // href={`/news/${id}`}
            href={"/news"}
            className="text-green-500 hover:text-green-400 font-medium transition-colors"
          >
            Read more →
          </Link>
        </div>
      </div>
    </div>
  );
}
