'use client'
import EmojiMoodTracker from "@/components/EmojiMoodTracker";

export default function MoodTracker() {
    return (
        <div className="p-8 max-w-xl mx-auto text-center">
            <h1 className='text-3xl font-bold mb-4'>Mood Tracker</h1>
            <p className="text-md text-center md:text-left p-4 m-2 italic">The Mood Tracker uses localStorage and React Context to track selected moods.</p>
            <EmojiMoodTracker />
        </div>
    )
}