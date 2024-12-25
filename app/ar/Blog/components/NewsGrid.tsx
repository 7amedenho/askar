import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "Stock Market Reaches All-Time High",
    excerpt: "Major indices show record gains as investor confidence soars.",
    category: "Business",
    date: "May 15, 2023",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "New Study Reveals Benefits of Mediterranean Diet",
    excerpt:
      "Research shows significant health improvements for those following the diet.",
    category: "Health",
    date: "May 14, 2023",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Space Tourism Company Announces First Civilian Mission",
    excerpt:
      "Private space travel becomes a reality as tickets go on sale for orbital trips.",
    category: "Science",
    date: "May 13, 2023",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Global Leaders Agree on New Climate Change Targets",
    excerpt:
      "International summit results in ambitious goals to reduce carbon emissions.",
    category: "Environment",
    date: "May 12, 2023",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
];

export default function NewsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {articles.map((article) => (
        <article
          key={article.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <Image
            src={article.imageUrl}
            alt={article.title}
            width={300}
            height={200}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <span className="text-sm text-indigo-700 font-semibold">
              {article.category}
            </span>

            <p className="mt-2 text-gray-600">{article.excerpt}</p>
            <div className="mt-4 flex items-center justify-between">
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
