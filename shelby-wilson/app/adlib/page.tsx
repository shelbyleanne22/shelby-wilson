'use client'
import { useState } from 'react';

const prompts = ['adjective', 'noun', 'verb', 'color', 'animal'];
const template =
    'Once upon a time, there was a very {0} {1} who loved to {2} in a {3} suit with their pet {4}.';

export default function AdLibPage() {
    const [inputs, setInputs] = useState<string[]>(Array(prompts.length).fill(''));
    const [result, setResult] = useState<string | null>(null);

    const handleChange = (index: number, value: string) => {
        const updated = [...inputs];
        updated[index] = value;
        setInputs(updated);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const filled = template.replace(/{(\d+)}/g, (match, index) =>
            inputs[parseInt(index)] || ''
        );

        setResult(filled);
    };

    return (

        <div className="p-6 w-[60%] mx-auto">
            <h1 className="text-3xl font-bold mb-4">🎭 AdLib Generator</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                {prompts.map((type, idx) => (
                    <div key={idx}>
                        <label className="block text-sm font-medium mb-1">
                            Enter a {type}:
                        </label>
                        <input
                            type="text"
                            required
                            value={inputs[idx]}
                            onChange={(e) => handleChange(idx, e.target.value)}
                            className="w-full rounded-md p-2 bg-gray-800 text-white border border-gray-600"
                        />
                    </div>
                ))}

                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
                >
                    Generate Story
                </button>
            </form>

            {result && (
                <div className="mt-6 p-4 bg-gray-800 border border-gray-700 rounded">
                    <h2 className="text-xl font-semibold mb-2">Your Story:</h2>
                    <p>{result}</p>
                </div>
            )}
        </div>
    );
}