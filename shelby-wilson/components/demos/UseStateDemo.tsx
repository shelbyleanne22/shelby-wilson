'use client'
import { useState } from "react";

export default function useStateDemo() {
    const [count, setCount] = useState(0);

    return (
        <div className="space-y-4">
            <p className="text-xl">Current count: <strong>{count}</strong></p>
            <div className="flex gap-2">
                <button onClick={() => setCount(count + 1)} className="bg-blue-500 text-white px-4 py-2 rounded">
                    Increment
                </button>
                <button onClick={() => setCount(0)} className="bg-red-500 text-white px-4 py-2 rounded">
                    Reset
                </button>
            </div>
        </div>
    )
}
