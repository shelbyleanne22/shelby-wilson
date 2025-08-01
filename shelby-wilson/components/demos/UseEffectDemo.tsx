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

    return <p>Current Time: {time}</p>
}
