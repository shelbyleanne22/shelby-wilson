import resumeData from "@/data/resumeData";
import Image from "next/image";

export default function Sidebar() {
    return (
        <aside className="bg-gray-50 p-6 w-full md:w-80 flex-shrink-0">
            <Image
                src="/selfie.JPG"
                alt="Shelby's Profile Picture"
                width={300}
                height={300}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h2 className="text-center text-2xl font-bold">{resumeData.name}</h2>
            <p className="text-center text-sm text-gray-600">
                {resumeData.title}
            </p>
            <div className="m-6 space-y-1 text-sm text-gray-700">
                <p>📨 {resumeData.email}</p>
                <p>📍 {resumeData.location}</p>
            </div>

            <h2 className="text-2xl italic">Skills</h2>
            <hr />
            <hr className="border-white" />
            <div className="flex flex-wrap gap-2 mt-2">
                {resumeData.skills.map((skill, idx) => (
                    <span key={idx} className="bg-blue-100 px-3 py-1 rounded-full text-sm">
                        {skill}
                    </span>
                ))}
            </div>
        </aside>
    );
}