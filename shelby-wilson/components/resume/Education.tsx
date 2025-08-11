import resumeData from "@/data/resumeData";

export default function Education() {
    return (
        <section>
            {resumeData.education.map((job, idx) => (
                <div key={idx} className="mb-6">
                    <h3 className="text-lg font-semibold dark:text-teal-500">{job.company}</h3>
                    <span className="text-sm text-gray-500 dark:text-white">{job.startDate} - {job.endDate}</span>
                    <p className="mt-2 text-gray-700 dark:text-white">{job.position}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <ul className="list list-disc">
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