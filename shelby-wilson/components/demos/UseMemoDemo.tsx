'use client'
import { useCallback, useMemo, useState } from "react";

export default function useMemoDemo() {
    const [number, setNumber] = useState(1);

    const factorial = useMemo(() => {
        const calc = (n: number): number => (n <= 1 ? 1 : n * calc(n - 1));
        return calc(number);
    }, [number]);

    return (
        <div>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))}
                className="border px-3 py-2 rounded"
                min={0}
            />
            <p className="mt-2">Factorial: {factorial}</p>
        </div>
    );
}
