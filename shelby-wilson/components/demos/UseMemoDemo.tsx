'use client'
import { useMemo, useState } from "react";

export default function useMemoDemo() {
    const [number, setNumber] = useState<number | "">("");

    const factorial = useMemo(() => {
        const calc = (n: number): number => (n <= 1 ? 1 : n * calc(n - 1));
        return typeof number === "number" ? calc(number) : "";
    }, [number]);

    return (
        <div>
            <input
                type="number"
                value={number}
                onChange={(e) => {
                    let value = e.target.value;
                    setNumber(value === "" ? "" : Number(value))
                }}
                className="border px-4 py-2 rounded mr-4 mb-2 w-full"
                min={0}
            />
            <p className="w-full px-4 py-2 rounded font-bold">Factorial: {number === "" ? "-" : factorial}</p>
            <p>UseMemo remembers the result of a slow calculation so if nothing changes
                it uses the same result instead of doing the work again.
            </p>
        </div>
    );
}
