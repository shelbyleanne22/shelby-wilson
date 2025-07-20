'use client';
import React from 'react';

type FormFieldProps = {
    name: string;
    label: string;
    required?: boolean;
    value: string;
    onChange: (value: string) => void;
};

function FormField({ name, label, required = true, value, onChange }: FormFieldProps) {
    return (
        <div className="w-full">
            <label
                htmlFor={name}
                className="block text-md mb-1">
                {label}
            </label>
            <input
                id={name}
                name={name}
                type="text"
                required={required}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full rounded-md p-2 bg-gray-200 text-dark border border-gray-300 shadow"
            />
        </div>
    );
}

export default FormField;
