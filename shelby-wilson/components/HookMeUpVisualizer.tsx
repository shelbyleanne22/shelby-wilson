'use client';
import { JSX, useState } from 'react';
import HookSelector from './demos/HookSelector';
import UseStateDemo from './demos/UseStateDemo';
import UseEffectDemo from './demos/UseEffectDemo';
import UseRefDemo from './demos/UseRefDemo';
import UseCallbackDemo from './demos/UseCallbackDemo';
import UseMemoDemo from './demos/UseMemoDemo';

const demoMap: Record<string, JSX.Element> = {
  useState: <UseStateDemo />,
  useEffect: <UseEffectDemo />,
  useRef: <UseRefDemo />,
  useCallback: <UseCallbackDemo />,
  useMemo: <UseMemoDemo />,
};

export default function HookMeUpVisualizer() {
  const [selectedHook, setSelectedHook] = useState('useState');

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">🪝 Hook Me Up!</h1>
      <HookSelector selected={selectedHook} onSelect={setSelectedHook} />
      <div className="mt-6 p-4 rounded border border-gray-300 bg-white shadow">
        {demoMap[selectedHook]}
      </div>
    </div>
  );
}
