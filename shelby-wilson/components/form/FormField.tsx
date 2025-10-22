'use client';
import React from 'react';

type FormFieldProps = {
    name: string;
    label: string;
    required?: boolean;
    value: string;
    onChange: (value: string) => void;
    error?: string;
    onBlur?: () => void;
};

function FormField({ name, label, required = true, value, onChange, error, onBlur }: FormFieldProps) {
    return (
        <div className="w-full">
            {/* <label
                htmlFor={name}
                className="text-md block mb-2 text-sm font-medium text-gray-700">
                {label}
            </label> */}
            <input
                id={name}
                name={name}
                placeholder={label}
                type="text"
                required={required}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={`w-full px-4 py-2 rounded-xl border 
                bg-white 
                text-gray-900 
                placeholder-gray-400 
                focus:outline-none 
                focus:ring-2 
                focus:ring-teal-500 
                focus:border-transparent
                ${error ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-teal-500" }`}
                onBlur={onBlur}
            />
            {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
        </div>
    );
}

export default FormField;
