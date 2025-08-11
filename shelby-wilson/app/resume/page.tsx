import Education from "@/components/resume/Education";
import Experience from "@/components/resume/Experience";
import Sidebar from "@/components/resume/Sidebar";

export default function ResumePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="min-h-screen bg-white dark:bg-black flex flex-col md:flex-row">
        <Sidebar />
        <main className="flex-2 p-6">
          <h2 className="text-2xl italic dark:text-cyan-500">Experience</h2>
          <hr/>
          <Experience />
          <h2 className="text-2xl italic dark:text-cyan-500">Education</h2>
          <hr/>
          <Education />
        </main>
      </div>
    </div>
  );
}