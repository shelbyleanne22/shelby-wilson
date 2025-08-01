'use client'
import { useRef } from "react";

export default function useRefDemo() {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div>
            <input
                ref={inputRef}
                className="border px-3 py-2 rounded"
                placeholder="Focus me"
                type="text"
            />
            <button
                onClick={() => inputRef.current?.focus()}
                className="bg-green-500 text-white px-4 py-2 rounded mt-2"
            >
                Focus Input
            </button>
        </div>
    )
}
