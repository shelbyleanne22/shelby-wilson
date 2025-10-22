'use client';
import { useForm, Controller } from 'react-hook-form';
import { adLibPrompts } from '@/lib/adLibPrompts';
import FormField from '@/components/form/FormField';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function AdLibPage() {
    const [randomPrompt, setRandomPrompt] = useState<{
        title: string;
        prompts: string[];
        template: string;
    } | null>(null);

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ mode: 'onBlur' });

    const [result, setResult] = useState<string | null>(null);

    useEffect(() => {
        const random = adLibPrompts[Math.floor(Math.random() * adLibPrompts.length)];
        setRandomPrompt(random);

        const defaultValues = random.prompts.reduce((acc, _, i) => {
            acc[`input-${i}`] = '';
            return acc;
        }, {} as Record<string, string>);
        reset(defaultValues);
    }, [reset]);

    const onSubmit = (data: Record<string, string>) => {
        if (!randomPrompt) return;

        const filled = randomPrompt.template.replace(/{(\d+)}/g, (match, index) => {
            const value = data[`input-${index}`];
            return value || `[${randomPrompt.prompts[index]}]`;
        });

        setResult(filled);
    };

    const clearFields = () => {
        if (!randomPrompt) return;
        const cleared = randomPrompt.prompts.reduce((acc, _, i) => {
            acc[`input-${i}`] = '';
            return acc;
        }, {} as Record<string, string>);
        reset(cleared);
        setResult(null);
    };

    if (!randomPrompt) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Image src="/kitty.gif" alt="Loading..." width={60} height={60}/>
            </div>
        );
    }

    return (
        <div className="p-6 w-full lg:w-[60%] mx-auto">
            <h1 className="text-3xl font-bold mb-4">🎭 Ad-Lib Generator</h1>
            <h2 className="text-2xl">{randomPrompt.title}</h2>            
            <p className="text-md text-center md:text-left p-4 m-2 italic">The form demonstrates the use of controlled components using the React Hook Form library. 
                Enter values and generate story for some ad-lib fun!
            </p>
            <div className="flex flex-col md:flex-row gap-4 p-4">
                <div className="w-full md:w-1/2 space-y-4">
                    <form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="flex flex-wrap gap-4">
                            {randomPrompt.prompts.map((type, idx) => {
                                const fieldName = `input-${idx}`;
                                return (
                                    <Controller
                                        key={fieldName}
                                        name={fieldName}
                                        control={control}
                                        rules={{
                                            required: 'This field is required.',
                                            maxLength: {
                                                value: 25,
                                                message: 'Max 25 characters.',
                                            },
                                            pattern: {
                                                value: /^[A-Za-z ]*$/,
                                                message: 'Only letters and spaces allowed.',
                                            },
                                        }}
                                        render={({ field }) => (
                                            <FormField
                                                label={type}
                                                name={field.name}
                                                value={field.value}
                                                error={errors[field.name]?.message as string}
                                                onChange={field.onChange}
                                                onBlur={field.onBlur}
                                            />
                                        )}
                                    />
                                );
                            })}
                        </div>
                        <div className="flex gap-4 justify-center">
                            <button
                                type="button"
                                className="bg-red-500 hover:bg-red-700 px-4 py-2 rounded text-white font-bold"
                                onClick={clearFields}
                            >
                                Clear
                            </button>
                            <button
                                type="submit"
                                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white font-bold"
                            >
                                Generate Story
                            </button>
                        </div>
                    </form>
                </div>
                <div className="w-full md:w-1/2 pt-4 text-center md:text-left">
                    {result && (
                        <div className="rounded-lg border-1 border-slate-400 bg-teal-50 p-4 mt-2 text-dark">
                            <p className="text-lg px-2"><i>{result}</i></p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
