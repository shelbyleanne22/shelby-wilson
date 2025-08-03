'use client'
import { useEffect, useState } from "react";

export default function useEffectDemo() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <p className="text-xl mb-2">Current Time: {time}</p>
            <p>UseEffect watches for changes in dependencies and runs functions when changes occurs.</p>
        </div>
    );
}
