import Image from "next/image";

const topStories = [
  {
    id: 1,
    title: "Inside Askar Metal Forming Factory",
    category: "Science",
    imageUrl:
      "https://res.cloudinary.com/dqzcvlxzw/image/upload/v1735207840/IMG-20241226-WA0035_ksfqfi.jpg",
  },
  {
    id: 2,
    title: "Askar General Contracting Team",
    imageUrl:
      "https://res.cloudinary.com/dqzcvlxzw/image/upload/v1735207840/IMG-20241226-WA0035_ksfqfi.jpg",
  },
  {
    id: 3,
    title: "Workers Inside Askar Metal Forming Factory",
    imageUrl:
      "https://res.cloudinary.com/dqzcvlxzw/image/upload/v1735207895/%D9%A2%D9%A0%D9%A2%D9%A4%D9%A1%D9%A0%D9%A2%D9%A1_%D9%A1%D9%A7%D9%A5%D9%A2%D9%A4%D9%A4_auv9jl.jpg",
  },
  {
    id: 4,
    title:
      "Planning for Building Optimal Health Requirements in Askar Metal Forming Factory",
    imageUrl:
      "https://res.cloudinary.com/dqzcvlxzw/image/upload/v1735207839/IMG-20241226-WA0045_rztoal.jpg",
  },
  {
    id: 5,
    title: "Ramadan Breakfast from the Company",
    imageUrl:
      "https://res.cloudinary.com/dqzcvlxzw/image/upload/v1735207839/IMG-20241018-WA0006_swann1.jpg",
  },
  {
    id: 6,
    title: "One of Askar General Contracting Works",
    imageUrl:
      "https://res.cloudinary.com/dqzcvlxzw/image/upload/v1735207844/IMG-20241226-WA0057_ppw8j9.jpg",
  },
  {
    id: 7,
    title: "One of Metal Processing Works",
    imageUrl:
      "https://res.cloudinary.com/dqzcvlxzw/image/upload/v1735207845/IMG-20241226-WA0033_khcig5.jpg",
  },
];

export default function TopStories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-20">
      {topStories.slice(1).map((story) => (
        <div
          key={story.id}
          className="block relative h-80 rounded-lg overflow-hidden"
        >
          <Image src={story.imageUrl} alt="" layout="fill" objectFit="cover" />
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
