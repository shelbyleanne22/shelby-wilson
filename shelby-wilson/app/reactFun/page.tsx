export default function ReactFun() {
    return (
        <div className="p-6 w-full lg:w-[60%] mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-center">⚛️ React Fun ⚛️</h1>
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 rounded-lg p-2 mt-2 border-1 border-slate-400 bg-teal-50 dark:border-slate-100 dark:bg-teal-950">
                    <h2>Ad-Lib Generator</h2>
                    <p>Demonstrates the use of React hook form using controlled components</p>
                </div>
                <div className="flex-1 rounded-lg p-2 mt-2 border-1 border-slate-400 bg-teal-50 dark:border-slate-100 dark:bg-teal-950">
                    <h2>React Hook Visualizer</h2>
                    <p>A few examples of some of React's most popular hooks</p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 rounded-lg p-2 mt-2 border-1 border-slate-400 bg-teal-50 dark:border-slate-100 dark:bg-teal-950">
                    <h2>Mood Tracker</h2>
                    <p>Persists mood using localStorage and uses React context</p>
                </div>
                <div className="flex-1 rounded-lg p-2 mt-2 border-1 border-slate-400 bg-teal-50 dark:border-slate-100 dark:bg-teal-950">
                    <h2>Coming Soon...</h2>
                    <p>A work in progress for later 🤫</p>
                </div>
            </div>
        </div>
    )
}