'use client'
import { useRef } from "react";

export default function useRefDemo() {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div>
            <input
                ref={inputRef}
                className="border px-4 py-2 rounded mr-4 mb-2 w-full dark:text-white"
                placeholder="Focus me"
                type="text"
            />
            <button
                onClick={() => inputRef.current?.focus()}
                className="w-full bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white font-bold"
            >
                Focus Input
            </button>
        </div>
    )
}
