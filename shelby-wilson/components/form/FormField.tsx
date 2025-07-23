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
            {/* <label
                htmlFor={name}
                className="text-md block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
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
                className="w-full px-4 py-2 rounded-xl border 
                border-gray-300 
                dark:border-gray-600 
                bg-white 
                dark:bg-gray-800 
                text-gray-900 
                dark:text-white 
                placeholder-gray-400 
                dark:placeholder-gray-500 
                focus:outline-none 
                focus:ring-2 
                focus:ring-teal-500 
                focus:border-transparent"
            />
        </div>
    );
}

export default FormField;
