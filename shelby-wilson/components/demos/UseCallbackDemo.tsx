'use client'
import { useCallback, useState } from "react";

export default function useCallbackDemo() {
    const [count, setCount] = useState(0);

    const memoizedCallback = useCallback(() => {
        alert(`Clicked at count: ${count}`);
    }, [count]);

    return (
        <div>
            <p className="mb-2">Count: {count}</p>
            <button
                onClick={() => setCount(count + 1)}
                className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
            >
                Increment
            </button>
            <button
                onClick={memoizedCallback}
                className="bg-purple-600 text-white px-4 py-2 rounded"
            >
                Click Me
            </button>
        </div>
    )
}
