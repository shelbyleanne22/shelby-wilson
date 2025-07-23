'use client';

type ExperienceProps = {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    responsibilities: string[];
    Icon?: React.ComponentType<{ className?: string }>; 
}

const Experience = ({ company, position, startDate, endDate, responsibilities = [], Icon }: ExperienceProps) => {
    return (
        <div className="rounded-lg p-2 mt-2 border-1 border-slate-400 bg-teal-50 dark:border-slate-100 dark:bg-teal-950">
            <h3 className="text-lg pb-2">{company} - <i className="text-md">{position}</i></h3>
            <div className="pb-2">{startDate} - {endDate}</div>
            <ul className="space-y-1">
                {responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start w-[95%]">
                        {Icon && <Icon className="w-4 h-4 mt-1 text-gray-700 shrink-0 mr-2 dark:text-white" />}
                        <span>{responsibility}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Experience;