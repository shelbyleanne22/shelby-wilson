import { useMood } from "@/contexts/MoodContext";

const moods = ['😐', '😊', '😂', '😢', '😠', '😴'];

export default function MoodSelector() {
    const { setMood } = useMood();

    return (
        <div className="grid grid-cols-6 gap-4 justify-center">
            {moods.map((m) => (
                <button
                    key={m}
                    className="text-3xl hover:scale-110 transition-transform"
                    onClick={() => setMood(m)}
                    aria-label={`Set mood to ${m}`}
                >
                    {m}
                </button>
            ))}
        </div>
    )
}