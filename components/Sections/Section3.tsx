export default function Section3() {
  return (
    <section className="py-10 relative bg-indigo-600">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-center md:px-8">
        <div className="max-w-xl md:mx-auto">
          <p className="text-white text-3xl font-semibold sm:text-4xl">
            Build the future with us
          </p>
          <p className="text-blue-100 mt-3">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
            cupidatat non proident.
          </p>
        </div>
      </div>
      <div
        className="absolute top-0 w-full h-full"
        style={{
          background:
            "linear-gradient(268.24deg, rgba(138, 43, 226, 0.76) 50%, rgba(148, 0, 211, 0.545528) 80.61%, rgba(75, 0, 130, 0) 117.35%)",
        }}
      ></div>
    </section>
  );
}
