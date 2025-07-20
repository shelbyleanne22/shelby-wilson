'use client'
import FormField from '@/components/form/FormField';
import { adLibPrompts } from '@/lib/adLibPrompts';
import { FormEvent, useEffect, useState } from 'react';

export default function AdLibPage() {
    const [randomPrompt, setRandomPrompt] = useState<{
        title: string;
        prompts: string[];
        template: string;
    } | null>(null);

    const [inputs, setInputs] = useState<string[]>([]);
    const [result, setResult] = useState<string | null>(null);

    useEffect(() => {
        const random = adLibPrompts[Math.floor(Math.random() * adLibPrompts.length)];
        setRandomPrompt(random);
        setInputs(Array(random.prompts.length).fill(''));
    }, []);

    const handleChange = (index: number, value: string) => {
        const updated = [...inputs];
        updated[index] = value;
        setInputs(updated);
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (!randomPrompt) return;

        const filled = randomPrompt.template.replace(/{(\d+)}/g, (match, index) => {
            return inputs[index] || `[${randomPrompt.prompts[index]}]`;
        });

        setResult(filled);
    };

    if (!randomPrompt) return <div className="p-8">Loading...</div>;

    return (
        <div className="p-6 w-[60%] mx-auto">
            <h1 className="text-3xl font-bold mb-4">🎭 AdLib Generator</h1>
            <h2 className="text-2xl">{randomPrompt.title}</h2>
            <div className="flex flex-col md:flex-row gap-4 p-4 min-h-screen">
                <div className="w-full md:w-1/2 space-y-4">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex flex-wrap gap-4">
                            {randomPrompt.prompts.map((type, idx) => (
                                <FormField
                                    key={idx}
                                    label={type}
                                    name={`input-${idx}`}
                                    value={inputs[idx]}
                                    onChange={(value) => handleChange(idx, value)}
                                />
                            ))}
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="block bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded text-white font-bold mx-auto"
                            >
                                Generate Story
                            </button>
                        </div>
                    </form>
                </div>
                <div className="w-full md:w-1/2">
                    {result && (
                        <div className="mt-6 p-4 bg-gray-300 border border-gray-700 rounded">
                            <h2 className="text-xl font-semibold mb-2">Your Story:</h2>
                            <p>{result}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}