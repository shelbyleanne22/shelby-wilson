import Education from "@/components/resume/Education";
import Experience from "@/components/resume/Experience";
import Sidebar from "@/components/resume/Sidebar";

export default function ResumePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="min-h-screen bg-white flex flex-col md:flex-row">
        <Sidebar />
        <div className="flex-2 p-6">
          <h2 className="text-2xl italic">Experience</h2>
          <hr/>
          <Experience />
          <h2 className="text-2xl italic">Education</h2>
          <hr/>
          <Education />
        </div>
      </div>
    </div>
  );
}