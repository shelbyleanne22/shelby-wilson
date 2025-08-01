'use client'
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";

type MoodContextType = {
    mood: String,
    setMood: Dispatch<SetStateAction<string>>;
};

const MoodContext = createContext<MoodContextType | undefined>(undefined);

export const useMood = (): MoodContextType => {
    const context = useContext(MoodContext);
    if (!context) {
        throw new Error('useMood must be used within MoodProvider');
    }
    return context;
}

type MoodProviderProps = {
    children: ReactNode;
}

export const MoodProvider = ({ children }: MoodProviderProps) => {
    const [mood, setMood] = useState<string>('😊');
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        const storedMood = localStorage.getItem('mood');
        if (storedMood) setMood(storedMood);
        setHasMounted(true);
    }, []);

    useEffect(() => {
        if (hasMounted) {
            localStorage.setItem('mood', mood);
        }
    }, [mood, hasMounted]);

    return (
        <MoodContext.Provider value={{ mood, setMood }}>
            {children}
        </MoodContext.Provider>
    )
}