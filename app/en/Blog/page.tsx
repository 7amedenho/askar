import TopStories from "./components/TopStories";

export default function Home() {
  return (
    <div className="min-h-screen pt-20 bg-gray-100 dark:bg-gray-900">
      <div className="absolute inset-0 opacity-20">
        <svg
          className="absolute top-0 left-0 w-64 h-64 text-indigo-500 opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <circle cx="100" cy="100" r="100" />
        </svg>
        <svg
          className="absolute bottom-0 right-0 w-96 h-96 text-indigo-700 opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <polygon points="100,0 200,200 0,200" />
        </svg>
      </div>

      <main className="container mx-auto px-4 py-8">
        <TopStories />
      </main>
    </div>
  );
}
