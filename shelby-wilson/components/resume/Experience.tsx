import resumeData from "@/data/resumeData";

export default function Experience() {
    return (
        <section>
            {resumeData.experience.map((job, idx) => (
                <div key={idx} className="mb-6 p-4 shadow-sm rounded-lg bg-white bg-gray-800">
                    <h3 className="text-lg font-semibold text-teal-500">
                        {job.company}
                    </h3>
                    <span className="text-sm text-gray-500">
                        {job.startDate} - {job.endDate}
                    </span>
                    <p className="mt-2 text-gray-700 italic">
                        {job.position}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <ul className="list-disc pl-4 mt-2 space-y-1">
                            {job.responsibilities.map((responsibility, idx) => (
                                <li key={idx}>{responsibility}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </section>
    );
}