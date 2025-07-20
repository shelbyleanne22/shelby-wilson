import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[min-content_1fr_min-content] place-items-start justify-items-center min-h-screen p-8 pb-20 gap-4 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="relative p-6 w-[60%] max-w-xl mx-auto">
          
        </div>
      </main>
      <footer className="row-start-3 flex gap-[16px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://linkedin.com/in/shelby-wilson22"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
          <Image
            aria-hidden
            src="/linkedIn.jpg"
            alt="LinkedIn Logo"
            width={16}
            height={16}
          />
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/shelbyleanne22"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
          <Image
            aria-hidden
            src="/gitHub.png"
            alt="GitHub Logo"
            width={16}
            height={16}
          />
        </a>
      </footer>
    </div>
  );
}
