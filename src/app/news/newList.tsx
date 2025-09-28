import NewsCard from "./newsCard";

interface INewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
}

interface NewsListProps {
  news: INewsItem[];
}

export default function NewsList({ news }: NewsListProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {news.map((item) => (
        <NewsCard key={item?.id} {...item} />
      ))}
    </div>
  );
}
