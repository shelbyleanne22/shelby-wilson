'use client'
import { useCallback, useState } from "react";

export default function useCallbackDemo() {
    const [count, setCount] = useState(0);

    const memoizedCallback = useCallback(() => {
        alert(`Clicked at count: ${count}`);
    }, [count]);

    return (
        <div className="space-y-4">
            <p className="text-xl mb-2">Count: {count}</p>
            <div className="flex gap-2">
                <button
                    onClick={() => setCount(count + 1)}
                    className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white font-bold"
                >
                    Increment
                </button>
                <button
                    onClick={memoizedCallback}
                    className="bg-red-500 hover:bg-red-700 px-4 py-2 rounded text-white font-bold"
                >
                    Click Me
                </button>
            </div>
            <p>UseCallback caches function definitions
                between re-renders to ensure the same function
                instance is used. This helps prevent re-renders.</p>
        </div>
    )
}


