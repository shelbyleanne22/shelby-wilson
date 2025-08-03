'use client'
import { useState } from "react";

export default function useStateDemo() {
    const [count, setCount] = useState(0);

    return (
        <div className="space-y-4">
            <p className="text-xl mb-2">Current count: <strong>{count}</strong></p>
            <div className="flex gap-2">
                <button onClick={() => setCount(count + 1)} className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white font-bold">
                    Increment
                </button>
                <button onClick={() => setCount(0)} className="bg-red-500 hover:bg-red-700 px-4 py-2 rounded text-white font-bold">
                    Reset
                </button>
            </div>
            <p>UseState stores the state of a React component 
                and triggers a render if this data changes.</p>
        </div>
    )
}
