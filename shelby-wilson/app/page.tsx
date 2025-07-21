import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[min-content_1fr_min-content] place-items-start justify-items-center p-6 pb-10 gap-4 sm:p-10">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <div className="p-6 w-lg-[60%] mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex justify-center md:justify-start md:w-1/2">
              <Image
                src="/profilePic.jpg"
                alt="Shelby Profile"
                width={400}
                height={400}
                priority
                className="object-cover rounded-3xl p-1 overflow-hidden border-10 border-teal-700 shadow-lg"
              />
            </div>
            <div className="p-2 md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Shelby Wilson</h2>
              <ul className="list-disc text-xl">
                <li className="p-2">My outie finds solace beneath open skies, where the wild whispers and the horizon stretches endlessly.</li>
                <li className="p-2">Certified to plunge into the silent depths, my outie navigates worlds beneath the waves with calm precision.</li>
                <li className="p-2">Lost in dystopian worlds penned in ink, my outie unravels fractured realities and imagined futures.</li>
                <li className="p-2">A connoisseur of flavors, my outie savors each bite like a carefully coded memory, delighting in the ritual of taste.</li>
                <li className="p-2">Cherishing the fleeting moments with nieces and nephew, my outie weaves bonds of warmth and wonder beyond the clock’s divide.</li>
              </ul>
              <span><i>*In the Apple series Severance, a person’s life is split into two completely separate identities: the Innie, who exists only at work, and the Outie, who exists only outside of it. The two are severed — neither remembers the other’s life.</i></span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
