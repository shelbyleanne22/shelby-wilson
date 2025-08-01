import { useMood } from "@/contexts/MoodContext";

export default function CurrentMood() {
    const {mood} = useMood();

    return (
        <div className='text-6xl mb-4' aria-live="polite">
            <span role="img" aria-label="Current mood">
                {mood}
            </span>
        </div>
    )
}