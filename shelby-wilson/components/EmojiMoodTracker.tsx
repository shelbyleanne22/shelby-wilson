import { MoodProvider } from '@/contexts/MoodContext';
import MoodSelector from './moodTracker/MoodSelector';
import CurrentMood from './moodTracker/CurrentMood';

export default function EmojiMoodTracker() {
    return (
        <MoodProvider>
            <div>
                <CurrentMood />
                <MoodSelector />
            </div>
        </MoodProvider>
    )
}