import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="flex-1">
          <h1 className="text-8xl font-bold mb-2">Hi, I&apos;m <span className="text-cyan-600">Shelby</span></h1>
          <p className="text-3xl text-gray-700 mb-4 dark:text-white">
            Developer, Adventurer and Lifelong Learner
          </p>
          <ul className="text-xl text-cyan-500 italic space-y-1">
            <li>Full Stack Developer</li>            
            <li>Problem Solver</li>
            <li>Creative Coder</li>
          </ul>
        </div>
        <div className="flex-shrink-0">
          <div className="rounded-full overflow-hidden border-5 border-black-400 shadow-lg">
            <Image
              src="/scubaHang.gif"
              alt="Shelby scuba diving"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <hr className="text-gray border-1 mb-2" />
      {/* Fun Facts */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Fun Facts</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: "🚀", text: "Astronomy enthusiast" },
            { icon: "📚", text: "Avid reader" },
            { icon: "🗺️", text: "Struck by wanderlust" },
            { icon: "🤿", text: "Certified scuba diver" },
          ].map((fact, idx) => (
            <div key={idx} className="bg-white shadow rounded-lg p-4 flex flex-col items-center text-center hover:shadow-md transition">
              <div className="text-4xl mb-2">{fact.icon}</div>
              <p className="text-gray-700 font-semibold">{fact.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
