'use client'
import HookMeUpVisualizer from "@/components/HookMeUpVisualizer";

export default function HookMeUp() {
    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">🪝 Hook Visualizer!</h1>
            <p className="text-xl text-center p-4 m-2">The Hook Visualizer demonstrates the use of React hooks that help manipulate state.</p>
            <HookMeUpVisualizer />
        </div>
    )
}