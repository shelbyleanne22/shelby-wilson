'use client';
import clsx from "clsx";

type SkillProps = {
    skill: string;
    borderColor?: string;
    backgroundColor?: string;
    textColor?: string;
}

const Skill = ({
    skill,
    borderColor = "border-slate-400",
    backgroundColor = "bg-teal-50",
    textColor = "text-slate-800",
}: SkillProps) => {
    return (
        <span className={clsx(
            "rounded-full border px-4 py-2 mx-2",
            borderColor,
            backgroundColor,
            textColor
        )}
        >
            {skill}
        </span>
    )
}

export default Skill;
