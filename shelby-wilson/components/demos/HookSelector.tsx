type Props = {
  selected: string;
  onSelect: (hook: string) => void;
};

const hooks = ['useState', 'useEffect', 'useRef', 'useCallback', 'useMemo'];

export default function HookSelector({ selected, onSelect }: Props) {
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      {hooks.map((hook) => (
        <button
          key={hook}
          onClick={() => onSelect(hook)}
          className={`px-4 py-2 rounded font-semibold ${
            selected === hook
              ? 'bg-teal-600 text-white'
              : 'bg-gray-200 text-black hover:bg-gray-300'
          }`}
        >
          {hook}
        </button>
      ))}
    </div>
  );
}
