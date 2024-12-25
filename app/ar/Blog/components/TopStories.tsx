import Image from "next/image";

const topStories = [
  {
    id: 1,
    title: "Major Breakthrough in Renewable Energy Technology",
    category: "Science",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Global Economic Summit Addresses Climate Change",
    category: "Politics",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Tech Giant Unveils Revolutionary AI Assistant",
    category: "Technology",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
];

export default function TopStories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-20">
      {topStories.slice(1).map((story) => (
        <div
          key={story.id}
          className="block relative h-48 rounded-lg overflow-hidden"
        >
          <Image
            src={story.imageUrl}
            alt={story.title}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <span className="text-xs text-indigo-400 font-semibold">
              {story.category}
            </span>
            <h3 className="text-lg font-semibold text-white mt-1">
              {story.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
