import { MoodProvider } from '@/contexts/MoodContext';
import MoodSelector from './moodTracker/MoodSelector';
import CurrentMood from './moodTracker/CurrentMood';

export default function EmojiMoodTracker() {
    return (
        <MoodProvider>
            <div className="p-8 max-w-xl mx-auto text-center">
                <h1 className='text-3xl font-bold mb-4'>Mood Tracker</h1>
                <CurrentMood />
                <MoodSelector />
            </div>
        </MoodProvider>
    )
}